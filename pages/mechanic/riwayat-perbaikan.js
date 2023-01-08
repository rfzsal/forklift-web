import FilterRiwayat from 'views/mechanic/riwayat-perbaikan/FilterRiwayat';
import CardRiwayat from 'views/mechanic/riwayat-perbaikan/CardRiwayat';
import Mechanic from 'layouts/Mechanic';

const RiwayatPerbaikan = () => {
  return (
    <div className="flex flex-wrap">
      <FilterRiwayat />
      <CardRiwayat />
    </div>
  );
};

RiwayatPerbaikan.layout = Mechanic;

export default RiwayatPerbaikan;
