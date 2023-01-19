import { useEffect } from 'react';
import { useRouter } from 'next/router';

import DashboardNavbar from 'components/Navbars/DashboardNavbar';
import Sidebar from 'components/Sidebar/Sidebar.js';
import DashboardHeader from 'components/Headers/DashboardHeader';
import { useAuth } from 'hooks/useAuth';
import { ProvidePengecekan } from 'hooks/usePengecekan';
import { ProvidePerbaikan } from 'hooks/usePerbaikan';

const Mechanic = ({ children }) => {
  const { user, refresh } = useAuth();
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

  useEffect(() => {
    if (!user) {
      refresh();
      return null;
    }
  }, [user, refresh]);

  return (
    <ProvidePengecekan>
      <ProvidePerbaikan>
        <Sidebar routes={sidebarRoutes} role="driver" />
        <div className="relative md:ml-64 bg-blueGray-100 min-h-screen">
          <DashboardNavbar routes={routesHistory} role="driver" />

          <DashboardHeader />
          <div className="px-4 md:px-10 mx-auto w-full -mt-32">{children}</div>
        </div>
      </ProvidePerbaikan>
    </ProvidePengecekan>
  );
};

export default Mechanic;
