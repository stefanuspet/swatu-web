"use client";

import { useState, useTransition, useRef } from "react";
import type { PortfolioItem } from "@/lib/porto";
import {
  createPortoAction,
  updatePortoAction,
  deletePortoAction,
} from "./actions";

export default function PortoAdmin({
  portfolio,
}: {
  portfolio: PortfolioItem[];
}) {
  const [modal, setModal] = useState<"add" | "edit" | null>(null);
  const [editing, setEditing] = useState<PortfolioItem | null>(null);
  const [isPending, startTransition] = useTransition();

  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);

  function openAdd() {
    setEditing(null);
    setImageUrl("");
    setModal("add");
  }

  function openEdit(p: PortfolioItem) {
    setEditing(p);
    setImageUrl(p.images ?? "");
    setModal("edit");
  }

  function closeModal() {
    setModal(null);
    setEditing(null);
    setImageUrl("");
  }

  async function compressImage(file: File): Promise<File> {
    return new Promise((resolve) => {
      const img = new window.Image();

      img.onload = () => {
        const MAX = 1200;
        const ratio = Math.min(1, MAX / img.width);

        const canvas = document.createElement("canvas");
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;

        canvas
          .getContext("2d")!
          .drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) =>
            resolve(
              new File([blob!], file.name.replace(/\.[^.]+$/, ".jpg"), {
                type: "image/jpeg",
              }),
            ),
          "image/jpeg",
          0.8,
        );
      };

      img.src = URL.createObjectURL(file);
    });
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const compressed = await compressImage(file);

    const fd = new FormData();
    fd.append("file", compressed);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    });

    const data = await res.json();

    setImageUrl(data.url);
    setUploading(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);

    startTransition(async () => {
      if (modal === "edit" && editing) {
        await updatePortoAction(editing.id, fd);
      } else {
        await createPortoAction(fd);
      }

      closeModal();
    });
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this project?")) return;

    startTransition(async () => {
      await deletePortoAction(id);
    });
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-sage-dark font-sans mb-2">
            Portfolio Database
          </p>

          <h2 className="font-serif text-4xl font-light text-charcoal">
            Projects
          </h2>

          <p className="text-sm text-[#6b6b68] mt-2">
            {portfolio.length} registered projects
          </p>
        </div>

        <button
          onClick={openAdd}
          className="bg-sage-dark text-white px-6 py-3 text-[11px] tracking-[0.16em] uppercase border border-sage-dark hover:bg-warm hover:border-warm transition font-sans"
        >
          Add Project
        </button>
      </div>

      {/* Table */}
      {portfolio.length === 0 ? (
        <div className="border border-sage-light/40 py-24 text-center text-[#6b6b68]">
          No portfolio projects yet
        </div>
      ) : (
        <div className="border border-sage-light/40 overflow-x-auto bg-white/50 backdrop-blur">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-sage-light/40 text-left">
                {[
                  "Image",
                  "Project",
                  "Type",
                  "Location",
                  "Area",
                  "Stories",
                  "",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-[10px] tracking-[0.16em] uppercase text-sage-dark font-sans"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {portfolio.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-sage-light/30 hover:bg-cream-dark/40 transition"
                >
                  <td className="px-4 py-3">
                    {p.images ? (
                      <img
                        src={p.images}
                        alt={p.name}
                        className="w-14 h-14 object-cover"
                      />
                    ) : (
                      <div className="w-14 h-14 bg-sage-light/20" />
                    )}
                  </td>

                  <td className="px-4 py-3 font-serif text-charcoal">
                    {p.name}
                  </td>

                  <td className="px-4 py-3 text-[#6b6b68]">{p.type}</td>

                  <td className="px-4 py-3 text-[#6b6b68]">{p.location}</td>

                  <td className="px-4 py-3">{p.area}</td>

                  <td className="px-4 py-3 text-[#6b6b68]">{p.stories}</td>

                  <td className="px-4 py-3">
                    <div className="flex gap-4 text-[11px] uppercase tracking-[0.12em]">
                      <button
                        onClick={() => openEdit(p)}
                        className="text-sage-dark hover:text-charcoal"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(p.id)}
                        className="text-[#6b6b68] hover:text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-cream border border-sage-light/40 w-full max-w-lg">
            <div className="px-6 py-5 border-b border-sage-light/40 flex justify-between items-center">
              <span className="font-serif text-2xl font-light text-charcoal">
                {modal === "add" ? "New Project" : "Edit Project"}
              </span>

              <button
                onClick={closeModal}
                className="text-[#6b6b68] hover:text-charcoal text-xl"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="px-6 py-8 flex flex-col gap-6"
            >
              <Field
                label="Project Name"
                name="name"
                required
                defaultValue={editing?.name}
              />

              <Field
                label="Type"
                name="type"
                required
                defaultValue={editing?.type}
              />

              <Field
                label="Category"
                name="category"
                required
                defaultValue={editing?.type}
              />

              <Field
                label="Location"
                name="location"
                required
                defaultValue={editing?.location}
              />

              <Field
                label="Area"
                name="area"
                required
                defaultValue={editing?.area}
              />

              <Field
                label="Stories"
                name="stories"
                required
                defaultValue={editing?.stories}
              />

              <input type="hidden" name="images" value={imageUrl} />

              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.16em] uppercase text-sage-dark">
                  Image
                </label>

                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />

                {uploading && (
                  <p className="text-xs text-[#6b6b68]">Uploading...</p>
                )}

                {imageUrl && (
                  <img
                    src={imageUrl}
                    className="w-24 h-24 object-cover"
                    alt="preview"
                  />
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="mt-4 bg-sage-dark text-white py-3 text-[11px] tracking-[0.16em] uppercase border border-sage-dark hover:bg-warm hover:border-warm transition font-sans"
              >
                {modal === "add" ? "Create Project" : "Update Project"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  name,
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] tracking-[0.16em] uppercase text-sage-dark font-sans">
        {label}
      </label>

      <input
        name={name}
        type="text"
        required={required}
        defaultValue={defaultValue ?? ""}
        className="border-b border-sage-dark/30 bg-transparent py-2 outline-none focus:border-sage-dark text-charcoal"
      />
    </div>
  );
}
