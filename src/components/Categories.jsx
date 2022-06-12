import { useState } from 'react';

export default function Categories({ value, onChangeCategory }) {
  const arrCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {arrCategories.map((el, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
