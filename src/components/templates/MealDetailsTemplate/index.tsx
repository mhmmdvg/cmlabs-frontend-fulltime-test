import React, { ReactNode } from 'react';

type IProps = {
  children: ReactNode;
};

export default function MealDetailsTemplate({ children }: IProps) {
  return (
    <main className="flex flex-col w-screen min-h-screen py-10 sm:py-16 md:py-20 px-14 sm:px-24 md:px-32 lg:px-36 xl:px-[17rem]">
      {children}
    </main>
  );
}
