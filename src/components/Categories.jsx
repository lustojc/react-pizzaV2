import { useState } from 'react';

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const arrCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const changeCat = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {arrCategories.map((el, i) => {
          return (
            <li onClick={() => changeCat(i)} className={activeIndex === i && 'active'}>
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
