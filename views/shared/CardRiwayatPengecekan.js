import { useEffect, useState } from 'react';
import formatDate from 'utils/formatDate';
import { subSeconds } from 'date-fns';
import Drawer from 'react-modern-drawer';

import exportExcell from 'utils/exportExcell';
import coreAPI from 'utils/coreAPI';

const StatusInfo = ({ labelStatus, labelDetails, details }) => {
  if (!details) return null;

  return (
    <>
      <div className="bg-gray-200 h-1 mt-1 mb-2 w-full"></div>

      <div className="w-full px-4 mt-2">
        <div className="relative w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            {labelStatus}
          </label>
          <input
            disabled
            value={details ? 'Kurang Baik' : 'Baik'}
            type="text"
            className="border disabled:border-blueGray-200 disabled:bg-blueGray-100 border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>
      <div className="w-full px-4">
        <div className="relative w-full mb-2">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            {labelDetails}
          </label>
          <textarea
            disabled
            value={details}
            type="text"
            className="border disabled:border-blueGray-200 disabled:bg-blueGray-100 border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>
    </>
  );
};

const DrawerContent = ({ drawerData }) => {
  const [riwayatData, setRiwayatData] = useState(null);

  useEffect(() => {
    if (!drawerData) return setRiwayatData(null);

    const getRiwayatData = async () => {
      const util = new coreAPI();
      const [error, data] = await util.getRiwayatPengecekanByID(drawerData.id);

      if (error) return setRiwayatData(null);
      setRiwayatData(data[0]);
    };

    getRiwayatData();
  }, [drawerData]);

  if (!drawerData) return null;

  return (
    <div className="overflow-y-auto max-h-screen">
      <div className="block w-full overflow-x-auto px-4 pt-2">
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase px-4">
          Informasi Forklift
        </h6>

        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                ID Forklift
              </label>
              <input
                disabled
                value={drawerData.id_forklift}
                type="text"
                className="border disabled:border-blueGray-200 disabled:bg-blueGray-100 border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          {riwayatData && (
            <>
              <StatusInfo
                labelStatus="Status Ban"
                labelDetails="Keterangan Ban"
                details={riwayatData.keterangan_ban}
              />
              <StatusInfo
                labelStatus="Status Fork"
                labelDetails="Keterangan Fork"
                details={riwayatData.keterangan_fork}
              />
              <StatusInfo
                labelStatus="Status Seat Belt"
                labelDetails="Keterangan Seat Belt"
                details={riwayatData.keterangan_seat_belt}
              />
              <StatusInfo
                labelStatus="Status Lampu Depan dan Belakang"
                labelDetails="Keterangan Lampu Depan dan Belakang"
                details={riwayatData.keterangan_lampu_depan_belakang}
              />
              <StatusInfo
                labelStatus="Status Rem Tangan dan Kaki"
                labelDetails="Keterangan Rem Tangan dan Kaki"
                details={riwayatData.keterangan_rem_tangan_kaki}
              />
              <StatusInfo
                labelStatus="Status Lampu Sein"
                labelDetails="Keterangan Lampu Sein"
                details={riwayatData.keterangan_lampu_sein}
              />
              <StatusInfo
                labelStatus="Status Klakson"
                labelDetails="Keterangan Klakson"
                details={riwayatData.keterangan_klakson}
              />
              <StatusInfo
                labelStatus="Status Alarm Mundur"
                labelDetails="Keterangan Alarm Mundur"
                details={riwayatData.keterangan_alarm_mundur}
              />
              <StatusInfo
                labelStatus="Status Lampu Sirine"
                labelDetails="Keterangan Lampu Sirine"
                details={riwayatData.keterangan_lampu_sirine}
              />
              <StatusInfo
                labelStatus="Status Tempat Duduk"
                labelDetails="Keterangan Tempat Duduk"
                details={riwayatData.keterangan_tempat_duduk}
              />
              <StatusInfo
                labelStatus="Status Kaca Spion"
                labelDetails="Keterangan Kaca Spion"
                details={riwayatData.keterangan_kaca_spion}
              />
              <StatusInfo
                labelStatus="Status APAR"
                labelDetails="Keterangan APAR"
                details={riwayatData.keterangan_apar}
              />
              <StatusInfo
                labelStatus="Status Oli"
                labelDetails="Keterangan Oli"
                details={riwayatData.keterangan_oli}
              />
              <StatusInfo
                labelStatus="Status Kebersihan"
                labelDetails="Keterangan Kebersihan"
                details={riwayatData.keterangan_kebersihan}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

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
          Waktu Pengecekan
        </th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  index,
  idForklift,
  namaDriver,
  shiftDriver,
  status,
  timestamp,
  onClick,
}) => {
  return (
    <tr>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
        <button onClick={() => onClick(index)} className="flex items-center">
          <img
            src="/img/forklift.png"
            className="h-12 w-12 bg-white rounded-full border"
            alt="..."
          ></img>{' '}
          <span className="ml-3 font-bold text-blueGray-600">
            ID {idForklift}
          </span>
        </button>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {namaDriver}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        Shift {shiftDriver}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        {status === 'Kurang Baik' && (
          <i className="fas fa-circle text-orange-500 mr-2"></i>
        )}
        {status === 'Baik' && (
          <i className="fas fa-circle text-green-500 mr-2"></i>
        )}

        {status}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        {formatDate(timestamp * 1000, 'hh:mm - dd MMMM yyyy')}
      </td>
    </tr>
  );
};

const CardRiwayat = ({ data, hideActionButton }) => {
  const [initDrawer, setInitDrawer] = useState(false);
  const [drawerState, setDrawerState] = useState(false);
  const [drawerData, setDrawerData] = useState(null);

  const toggleDrawer = () => {
    if (drawerData) setDrawerData(null);
    setDrawerState(!drawerState);
  };

  const handleRowClick = (index) => {
    setDrawerData(data[index]);
    toggleDrawer();
  };

  const handleExport = () => {
    if (!data) return;

    const rowsData = [
      ['ID Forklift', 'Nama Driver', 'Shift', 'Status', 'Waktu Pengecekan'],
    ];
    data.forEach((row) => {
      rowsData.push([
        row.id_forklift,
        row.nama_driver,
        row.shift_driver,
        row.status,
        subSeconds(row.timestamp * 1000, 12),
      ]);
    });

    const [error] = exportExcell(rowsData, 'riwayat_pengecekan.xlsx');

    if (error) return alert('Export data gagal');
    alert('Export data berhasil');
  };

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
        index={index}
        idForklift={row.id_forklift}
        namaDriver={row.nama_driver}
        shiftDriver={row.shift_driver}
        status={row.status}
        timestamp={row.timestamp}
        onClick={handleRowClick}
      />
    ));
  };

  useEffect(() => {
    setInitDrawer(true);
  }, []);

  return (
    <>
      <div className="w-full px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
          <CardHeader
            title="Riwayat Pengecekan"
            actionButton={
              !hideActionButton && (
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-semibold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleExport}
                >
                  Export
                </button>
              )
            }
          />

          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <TableHead />

              <tbody>{createRows()}</tbody>
            </table>
          </div>
        </div>
      </div>

      {initDrawer && (
        <Drawer
          open={drawerState}
          onClose={toggleDrawer}
          direction="right"
          lockBackgroundScroll
        >
          <DrawerContent drawerData={drawerData} />
        </Drawer>
      )}
    </>
  );
};

export default CardRiwayat;
