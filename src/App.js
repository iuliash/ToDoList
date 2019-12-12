import React from 'react';
import Item from './Item'
import InsertItem from './InsertItem'
import Filter from './FIlter'

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

  searchItems = filterText => {
    this.setState(state => {
      this.state.items.map(item => item.show = item.title.toLowerCase().includes(filterText));
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
        <Filter searhItems = {this.searchItems}/>
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
