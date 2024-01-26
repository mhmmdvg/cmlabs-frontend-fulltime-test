import React, { useCallback, useEffect, useState } from 'react';

export default function useIngredients() {
  const [data, setData] = useState<IngredientMeals[]>();
  const baseURL: string | undefined = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchData = useCallback(async () => {
    const response = await fetch(baseURL + 'list.php?i=list', {
      method: 'GET',
    });

    const result = await response.json();
    setData(result.meals);
  }, [baseURL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
}
