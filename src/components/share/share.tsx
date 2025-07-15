"use client";

import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-share";
import { Post } from "contentlayer/generated";

type ShareProps = {
  post: Post;
};
export function Share({ post }: ShareProps) {
  const { slug, title, description } = post;
  const postUrl = `https://site.com/blog/${slug}`;

  const { shareButtons } = useShare({
    url: postUrl,
    title: title,
    description,
  });

  return (
    <aside className="space-y-6">
      <div className="rounded-lg bg-transparent py-4 px-0 lg:p-6">
        <h2 className="hidden md:block text-gray-100 text-heading-xs mb-4">
          Compartilhar
        </h2>

        <div className="flex md:flex-col gap-2">
          {shareButtons.map((provider) => (
            <Button
              key={provider.provider}
              variant="outline"
              className="w-fit md:w-full justify-start gap-2"
              onClick={provider.action}
            >
              {provider.icon}
              <span className="hidden md:block">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
