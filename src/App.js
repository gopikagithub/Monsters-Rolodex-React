import { Component } from "react";
import './App.css';
import CardList from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component';


class App extends Component{


  constructor(){
    super();
    this.state={monsters:[],searchString:""};
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>{this.setState(()=>{
      return{monsters:users};
      })},
      ()=>console.log(this.state)
    );
  
  }


  onSearchChange=(event)=>{
    const searchString=event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return{searchString};
    });
  }
  
  
  
  render(){
    const {monsters,searchString}=this.state;
    const {onSearchChange}=this;
    const filteredMonsters=monsters.filter((monster)=>{
      return  monster.name.toLocaleLowerCase().includes(searchString);
    });

    return(
      <div className='App'>
        <h2 className='appTitle'>MONSTERS ROLODEX</h2>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monster' className='search-box'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )

    
    
  }
 
  
  
  
}
export default App;