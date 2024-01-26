import { Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type IProps = {
  title: string;
  mealTitle?: string;
};

export default function Meta({ title, mealTitle }: IProps) {
  return (
    <div className="flex flex-row space-x-3 text-xs items-center">
      <Link href={'..'} className="flex flex-row space-x-2 items-center">
        <Home className="h-3 w-3" />
        <p>Home</p>
      </Link>
      <p>{'>'}</p>
      {mealTitle ? (
        <Link href={'.'}>
          <p>{title}</p>
        </Link>
      ) : (
        <p className="text-gray-500">{title}</p>
      )}

      {mealTitle && (
        <>
          <p>{'>'}</p> <p className="text-gray-500">{mealTitle}</p>{' '}
        </>
      )}
    </div>
  );
}
