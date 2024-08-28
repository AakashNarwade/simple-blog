import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function SinglePost({ id }: { id: string }) {
  console.log("call", id);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  // const response = await fetch("https://dummyjson.com/posts/" + id);
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!post) {
    notFound();
  }
  // const post = await response.json();

  return (
    <>
      <h1 className="px-7 text-5xl font-semibold pt-24 text-center mb-7">
        {post.title}
      </h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </>
  );
}
