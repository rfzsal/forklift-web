import FilterRiwayat from 'views/leader/riwayat-pengecekan/FilterRiwayat';
import CardRiwayat from 'views/leader/riwayat-pengecekan/CardRiwayat';
import Leader from 'layouts/Leader';

const RiwayatPengecekan = () => {
  return (
    <div className="flex flex-wrap">
      <FilterRiwayat />
      <CardRiwayat />
    </div>
  );
};

RiwayatPengecekan.layout = Leader;

export default RiwayatPengecekan;
