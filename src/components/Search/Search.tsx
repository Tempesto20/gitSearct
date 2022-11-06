import React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import search from '../../assets/img/search.png';
import clear from '../../assets/img/clear.png';
import styles from './Search.module.scss';
import { RootState, useAppDispatch } from '../../redux/store';

//debounce - отложенный поиск, запрос на бэк для получения пицц

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>('');
  const searchValue = useSelector((state: RootState) => state.filterSlice.searchValue);
// console.log(searchValue);

  const clearHandler = () => {
    dispatch(setSearchValue(''.trim())); //для отчистки инпута
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      // console.log(str);
      dispatch(setSearchValue(str.trim()));
    }, 150),
    [],
  );

  const inputHandler = (event: React.ChangeEvent <HTMLInputElement>) => {
    setValue(event.target.value.trim());
    updateSearchValue(event.target.value.trim());
  };


  return (
    <div className={styles.root}>
      <img src={search} alt="" className={styles.icon} />
      <input
        // ref={inoutRef}
        value={searchValue} //контролируемый инпут(двойное связывание)
        // value={value}
        onChange={inputHandler}
        className={styles.input}
        placeholder="Поиск аккаунта ..."
      />
      {searchValue && (
        <img src={clear} alt="" 
        onClick={clearHandler}
        className={styles.clearIcon}/>
      )}
    </div>
  );
}

export default Search;

