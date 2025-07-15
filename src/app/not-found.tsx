// import { FileQuestion } from "lucide-react";
// import Link from "next/link";

// export default function NotFound() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-4 text-gray-100">
//       <div className="max-w-md w-full text-center">
//         <FileQuestion size={64} className="text-gray-100 mx-auto mb-6" />
//       </div>

//       <h2>Not Found</h2>
//       <p>Coukd not foind requested resource</p>
//       <Link
//         href="/"
//         className="mt-6 text-blue-200 hover:cursor-pointer hover:text-blue-100"
//       >
//         Return Home
//       </Link>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { FileQuestion, Search } from "lucide-react";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 flex-col">
      <div className="max-w-md w-full text-center">
        <FileQuestion size={64} className="text-gray-100 mx-auto mb-6" />
      </div>
      <div className="relative inline-block mb-3 font-sans">
        <span
          className="text-8xl font-bold text-white inline-block transform -rotate-12
          -translate-y-2-translate-x-1"
        >
          4
        </span>
        <span className="text-8xl font-bold text-white inline-block">0</span>
        <span className="text-8xl font-bold text-white inline-block">4</span>
      </div>
      <p className="text-gray-100 mb-8">Página não encontrada</p>
      <div className="mt-6 flex justify-center gap-4">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/blog?q=">
            <Search size={16} />
            Pesquisar posts
          </Link>
        </Button>
      </div>
    </div>
  );
}
