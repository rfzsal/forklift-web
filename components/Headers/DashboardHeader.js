import CardStats from 'components/Cards/CardStats.js';
import { usePengecekan } from 'hooks/usePengecekan';
import { usePerbaikan } from 'hooks/usePerbaikan';

const DashboardHeader = ({ children }) => {
  const pengecekan = usePengecekan();
  const perbaikan = usePerbaikan();

  const filterRiwayat = () => {
    if (!perbaikan.riwayat) return { done: [], onGoing: [] };
    if (perbaikan.riwayat.length === 0) return { done: [], onGoing: [] };

    const done = perbaikan.riwayat.filter(
      (row) => row.status === 'Sudah Diperbaiki'
    );
    const onGoing = perbaikan.riwayat.filter(
      (row) => row.status === 'Belum Diperbaiki'
    );

    return { done, onGoing };
  };

  return (
    <>
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap mb-8">
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <CardStats
                statSubtitle="TOTAL PENGECEKAN"
                statTitle={pengecekan.riwayat?.length || 0}
                statIconName="fas fa-search"
                statIconColor="bg-lightBlue-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <CardStats
                statSubtitle="Dalam Perbaikan"
                statTitle={filterRiwayat().onGoing.length}
                statIconName="fas fa-cogs"
                statIconColor="bg-orange-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <CardStats
                statSubtitle="SUDAH DIPERBAIKI"
                statTitle={filterRiwayat().done.length}
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
