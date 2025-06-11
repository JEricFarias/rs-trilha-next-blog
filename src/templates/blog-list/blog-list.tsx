import { Search } from "@/components/search";
import { useRouter } from "next/router";

export function BlogList() {
  const router = useRouter();
  const query = (router.query.q as string) ?? "";
  const pageTitle = query
    ? `Resultado de busca para: ${query}`
    : "Dicas e estratégias para impulsionar seu negócio";

  return (
    <div className="container mt-[85px] md:mt-[145px] w-full">
      <header className="grid gap-6 grid-cols-1 md:grid-cols-2 items-end justify-items-end">
        <div className="flex flex-col gap-3 justify-self-start">
          <span className="bg-cyan-300 text-cyan-100 text-body-tag py-1.5 px-3 uppercase w-fit rounded-sm">
            blog
          </span>

          <h1 className=" text-balance font-ptsans text-gray-100 text-heading-lg md:text-heading-xl">
            {pageTitle}
          </h1>
        </div>

        <Search />
      </header>
    </div>
  );
}
