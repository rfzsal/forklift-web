import { useRouter } from 'next/router';

import DashboardNavbar from 'components/Navbars/DashboardNavbar';
import Sidebar from 'components/Sidebar/Sidebar.js';
import DashboardHeader from 'components/Headers/DashboardHeader';

const Driver = ({ children }) => {
  const router = useRouter();

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
    { header: 'Dashboard Driver' },
    { label: 'Beranda', icon: 'fas fa-home', path: '/driver/beranda' },
    { divider: true },
    { header: 'Pengecekan Forklift' },
    {
      label: 'Proses Pengecekan',
      icon: 'fas fa-search',
      path: '/driver/proses-pengecekan',
    },
    {
      label: 'Riwayat Pengecekan',
      icon: 'fas fa-file-signature',
      path: '/driver/riwayat-pengecekan',
    },
    { divider: true },
    { header: 'Perbaikan Forklift' },
    {
      label: 'Riwayat Perbaikan',
      icon: 'fas fa-cogs',
      path: '/driver/riwayat-perbaikan',
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
      <Sidebar routes={sidebarRoutes} />
      <div className="relative md:ml-64 bg-blueGray-100 min-h-screen">
        <DashboardNavbar routes={routesHistory} />

        <DashboardHeader />
        <div className="px-4 md:px-10 mx-auto w-full -mt-32">{children}</div>
      </div>
    </>
  );
};

export default Driver;
