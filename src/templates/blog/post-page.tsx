import Image from "next/image";
import Link from "next/link";
import { Post } from "contentlayer/generated";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import { Share } from "@/components/share";

export type PostPageProps = {
  post: Post;
};

export function PostPage({ post }: PostPageProps) {
  const publishedAt = new Date(post?.date ?? Date.now()).toLocaleDateString(
    "pt-BR"
  );

  return (
    <main className="mt-28 mb-12 text-gray-100">
      <div className="container space-y-12 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blog" className="text-action-sm">
                  Blog
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-action-sm text-blue-200">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                fill
                style={{ objectFit: "cover" }}
              />
            </figure>

            <header className="p-4 md:p-6 lg:12 pb-0 mt-12">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar.trim() || ""}
                  alt={post?.author?.name || ""}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{" "}
                    <time dateTime={post?.date}>{publishedAt}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
              <Markdown content={post?.body.raw || ""} />
            </div>
          </article>

          {post && <Share post={post} />}
        </div>
      </div>
    </main>
  );
}
