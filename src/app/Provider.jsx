"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Provider({ children }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <main className="text-foreground bg-primary/10">{children}</main>
    </NextUIProvider>
  );
}
