import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title="Мексиканская" price={500} />
              <PizzaBlock title="Цыпленок барбекю" price={264}/>
              <PizzaBlock title="4 сыра" price={450}/>
              <PizzaBlock title="Мясная" price={650}/>
              <PizzaBlock title="С морепродуктами" price={750}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
