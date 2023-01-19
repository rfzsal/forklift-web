import { useState } from 'react';

const FormModal = ({ label, onSubmit, loading }) => {
  const [showModal, setShowModal] = useState(false);

  const [values, setValues] = useState({
    name: '',
    shift: 'Pagi',
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleSubmit = () => {
    if (loading) return;
    onSubmit(values);
  };

  return (
    <>
      <button
        disabled={loading}
        onClick={() => setShowModal(true)}
        className="border text-xs font-semibold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        {label}
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-0 bottom-0 left-0 right-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  <div className="w-full mt-2">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 text-left">
                        Nama
                      </label>
                      <input
                        disabled={loading}
                        type="text"
                        onChange={handleChange('name')}
                        value={values.name}
                        placeholder="Irfan Hidayat"
                        className="border disabled:border-blueGray-200 disabled:bg-blueGray-100 border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 text-left">
                        Shift
                      </label>
                      <select
                        disabled={loading}
                        onChange={handleChange('shift')}
                        value={values.shift}
                        className="border disabled:border-blueGray-200 disabled:bg-blueGray-100 border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
                      >
                        <option value="Pagi">Pagi</option>
                        <option value="Siang">Siang</option>
                        <option value="Malam">Malam</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                  <button
                    disabled={loading}
                    className="text-blueGray-500 background-transparent font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Batal
                  </button>
                  <button
                    disabled={loading}
                    className="bg-indigo-500 text-white active:bg-indigo-600 font-semibold uppercase text-sm px-6 py-2 rounded outline-none focus:outline-none ml-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <span>
                        <i className="fas fa-circle-notch animate-spin mx-auto text-sm mr-1"></i>{' '}
                        <span>Menyimpan</span>
                      </span>
                    ) : (
                      'Simpan'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed top-0 bottom-0 left-0 right-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default FormModal;
