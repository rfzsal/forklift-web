import { useState } from 'react';

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

const FilterRiwayat = ({ onFilter, onResetFilter }) => {
  const [values, setValues] = useState({
    from: '',
    to: '',
    status: 'Semua Status',
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleFilter = () => {
    if (!values.from || !values.to || !values.status) return;

    onFilter(values);
  };

  const handleResetFilter = () => {
    setValues({ from: '', to: '', status: 'Semua Status' });

    onResetFilter();
  };

  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
        <CardHeader title="Filter Riwayat Pengecekan" actionButton={null} />

        <div className="block w-full overflow-x-auto px-4 py-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  Tanggal Dari
                </label>
                <input
                  onChange={handleChange('from')}
                  value={values.from}
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
                  onChange={handleChange('to')}
                  value={values.to}
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
                <select
                  onChange={handleChange('status')}
                  value={values.status}
                  className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
                >
                  <option value="Semua Status">Semua Status</option>
                  <option value="Baik">Baik</option>
                  <option value="Kurang Baik">Kurang Baik</option>
                </select>
              </div>
            </div>

            <div className="w-full text-left px-4 py-2">
              <button
                onClick={handleFilter}
                className="inline-block w-full lg:w-auto bg-indigo-500 text-white active:bg-indigo-600 font-semibold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Filter Riwayat Pengecekan
              </button>

              {values.from && values.to && values.status && (
                <button
                  onClick={handleResetFilter}
                  className="inline-block w-full lg:w-auto font-semibold uppercase px-3 py-1 rounded outline-none focus:outline-none"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterRiwayat;
