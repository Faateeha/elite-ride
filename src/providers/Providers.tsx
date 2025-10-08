// src/providers/Providers.tsx
"use client";

import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";




export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return <ChakraProvider>{children}</ChakraProvider>;
}
