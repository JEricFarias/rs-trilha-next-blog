import { useCallback, useMemo } from "react";
import {
  ShareConfig,
  SOCIAL_PROVIDERS,
  SocialProvider,
} from "./social-providers";
import { useClipboard } from "../use-clipeboard";
import { Link2 } from "lucide-react";

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export function useShare({
  url,
  title,
  description: text,
  clipboardTimeout = 2000,
}: UseShareProps) {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout });

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text]
  );

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === "clipboard") {
          return await handleCopy(url);
        }

        const providerContig = SOCIAL_PROVIDERS[provider];
        if (!providerContig) {
          throw new Error(`Provider não informado: ${provider}`);
        }

        const shareUrl = providerContig.shareUrl(shareConfig);
        const shareWindow = window.open(
          shareUrl,
          "_blank",
          "width=600,height=600,location=yes,status=yes"
        );
        return !!shareWindow;
      } catch (error) {
        console.error(error);
      }
    },
    [shareConfig, handleCopy, url]
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: "clipboard",
        name: isCopied ? "Link copiado!" : "Copiar link",
        icon: <Link2 className="h-4 w-4" />,
        action: () => share("clipboard"),
      },
    ],
    [isCopied, share]
  );

  return { shareButtons };
}
