import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { dragonsServices } from '../services/dragons-service';
import { LIST_DRAGONS_KEY } from '../utils/constants';
import {
  type CreateDragonSchemaData,
  type DragonsResponse,
} from '../utils/types';

export function useEditDragon() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: editDragon, isPending } = useMutation({
    mutationFn: dragonsServices.editDragon,
    onSuccess(data) {
      const dragons = queryClient.getQueryData<DragonsResponse[]>([
        LIST_DRAGONS_KEY,
      ]);

      if (dragons != null) {
        const findIndexDragon = dragons?.findIndex(
          dragon => dragon.id === data.id,
        );

        dragons[findIndexDragon] = data;

        queryClient.setQueryData([LIST_DRAGONS_KEY], dragons);
      }
    },
  });

  async function handleEditDragon(data: CreateDragonSchemaData, id: string) {
    try {
      const body = {
        ...data,
        createdAt: new Date(),
      };
      await editDragon({ body, id });
      toast.success('Dragão editado com sucesso.');
      handleGoBack();
    } catch (_) {
      toast.error('Erro ao editar o dragão, tente novamente mais tarde.');
    }
  }

  function handleGoBack() {
    navigate('/');
  }
  return {
    handleGoBack,
    handleEditDragon,
    isEditing: isPending,
  };
}
