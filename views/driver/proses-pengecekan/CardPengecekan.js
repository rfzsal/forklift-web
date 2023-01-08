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

const StatusCheck = ({
  title,
  detailPlaceholder,
  status,
  onChangeStatus,
  details,
  onChangeDetails,
  mt = 0,
}) => {
  const handleStatusChange = (e) => {
    onChangeStatus(e.target.value);
  };

  const handleDetailChange = (e) => {
    onChangeDetails(e.target.value);
  };

  return (
    <div className={`flex flex-wrap mt-${mt}`}>
      <div className="w-full lg:w-3/12 px-4">
        <div className="relative w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            {title}
          </label>
          <select
            onChange={handleStatusChange}
            value={status}
            className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
          >
            <option value="baik">Baik</option>
            <option value="kurang baik">Kurang Baik</option>
          </select>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="relative w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            Keterangan {title}
          </label>
          <input
            onChange={handleDetailChange}
            value={details}
            disabled={status === 'baik'}
            type="text"
            placeholder={status !== 'baik' ? detailPlaceholder : ''}
            className="border border-blueGray-300 disabled:border-blueGray-200 disabled:bg-blueGray-100 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>
    </div>
  );
};

const CardPengecekan = () => {
  const [values, setValues] = useState({
    namaDriver: '',
    shiftDriver: 'pagi',
    idForklift: '',
    ban: 'baik',
    keteranganBan: '',
    fork: 'baik',
    keteranganFork: '',
    seatBelt: 'baik',
    keteranganSeatBelt: '',
    lampuDepanBelakang: 'baik',
    keteranganLampuDepanBelakang: '',
    remTanganKaki: 'baik',
    keteranganRemTanganKaki: '',
    lampuSein: 'baik',
    keteranganLampuSein: '',
    klakson: 'baik',
    keteranganKlakson: '',
    alarmMundur: 'baik',
    keteranganAlarmMundur: '',
    lampuSirine: 'baik',
    keteranganLampuSirine: '',
    tempatDuduk: 'baik',
    keteranganTempatDuduk: '',
    kacaSpion: 'baik',
    keteranganKacaSpion: '',
    apar: 'baik',
    keteranganApar: '',
    oli: 'baik',
    keteranganOli: '',
    kebersihan: 'baik',
    keteranganKebersihan: '',
  });

  const handleChange = (props) => (newValue) => {
    setValues({ ...values, [props]: newValue });
  };

  const handleSubmit = () => {
    if (!values.namaDriver || !values.shiftDriver || !values.idForklift) return;

    console.log(values);
  };

  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
        <CardHeader
          title="Proses Pengecekan"
          actionButton={
            <button
              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-semibold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Riwayat
            </button>
          }
        />

        <div className="block w-full overflow-x-auto px-4 py-4">
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
                <select className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200">
                  <option>Pagi</option>
                  <option>Siang</option>
                  <option>Sore</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto px-4 py-4">
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
                  type="text"
                  placeholder="A1"
                  className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto px-4 py-4">
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase px-4">
            Status Forklift
          </h6>

          <StatusCheck
            title="Ban"
            detailPlaceholder="Ban kempes"
            status={values.ban}
            onChangeStatus={handleChange('ban')}
            details={values.keteranganBan}
            onChangeDetails={handleChange('keteranganBan')}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Fork"
            detailPlaceholder="Fork bengkok"
            status={values.fork}
            onChangeStatus={handleChange('fork')}
            details={values.keteranganFork}
            onChangeDetails={handleChange('keteranganFork')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Seat Belt"
            detailPlaceholder="Seat belt putus"
            status={values.seatBelt}
            onChangeStatus={handleChange('seatBelt')}
            details={values.keteranganSeatBelt}
            onChangeDetails={handleChange('keteranganSeatBelt')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Lampu Depan dan Belakang"
            detailPlaceholder="Lampu belakang mati"
            status={values.lampuDepanBelakang}
            onChangeStatus={handleChange('lampuDepanBelakang')}
            details={values.keteranganLampuDepanBelakang}
            onChangeDetails={handleChange('keteranganLampuDepanBelakang')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Rem Tangan dan Kaki"
            detailPlaceholder="Rem tangan macet"
            status={values.remTanganKaki}
            onChangeStatus={handleChange('remTanganKaki')}
            details={values.keteranganRemTanganKaki}
            onChangeDetails={handleChange('keteranganRemTanganKaki')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Lampu Sein"
            detailPlaceholder="Lampu sein kanan mati"
            status={values.lampuSein}
            onChangeStatus={handleChange('lampuSein')}
            details={values.keteranganLampuSein}
            onChangeDetails={handleChange('keteranganLampuSein')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Klakson"
            detailPlaceholder="Klakson mati"
            status={values.klakson}
            onChangeStatus={handleChange('klakson')}
            details={values.keteranganKlakson}
            onChangeDetails={handleChange('keteranganKlakson')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Alarm Mundur"
            detailPlaceholder="Alarm mundur mati"
            status={values.alarmMundur}
            onChangeStatus={handleChange('alarmMundur')}
            details={values.keteranganAlarmMundur}
            onChangeDetails={handleChange('keteranganAlarmMundur')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Lampu Sirine"
            detailPlaceholder="Lampu sirine mati"
            status={values.lampuSirine}
            onChangeStatus={handleChange('lampuSirine')}
            details={values.keteranganLampuSirine}
            onChangeDetails={handleChange('keteranganLampuSirine')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Tempat Duduk"
            detailPlaceholder="Tempat duduk sobek"
            status={values.tempatDuduk}
            onChangeStatus={handleChange('tempatDuduk')}
            details={values.keteranganTempatDuduk}
            onChangeDetails={handleChange('keteranganTempatDuduk')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Kaca Spion"
            detailPlaceholder="Kaca spion pecah"
            status={values.kacaSpion}
            onChangeStatus={handleChange('kacaSpion')}
            details={values.keteranganKacaSpion}
            onChangeDetails={handleChange('keteranganKacaSpion')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="APAR"
            detailPlaceholder="APAR hasbis"
            status={values.apar}
            onChangeStatus={handleChange('apar')}
            details={values.keteranganApar}
            onChangeDetails={handleChange('keteranganApar')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Oli"
            detailPlaceholder="Oli bocor"
            status={values.oli}
            onChangeStatus={handleChange('oli')}
            details={values.keteranganOli}
            onChangeDetails={handleChange('keteranganOli')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            title="Kebersihan"
            detailPlaceholder="Forklift kotor"
            status={values.kebersihan}
            onChangeStatus={handleChange('kebersihan')}
            details={values.keteranganKebersihan}
            onChangeDetails={handleChange('keteranganKebersihan')}
            mt={2}
          />
        </div>

        <div className="w-full text-left px-4 py-4">
          <button
            onClick={handleSubmit}
            className="inline-block w-full lg:w-auto bg-indigo-500 text-white active:bg-indigo-600 font-semibold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Kirim Status Pengecekan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPengecekan;
