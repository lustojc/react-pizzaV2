import React, { useEffect, useState } from 'react';

import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentSort, setCurrentSortCategory] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);

    const sortBy = currentSort.sortProperty.replace('-', '');
    const order = currentSort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(
      `https://62a49bf6259aba8e10ebade1.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, currentSort]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
          <Sort value={currentSort} onChangeSort={(i) => setCurrentSortCategory(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : pizzas.map((el) => <PizzaBlock key={el.id} {...el} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
