import { cn } from "@/lib/utils";
import { CircleX, SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";

export function Search() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams?.get("q") ?? "";
  const [query, setQuery] = useState(q);
  const hasQuery = searchParams?.has("q");

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router]
  );

  const handleResetSearch = () => {
    router.push("/blog", {
      scroll: false,
    });
    setQuery("");
  };

  useEffect(() => {
    if (hasQuery) inputRef.current?.focus();
  }, [hasQuery]);

  return (
    <form onSubmit={handleSearch} className="relative group w-full md:w-60">
      <SearchIcon
        className={cn(
          "text-gray-300 absolute left-3 top-3.5 h-4 w-4 transition-colors duration-300 group-focus-within:text-blue-300",
          query ? "text-blue-300" : ""
        )}
      />
      <input
        ref={inputRef}
        value={query}
        type="text"
        placeholder="Buscar"
        onChange={(event) => setQuery(event.target.value)}
        className="h-10 w-full md:w-60 bg-transparent border border-gray-400 pl-9 pr-4
        text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200
        focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300
        placeholder:text-gray-300 placeholder:text-body-sm"
      />

      {query && (
        <CircleX
          onClick={handleResetSearch}
          className="absolute w-4 h-4 right-4 top-3.5 text-gray-300"
        />
      )}
    </form>
  );
}
