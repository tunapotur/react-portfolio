import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function usePersonalInfo() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ['personalInfo'],
    queryFn: () =>
      axios.get(`${import.meta.env.VITE_DB}/person`).then((res) => res.data),
  });

  return { isPending, isError, error, data };
}
