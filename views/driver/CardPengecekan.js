import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import coreAPI from 'utils/coreAPI';

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
  onChangeStatus,
  onChangeDetails,
  disabled,
  reset,
  mt = 0,
}) => {
  const [statusData, setStatusData] = useState('Baik');
  const [detailsData, setDetailsData] = useState('');

  const handleStatusChange = (e) => {
    setStatusData(e.target.value);

    if (e.target.value === 'Baik') {
      setDetailsData('');
      onChangeDetails('');
    }

    onChangeStatus(e.target.value);
  };

  const handleDetailChange = (e) => {
    if (statusData === 'Baik') return;

    setDetailsData(e.target.value);
    onChangeDetails(e.target.value);
  };

  useEffect(() => {
    if (!reset) return;

    setStatusData('Baik');
    setDetailsData('');

    onChangeStatus('Baik');
    onChangeDetails('');
  }, [reset, onChangeStatus, onChangeDetails]);

  return (
    <div className={`flex flex-wrap mt-${mt}`}>
      <div className="w-full lg:w-3/12 px-4">
        <div className="relative w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            {title}
          </label>
          <select
            disabled={disabled}
            onChange={handleStatusChange}
            value={statusData}
            className="border disabled:border-blueGray-200 disabled:bg-blueGray-100 border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
          >
            <option value="Baik">Baik</option>
            <option value="Kurang Baik">Kurang Baik</option>
          </select>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="relative w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            Keterangan {title}
          </label>
          <input
            disabled={disabled || statusData === 'Baik'}
            onChange={handleDetailChange}
            value={detailsData}
            type="text"
            placeholder={statusData !== 'Baik' ? detailPlaceholder : ''}
            className="border border-blueGray-300 disabled:border-blueGray-200 disabled:bg-blueGray-100 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>
    </div>
  );
};

const CardPengecekan = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    namaDriver: '',
    shiftDriver: 'Pagi',
    idForklift: '',
    ban: 'Baik',
    keteranganBan: '',
    fork: 'Baik',
    keteranganFork: '',
    seatBelt: 'Baik',
    keteranganSeatBelt: '',
    lampuDepanBelakang: 'Baik',
    keteranganLampuDepanBelakang: '',
    remTanganKaki: 'Baik',
    keteranganRemTanganKaki: '',
    lampuSein: 'Baik',
    keteranganLampuSein: '',
    klakson: 'Baik',
    keteranganKlakson: '',
    alarmMundur: 'Baik',
    keteranganAlarmMundur: '',
    lampuSirine: 'Baik',
    keteranganLampuSirine: '',
    tempatDuduk: 'Baik',
    keteranganTempatDuduk: '',
    kacaSpion: 'Baik',
    keteranganKacaSpion: '',
    apar: 'Baik',
    keteranganApar: '',
    oli: 'Baik',
    keteranganOli: '',
    kebersihan: 'Baik',
    keteranganKebersihan: '',
  });

  const [loading, setLoading] = useState(false);
  const [resetStatus, setResetStatus] = useState(false);

  const handleChange = (props) => (e) => {
    setValues({ ...values, [props]: e.target.value });
  };

  const handleStatusChange = (props) => (newValue) => {
    setValues({ ...values, [props]: newValue });
  };

  const handleSubmit = async () => {
    if (loading) return;
    if (!values.namaDriver || !values.shiftDriver || !values.idForklift) return;

    setLoading(true);
    const api = new coreAPI();
    const [error] = await api.addRiwayatPengecekan(values);
    setLoading(false);

    if (error) return alert('Pengecekan gagal');
    alert('Pengecekan berhasil');

    setResetStatus(true);
    setResetStatus(false);
    setValues({
      namaDriver: '',
      shiftDriver: 'Pagi',
      idForklift: '',
      ban: 'Baik',
      keteranganBan: '',
      fork: 'Baik',
      keteranganFork: '',
      seatBelt: 'Baik',
      keteranganSeatBelt: '',
      lampuDepanBelakang: 'Baik',
      keteranganLampuDepanBelakang: '',
      remTanganKaki: 'Baik',
      keteranganRemTanganKaki: '',
      lampuSein: 'Baik',
      keteranganLampuSein: '',
      klakson: 'Baik',
      keteranganKlakson: '',
      alarmMundur: 'Baik',
      keteranganAlarmMundur: '',
      lampuSirine: 'Baik',
      keteranganLampuSirine: '',
      tempatDuduk: 'Baik',
      keteranganTempatDuduk: '',
      kacaSpion: 'Baik',
      keteranganKacaSpion: '',
      apar: 'Baik',
      keteranganApar: '',
      oli: 'Baik',
      keteranganOli: '',
      kebersihan: 'Baik',
      keteranganKebersihan: '',
    });
  };

  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
        <CardHeader
          title="Proses Pengecekan"
          actionButton={
            <button
              onClick={() => router.push('/driver/riwayat-pengecekan')}
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
                  disabled={loading}
                  onChange={handleChange('namaDriver')}
                  value={values.namaDriver}
                  type="text"
                  placeholder="Irfan Hidayat"
                  className="border disabled:border-blueGray-200 disabled:bg-blueGray-100 border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  Shift
                </label>
                <select
                  disabled={loading}
                  onChange={handleChange('shiftDriver')}
                  value={values.shiftDriver}
                  className="border disabled:border-blueGray-200 disabled:bg-blueGray-100 border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
                >
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Malam">Malam</option>
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
                  disabled={loading}
                  onChange={handleChange('idForklift')}
                  value={values.idForklift}
                  type="text"
                  placeholder="A1"
                  className="border disabled:border-blueGray-200 disabled:bg-blueGray-100 border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
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
            reset={resetStatus}
            disabled={loading}
            title="Ban"
            detailPlaceholder="Ban kempes"
            onChangeStatus={handleStatusChange('ban')}
            onChangeDetails={handleStatusChange('keteranganBan')}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Fork"
            detailPlaceholder="Fork bengkok"
            onChangeStatus={handleStatusChange('fork')}
            onChangeDetails={handleStatusChange('keteranganFork')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Seat Belt"
            detailPlaceholder="Seat belt putus"
            onChangeStatus={handleStatusChange('seatBelt')}
            onChangeDetails={handleStatusChange('keteranganSeatBelt')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Lampu Depan dan Belakang"
            detailPlaceholder="Lampu belakang mati"
            onChangeStatus={handleStatusChange('lampuDepanBelakang')}
            onChangeDetails={handleStatusChange('keteranganLampuDepanBelakang')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Rem Tangan dan Kaki"
            detailPlaceholder="Rem tangan macet"
            onChangeStatus={handleStatusChange('remTanganKaki')}
            onChangeDetails={handleStatusChange('keteranganRemTanganKaki')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Lampu Sein"
            detailPlaceholder="Lampu sein kanan mati"
            onChangeStatus={handleStatusChange('lampuSein')}
            onChangeDetails={handleStatusChange('keteranganLampuSein')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Klakson"
            detailPlaceholder="Klakson mati"
            onChangeStatus={handleStatusChange('klakson')}
            onChangeDetails={handleStatusChange('keteranganKlakson')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Alarm Mundur"
            detailPlaceholder="Alarm mundur mati"
            onChangeStatus={handleStatusChange('alarmMundur')}
            onChangeDetails={handleStatusChange('keteranganAlarmMundur')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Lampu Sirine"
            detailPlaceholder="Lampu sirine mati"
            onChangeStatus={handleStatusChange('lampuSirine')}
            onChangeDetails={handleStatusChange('keteranganLampuSirine')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Tempat Duduk"
            detailPlaceholder="Tempat duduk sobek"
            onChangeStatus={handleStatusChange('tempatDuduk')}
            onChangeDetails={handleStatusChange('keteranganTempatDuduk')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Kaca Spion"
            detailPlaceholder="Kaca spion pecah"
            onChangeStatus={handleStatusChange('kacaSpion')}
            onChangeDetails={handleStatusChange('keteranganKacaSpion')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="APAR"
            detailPlaceholder="APAR hasbis"
            onChangeStatus={handleStatusChange('apar')}
            onChangeDetails={handleStatusChange('keteranganApar')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Oli"
            detailPlaceholder="Oli bocor"
            onChangeStatus={handleStatusChange('oli')}
            onChangeDetails={handleStatusChange('keteranganOli')}
            mt={2}
          />

          <hr className="block lg:hidden mt-4 mb-6" />

          <StatusCheck
            reset={resetStatus}
            disabled={loading}
            title="Kebersihan"
            detailPlaceholder="Forklift kotor"
            onChangeStatus={handleStatusChange('kebersihan')}
            onChangeDetails={handleStatusChange('keteranganKebersihan')}
            mt={2}
          />
        </div>

        <div className="w-full text-left px-4 py-4">
          <button
            onClick={handleSubmit}
            className="inline-block w-full lg:w-auto bg-indigo-500 text-white active:bg-indigo-600 font-semibold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            {loading ? (
              <span>
                <i className="fas fa-circle-notch animate-spin mx-auto text-sm mr-1"></i>{' '}
                <span>Mengirim...</span>
              </span>
            ) : (
              'Kirim Status Pengecekan'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPengecekan;
