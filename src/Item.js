import React from 'react';

class Item extends React.Component {
    constructor(props){
        super(props); 
        
        this.state = {
            flag: true
        }
        
        this.deleteItem = this.deleteItem.bind(this);
        this.itemRef = React.createRef();
    }

    deleteItem(){
        this.itemRef.current.className = 'list-item delete';
        this.props.onClick(); 
    }

    componentDidMount(){
        this.itemRef.current.className = 'list-item';
        this.forceUpdate();
    }

    componentWillUpdate(){
        setTimeout(() => {
            this.itemRef.current.className = 'list-item add';
        }, 5);
        
    }

    render(){
        return(
            <div className='list-item' ref={this.itemRef} >
                <p className='list-item_text' onClick={this.deleteItem}>{this.props.item.title}</p>
            </div>     
        )
    }  
}


export default Item;