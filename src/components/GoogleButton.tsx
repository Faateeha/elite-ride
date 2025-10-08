// src/components/GoogleButton.tsx
"use client";

import { FcGoogle } from "react-icons/fc";

interface GoogleButtonProps {
  onClick?: () => void;
  text?: string;
}

export default function GoogleButton({
  onClick,
  text = "Continue with Google",
}: GoogleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
    >
      <FcGoogle size={22} />
      <span className="text-gray-700 font-medium">{text}</span>
    </button>
  );
}
