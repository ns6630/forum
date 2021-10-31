import { useEffect, useState } from "react";

export type UseQueryFn<TData> = () => Promise<TData>;

export interface UseQueryResult<TData, TError> {
  isLoading: boolean;
  data?: TData;
  error?: TError;
}

function useQuery<TData, TError>(
  query: UseQueryFn<TData>
): UseQueryResult<TData, TError> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<TData | undefined>(undefined);
  const [error, setError] = useState<TError | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const response = await query();
        setData(response);
      } catch (error) {
        setError(error as TError);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  return {
    isLoading,
    data,
    error,
  };
}

export default useQuery;
