import homeActiveIcon from '../assets/icon/unionIcon.svg';
import homeInactiveIcon from '../assets/icon/unionIcon.svg';
import claimActiveIcon from '../assets/icon/unionIcon.svg';
import claimInactiveIcon from '../assets/icon/unionIcon.svg';
import garageActiveIcon from '../assets/icon/unionIcon.svg';
import garageInactiveIcon from '../assets/icon/unionIcon.svg';
import supportActiveIcon from '../assets/icon/unionIcon.svg';
import supportInactiveIcon from '../assets/icon/unionIcon.svg';

export interface NavItem {
  label: string;       // ชื่อที่แสดงทั้งใน BottomNav และ HeaderNav
  headerTitle?: string; // เผื่อหน้าไหนชื่อบน Header ต่างจากเมนูด้านล่าง (เช่น อู่ / รพ. -> ค้นหาอู่ / รพ.)
  path: string;
  activeIcon: string;
  inactiveIcon: string;
}

export const navItems: NavItem[] = [
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
    headerTitle: 'ค้นหาอู่ / รพ.',
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