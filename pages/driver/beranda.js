import CardRiwayat from 'views/driver/riwayat-pengecekan/CardRiwayat';
import CardKomponen from 'views/beranda/CardKomponen';
import Driver from 'layouts/Driver';

const Beranda = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0">
          <CardRiwayat />
        </div>
        <div className="w-full xl:w-4/12">
          <CardKomponen />
        </div>
      </div>
    </>
  );
};

Beranda.layout = Driver;

export default Beranda;
