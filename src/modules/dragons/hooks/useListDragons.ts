import { useQuery } from '@tanstack/react-query';

import { dragonsServices } from '../services/dragons-service';
import { LIST_DRAGONS_KEY } from '../utils/constants';

export function useListDragons() {
  const { data: dragons, isLoading } = useQuery({
    queryKey: [LIST_DRAGONS_KEY],
    queryFn: dragonsServices.getDragons,
  });

  return { dragons, isLoading };
}
