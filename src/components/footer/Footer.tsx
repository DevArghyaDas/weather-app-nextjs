import { Github } from "lucide-react";
import React from "react";

const Footer = () => (
  <footer className="fixed bottom-0 z-50 w-full border-t bg-neutral-800/20 py-4 text-center backdrop-blur-md">
    <span>
      Created by <strong>Arghya Das </strong> @2025 &mdash; All rights are
      reserved.
    </span>
    <div className="my-1 flex items-center justify-center gap-3">
      View source{" "}
      <a
        href="https://github.com/DevArghyaDas/weather-app-nextjs"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 p-2 hover:border-blue-500 hover:text-blue-500"
      >
        <Github />
      </a>
    </div>
  </footer>
);

export default Footer;
