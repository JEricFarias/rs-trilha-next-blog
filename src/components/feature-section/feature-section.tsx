import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 py-8 md:py-10">
      <div className="flex flex-col gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
          Simples
        </span>
        <h2 className="text-gray-100 text-heading-sm md:text-heading-lg">
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>
      <div className="flex flex-col gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
          Pratico
        </span>
        <h2 className="text-gray-100 text-heading-sm md:text-heading-lg">
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
        <div className="flex flex-col gap-4 ">
          <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
            Personalizável
          </span>
          <h2 className="text-gray-100 text-heading-sm md:text-heading-lg">
            Tenha uma loja online personalizada com a cara de sua marca
          </h2>

          <Button
            asChild
            className="hidden rounded-full mt-4 md:mt-auto md:flex w-fit"
          >
            <Link href="/criar-loja">
              Criar loja grátis <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mx-auto">
          <Image
            src="/feature-section.svg"
            alt="features"
            width={440}
            height={330}
          />
        </div>

        <Button asChild className="md:hidden rounded-full mt-4 md:mt-auto flex">
          <Link href="/criar-loja">
            Criar loja grátis <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
