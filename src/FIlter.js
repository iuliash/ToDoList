import React from 'react'

const FIlterStoryItem = (props) => {
    return(
        <li className="filter-story__item">{props.title}</li>
    )
}

class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible : false, 
            filterStory: []
        }
    }

    searchItems = e => {
        if (e.key === 'Enter') {
            let searchText = e.target.value.toLowerCase();
            this.setState(state => {
                let {filterStory} = state;
                if (filterStory.every(item => item !== searchText)) {
                    if (filterStory.length === 3){
                        console.log(filterStory);
                        filterStory.splice(2, 1);
                        console.log(filterStory);
                        this.state.filterStory.unshift(searchText);
                        console.log(filterStory);
                    } else 
                        this.state.filterStory.unshift(searchText);
                } else {
                    let index = filterStory.indexOf(searchText);
                    [filterStory[0], filterStory[index]]=[filterStory[index], filterStory[0]];
                }
                return state;
            })
            this.props.searhItems(searchText);
        }
    }
    
    changeFilterStory = e => {
        if (e.target.value === '') {
            this.props.searhItems(e.target.value); 
        }
    }

    render(){
        return(
            <div className="app-filter">
                <input 
                    className="app-filter__input" 
                    onChange={this.changeFilterStory} 
                    placeholder="Filter"
                    onKeyPress={this.searchItems}
                    onFocus={e => {this.setState(state => {return this.state.isVisible = true})}}
                    onBlur={e => {this.setState(state => {return this.state.isVisible = false})}}
                />
                {
                this.state.filterStory.map(item => (
                    this.state.isVisible && <FIlterStoryItem 
                    title = {item}
                    />
                ))}
            </div>
        )
    }
}

export default Filter;