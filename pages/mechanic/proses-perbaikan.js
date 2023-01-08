import CardPerbaikan from 'views/mechanic/proses-perbaikan/CardPerbaikan';
import Mechanic from 'layouts/Mechanic';

const ProsesPerbaikan = () => {
  return (
    <div className="flex flex-wrap">
      <CardPerbaikan />
    </div>
  );
};

ProsesPerbaikan.layout = Mechanic;

export default ProsesPerbaikan;
