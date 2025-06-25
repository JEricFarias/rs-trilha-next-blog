import { Avatar } from "@/components/avatar";
import Image from "next/image";
import Link from "next/link";

type Author = {
  name: string;
  avatar: string;
};

type PostCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
};

export function PostCard({
  slug,
  title,
  description,
  image,
  date,
  author,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl rounded-[12px] border border-gray-400 bg-gray-600 
      overflow-hidden transition-all duration-300 hover:border-blue-300 p-2"
    >
      <div className="space-y-2">
        {/* img container */}
        <div className="relative">
          <div className="absolute z-10 top-0 right-0 p-[10px_14px_6px_10px] bg-gray-600 backdrop-blur-sm rounded-bl-[10px]">
            <span className="text-body-xs text-gray-300">{date}</span>
          </div>

          <div className="relative w-full h-36 rounded-sm overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              quality={100}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="p-2 space-y-3">
          <div className="space-y-2">
            <h2 className="text-heading-sm text-gray-100 line-clamp-3">
              {title}
            </h2>
            <p className="text-gray-300 text-body-sm line-clamp-3">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-3 border-t border-gray-400 pt-4">
            <Avatar.Container>
              <Avatar.Image src={author.avatar} alt={author.name} size="xs" />
              <Avatar.Title>{author.name}</Avatar.Title>
            </Avatar.Container>
          </div>
        </div>
      </div>
    </Link>
  );
}
