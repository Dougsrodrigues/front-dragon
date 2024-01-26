import './styles.scss';

import { MagnifyingGlass, Trash } from 'phosphor-react';

import { type DragonsResponse } from '../../utils/types';

interface CardDragonsProps extends React.HTMLAttributes<HTMLDivElement> {
  dragon: DragonsResponse;
}

export function CardDragons({ dragon, ...rest }: CardDragonsProps) {
  return (
    <div className="card-dragons-container" {...rest}>
      <div className="card-dragons-type">
        <span>{dragon.type}</span>
      </div>

      <h1>{dragon.name}</h1>
      <span className="card-dragons-createdAt">
        Criado em: {dragon.createdAt}
      </span>
      <div className="card-dragons-description">
        <p>{dragon.histories}</p>
      </div>

      <div className="card-dragons-footer">
        <button className="card-dragons-search-button">
          <MagnifyingGlass size={20} weight="bold" />
        </button>
        <button className="card-dragons-delete-button">
          <Trash size={20} weight="bold" />
        </button>
      </div>
    </div>
  );
}
