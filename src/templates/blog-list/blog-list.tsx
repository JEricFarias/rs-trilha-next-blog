import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";
import { allPosts } from "contentlayer/generated";
import { Inbox } from "lucide-react";

export function BlogList() {
  const router = useRouter();
  const query = (router.query.q as string) ?? "";
  const pageTitle = query
    ? `Resultado de busca para: ${query}`
    : "Dicas e estratégias para impulsionar seu negócio";

  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      )
    : allPosts;

  const hasPosts = posts.length > 0;

  return (
    <div className="container my-[85px] md:my-[145px] w-full space-y-6 md:space-y-14">
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
      {hasPosts ? (
        <PostGridCard>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              description={post.description}
              date={new Date(post.date).toLocaleDateString("pt-BR")}
              image={post.image}
              slug={post.slug}
              author={{
                name: post.author.name,
                avatar: post.author.avatar,
              }}
            />
          ))}
        </PostGridCard>
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-8 border-dashed 
          border-2 border-gray-400 p-8 md:p-12 rounded-lg"
        >
          <Inbox className="h-12 w-12 text-cyan-300" />

          <p className="text-gray-300 text-center">Nem um post encontrado.</p>
        </div>
      )}
    </div>
  );
}
