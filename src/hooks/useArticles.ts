import { useQuery } from "@tanstack/react-query";
import { 
  getPublishedArticles, 
  getArticleBySlug, 
  getRelatedArticles, 
  getFeaturedArticles,
  Article 
} from "@/lib/articles";

export function usePublishedArticles() {
  return useQuery({
    queryKey: ["articles", "published"],
    queryFn: getPublishedArticles,
  });
}

export function useArticleBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["article", slug],
    queryFn: () => (slug ? getArticleBySlug(slug) : null),
    enabled: !!slug,
  });
}

export function useRelatedArticles(
  currentSlug: string | undefined,
  tags: string[] | undefined,
  limit?: number
) {
  return useQuery({
    queryKey: ["articles", "related", currentSlug, tags],
    queryFn: () =>
      currentSlug && tags ? getRelatedArticles(currentSlug, tags, limit) : [],
    enabled: !!currentSlug && !!tags && tags.length > 0,
  });
}

export function useFeaturedArticles(limit?: number) {
  return useQuery({
    queryKey: ["articles", "featured", limit],
    queryFn: () => getFeaturedArticles(limit),
  });
}

export type { Article };
