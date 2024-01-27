'use client';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface ItemsType {
  title: string;
  path: string;
  value: string;
}

const NavItems: Array<ItemsType> = [
  { title: 'Home', path: '/', value: '' },
  { title: 'Foods', path: '/foods', value: 'foods' },
  { title: 'Ingredients', path: '/ingredients', value: 'ingredients' },
  { title: 'Local Culinary', path: '/local-culinary', value: 'local-culinary' },
];

export default function Navbar() {
  const pathNow = usePathname().split('/')[1];

  return (
    <header className="fixed w-full bg-white drop-shadow-sm px-8 py-4 z-50">
      <nav className="flex flex-row justify-between items-center">
        <Link href={'/'} className="font-bold text-slate-900">
          mealapp
        </Link>

        <ul className="flex space-x-6 text-slate-500 text-sm">
          {NavItems.map((item) => (
            <li key={item.title}>
              <Link
                className={`${
                  pathNow === item.value ? 'font-semibold text-slate-900' : ''
                } hover:text-slate-900 transition-all`}
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
