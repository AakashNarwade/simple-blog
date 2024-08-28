import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
      <Link href="/">Return Home</Link>
    </div>
  );
}
