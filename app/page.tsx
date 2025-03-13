import Header from "@/components/Header";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Projects from "@/components/Projects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 bg-gray-800 w-full h-full pb-8 px-4 md:px-8 lg:px-12">
      <Header />
      <About />
      <Separator className="bg-gray-600 w-full" />
      <Tech />
      <Separator className="bg-gray-600 w-full" />
      <Projects />
    </div>
  );
}
