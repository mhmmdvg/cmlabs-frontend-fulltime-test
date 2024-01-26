import { MealsType } from '@/types/meals-type';
import React, { useCallback, useEffect, useState } from 'react';

export default function useMeals(ingredientName: string) {
  const [data, setData] = useState<MealsType[]>();
  const baseURL: string | undefined = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(baseURL + `filter.php?i=${ingredientName}`);
      const result = await response.json();

      setData(result.meals);
    } catch (error) {
      console.error(error);
    }
  }, [baseURL, ingredientName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
}
