import FilterRiwayat from 'views/mechanic/riwayat-pengecekan/FilterRiwayat';
import CardRiwayat from 'views/mechanic/riwayat-pengecekan/CardRiwayat';
import Mechanic from 'layouts/Mechanic';

const RiwayatPengecekan = () => {
  return (
    <div className="flex flex-wrap">
      <FilterRiwayat />
      <CardRiwayat />
    </div>
  );
};

RiwayatPengecekan.layout = Mechanic;

export default RiwayatPengecekan;
