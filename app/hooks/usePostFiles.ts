import { toPublicPath } from "@/app/utils/toPublicPath";

export const usePostFiles = (files: (string | null | undefined)[], extensions: string[]) => {
  return Array.from(
    new Set(
      files
        .filter((file): file is string => typeof file === "string" && file.trim().length > 0)
        .map((file) => toPublicPath(file.trim()))
        .filter((file) =>
          extensions.some((extension) =>
            file.split(/[?#]/)[0].toLowerCase().endsWith(extension.toLowerCase()),
          ),
        ),
    ),
  );
};
