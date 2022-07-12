import React, { useEffect, useState } from 'react';

import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

function Home({ searchValue, searchRef }) {
  const [pizzas, setPizzas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSortCategory] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    // если я ищу пиццы, я переключаюсь на вкладку "ВСЕ"
    if (document.activeElement === searchRef.current) {
      setCategoryId(0);
    }
  }, [searchValue]);

  useEffect(() => {
    setIsLoading(true);

    const sortBy = currentSort.sortProperty.replace('-', '');
    const order = currentSort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const backendSearch = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://62a49bf6259aba8e10ebade1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${backendSearch}`,
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    // window.scrollTo(0, 0);
  }, [categoryId, currentSort, searchValue, currentPage]);

  const pizzasArray = pizzas?.map((el) => <PizzaBlock key={el.id} {...el} />);
  const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
          <Sort value={currentSort} onChangeSort={(i) => setCurrentSortCategory(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeleton : pizzasArray}</div>
        <Pagination onChangePage={(page) => setCurrentPage(page)} />
      </div>
    </div>
  );
}

export default Home;
