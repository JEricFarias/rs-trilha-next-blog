import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas e estratégias para impulsionar seu negócio",
  robots: "index, follow",
  openGraph: {
    title: "Blog",
    description: "Dicas e estratégias para impulsionar seu negócio",
    url: "https://rs-trilha-next-blog.vercel.app/ogIndexImage.png",
    siteName: "Blog",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://rs-trilha-next-blog.vercel.app/ogIndexImage.png",
        width: 800,
        height: 600,
        alt: "Blog",
      },
    ],
  },
};

export default function BlogPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getDate()
  );

  return <BlogList posts={sortedPosts} />;
}
