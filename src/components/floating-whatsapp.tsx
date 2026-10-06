"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { waConsultHref } from "@/lib/content";

export function FloatingWhatsApp() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("kontak");
    if (!contact || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.15 },
    );

    io.observe(contact);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={waConsultHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className={`fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#a87cff] to-[#8b5cf6] text-white shadow-lg shadow-black/40 transition hover:brightness-110 active:scale-95 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
