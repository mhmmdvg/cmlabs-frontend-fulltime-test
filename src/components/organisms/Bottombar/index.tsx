'use client';
import { ChefHat, Home, MapPinned, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface ItemsType {
  icon: ReactNode;
  title: string;
  path: string;
  value: string;
}

const NavItems: Array<ItemsType> = [
  { icon: <Home className="w-5 h-5" />, title: 'Home', path: '/', value: '' },
  {
    icon: <UtensilsCrossed className="w-5 h-5" />,
    title: 'Foods',
    path: '/foods',
    value: 'foods',
  },
  {
    icon: <ChefHat className="w-5 h-5" />,
    title: 'Ingredients',
    path: '/ingredients',
    value: 'ingredients',
  },
  {
    icon: <MapPinned className="w-5 h-5" />,
    title: 'Local Culinary',
    path: '/local-culinary',
    value: 'local-culinary',
  },
];

export default function BottomBar() {
  const pathNow = usePathname().split('/')[1];
  return (
    <nav className="fixed w-full border-t h-12 bottom-0 bg-white px-8 z-50 block md:hidden">
      <ul className="w-full flex flex-row justify-between items-center space-x-6 text-slate-500 text-sm px-2 pt-2">
        {NavItems.map((item) => (
          <li key={item.title}>
            <Link
              className={`${
                pathNow === item.value ? 'font-semibold text-slate-900' : ''
              } hover:text-slate-900 transition-all`}
              href={item.path}
            >
              <div className="flex flex-col justify-center items-center">
                {item.icon}
                <p className="text-[0.55rem]">{item.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
