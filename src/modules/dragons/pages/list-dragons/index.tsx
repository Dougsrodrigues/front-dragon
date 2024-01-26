import './styles.scss';

import { Button } from '../../../app/components/button';
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
        <Button onClick={handleRegisterNewDragon}>
          Cadastrar um novo Dragão
        </Button>
      </div>
      <div className="list-dragons-container">
        {dragons?.map(dragon => (
          <CardDragons
            key={dragon.id}
            dragon={dragon}
            handleClickSeeDetails={handleClickSeeDetails}
          />
        ))}
      </div>
    </>
  );
}
