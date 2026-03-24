"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";

export async function signIn(
  _: unknown,
  formData: FormData,
): Promise<string | null> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return "Email atau password salah.";
  }

  await createSession();
  redirect("/admin/porto");
}

export async function signOut() {
  await deleteSession();
  redirect("/admin/login");
}
