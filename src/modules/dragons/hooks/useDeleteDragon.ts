import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { dragonsServices } from '../services/dragons-service';
import { LIST_DRAGONS_KEY } from '../utils/constants';
import { type DragonsResponse } from '../utils/types';

export function useDeleteDragon() {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteDragon, isPending } = useMutation({
    mutationFn: dragonsServices.deleteDragon,
    onSuccess(data) {
      const dragons = queryClient.getQueryData<DragonsResponse[]>([
        LIST_DRAGONS_KEY,
      ]);

      if (dragons != null) {
        const filterDragonDeleted = dragons.filter(
          dragon => dragon.id !== data.id,
        );

        queryClient.setQueryData([LIST_DRAGONS_KEY], filterDragonDeleted);
      }
    },
  });
  async function handleDeleteDragon(id: string) {
    try {
      await deleteDragon(id);
      toast.success('Dragão deletado com sucesso.');
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao deletar o dragão, tente novamente mais tarde.',
      );
    }
  }

  return { handleDeleteDragon, isDeleting: isPending };
}
