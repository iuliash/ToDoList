import React from 'react';
import Item from './Item'
import InsertItem from './InsertItem'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      items : [{id: 0, title:'item1', show: true},
        {id: 1, title:'item2', show: true},
        {id: 2, title:'item3', show: true}
      ]
    }
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
      items.push({
        id: items.length !== 0 ? items.length : 0, 
        title : item,
        show: true});
        return items;
    })
    
  }

  deleteItem = id => {
    const index = this.state.items.map(item => item.id).indexOf(id);
    this.setState(state => {
      let {items} = state;
      delete items[index];
      return items;
    });
  }

  render(){
    const {items} = this.state;
    return(
      <div className="App">
        <input className="app-filter-input" onChange={this.searchItems} placeholder="Filter"/>
        <InsertItem  addItem={this.addItem}/>
        {items.map(item => (
          item.show && <Item 
          deleteItem = {() => this.deleteItem(item.id)} 
          item={item} 
          key={item.id} 
          />
        ))}
      </div>
    )
  }
}

export default App;

