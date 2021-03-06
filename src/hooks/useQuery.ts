import { useEffect, useState } from "react";
import useMounted from "./useMounted";

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
  const mounted = useMounted();

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const response = await query();
        if (mounted.current) {
          setData(response);
        }
      } catch (error) {
        if (mounted.current) {
          setError(error as TError);
        }
      } finally {
        if (mounted.current) {
          setIsLoading(false);
        }
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
