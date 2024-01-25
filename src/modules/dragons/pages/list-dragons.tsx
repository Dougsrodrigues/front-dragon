import { CardDragons } from '../components/card-dragons';
import { useListDragons } from '../hooks/useListDragons';

export function ListDragons() {
  const { dragons } = useListDragons();

  return (
    <div>
      <CardDragons />
    </div>
  );
}
