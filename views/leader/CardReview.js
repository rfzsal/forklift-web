import formatDate from 'utils/formatDate';

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
          Nama Mekanik
        </th>
        <th
          className={
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
          }
        >
          Nama Leader
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
          Waktu
        </th>
        <th
          className={
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center ' +
            'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
          }
        ></th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  idForklift,
  namaMechanic,
  namaLeader,
  shiftMechanic,
  shiftLeader,
  status,
  timestamp,
}) => {
  return (
    <tr>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
        <img
          src="/img/forklift.png"
          className="h-12 w-12 bg-white rounded-full border"
          alt="..."
        ></img>{' '}
        <span className="ml-3 font-bold text-blueGray-600">
          ID {idForklift}
        </span>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {namaMechanic ? `${namaMechanic} - Shift ${shiftMechanic}` : '-'}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {namaLeader ? `${namaLeader} - Shift ${shiftLeader}` : '-'}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        {status === 'Belum Diperbaiki' && (
          <i className="fas fa-circle text-orange-500 mr-2"></i>
        )}
        {status === 'Sudah Diperbaiki' && (
          <i className="fas fa-circle text-green-500 mr-2"></i>
        )}

        {status}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        {formatDate(timestamp * 1000, 'hh:mm - dd MMMM yyyy')}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        <button
          className="border text-xs font-semibold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Siap Digunakan
        </button>
      </td>
    </tr>
  );
};

const CardReview = ({ data, disableButton }) => {
  const createRows = () => {
    if (!data)
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

    if (data.length === 0)
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

    return data.map((row, index) => (
      <TableRow
        key={row.id + index}
        idForklift={row.id_forklift}
        namaMechanic={row.nama_mechanic}
        namaLeader={row.nama_leader}
        shiftMechanic={row.shift_mechanic}
        shiftLeader={row.shift_leader}
        status={row.status}
        timestamp={row.timestamp}
      />
    ));
  };

  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
        <CardHeader title="Review Perbaikan" actionButton={null} />

        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <TableHead />

            <tbody>{createRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
