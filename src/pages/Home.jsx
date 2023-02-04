import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: 'популярности ↓',
    sortProperty: '-rating',
  });

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63da6c5c2af48a60a7cd6fb2.mockapi.io/pizzas?${
        activeCategory > 0 ? `category=${activeCategory}` : ''
      }&sortBy=${activeSort.sortProperty.replace('-', '')}&order=${
        activeSort.sortProperty.includes('-') ? 'asc' : 'desc'
      }`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [activeCategory, activeSort]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={activeCategory}
            onChangeCategory={(i) => setActiveCategory(i)}
          />
          <Sort
            activeSort={activeSort}
            onChangeSort={(sortProperty) => setActiveSort(sortProperty)}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
