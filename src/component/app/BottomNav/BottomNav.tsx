import React from 'react';
import { NavLink } from 'react-router-dom';

// Import ไฟล์ SVG (สมมติว่าเก็บไว้ใน src/assets/icons/)
import homeActiveIcon from '../../../assets/icon/unionIcon.svg';
import homeInactiveIcon from '../../../assets/icon/unionIcon.svg';
import claimActiveIcon from '../../../assets/icon/unionIcon.svg';
import claimInactiveIcon from '../../../assets/icon/unionIcon.svg';
import garageActiveIcon from '../../../assets/icon/unionIcon.svg';
import garageInactiveIcon from '../../../assets/icon/unionIcon.svg';
import supportActiveIcon from '../../../assets/icon/unionIcon.svg';
import supportInactiveIcon from '../../../assets/icon/unionIcon.svg';


interface NavItem {
  label: string;
  path: string;
  activeIcon: string;
  inactiveIcon: string;
}

const navItems: NavItem[] = [
  {
    label: 'หน้าหลัก',
    path: '/',
    activeIcon: homeActiveIcon,
    inactiveIcon: homeInactiveIcon,
  },
  {
    label: 'ติดตามเคลม',
    path: '/claims',
    activeIcon: claimActiveIcon,
    inactiveIcon: claimInactiveIcon,
  },
  {
    label: 'อู่ / รพ.',
    path: '/locations',
    activeIcon: garageActiveIcon,
    inactiveIcon: garageInactiveIcon,
  },
  {
    label: 'ช่วยเหลือ',
    path: '/support',
    activeIcon: supportActiveIcon,
    inactiveIcon: supportInactiveIcon,
  },
];

export const BottomNav: React.FC = () => {
  return (
    <nav className="sticky bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 rounded-b-[28px] shadow-[0_-4px_20px_rgba(0,0,0,0.04)] px-4 pt-3 pb-4">
      <ul className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <li key={item.path} className="flex-1">
            <NavLink
              to={item.path}
              className="flex flex-col items-center justify-center gap-1.5 group"
            >
              {({ isActive }) => (
                <>
                  {/* กล่องครอบไอคอน (มีพื้นหลังสีเหลืองเมื่อ Active) */}
                  <div
                    className={`w-14 h-10 rounded-2xl flex items-center justify-center transition-colors duration-200 ${
                      isActive
                        ? 'bg-[#FFD000]' // สีเหลืองตามภาพ
                        : 'bg-transparent group-hover:bg-gray-50'
                    }`}
                  >
                    <img
                      src={isActive ? item.activeIcon : item.inactiveIcon}
                      alt={item.label}
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  {/* ข้อความใต้ไอคอน */}
                  <span
                    className={`text-xs transition-colors duration-200 ${
                      isActive
                        ? 'text-[#1B3664] font-bold' // สีน้ำเงินเข้มตัวหนาเมื่อ Active
                        : 'text-[#9CA3AF] font-medium' // สีเทาเมื่อ Inactive
                    }`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};