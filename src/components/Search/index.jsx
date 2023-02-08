import styles from './Search.module.scss';
import { SearchContext } from '../../App';
import React from 'react';
import debounce from 'lodash.debounce';

function Search() {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickDelele = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 500),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.search} src="/img/search.svg" alt="Search" />
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onChangeInput(event)}
        placeholder="Вкусная пицца..."
        className={styles.input}
        type="text"
      />
      {value && (
        <img onClick={onClickDelele} className={styles.delete} src="/img/delete.svg" alt="Delete" />
      )}
    </div>
  );
}

export default Search;
