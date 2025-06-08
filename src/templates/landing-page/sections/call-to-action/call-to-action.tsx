import { ArrowRight, Store } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative w-full flex flex-col items-center bg-radial-[at_50%_0%] from-blue-300/70 from-[2%] via-blue-300/35 via-[22%] to-transparent to-[91%]">
      <div className="z-30 bg-cyan-300 rounded-full w-fit p-3.5 md:p-4 mx-auto -mt-8">
        <Store className="text-cyan-100 w-7 h-7 md:w-8 md:h-8" />
      </div>

      <h2 className="z-30 font-ptsans text-gray-100 text-center text-heading-md md:text-heading-xl mt-7 mb-8 md:mt-14 md:mb-10">
        Crie uma loja online e inicie
        <br /> suas vendas ainda hoje
      </h2>

      <Button asChild className="z-30 mb-14 md:mb-[72px]">
        <Link href="/criar-loja">
          Criar loja grátis <ArrowRight />
        </Link>
      </Button>

      <Image
        className="z-0"
        src="/call-to-action-background.svg"
        alt="background"
        fill
        style={{ objectFit: "cover" }}
      />
    </section>
  );
}
