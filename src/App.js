import React from 'react';
import Item from './Item'
import InsertItem from './InsertItem'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      items : [
        {id: 0, title:'item1', show: true},
        {id: 1, title:'item2', show: true},
        {id: 2, title:'item3', show: true}
      ]
    };
  }

  searchItems = e => {
    let searchText = e.target.value.toLowerCase();
    this.setState(state => {
        this.state.items.map(item => item.show = item.title.toLowerCase().includes(searchText));
        return state;
    })
  }

  addItem = item => {
    this.setState(state => {
      let {items} = state;
      let id;
      if (items.length !==0) 
        id = Math.random(100);
      else 
        id = 0;
      items.push({
        id: id,
        title : item,
        show: true});
        return items;
    }) 
  }

  deleteItem = id => {
    const index = this.state.items.map(item => item.id).indexOf(id);
    setTimeout(() => {
      this.setState(state => {
        let {items} = state;
        items.splice(index, 1);
        return items;
      });}
    , 2000)
  }

  render(){
    const {items} = this.state;
    return(
      <div className="App">
        <input className="app-filter-input" onChange={this.searchItems} placeholder="Filter"/>
        <InsertItem  addItem={this.addItem}/>
        {items.map(item => (
          item.show && <Item 
          onClick = {() => this.deleteItem(item.id)} 
          item={item} 
          key={item.id}
          />
        ))}
      </div>
    )
  }
}

export default App;

/*
анимация transition (+ и - и у animate)/ переделать
создание временного массива во время фильрации 
методы ЖЦ react 
отрисовка реакт 
? и if
stateless and functions components 
методы перебора массивов и в целом все методы, как они работают   
типы данных и методы преобразования js
при удалении лучше перезаписать массив полностью => splice
ref
*/
