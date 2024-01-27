/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Loading from '@/components/atoms/Loading';
import Pagination from '@/components/molecules/Pagination';
import Header from '@/components/organisms/Header';
import HomeTemplate from '@/components/templates/HomeTemplate';
import useIngredients from '@/hooks/use-ingredients';
import dynamic from 'next/dynamic';
import { ChangeEvent, useEffect, useState } from 'react';
const Card = dynamic(() => import('@/components/molecules/Card'));

export default function Home() {
  const data = useIngredients();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);
  const [searchData, setSearchData] = useState(currentPosts);
  const [value, setValue] = useState<string>('');

  // const searchHandle = () => {
  //   setSearchData(
  //     data?.filter((item) => {
  //       return item.strIngredient.toLowerCase().includes(value.toLowerCase());
  //     })
  //   );
  // };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setSearchData(
      currentPosts?.filter((item) => {
        return item.strIngredient.toLowerCase().includes(value.toLowerCase());
      })
    );
  }, [value]);

  return (
    <HomeTemplate>
      <Header
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />

      {currentPosts === undefined ? (
        <Loading />
      ) : (
        <>
          <div className="p-10 grid grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
            {value === ''
              ? currentPosts?.map((item) => (
                  <Card key={item.idIngredient} title={item.strIngredient} />
                ))
              : searchData?.map((item) => (
                  <Card key={item.idIngredient} title={item.strIngredient} />
                ))}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data!.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </HomeTemplate>
  );
}
