import CardStats from 'components/Cards/CardStats.js';
import { usePengecekan } from 'hooks/usePengecekan';
import { usePerbaikan } from 'hooks/usePerbaikan';

const DashboardHeader = ({ children }) => {
  const pengecekan = usePengecekan();
  const perbaikan = usePerbaikan();

  const filterRiwayat = () => {
    if (!perbaikan.riwayat) return { sudahDiperbaiki: [] };
    if (perbaikan.riwayat.length === 0) return { sudahDiperbaiki: [] };

    const sudahDiperbaiki = perbaikan.riwayat.filter(
      (row) => row.status === 'Sudah Diperbaiki'
    );

    return { sudahDiperbaiki };
  };

  return (
    <>
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap mb-8">
            <div className="w-full lg:w-6/12 px-4">
              <CardStats
                statSubtitle="TOTAL PENGECEKAN"
                statTitle={pengecekan.riwayat?.length || 0}
                statIconName="fas fa-search"
                statIconColor="bg-lightBlue-500"
              />
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <CardStats
                statSubtitle="SUDAH DIPERBAIKI"
                statTitle={filterRiwayat().sudahDiperbaiki?.length || 0}
                statIconName="fas fa-check"
                statIconColor="bg-emerald-500"
              />
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
