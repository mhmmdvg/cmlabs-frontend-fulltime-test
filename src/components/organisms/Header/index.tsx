import Search from '@/components/molecules/Search';
import { Cookie, Salad, Soup } from 'lucide-react';
import React, { ChangeEvent } from 'react';

type IProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Header({ onChange }: IProps) {
  return (
    <div className="flex flex-col bg-gray-200 h-full w-screen items-center justify-center space-y-8 py-20">
      <div className="flex flex-row space-x-5 text-red-400">
        <Soup className="w-5 h-5" />
        <Salad className="w-5 h-5" />
        <Cookie className="w-5 h-5" />
      </div>
      <h1 className="font-medium text-stone-900 text-sm">
        mealapp API website
      </h1>
      <h1 className="text-4xl font-bold text-stone-900">
        See All The Delicious Foods
      </h1>
      <Search onChange={onChange} />
    </div>
  );
}
