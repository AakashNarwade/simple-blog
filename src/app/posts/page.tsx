import PostList from "@/components/PostList";
import { Suspense } from "react";

export default async function PostPage() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="font-bold text-4xl md:text-5xl mb-5 capitalize">
        all posts
      </h1>
      <Suspense fallback={<p className="">Loading....</p>}>
        <PostList />
      </Suspense>
    </main>
  );
}
