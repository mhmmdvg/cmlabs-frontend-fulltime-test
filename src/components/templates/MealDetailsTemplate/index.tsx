import React, { ReactNode } from 'react';

type IProps = {
  children: ReactNode;
};

export default function MealDetailsTemplate({ children }: IProps) {
  return (
    <main className="flex flex-col w-screen min-h-screen py-20 px-[17rem]">
      {children}
    </main>
  );
}
