import React from 'react';
import Link from 'next/link';
import { createPopper } from '@popperjs/core';

const NotificationDropdown = ({ notification }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const setNotificationColor = () => {
    if (!notification) return 'text-blueGray-500';
    if (notification.length === 0) return 'text-blueGray-500';

    return 'text-red-500';
  };

  const createNotification = () => {
    if (!notification) return null;
    if (notification.length === 0) return <p>Tidak ada notifikasi</p>;

    return notification.map((row, index) => {
      return (
        <Link href="/mechanic/proses-perbaikan">
          <a
            onClick={closeDropdownPopover}
            key={row.id + index}
            href="/mechanic/proses-perbaikan"
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
            }
          >
            {`Forklift ID ${row.id_forklift} belum diperbaiki`}
          </a>
        </Link>
      );
    });
  };

  return (
    <>
      <a
        className={`${setNotificationColor()} block py-1 px-3`}
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-bell"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        {createNotification()}
      </div>
    </>
  );
};

export default NotificationDropdown;
