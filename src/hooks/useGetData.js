import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useGetData(source) {
  const { isPending, isError, error, data } = useQuery({
    queryKey: [source],
    queryFn: () =>
      axios.get(`${import.meta.env.VITE_DB}/${source}`).then((res) => res.data),
  });

  return { isPending, isError, error, data };
}

export default useGetData;
