import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  checkIsValidDate,
  dateFormat,
} from '@/modules/app/utils/functions/date-formatter';

import { dragonsServices } from '../services/dragons-service';
import { LIST_DRAGONS_KEY } from '../utils/constants';
import { type DragonsResponse } from '../utils/types';

export function useListDragons() {
  const navigate = useNavigate();
  const { data: dragons, isLoading } = useQuery({
    queryKey: [LIST_DRAGONS_KEY],
    queryFn: dragonsServices.getDragons,
    staleTime: 60 * 1000, // 10 minutes
  });

  const formattedDragons: DragonsResponse[] = useMemo(() => {
    if (dragons == null) return [];

    return dragons?.map(dragon => {
      const date = new Date(dragon?.createdAt);
      const isValidDate = checkIsValidDate(date);

      return {
        ...dragon,
        createdAt: isValidDate ? dateFormat.format(date) : dragon.createdAt,
      };
    });
  }, [dragons]);

  const handleClickSeeDetails = (id: string) => {
    navigate(`/dragon/${id}`);
  };
  const handleRegisterNewDragon = () => {
    navigate('/dragon');
  };

  return {
    dragons: formattedDragons,
    isLoading,
    handleClickSeeDetails,
    handleRegisterNewDragon,
  };
}
