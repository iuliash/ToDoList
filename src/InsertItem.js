import React from 'react';

class InsertItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            input : ''
        };

        this.inpurRef = React.createRef;
    }

    addItem = () => {
        const {input} = this.state;
        if (input) {
            this.props.addItem(input);
            this.setState({input : ''});
        }
        return input;
    }

    inputChange = e => {
        this.setState({input: e.target.value});
    } 

    handleEnter = e => {
        if (e.key === 'Enter')
            this.addItem();
    }

    render(){
        return(
            <div className="list-insert">
                <input className="list-insert_input" 
                    placeholder="New item" 
                    onChange={this.inputChange} 
                    value={this.state.input} 
                    onKeyPress={this.handleEnter}
                    ref={this.inpurRef}>
                    </input>
                <button className="list-insert_btn" onClick={this.addItem}>Add</button>
            </div>
        )
    }
}

export default InsertItem;