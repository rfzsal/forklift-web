import formatDate from 'utils/formatDate';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th
          className={
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
          }
        >
          Nama
        </th>
        <th
          className={
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center ' +
            'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
          }
        >
          Status
        </th>
        <th
          className={
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
          }
        >
          Keterangan
        </th>
      </tr>
    </thead>
  );
};

const TableRow = ({ index, nama, status, keterangan }) => {
  return (
    <tr>
      <td className="border-t-0 w-4/12 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
        {nama}
      </td>
      <td className="border-t-0 w-4/12 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        {status === 'Kurang Baik' && (
          <i className="fas fa-circle text-orange-500 mr-2"></i>
        )}
        {status === 'Baik' && (
          <i className="fas fa-circle text-emerald-500 mr-2"></i>
        )}

        {status}
      </td>
      <td className="border-t-0 w-4/12 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left">
        {keterangan}
      </td>
    </tr>
  );
};

const CardDetail = ({ date, dataDriver, dataForklift, dataPengecekan }) => {
  const createRows = () => {
    if (!dataPengecekan)
      return (
        <tr>
          <td
            colSpan={6}
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            Tidak ada data
          </td>
        </tr>
      );

    if (dataPengecekan.length === 0)
      return (
        <tr>
          <td
            colSpan={6}
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            Tidak ada data
          </td>
        </tr>
      );

    return dataPengecekan.map((row, index) => (
      <TableRow
        key={row.nama + index}
        nama={row.nama}
        status={row.status}
        keterangan={row.keterangan}
      />
    ));
  };

  if (!date || !dataDriver || !dataForklift || !dataPengecekan) return null;

  return (
    <>
      <div className="block w-full px-4 py-4">
        <div className="flex flex-row justify-between items-center">
          <h6 className="text-md mt-3 mb-6 font-bold uppercase px-4">
            PT Gajah Tunggal
          </h6>
          <p className="text-sm mt-3 mb-6 px-4">
            Waktu Pengecekan : {formatDate(date * 1000, 'HH:mm - dd MMMM yyyy')}
          </p>
        </div>
      </div>

      <div className="block w-full px-4 py-4">
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase px-4">
          Informasi Driver
        </h6>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Nama Driver
              </label>
              <input
                disabled
                value={dataDriver.nama}
                type="text"
                placeholder="Irfan Hidayat"
                className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          <div className="w-full lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Shift
              </label>
              <input
                disabled
                value={dataDriver.shift}
                type="text"
                placeholder="Pagi"
                className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block w-full px-4 py-4">
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase px-4">
          Informasi Forklift
        </h6>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                ID Forklift
              </label>
              <input
                disabled
                value={dataForklift}
                type="text"
                placeholder="A1"
                className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase px-4">
            Detail Pengecekan
          </h6>

          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <TableHead />

              <tbody>{createRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
