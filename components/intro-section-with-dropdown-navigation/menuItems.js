import {
  ClipboardListIcon,
  CalendarIcon,
  BellIcon,
  ClockIcon,
  ChevronDownIcon,
} from '@heroicons/react/solid';
export const menuItems = [
  {
    label: 'Features',
    url: '/',
    icon: <ChevronDownIcon />,
    menu: [
      {
        label: 'Todo List',
        url: '/',
        icon: <ClipboardListIcon />,
        color: 'text-purple-700',
      },
      {
        label: 'Calendar',
        url: '/',
        icon: <CalendarIcon />,
        color: 'text-cyan-600',
      },
      {
        label: 'Reminders',
        url: '/',
        icon: <BellIcon />,
        color: 'text-yellow-500',
      },
      {
        label: 'Planning',
        url: '/',
        icon: <ClockIcon />,
        color: 'text-purple-400',
      },
    ],
  },
  {
    label: 'Company',
    url: '/',
    icon: <ChevronDownIcon />,
    menu: [
      {
        label: 'History',
        url: '/',
        icon: '',
      },
      {
        label: 'Our Team',
        url: '/',
        icon: '',
      },
      {
        label: 'Blog',
        url: '/',
        icon: '',
      },
    ],
  },
  {
    label: 'Careers',
    url: '/',
  },
  {
    label: 'About',
    url: '/',
  },
];
