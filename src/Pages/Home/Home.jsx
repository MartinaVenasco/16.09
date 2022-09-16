import { Suspense } from 'react';
import { useMemo } from 'react';
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai'
import { useLoaderData, Await, useSearchParams } from 'react-router-dom';
import  CategoryList from '../../components/CategoryList';

 const Home = () => {
  const { categories } = useLoaderData();
  const [search, setSearch] = useSearchParams();

  const page = search?.get('page') ?? 1;
  const perPage = 6;
  const paginated = useMemo(() => {
    return categories?.slice((page -1) * perPage, page * perPage);
  }, [page, categories]);

  const handlePageChange = (variation) => {
    setSearch((prev) => {
      return { page: Number(prev.get('page')) + variation };
    });
  };

  return (
    <div>
      <Suspense fallback={<div style={{ color: 'red' }}>Loading...</div>}>
        <Await
          resolve={categories}
          errorElement={<div>Could not load reviews 😬</div>}
        >
          {() => <CategoryList categories={paginated} />}
        </Await>
      </Suspense>
      <div>
        <button disabled={page == 1} onClick={handlePageChange.bind(this, -1)}><AiFillLeftCircle/></button>
        <button  disabled={page == 3} onClick={handlePageChange.bind(this, +1)}><AiFillRightCircle/></button>
      </div>
    </div>
  );
};

export default Home;
