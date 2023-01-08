import { useState, useEffect } from 'react';

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
    <thead className="thead-light">
      <tr>
        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Komponen
        </th>
        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
          Total
        </th>
        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ label, total, percentage }) => {
  const [value, setValue] = useState(0);

  const randomPercentage = (value / 27) * 100;

  useEffect(() => {
    if (!total && !percentage) {
      const randomInt = (() => {
        const min = 0;
        const max = 27;

        return Math.floor(Math.random() * (max - min + 1)) + min;
      })();

      setValue(randomInt);
    } else {
      setValue(total);
    }
  }, [total, percentage]);

  return (
    <tr>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
        {label}
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        {value}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="flex items-center">
          <span className="mr-2">
            {Number(percentage || randomPercentage).toPrecision(3)}%
          </span>
          <div className="relative w-full">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-orange-200">
              <div
                style={{
                  width: percentage ? `${percentage}%` : `${randomPercentage}%`,
                }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
              ></div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

const CardKomponen = () => {
  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <CardHeader
          title="Statistik Pengecekan"
          actionButton={
            <button
              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-semibold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Riwayat
            </button>
          }
        />

        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <TableHead />

            <tbody>
              <TableRow
                label="Ban"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Garpu"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Garpu"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Seat Belt"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Lampu Depan dan Belakang"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Rem Tangan dan Kaki"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Lampu Sein"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Klakson"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Alarm Mundur"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Lampu Sirine"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Tempat Duduk"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Kaca Spion"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="APAR"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Oli"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
              <TableRow
                label="Kebersihan"
                total={null}
                percentage={null}
                barColor="bg-red-500"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardKomponen;
