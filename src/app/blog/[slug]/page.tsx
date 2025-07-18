import { PostPage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    robots: "index, follow",
    openGraph: {
      images: [post.image],
    },
  };
}

// export const revalidade = 60

// Gera as rotas de slug estatica
export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Cancela a geração dinamica para slug. Apenas as pag. staticas estarão disponíveis
// qualque slug diferente do gerado acima será gerado um 404
export const dynamicParams = false;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
}
