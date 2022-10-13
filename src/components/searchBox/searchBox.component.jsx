import './searchBox.styles.css';

const SearchBox=({onChangeHandler,placeholder,className})=>(

        <input 
            className={className} 
            type='search' 
            placeholder={placeholder}
            onChange={onChangeHandler} 
        />    
);

export default SearchBox;