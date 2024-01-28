import './styles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/modules/app/components/button';
import { Input, TextArea } from '@/modules/app/components/form';
import { BUTTON_VARIANTS } from '@/modules/app/utils/constants';

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
      data-testid="create-dragon-form"
    >
      <h1>Cadastre um Dragão</h1>

      <Input
        data-testid="create-dragon-form-name-input"
        label="Nome"
        {...register('name')}
        error={errors?.name?.message}
      />
      <Input
        data-testid="create-dragon-form-type-input"
        label="Tipo"
        {...register('type')}
        error={errors?.type?.message}
      />
      <TextArea
        data-testid="create-dragon-form-histories-input"
        label="Sobre"
        {...register('histories')}
        error={errors?.histories?.message}
      />

      <Button
        data-testid="create-dragon-register-button"
        isLoading={isCreating}
        disabled={isCreating}
      >
        Cadastrar
      </Button>
      <Button
        data-testid="create-dragon-back-button"
        disabled={isCreating}
        variant={BUTTON_VARIANTS.Tertiary}
        onClick={handleGoBack}
      >
        Voltar
      </Button>
    </form>
  );
}
