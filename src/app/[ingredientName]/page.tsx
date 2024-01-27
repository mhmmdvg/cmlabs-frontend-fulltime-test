'use client';
import Loading from '@/components/atoms/Loading';
import HeaderMeal from '@/components/organisms/HeaderMeal';
import IngredientDetailsTemplate from '@/components/templates/IngredientDetails';
import useMeals from '@/hooks/use-meals';
import dynamic from 'next/dynamic';
import React, { ChangeEvent, useState } from 'react';
const CardMeal = dynamic(() => import('@/components/molecules/CardMeal'));

type IProps = {
  params: {
    ingredientName: string;
  };
};

export default function IngredientDetails({ params }: IProps) {
  const data = useMeals(params.ingredientName);
  const [searchData, setSearchData] = useState(data);

  const searchHandle = (value: string) => {
    setSearchData(
      data?.filter((item) =>
        item.strMeal.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <IngredientDetailsTemplate>
      <HeaderMeal
        title={params.ingredientName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          searchHandle(e.target.value)
        }
      />
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 place-items-center">
        {data ? (
          searchData ? (
            searchData?.map((item) => (
              <CardMeal
                key={item.idMeal}
                ingredientName={params.ingredientName}
                id={item.idMeal}
                title={item.strMeal}
                thumbnail={item.strMealThumb}
              />
            ))
          ) : (
            data?.map((item) => (
              <CardMeal
                key={item.idMeal}
                ingredientName={params.ingredientName}
                id={item.idMeal}
                title={item.strMeal}
                thumbnail={item.strMealThumb}
              />
            ))
          )
        ) : (
          <Loading />
        )}
      </div>
    </IngredientDetailsTemplate>
  );
}
