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
        this.inputRef = React.createRef();
    }

    searchItems = e => {
        if (e.key === 'Enter') {
            let searchText = e.target.value.toLowerCase();
            this.setState(state => {
                let {filterStory} = state;
                let flag = filterStory.every(item => {
                    return item !== searchText;
                })
                if (flag) {
                    this.state.filterStory.push(searchText);
                }
                return state;
            })
            this.props.searhItem(searchText);
        }
    }
    
    changeFilterStory = e => {
        if (e.target.value === '') {
            this.props.searhItem(e.target.value); 
        }
    }

    showFilterStory = e => {
        this.setState(state => {
            this.state.isVisible = true;
            return state;
        })
    }

    hideFilterStory = e => {
        this.setState(state => {
            this.state.isVisible = false;
            return state;
        })
    }

    render(){
        return(
            <div className="app-filter">
                <input 
                    className="app-filter__input" 
                    onChange={this.changeFilterStory} 
                    placeholder="Filter"
                    onKeyPress={this.searchItems}
                    onFocus={this.showFilterStory}
                    onBlur={this.hideFilterStory}
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