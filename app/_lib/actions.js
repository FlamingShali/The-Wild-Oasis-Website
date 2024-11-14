"use server";

import { signIn } from "./auth";

export async function singInAction() {
  await signIn("google", { redirectTo: "/account" });
}
