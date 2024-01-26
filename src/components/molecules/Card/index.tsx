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
      className="w-44 h-24 bg-black rounded-xl flex justify-center items-center px-2 hover:cursor-pointer"
    >
      <h1 className="font-bold text-white text-sm text-center">{title}</h1>
    </Link>
  );
}
