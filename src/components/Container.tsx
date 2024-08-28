import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px] mx-auto bg-white min-h-screen border-l border-r  flex flex-col">
      {children}
    </div>
  );
}
