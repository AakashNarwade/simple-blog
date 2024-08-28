import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostList() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // const response = await fetch("https://dummyjson.com/posts?limit=10");
  const posts = await prisma.post.findMany();
  // const data = await response.json();
  // console.log(JSON.stringify(data, null, 1));
  return (
    <ul>
      {posts.map((post, i) => (
        <li className="text-2xl font-bold py-1 mb-5" key={i}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
