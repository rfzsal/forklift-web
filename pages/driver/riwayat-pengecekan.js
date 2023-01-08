import CardRiwayat from 'views/driver/riwayat-pengecekan/CardRiwayat';
import FilterRiwayat from 'views/driver/riwayat-pengecekan/FilterRiwayat';
import Driver from 'layouts/Driver';

const RiwayatPengecekan = () => {
  return (
    <div className="flex flex-wrap">
      <FilterRiwayat />
      <CardRiwayat />
    </div>
  );
};

RiwayatPengecekan.layout = Driver;

export default RiwayatPengecekan;
