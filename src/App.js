import { useEffect, useState} from 'react';
import './App.css';
import CardList from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component';

const App =()=>{

    const[monsters,setMonsters]=useState([]);
    const[searchString,setSearchString]=useState('');
    const [filteredMonsters,setFilteredMonsters]=useState(monsters);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users)=>setMonsters(users));
    },[])


   useEffect(()=>{
    const filtered=monsters.filter((monster)=>{
      return  monster.name.toLocaleLowerCase().includes(searchString);});
      setFilteredMonsters(filtered);
    },[monsters,searchString]);


    const onSearchChange=(event)=>{
      const searchFieldString=event.target.value.toLocaleLowerCase();
      setSearchString(searchFieldString);
    };

      
    return(
      <div className='App'>
          <h2 className='appTitle'>MONSTERS ROLODEX</h2>
          <SearchBox onChangeHandler={onSearchChange} placeholder='search monster' className='search-box'/>
          <CardList monsters={filteredMonsters}/>
      </div>

    );
  };

export default App;
