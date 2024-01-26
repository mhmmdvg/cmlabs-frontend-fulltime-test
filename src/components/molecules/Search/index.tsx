import React, { ChangeEvent } from 'react';

type IProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Search({ onChange }: IProps) {
  return (
    <div>
      <input
        placeholder="Search..."
        className="rounded-lg px-5 py-2 w-96 border border-gray-300"
        onChange={onChange}
      />
    </div>
  );
}
