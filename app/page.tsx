"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import DataCard from "../components/DataCard";

type ApiResponse = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};
export default function Home() {
  return (
    <main className="p-10 h-[2000px]">
      <div>Jello</div>
    </main>
  );
}
