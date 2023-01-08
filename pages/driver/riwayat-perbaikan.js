import CardRiwayat from 'views/driver/riwayat-perbaikan/CardRiwayat';
import FilterRiwayat from 'views/driver/riwayat-perbaikan/FilterRiwayat';
import Driver from 'layouts/Driver';

const RiwayatPerbaikan = () => {
  return (
    <div className="flex flex-wrap">
      <FilterRiwayat />
      <CardRiwayat />
    </div>
  );
};

RiwayatPerbaikan.layout = Driver;

export default RiwayatPerbaikan;
