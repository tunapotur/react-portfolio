import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useWorkExperience() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ['workExperience'],
    queryFn: () =>
      axios.get(`${import.meta.env.VITE_DB}/workExperience`).then((res) => res.data),
  });

  return { isPending, isError, error, data };
}
