import React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import search from '../../assets/img/search.png';
import clear from '../../assets/img/clear.png';
import styles from './Search.module.scss';

//debounce - отложенный поиск, запрос на бэк для получения пицц

const Search=()=> {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inoutRef = React.useRef(null);
  const searchValue = useSelector((state) => state.filterSlice.searchValue);
// console.log(searchValue);

  const clearHandler = () => {
    dispatch(setSearchValue('')); //для отчистки инпута
    setValue('');
    inoutRef.current?.focus(); //Альтернативный вариант записи
    // если что-то имеется в current, тогда вызови focus
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      console.log(str)
      // filter(str => str.trim())
      // if(str.target.value.filter((value) => value.trim())){
      //   dispatch(setSearchValue(str));
      // }
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );

  const inputHandler = (event) => {
    //dispatch(setSearchValue(event.target.value));
    // filter(value => value.trim());

    setValue(event.target.value);
    updateSearchValue(event.target.value);

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

