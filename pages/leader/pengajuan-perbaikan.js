import Leader from 'layouts/Leader';
import CardPengajuan from 'views/leader/pengajuan-perbaikan/CardPengajuan';

const PengajuanPerbaikan = () => {
  return (
    <div className="flex flex-wrap">
      <CardPengajuan />
    </div>
  );
};

PengajuanPerbaikan.layout = Leader;

export default PengajuanPerbaikan;
