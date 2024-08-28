"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createPost = async (formData: FormData) => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  console.log("title", title, body);
  const res = await prisma.post.create({
    data: {
      title,
      body,
    },
  });
  console.log("res", res);
  revalidatePath("/posts");
};
