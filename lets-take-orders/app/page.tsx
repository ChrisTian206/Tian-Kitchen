// filepath: [page.tsx](http://_vscodecontentref_/0)
import React from "react";

function Page() {
  return (
    <div className="relative w-full h-screen items-center justify-center flex">
      {/* Video Background */}
      <video
        className="absolute w-full h-full object-cover "
        autoPlay
        loop
        muted
      >
        <source src="/cooking.mp4" type="video/mp4" />
      </video>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-6xl md:text-8xl font-extrabold">
          Welcome to Tian Kitchen
        </h1>
      </div>
    </div>
  );
}

export default Page;