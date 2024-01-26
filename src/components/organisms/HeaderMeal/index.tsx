import Meta from '@/components/molecules/Meta';
import Search from '@/components/molecules/Search';
import React, { ChangeEvent } from 'react';

type IProps = {
  title: string;
  mealTitle?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function HeaderMeal({ title, mealTitle, onChange }: IProps) {
  return (
    <div className="flex flex-col h-full w-full justify-center space-y-8 pb-10">
      <Meta title={title} mealTitle={mealTitle} />
      {mealTitle ? (
        <h1 className="text-4xl text-stone-900">{mealTitle}</h1>
      ) : (
        <div className="flex flex-row justify-between">
          <h1 className="text-4xl text-stone-900">{title}</h1>
          <Search onChange={onChange} />
        </div>
      )}
      <hr />
    </div>
  );
}
