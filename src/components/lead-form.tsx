"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { services, site } from "@/lib/content";

const input =
  "h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-zinc-500 transition focus:border-[#c2a4ff]/60 focus:outline-none focus:ring-2 focus:ring-[#a87cff]/20";

export function LeadForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      `Halo ${site.name}, saya tertarik dengan jasa Anda.\n\n` +
      `Nama: ${name}` +
      (service ? `\nLayanan: ${service}` : "") +
      (message ? `\nPesan: ${message}` : "");
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto max-w-lg space-y-3 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur"
    >
      <input
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className={input}
      />
      {services.length > 0 && (
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`${input} appearance-none [&>option]:bg-[#13131c]`}
        >
          <option value="">Layanan yang diminati (opsional)</option>
          {services.map((s) => (
            <option key={s.name} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      )}
      <textarea
        placeholder="Ceritakan kebutuhan Anda"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition focus:border-[#c2a4ff]/60 focus:outline-none focus:ring-2 focus:ring-[#a87cff]/20"
      />
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#a87cff] to-[#8b5cf6] font-medium text-white shadow-lg shadow-[#a87cff]/25 transition hover:shadow-[#a87cff]/40 hover:brightness-110"
      >
        <Send className="size-4" />
        Kirim via WhatsApp
      </button>
    </form>
  );
}
