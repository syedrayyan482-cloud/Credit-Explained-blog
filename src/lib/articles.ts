import { supabase } from "@/integrations/supabase/client";

export interface Author {
  id: string;
  slug: string;
  name: string;
  credentials: string | null;
  bio: string | null;
  expertise_tags: string[];
  avatar_url: string | null;
}

export interface ArticleContent {
  title: string;
  summary: string;
  featuredImage: string;
  readTime: string;
  html: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
  };
  faq?: Array<{ question: string; answer: string }>;
}

export interface Article {
  id: string;
  slug: string;
  status: string;
  canonical_url: string | null;
  author_id: string | null;
  tags: string[];
  content: ArticleContent;
  published_at: string | null;
  updated_at: string | null;
  created_at: string | null;
  author?: Author;
}

export async function getPublishedArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from("articles")
    .select(`
      *,
      author:authors(*)
    `)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching articles:", error);
    return [];
  }

  return (data || []).map((article) => ({
    ...article,
    content: article.content as unknown as ArticleContent,
    author: article.author as Author | undefined,
  }));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from("articles")
    .select(`
      *,
      author:authors(*)
    `)
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("Error fetching article:", error);
    return null;
  }

  if (!data) return null;

  return {
    ...data,
    content: data.content as unknown as ArticleContent,
    author: data.author as Author | undefined,
  };
}

export async function getRelatedArticles(
  currentSlug: string,
  tags: string[],
  limit: number = 3
): Promise<Article[]> {
  const { data, error } = await supabase
    .from("articles")
    .select(`
      *,
      author:authors(*)
    `)
    .eq("status", "published")
    .neq("slug", currentSlug)
    .overlaps("tags", tags)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching related articles:", error);
    return [];
  }

  return (data || []).map((article) => ({
    ...article,
    content: article.content as unknown as ArticleContent,
    author: article.author as Author | undefined,
  }));
}

export async function getFeaturedArticles(limit: number = 3): Promise<Article[]> {
  const { data, error } = await supabase
    .from("articles")
    .select(`
      *,
      author:authors(*)
    `)
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching featured articles:", error);
    return [];
  }

  return (data || []).map((article) => ({
    ...article,
    content: article.content as unknown as ArticleContent,
    author: article.author as Author | undefined,
  }));
}
