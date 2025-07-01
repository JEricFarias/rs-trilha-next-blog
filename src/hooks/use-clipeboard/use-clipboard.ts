import { useCallback, useEffect, useState } from "react";

type UseClipboardProps = {
  timeout?: number;
};

export function useClipboard({ timeout = 2000 }: UseClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.error("clipboard não seuportado.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error("Falha ao copiar o texto", error);
      setIsCopied(false);
      return false;
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [isCopied, timeout]);

  return {
    isCopied,
    handleCopy,
  };
}
