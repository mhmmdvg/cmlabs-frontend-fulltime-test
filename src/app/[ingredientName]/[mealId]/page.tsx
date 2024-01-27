'use client';
import Loading from '@/components/atoms/Loading';
import HeaderMeal from '@/components/organisms/HeaderMeal';
import MealDetailsTemplate from '@/components/templates/MealDetailsTemplate';
import useDetailMeal from '@/hooks/use-detailMeal';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React from 'react';

type IProps = {
  params: {
    ingredientName: string;
    mealId: string;
  };
};

export default function MealDetails({ params }: IProps) {
  const mealTitle = useSearchParams();
  const data = useDetailMeal(params.mealId);
  const youtubeId = data?.strYoutube.slice(32, 43);

  return (
    <MealDetailsTemplate>
      <HeaderMeal
        title={params.ingredientName}
        mealTitle={`${mealTitle.get('name')}`}
      />
      {data ? (
        <div className="flex flex-col space-y-5">
          <h3 className="text-sm font-bold">{data?.strCategory}</h3>
          <div className="flex flex-row h-full space-x-8">
            <Image
              className="rounded-xl h-96"
              src={data?.strMealThumb}
              unoptimized
              width={500}
              height={800}
              alt="thumbnail"
            />
            <article className="w-full flex flex-col space-y-4">
              <h1 className="text-4xl">Instructions</h1>
              <p className="text-pretty text-justify">
                {data?.strInstructions}
              </p>
              <h2 className="text-2xl">Recipes</h2>
              <ul className="list-disc">
                <li>
                  {data?.strMeasure1} {data?.strIngredient1}
                </li>
                <li>
                  {data?.strMeasure2} {data?.strIngredient2}
                </li>
                <li>
                  {data?.strMeasure3} {data?.strIngredient3}
                </li>
                <li>
                  {data?.strMeasure4} {data?.strIngredient4}
                </li>
                <li>
                  {data?.strMeasure5} {data?.strIngredient5}
                </li>
              </ul>
            </article>
          </div>
          <div className="w-full flex flex-col space-y-4">
            <h2 className="text-2xl">Tutorials</h2>
            <iframe
              width="560"
              height="315"
              className="w-full h-96"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="YouTube video player"
              allow="accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture; 
              web-share"
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </MealDetailsTemplate>
  );
}
