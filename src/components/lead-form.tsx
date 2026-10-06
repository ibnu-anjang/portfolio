"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { services, site } from "@/lib/content";

const field =
  "h-12 min-h-[48px] w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-base sm:text-sm text-white placeholder:text-muted transition focus:border-[#c2a4ff]/60 focus:outline-none focus:ring-2 focus:ring-[#a87cff]/20";

const labelClass = "mb-1.5 block text-xs font-medium text-zinc-300";

export function LeadForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [waLink, setWaLink] = useState("");
  const [status, setStatus] = useState<"idle" | "empty" | "sent" | "blocked">("idle");

  function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim()) {
      setStatus("empty");
      return;
    }

    const text =
      `Halo ${site.name}, saya tertarik dengan jasa Anda.\n\n` +
      `Nama: ${name}` +
      (service ? `\nLayanan: ${service}` : "") +
      (message ? `\nPesan: ${message}` : "");
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

    setWaLink(url);
    const tab = window.open(url, "_blank");
    setStatus(tab && !tab.closed ? "sent" : "blocked");
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto max-w-lg space-y-3 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-7 backdrop-blur"
    >
      <div>
        <label htmlFor="lead-name" className={labelClass}>
          Nama Anda
        </label>
        <input
          id="lead-name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (status === "empty") setStatus("idle");
          }}
          placeholder="Contoh: Budi Santoso"
          aria-invalid={status === "empty"}
          className={field}
        />
      </div>

      {services.length > 0 && (
        <div>
          <label htmlFor="lead-service" className={labelClass}>
            Layanan yang dibutuhkan
          </label>
          <select
            id="lead-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${field} [&>option]:bg-[#13131c]`}
          >
            <option value="">Belum tau, mau diskusi dulu</option>
            {services.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="lead-message" className={labelClass}>
          Gambaran project (opsional)
        </label>
        <textarea
          id="lead-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Misal: butuh dashboard pencatatan stok buat 3 cabang toko"
          rows={4}
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base sm:text-sm text-white placeholder:text-muted transition focus:border-[#c2a4ff]/60 focus:outline-none focus:ring-2 focus:ring-[#a87cff]/20"
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-12 min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#a87cff] to-[#8b5cf6] font-medium text-white shadow-lg shadow-[#a87cff]/25 transition hover:shadow-[#a87cff]/40 hover:brightness-110 active:scale-[0.98]"
      >
        <Send className="size-4" />
        Kirim via WhatsApp
      </button>

      {status === "empty" && (
        <p
          role="alert"
          className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs leading-relaxed text-rose-200"
        >
          Isi nama Anda dulu, biar saya tau harus manggil siapa.
        </p>
      )}

      {(status === "sent" || status === "blocked") && (
        <div
          role="status"
          className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs leading-relaxed text-emerald-200"
        >
          {status === "sent"
            ? "Chat WhatsApp-nya sudah terbuka di tab baru."
            : "Browser Anda memblokir tab baru."}{" "}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2"
          >
            Buka chat WhatsApp di sini
          </a>{" "}
          kalau tabnya belum muncul.
        </div>
      )}
    </form>
  );
}
