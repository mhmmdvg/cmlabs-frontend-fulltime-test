import Search from '@/components/molecules/Search';
import { Cookie, Salad, Soup } from 'lucide-react';
import React, { ChangeEvent } from 'react';
import bgFood from '../../../assets/background/bg-food.jpg';

type IProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Header({ onChange }: IProps) {
  return (
    <div
      className="bg-contain h-full w-screen "
      style={{
        backgroundImage: `url('${bgFood.src}')`,
      }}
    >
      <div className="w-full backdrop-blur-sm bg-black/50 flex flex-col bg-contain h-full items-center justify-center space-y-8 py-20">
        <div className="flex flex-row space-x-3 md:space-x-5 text-red-400">
          <Soup className="w-4 h-4 md:w-5 md:h-5" />
          <Salad className="w-4 h-4 md:w-5 md:h-5" />
          <Cookie className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <h1 className="font-medium text-white text-xs md:text-sm">
          mealapp API website
        </h1>
        <h1 className="text-xl md:text-4xl font-bold text-white">
          See All The Delicious Foods
        </h1>
        <Search onChange={onChange} />
      </div>
    </div>
  );
}
