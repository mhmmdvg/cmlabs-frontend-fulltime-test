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
      className="w-32 h-40 sm:w-40 sm:h-52 lg:w-44 lg:h-56 xl:w-52 xl:h-64 flex rounded-xl hover:cursor-pointer bg-cover bg-blend-darken"
      style={{
        backgroundImage: `url('${thumbnail}')`,
      }}
    >
      <div className="w-full h-full rounded-xl text-white bg-black/50 flex justify-center items-center hover:bg-black/0  transition-all">
        <h1 className="font-bold text-sm text-center">{title}</h1>
      </div>
    </Link>
  );
}
