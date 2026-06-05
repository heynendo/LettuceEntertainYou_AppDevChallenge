import { useEffect, useState } from 'react';
import { getArticles, Article } from './api';

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getArticles()
      .then((data) => setArticles(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { articles, loading, error };
}