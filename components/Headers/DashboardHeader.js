import CardStats from 'components/Cards/CardStats.js';

const DashboardHeader = ({ children }) => {
  return (
    <>
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap mb-8">
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle="TOTAL PENGECEKAN"
                statTitle="27"
                statArrow="up"
                statPercent="3.48"
                statPercentColor="text-emerald-500"
                statDescripiron="Sejak kemarin"
                statIconName="fas fa-search"
                statIconColor="bg-orange-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle="TOTAL PERBAIKAN"
                statTitle="19"
                statArrow="down"
                statPercent="3.48"
                statPercentColor="text-red-500"
                statDescripiron="Sejak kemarin"
                statIconName="fas fa-cogs"
                statIconColor="bg-lightBlue-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle="BELUM DIPERBAIKI"
                statTitle="10"
                statArrow="down"
                statPercent="1.10"
                statPercentColor="text-orange-500"
                statDescripiron="Sejak kemarin"
                statIconName="fas fa-wrench"
                statIconColor="bg-red-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle="SUDAH DIPERBAIKI"
                statTitle="9"
                statArrow="up"
                statPercent="12"
                statPercentColor="text-emerald-500"
                statDescripiron="Sejak kemarin"
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
