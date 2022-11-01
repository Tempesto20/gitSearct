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
  const inoutRef = React.useRef<HTMLInputElement>(null);
  const searchValue = useSelector((state: RootState) => state.filterSlice.searchValue).trim();
// console.log(searchValue);

  const clearHandler = () => {
    dispatch(setSearchValue(''.trim())); //для отчистки инпута
    setValue(''.trim());
    
    
    inoutRef.current?.focus(); //Альтернативный вариант записи
    // если что-то имеется в current, тогда вызови focus
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      console.log(str)
      // filter(str => str.trim())
      // if(str.target.value.filter((value) => value.trim())){
      //   dispatch(setSearchValue(str));
      // }
      dispatch(setSearchValue(str.trim()));
    }, 500),
    [],
  );

  const inputHandler = (event: React.ChangeEvent <HTMLInputElement>) => {
    //dispatch(setSearchValue(event.target.value));
    // filter(value => value.trim());

    setValue(event.target.value.trim());
    updateSearchValue(event.target.value.trim());

    // if(event.target.value.filter((value) => value.trim())){
    //   setValue(event.target.value);
    // updateSearchValue(event.target.value);
    // }

  };

  return (
    <div className={styles.root}>
      <img src={search} alt="" className={styles.icon} />
      <input
        ref={inoutRef}
        //value={searchValue} //контролируемый инпут(двойное связывание)
        value={value}
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

