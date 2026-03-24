"use server";

import { revalidatePath } from "next/cache";
import { createPorto, updatePorto, deletePorto } from "@/lib/db";

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function createPortoAction(formData: FormData) {
  const name = formData.get("name") as string;

  await createPorto({
    id: `${slugify(name)}-${Date.now()}`,
    name,
    type: formData.get("type") as string,
    category: formData.get("category") as any,
    location: formData.get("location") as string,
    area: formData.get("area") as string,
    stories: formData.get("stories") as string,
    images: formData.get("images") as string,
  });

  revalidatePath("/");
  revalidatePath("/admin/portfolio");
}

export async function updatePortoAction(id: string, formData: FormData) {
  await updatePorto(id, {
    name: formData.get("name") as string,
    type: formData.get("type") as string,
    category: formData.get("category") as any,
    location: formData.get("location") as string,
    area: formData.get("area") as string,
    stories: formData.get("stories") as string,
    images: formData.get("images") as string,
  });

  revalidatePath("/");
  revalidatePath("/admin/portfolio");
}

export async function deletePortoAction(id: string) {
  await deletePorto(id);

  revalidatePath("/");
  revalidatePath("/admin/portfolio");
}
