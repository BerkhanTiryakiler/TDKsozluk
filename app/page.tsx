"use client";

import { ModeToggle } from "@/components/mode-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Sonuc from "./Sonuc";
import { useState } from "react";

export default function Home() {
  const [aranan, setAranan] = useState("");
  const [aramaBaslat, setAramaBaslat] = useState(false);

  function aramaYap() {
    setAramaBaslat(true);
  }

  function inputDegisme(olay: React.ChangeEvent<HTMLInputElement>) {
    setAramaBaslat(false); // input değiştiğinde arama durdurulmalı / gizlenmeli
    setAranan(olay.currentTarget.value);
  }

  function enterIleArama(olay: React.KeyboardEvent<HTMLInputElement>) {
    if (olay.key === "Enter") {
      aramaYap();
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-center">
        <ModeToggle />

        <h1 className="text-6xl">TDK Sözlük v.1.0</h1>

        <div className="flex gap-4 items-center">
          <Input 
            type="text" 
            value={aranan} 
            onChange={inputDegisme} 
            onKeyDown={enterIleArama} 
            className="p-2 border rounded-md" 
            placeholder="Kelime giriniz..." 
          />
          <Button onClick={aramaYap} className="p-2 bg-blue-500 text-white rounded-md">Ara</Button>
        </div>

        {aramaBaslat && <Sonuc kelime={aranan} />}
      </main>
    </div>
  );
}
