const BASE_URL = 'https://www.lettuce.com/wp-json/lettuce/blog-content';

export interface Article {
  ID: number;
  title: string;
  tagline: string;
  content: string;
  created_at: string;
  updated_at: string;
  topics: string[];
  regions: string[];
  restaurants: string[];
  featured_image: {
    url: string;
    alt_text: string;
  };
}
//TODO: implement pagination to load each article indepenedently, instead of waiting for all articles to load in at once
export async function getArticles(): Promise<Article[]> {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.status}`);
  }
  return response.json();
}