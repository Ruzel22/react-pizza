import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/';
import Skeleton from '../components/PizzaBlock/Skeleton';
import axios from 'axios';
import { SearchContext } from '../App';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/slices/filterSlice';

const Home = () => {
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const activeSort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [activeCategory, setActiveCategory] = React.useState(0);
  // const [activeSort, setActiveSort] = React.useState({
  //   name: 'популярности ↓',
  //   sortProperty: '-rating',
  // });

  React.useEffect(() => {
    axios
      .get(
        `https://63da6c5c2af48a60a7cd6fb2.mockapi.io/pizzas?${
          activeCategory > 0 ? `category=${activeCategory}` : ''
        }&sortBy=${activeSort.sortProperty.replace('-', '')}&order=${
          activeSort.sortProperty.includes('-') ? 'asc' : 'desc'
        }`,
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });
  }, [activeCategory, activeSort]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={activeCategory}
            onChangeCategory={(i) => dispatch(setActiveCategory(i))}
          />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : items
                .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
