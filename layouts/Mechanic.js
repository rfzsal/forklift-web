import { useRouter } from 'next/router';

import DashboardNavbar from 'components/Navbars/DashboardNavbar';
import Sidebar from 'components/Sidebar/Sidebar.js';
import DashboardHeader from 'components/Headers/DashboardHeader';

import { ProvidePengecekan } from 'hooks/usePengecekan';
import { ProvidePerbaikan, usePerbaikan } from 'hooks/usePerbaikan';

const withRiwayat = (Children) => {
  return (props) => {
    return (
      <ProvidePengecekan>
        <ProvidePerbaikan>
          <Children {...props} />
        </ProvidePerbaikan>
      </ProvidePengecekan>
    );
  };
};

const Mechanic = ({ children }) => {
  const router = useRouter();
  const perbaikan = usePerbaikan();

  const filterRiwayat = () => {
    if (!perbaikan.riwayat) return { belumDiperbaiki: [] };

    const belumDiperbaiki = perbaikan.riwayat.filter(
      (row) => row.status === 'Belum Diperbaiki'
    );

    return { belumDiperbaiki };
  };

  const fullRoutes = router.pathname.split('/');
  fullRoutes.shift();

  const routesHistory = fullRoutes.map((route, index) => {
    const path = fullRoutes.slice(0, index + 1);

    return {
      label: route,
      path: path.join('/'),
    };
  });

  const sidebarRoutes = [
    { divider: true },
    { header: 'Dashboard Mechanic' },
    { label: 'Beranda', icon: 'fas fa-home', path: '/mechanic/beranda' },
    { divider: true },
    { header: 'Pengecekan Forklift' },
    {
      label: 'Riwayat Pengecekan',
      icon: 'fas fa-file-signature',
      path: '/mechanic/riwayat-pengecekan',
    },
    { divider: true },
    { header: 'Perbaikan Forklift' },
    {
      label: 'Proses Perbaikan',
      icon: 'fas fa-wrench',
      path: '/mechanic/proses-perbaikan',
    },
    {
      label: 'Riwayat Perbaikan',
      icon: 'fas fa-cogs',
      path: '/mechanic/riwayat-perbaikan',
    },
    { divider: true },
    { header: 'Akun' },
    {
      label: 'Keluar',
      icon: 'fas fa-sign-out-alt',
      path: '/auth/keluar',
    },
  ];

  return (
    <>
      <Sidebar routes={sidebarRoutes} role="driver" />
      <div className="relative md:ml-64 bg-blueGray-100 min-h-screen">
        <DashboardNavbar
          routes={routesHistory}
          role="driver"
          notification={filterRiwayat().belumDiperbaiki}
        />

        <DashboardHeader />
        <div className="px-4 md:px-10 mx-auto w-full -mt-32">{children}</div>
      </div>
    </>
  );
};

export default withRiwayat(Mechanic);
