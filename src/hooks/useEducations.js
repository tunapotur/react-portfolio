import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useEducations() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ['education'],
    queryFn: () =>
      axios.get(`${import.meta.env.VITE_DB}/education`).then((res) => res.data),
  });

  return { isPending, isError, error, data };
}
