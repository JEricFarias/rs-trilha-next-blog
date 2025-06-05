import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import Image from "next/image";

export default function SupportSection() {
  return (
    <section className="relative w-full flex flex-col gap-12 bg-gradient-to-r from-gray-500 to-gray-700 py-32 overflow-clip">
      <div className="container flex flex-col gap-12 z-50">
        <h2 className="font-ptsans text-heading-md md:text-heading-xl text-gray-100 text-center">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 bg-blue-400">
            <div className="p-2 rounded-lg bg-blue-300 mb-4 w-fit">
              <PaintbrushVertical className="h-5 w-5 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100 pb-2">
              Personalize seu site
            </strong>
            <p className="text-body-sm text-gray-200">
              Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com
              a sua cara.
            </p>
          </div>
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 bg-cyan-300">
            <div className="p-2 rounded-lg bg-cyan-200 mb-4 w-fit">
              <Store className="h-5 w-5 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100 pb-2">
              Venda de qualquer loja
            </strong>
            <p className="text-body-sm text-gray-200">
              Não importa a loja, o Site.Set permite que você insera qualquer
              link de afiliado.
            </p>
          </div>
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 bg-blue-400">
            <div className="p-2 rounded-lg bg-blue-300 mb-4 w-fit">
              <HeartHandshake className="h-5 w-5 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100 pb-2">
              Receba suporte amigável
            </strong>
            <p className="text-body-sm text-gray-200">
              Nossa equipe estará sempre pronta para te atender para ajudar no
              que for preciso.
            </p>
          </div>
        </div>
      </div>

      <Image
        className="absolute left-0 bottom-0 z-0 hidden md:block"
        src="/support-bg-left.svg"
        alt="fios vetorizados 1"
        width={250}
        height={400}
      />

      <Image
        className="absolute right-0 top-0 z-0 hidden md:block"
        src="/support-bg-right.svg"
        alt="fios vetorizados 1"
        width={500}
        height={600}
      />
    </section>
  );
}
