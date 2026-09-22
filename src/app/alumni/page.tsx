import type { Metadata } from "next";
import AlumniDirectory from "@/components/alumni/AlumniDirectory";

export const metadata: Metadata = {
  title: "Our Alumni",
};

export default function AlumniPage() {
  return <AlumniDirectory />;
}
