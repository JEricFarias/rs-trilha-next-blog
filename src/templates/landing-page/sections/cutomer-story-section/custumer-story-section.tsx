import Image from "next/image";

const customerStory = [
  {
    comment:
      "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    name: "Annette Bones",
    occupation: "CEO na Anne Corp",
    photo: "/customer/Annette.jpg",
  },
  {
    comment:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    name: "Jacob Jones",
    occupation: "CEO na JJ Org",
    photo: "/customer/Jacob.jpg",
  },
];
export function CustomerStorySection() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-40">
      <div className="container ">
        <h2 className="font-ptsans text-center text-heading-md md:text-heading-xl text-gray-100 mb-8 md:mb-12">
          Quem utiliza, aprova!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {customerStory.map((story) => (
            <div
              key={story.name}
              className="bg-gray-600 rounded-xl border border-gray-400 p-6 md:p-10 flex flex-col gap-8 md:gap-10"
            >
              <p className="text-gray-200 text-body-md italic">
                {story.comment}
              </p>
              <div className="flex gap-3">
                <div className="relative overflow-clip w-9 h-9 rounded-full border border-blue-200 justify-self-center">
                  <Image
                    src={story.photo}
                    alt={story.name}
                    fill
                    objectFit="cover"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-200 font-medium">
                    {story.name}
                  </span>
                  <span className="text-gray-300 text-xs font-normal">
                    {story.occupation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
