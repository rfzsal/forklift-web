import FilterRiwayat from 'views/leader/riwayat-perbaikan/FilterRiwayat';
import CardRiwayat from 'views/leader/riwayat-perbaikan/CardRiwayat';
import Leader from 'layouts/Leader';

const RiwayatPerbaikan = () => {
  return (
    <div className="flex flex-wrap">
      <FilterRiwayat />
      <CardRiwayat />
    </div>
  );
};

RiwayatPerbaikan.layout = Leader;

export default RiwayatPerbaikan;
