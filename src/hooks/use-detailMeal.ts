import { MealDetailsType } from '@/types/meals-type';
import React, { useCallback, useEffect, useState } from 'react';

export default function useDetailMeal(mealId: string) {
  const [data, setData] = useState<MealDetailsType>();
  const baseURL: string | undefined = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(baseURL + `lookup.php?i=${mealId}`);
      const result = await response.json();
      setData(result.meals[0]);
    } catch (error) {
      console.error(error);
    }
  }, [baseURL, mealId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
}
