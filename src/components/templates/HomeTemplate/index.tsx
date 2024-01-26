import Header from '@/components/organisms/Header';
import React, { ReactNode } from 'react';

type IProps = {
  children: ReactNode;
};

export default function HomeTemplate({ children }: IProps) {
  return (
    <main className="flex min-h-screen flex-col items-center pt-8 pb-10">
      {children}
    </main>
  );
}
