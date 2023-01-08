const CardHeader = ({ title, actionButton }) => {
  return (
    <div className="rounded-t mb-0 px-4 py-3 border-b">
      <div className="flex flex-wrap items-center">
        <div className="relative w-8/12 px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">{title}</h3>
        </div>
        <div className="relative w-4/12 px-4 max-w-full flex-grow flex-1 text-right">
          {actionButton}
        </div>
      </div>
    </div>
  );
};

const FilterRiwayat = () => {
  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
        <CardHeader title="Filter Riwayat Perbaikan" actionButton={null} />

        <div className="block w-full overflow-x-auto px-4 py-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  Tanggal Dari
                </label>
                <input
                  type="date"
                  placeholder="Irfan Hidayat"
                  className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  Tanggal Ke
                </label>
                <input
                  type="date"
                  placeholder="Irfan Hidayat"
                  className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  Status
                </label>
                <select className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200">
                  <option>Semua Status</option>
                  <option>Sudah Diperbaiki</option>
                  <option>Belum Diperbaiki</option>
                </select>
              </div>
            </div>

            <div class="w-full text-left px-4 py-2">
              <button className="inline-block w-full lg:w-auto bg-indigo-500 text-white active:bg-indigo-600 font-semibold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Filter Riwayat Perbaikan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterRiwayat;
