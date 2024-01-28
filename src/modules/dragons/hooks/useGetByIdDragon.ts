import { useQuery } from '@tanstack/react-query';

import { dragonsServices } from '../services/dragons-service';
import { GET_DRAGON_BY_ID } from '../utils/constants';

export function useGetByIdDragon(id: string) {
  const { data: dragon, isLoading } = useQuery({
    queryKey: [GET_DRAGON_BY_ID, id],
    enabled: !(id.length === 0),
    queryFn: async () => await dragonsServices.getDragonById(id),
    staleTime: 60 * 1000, // 10 minutos
  });
  return { dragon, isGettingDragon: isLoading };
}
