import React from 'react';
import { useParams} from 'react-router-dom';
import {ENDPOINTS} from '../../api/endpoints';
import {useFetch} from '../../api/use-fetch';
import MealList from '../../components/MealList';

 const Category = () => {
  const params = useParams();
  const {categoryName} = params;
  
// eslint-disable-next-line
  const {data, loading, error} = useFetch(`${ENDPOINTS.FILTER}?c=${categoryName}`);

  if (loading) {
    return 'Caricamento...';
  }

  if (!(data?.meals?.length)) {
    return 'Not found';
  }

  return (
      <div>
        <MealList categoryName={categoryName} meals={data?.meals}/>
      </div>
  );
};

export default Category;
