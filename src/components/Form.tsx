import { createPost } from "@/actions/action";
import React from "react";

export default function Form() {
  return (
    <form
      className="flex flex-col max-w-[400px] gap-2 mx-auto"
      action={createPost}
    >
      <input
        name="title"
        placeholder="Title for new post"
        type="text"
        className="border rounded px-3 h-10 py-3"
        required
      />
      <textarea
        placeholder="Write your blog..."
        className="border my-2 p-2"
        name="body"
        rows={7}
        required
      />
      <button className="h-10 px-5 py-3 ml-3 rounded text-white bg-blue-500">
        Submit
      </button>
    </form>
  );
}
