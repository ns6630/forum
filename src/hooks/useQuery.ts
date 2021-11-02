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
    let running = true;
    setIsLoading(true);

    (async () => {
      try {
        const response = await query();
        if (running) {
          setData(response);
        }
      } catch (error) {
        if (running) {
          setError(error as TError);
        }
      } finally {
        if (running) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      running = false;
    }
  }, [query]);

  return {
    isLoading,
    data,
    error,
  };
}

export default useQuery;
