import './styles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '../../../app/components/button';
import { Input, TextArea } from '../../../app/components/form';
import { BUTTON_VARIANTS } from '../../../app/utils/constants';
import { useCreateDragon } from '../../hooks/useCreateDragon';
import { createDragonSchema } from '../../utils/schemas';
import { type CreateDragonSchemaData } from '../../utils/types';

export function CreateDragon() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDragonSchemaData>({
    resolver: zodResolver(createDragonSchema),
  });
  const { handleGoBack, handleCreateDragon, isCreating } = useCreateDragon();

  return (
    <form
      onSubmit={handleSubmit(handleCreateDragon)}
      className="create-dragon-container"
    >
      <h1>Cadastre um Dragão</h1>

      <Input label="Nome" {...register('name')} error={errors?.name?.message} />
      <Input label="Tipo" {...register('type')} error={errors?.type?.message} />
      <TextArea
        label="Sobre"
        {...register('histories')}
        error={errors?.histories?.message}
      />

      <Button isLoading={isCreating} disabled={isCreating}>
        Cadastrar
      </Button>
      <Button
        disabled={isCreating}
        variant={BUTTON_VARIANTS.Tertiary}
        onClick={handleGoBack}
      >
        Voltar
      </Button>
    </form>
  );
}
