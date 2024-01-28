import './styles.scss';

import { MagnifyingGlass, Trash } from 'phosphor-react';

import { Button } from '@/modules/app/components/button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/modules/app/utils/constants';

import { useDeleteDragon } from '../../hooks/useDeleteDragon';
import { type DragonsResponse } from '../../utils/types';

interface CardDragonsProps extends React.HTMLAttributes<HTMLDivElement> {
  dragon: DragonsResponse;
  handleClickSeeDetails: (id: string) => void;
}

export function CardDragons({
  dragon,
  handleClickSeeDetails,
  ...rest
}: CardDragonsProps) {
  const { handleDeleteDragon, isDeleting } = useDeleteDragon();

  return (
    <div className="card-dragons-container" {...rest}>
      <div className="card-dragons-type">
        <span>{dragon.type}</span>
      </div>

      <h1>{dragon.name}</h1>
      <span className="card-dragons-createdAt">
        Criado em: {String(dragon.createdAt)}
      </span>
      <div className="card-dragons-description">
        <p>{dragon.histories}</p>
      </div>

      <div className="card-dragons-footer">
        <Button
          data-testid="details-dragon-button"
          size={BUTTON_SIZES.SM}
          disabled={isDeleting}
          variant={BUTTON_VARIANTS.Tertiary}
          onClick={() => {
            handleClickSeeDetails(dragon.id);
          }}
        >
          <MagnifyingGlass
            size={20}
            weight="bold"
            onClick={() => {
              handleClickSeeDetails(dragon.id);
            }}
          />
        </Button>

        <Button
          data-testid="delete-dragon-button"
          size={BUTTON_SIZES.SM}
          variant={BUTTON_VARIANTS.Secondary}
          disabled={isDeleting}
          isLoading={isDeleting}
          onClick={async () => {
            await handleDeleteDragon(dragon.id);
          }}
        >
          <Trash size={20} weight="bold" />
        </Button>
      </div>
    </div>
  );
}
