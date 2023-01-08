import TableDropdown from 'components/Dropdowns/TableDropdown';

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
          ID Forklift
        </th>
        <th
          className={
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
          }
        >
          Nama Driver
        </th>
        <th
          className={
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center ' +
            'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
          }
        >
          Shift
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
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center ' +
            'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
          }
        >
          Tanggal Pengecekan
        </th>
        <th
          className={
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
          }
        ></th>
      </tr>
    </thead>
  );
};

const TableRow = () => {
  return (
    <tr>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
        <img
          src="/img/forklift.png"
          className="h-12 w-12 bg-white rounded-full border"
          alt="..."
        ></img>{' '}
        <span className="ml-3 font-bold text-blueGray-600">ID A1</span>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        Irfan Hidayat
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        Shift Pagi
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        <i className="fas fa-circle text-orange-500 mr-2"></i> Kurang Baik
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        12 Desember 2022
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
        <TableDropdown />
      </td>
    </tr>
  );
};

const CardRiwayat = () => {
  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
        <CardHeader
          title="Riwayat Pengecekan"
          actionButton={
            <button
              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-semibold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Export
            </button>
          }
        />

        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <TableHead />

            <tbody>
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardRiwayat;
