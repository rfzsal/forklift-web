import Link from 'next/link';

import UserDropdown from 'components/Dropdowns/UserDropdown.js';
import NotificationDropdown from 'components/Dropdowns/NotificationDropdown.js';

const DashboardNavbar = ({ routes, role, notification }) => {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <span className="text-white text-sm uppercase hidden lg:inline-block font-semibold">
            {routes.map((route, index) => {
              if (routes.length === index + 1) {
                return <span key={route.label + index}>{route.label}</span>;
              }

              return (
                <span key={route.label + index}>
                  <span className="text-blueGray-400">
                    <Link href={`/${route.path}`}>{route.label}</Link>
                  </span>
                  <span> / </span>
                </span>
              );
            })}
          </span>

          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <li className="mr-4">
              <NotificationDropdown notification={notification} />
            </li>
            <li>
              <UserDropdown avatarSeed={role} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavbar;
