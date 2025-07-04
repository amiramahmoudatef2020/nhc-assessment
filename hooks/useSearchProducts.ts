import { useQueryState, parseAsString } from 'nuqs';
import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

export function useSearchProducts(fetchFn: (query: string) => Promise<any[]>) {
  const [search, setSearch] = useQueryState('q', parseAsString.withDefault(''));
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 500); 

  useEffect(() => {
    if (!debouncedSearch) {
      setResults([]);
      return;
    }

    setLoading(true);
    fetchFn(debouncedSearch)
      .then(setResults)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [debouncedSearch, fetchFn]);

  return { results, search, setSearch, loading };
}
