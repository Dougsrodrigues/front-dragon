import './styles.scss';

import { CardDragons } from '../../components/card-dragons';
import { Loading } from '../../components/loading';
import { useListDragons } from '../../hooks/useListDragons';
export function ListDragons() {
  const { dragons, isLoading } = useListDragons();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="list-dragons-container">
      {dragons?.map(dragon => <CardDragons key={dragon.id} dragon={dragon} />)}
    </div>
  );
}
