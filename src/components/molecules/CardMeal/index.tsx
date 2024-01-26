import Link from 'next/link';
import React from 'react';

type IProps = {
  ingredientName: string;
  id: string;
  title: string;
  thumbnail: string;
};

export default function CardMeal({
  ingredientName,
  id,
  title,
  thumbnail,
}: IProps) {
  return (
    <Link
      href={{
        pathname: `/${ingredientName}/${id}`,
        query: {
          name: title,
        },
      }}
      className="w-52 h-64 flex rounded-xl hover:cursor-pointer bg-cover bg-blend-darken"
      style={{
        backgroundImage: `url('${thumbnail}')`,
      }}
    >
      <div className="w-full h-full rounded-xl bg-black/40 flex justify-center items-center">
        <h1 className="font-bold text-white text-sm text-center">{title}</h1>
      </div>
    </Link>
  );
}
