import React, { useEffect, useState, useContext } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';

import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

import { SearchContext } from '../App';

function Home() {
  const [pizzas, setPizzas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const { searchValue, searchRef } = useContext(SearchContext);

  const { categoryId, sort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    // если я хочу воспользоваться поиском пиццы (делаю инпут в фокус), я переключаю на вкладку "ВСЕ"
    if (document.activeElement === searchRef.current) {
      dispatch(setCategoryId(0));
    }
  }, [searchValue, searchRef]);

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
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
  }, [categoryId, sort, searchValue, currentPage]);

  const pizzasArray = pizzas?.map((el) => <PizzaBlock key={el.id} {...el} />);
  const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i} />);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeleton : pizzasArray}</div>
        <Pagination onChangePage={(page) => setCurrentPage(page)} />
      </div>
    </div>
  );
}

export default Home;
