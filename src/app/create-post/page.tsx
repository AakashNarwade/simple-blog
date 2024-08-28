import { createPost } from "@/actions/action";
import Form from "@/components/Form";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
// import React, { useOptimistic } from "react";
// import { useFormState, useFormStatus } from "react-dom";

export default async function Page() {
  //auth check

  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <Form />
      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
