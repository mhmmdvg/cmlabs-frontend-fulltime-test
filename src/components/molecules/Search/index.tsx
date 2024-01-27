import React, { ChangeEvent } from 'react';

type IProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Search({ onChange }: IProps) {
  return (
    <div>
      <input
        placeholder="Search..."
        className="rounded-md md:rounded-lg px-3 sm:px-5 py-1 md:py-2 text-xs sm:text-base sm:w-full md:w-96 border border-gray-300 placeholder:text-xs"
        onChange={onChange}
      />
    </div>
  );
}
