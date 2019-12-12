import React from 'react';

class InsertItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            input : ''
        };
    }

    addItem = e => {
        e.preventDefault()
        const {input} = this.state;
        if (input) {
            this.props.addItem(input);
            this.setState({input : ''});
        }
        return input;
    }

    render(){
        return(
            <div className="list-insert">
                <form onSumbit={this.addItem}>
                    <input className="list-insert_input" 
                        placeholder="New item" 
                        onChange={e => {this.setState({input: e.target.value})}} 
                        value={this.state.input}
                    />
                    <button className="list-insert_btn" onClick={this.addItem}>Add</button>
                </form>
            </div>
        )
    }
}

export default InsertItem;