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

    changeFilterStory = e => {
        if (e.key === 'Enter') {
            let filterText = e.target.value.toLowerCase();
            this.setState(state => {
                let {filterStory} = state;
                if (filterStory.every(item => item !== filterText)) {
                    if (filterStory.length === 3){
                        filterStory.splice(2, 1);
                        this.state.filterStory.unshift(filterText);
                    } else 
                        this.state.filterStory.unshift(filterText);
                } else {
                    let index = filterStory.indexOf(filterText);
                    [filterStory[0], filterStory[index]]=[filterStory[index], filterStory[0]];
                }
                return state;
            })
            this.props.searhItems(filterText);
        }
    }
    
    isFilterInputClear = e => {
        if (e.target.value === '') {
            this.props.searhItems(e.target.value); 
        }
    }

    render(){
        return(
            <div className="app-filter">
                <input 
                    className="app-filter__input" 
                    onChange={this.isFilterInputClear} 
                    placeholder="Filter"
                    onKeyPress={this.changeFilterStory}
                    onFocus={e => {this.setState(state => {return this.state.isVisible = true})}}
                    onBlur={e => {this.setState(state => {return this.state.isVisible = false})}}
                />
                {this.state.filterStory.map(item => (
                    this.state.isVisible && <FIlterStoryItem 
                    title = {item}
                    />
                ))}
            </div>
        )
    }
}

export default Filter;