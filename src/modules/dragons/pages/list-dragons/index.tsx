import './styles.scss';

import { Button } from '@/modules/app/components/button';

import { CardDragons } from '../../components/card-dragons';
import { Loading } from '../../components/loading';
import { useListDragons } from '../../hooks/useListDragons';

export function ListDragons() {
  const { dragons, isLoading, handleClickSeeDetails, handleRegisterNewDragon } =
    useListDragons();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <Button data-testid="add-new-dragon" onClick={handleRegisterNewDragon}>
          Cadastrar um novo Dragão
        </Button>
      </div>
      <div data-testid="list-dragons-page" className="list-dragons-container">
        {dragons?.map(dragon => (
          <CardDragons
            key={dragon.id + dragon.name}
            dragon={dragon}
            handleClickSeeDetails={handleClickSeeDetails}
          />
        ))}
      </div>
    </>
  );
}
