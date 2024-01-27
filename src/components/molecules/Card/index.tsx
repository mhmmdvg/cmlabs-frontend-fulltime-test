import Link from 'next/link';
import React from 'react';

type IProps = {
  title: string;
  image?: string;
};

export default function Card({ title }: IProps) {
  return (
    <Link
      href={`/${title}`}
      className="w-24 h-12 sm:w-32 sm:h-16 md:w-44 md:h-24 bg-black rounded-lg md:rounded-xl flex justify-center items-center px-2 hover:cursor-pointer"
    >
      <h1 className="font-bold text-white text-xs md:text-sm text-center">
        {title}
      </h1>
    </Link>
  );
}
