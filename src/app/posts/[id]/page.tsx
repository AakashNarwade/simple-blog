import SinglePost from "@/components/SinglePost";
import React, { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main className="px-7 pt-24 text-center">
      <h2 className="text-center text-5xl font-extrabold">Single Posts</h2>
      <Suspense fallback="loading single post .....">
        <SinglePost id={params.id} />
      </Suspense>
    </main>
  );
}
