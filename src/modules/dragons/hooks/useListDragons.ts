import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { dragonsServices } from '../services/dragons-service';
import { LIST_DRAGONS_KEY } from '../utils/constants';

export function useListDragons() {
  const navigate = useNavigate();
  const { data: dragons, isLoading } = useQuery({
    queryKey: [LIST_DRAGONS_KEY],
    queryFn: dragonsServices.getDragons,
  });

  const handleClickSeeDetails = (id: string) => {
    navigate(`dragon/${id}`);
  };

  return { dragons, isLoading, handleClickSeeDetails };
}
