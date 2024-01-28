import './styles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { Button } from '@/modules/app/components/button';
import { Input, TextArea } from '@/modules/app/components/form';
import { BUTTON_VARIANTS } from '@/modules/app/utils/constants';

import { Loading } from '../../components/loading';
import { useEditDragon } from '../../hooks/useEditDragon';
import { useGetByIdDragon } from '../../hooks/useGetByIdDragon';
import { editDragonSchema } from '../../utils/schemas';
import { type EditDragonSchemaData } from '../../utils/types';

export function EditDragon() {
  const { id } = useParams();

  const { dragon, isGettingDragon } = useGetByIdDragon(id ?? '');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditDragonSchemaData>({
    values: {
      histories: dragon?.histories ?? '',
      name: dragon?.name ?? '',
      type: dragon?.type ?? '',
    },
    resolver: zodResolver(editDragonSchema),
  });

  const { handleEditDragon, handleGoBack, isEditing } = useEditDragon();

  if (isGettingDragon) return <Loading />;

  return (
    <form
      onSubmit={handleSubmit(async data => {
        await handleEditDragon(data, id ?? '');
      })}
      className="edit-dragon-container"
      data-testid="edit-dragon"
    >
      <h1>Edite o Dragão</h1>

      <Input
        data-testid="edit-dragon-form-name-input"
        label="Nome"
        {...register('name')}
        error={errors?.name?.message}
      />
      <Input
        data-testid="edit-dragon-form-type-input"
        label="Tipo"
        {...register('type')}
        error={errors?.type?.message}
      />
      <TextArea
        data-testid="edit-dragon-form-histories-input"
        label="Sobre"
        {...register('histories')}
        error={errors?.histories?.message}
      />

      <Button
        data-testid="edit-dragon-button"
        isLoading={isEditing}
        disabled={isEditing}
      >
        Editar
      </Button>
      <Button
        data-testid="edit-dragon-back-button"
        disabled={isEditing}
        variant={BUTTON_VARIANTS.Tertiary}
        onClick={handleGoBack}
      >
        Voltar
      </Button>
    </form>
  );
}
