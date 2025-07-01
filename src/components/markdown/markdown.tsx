import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
  className?: string;
};
export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => (
          <p className="mb-6 leading-relaxed text-gray-200 text-body-sm">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-extrabold text-gray-100 text-body-sm">
            {children}
          </strong>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside">{children}</ul>
        ),
        li: ({ children }) => <li className="mb-3 text-body-sm">{children}</li>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
