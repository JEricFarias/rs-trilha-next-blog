import { ArrowRight, Clock, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container relative flex items-center justify-center mt-16 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start ">
          <h1 className="text-gray-100 font-ptsans text-heading-lg md:text-heading-gh text-center md:text-start">
            Venda seus produtos como afiliado em um unico lugar.
          </h1>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="text-cyan-100 h-4 w-4" />
                <span className="text-gray-200">
                  Criar o seu site em menis de 5 minutos.
                </span>
              </div>
              <div className="flex items- justify-start gap-2">
                <Store className="text-cyan-100 h-4 w-4" />
                <span className="text-gray-200">
                  Acompanhe e otimize seu negocio online.
                </span>
              </div>
            </div>

            <div className="text-white flex flex-col items-center md:items-start gap-2 mt-5 w-full">
              <Button className="w-fit" asChild>
                <Link href="/criar-loja">
                  Criar loja gratis <ArrowRight />
                </Link>
              </Button>

              <p className="text-gray-300 text-body-xs">
                Não precisa de cartão de credito
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[20rem] hidden md:flex order-first md:order-last items-center justify-center">
          <Image
            src="/background-hero.png"
            alt="Ilustração com icones store tag e sacola."
            height={491}
            width={491}
          />
        </div>
      </div>
    </section>
  );
}
