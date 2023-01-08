import CardRiwayat from 'views/mechanic/riwayat-pengecekan/CardRiwayat';
import CardKomponen from 'views/beranda/CardKomponen';
import Mechanic from 'layouts/Mechanic';

const Beranda = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-4 xl:mb-0">
          <CardRiwayat />
        </div>
        <div className="w-full xl:w-4/12">
          <CardKomponen />
        </div>
      </div>
    </>
  );
};

Beranda.layout = Mechanic;

export default Beranda;
