"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { services, site } from "@/lib/content";
import { Button } from "@/components/ui/button";

const input = "h-11 w-full rounded-lg border px-3 text-sm";

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
    <form onSubmit={submit} className="mx-auto max-w-lg space-y-3 rounded-2xl border bg-white p-6">
      <input placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} required className={input} />
      {services.length > 0 && (
        <select value={service} onChange={(e) => setService(e.target.value)} className={input}>
          <option value="">Layanan yang diminati (opsional)</option>
          {services.map((s) => (
            <option key={s.name} value={s.name}>{s.name}</option>
          ))}
        </select>
      )}
      <textarea placeholder="Ceritakan kebutuhan Anda" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full rounded-lg border px-3 py-2 text-sm" />
      <Button type="submit" size="lg" className="w-full">
        <Send className="size-4" />
        Kirim via WhatsApp
      </Button>
    </form>
  );
}
