import { PostPage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
