import React from 'react';

type IProps = {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: any;
};

export default function Pagination({
  totalPosts,
  postsPerPage,
  currentPage,
  paginate,
}: IProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-row justify-center items-center">
      <ul className="flex flex-row space-x-4">
        {pageNumbers.slice(0, 3).map((num) => (
          <li
            key={num}
            onClick={() => paginate(num)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === num
                ? 'bg-red-400 border-red-400 text-white'
                : 'bg-white border-slate-400'
            } hover:cursor-pointer hover:text-white hover:bg-red-400 hover:border-red-400 transition-all`}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
}
