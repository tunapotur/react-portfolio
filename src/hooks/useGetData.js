import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useGetData(sourceName) {
  const { isPending, isError, error, data } = useQuery({
    queryKey: [sourceName],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_DB}/${sourceName}`)
        .then((res) => res.data),
  });

  return { isPending, isError, error, data };
}

export default useGetData;
