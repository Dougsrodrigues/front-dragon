import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { dragonsServices } from '../services/dragons-service';
import { LIST_DRAGONS_KEY } from '../utils/constants';
import {
  type CreateDragonSchemaData,
  type DragonsResponse,
} from '../utils/types';

export function useCreateDragon() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: createDragon, isPending } = useMutation({
    mutationFn: dragonsServices.createDragon,
    onSuccess(data) {
      const dragons = queryClient.getQueryData<DragonsResponse[]>([
        LIST_DRAGONS_KEY,
      ]);

      if (dragons != null) {
        queryClient.setQueryData([LIST_DRAGONS_KEY], [data, ...dragons]);
      }
    },
  });

  async function handleCreateDragon(data: CreateDragonSchemaData) {
    try {
      const body = {
        ...data,
        createdAt: new Date(),
      };
      await createDragon(body);
      toast.success('Dragão criado com sucesso.');
      handleGoBack();
    } catch (_) {
      toast.error('Erro ao criar dragão, tente novamente mais tarde.');
    }
  }

  function handleGoBack() {
    navigate('/');
  }
  return {
    handleGoBack,
    handleCreateDragon,
    isCreating: isPending,
  };
}
