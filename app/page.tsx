import Header from "@/components/Header";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Projects from "@/components/Projects";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 bg-gray-800 w-full h-full pb-8 px-4 md:px-8 lg:px-12">
      <div className="flex justify-end pt-4">
        <Link
          href="/hauptli"
          className="rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm font-semibold text-gray-100 transition hover:bg-gray-600"
        >
          Hauptli Resources
        </Link>
      </div>
      <Header />
      <About />
      <Separator className="bg-gray-600 w-full" />
      <Tech />
      <Separator className="bg-gray-600 w-full" />
      <Projects />
    </div>
  );
}
