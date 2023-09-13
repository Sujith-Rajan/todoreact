import React, { Component } from "react";
import "./Todo.css";
import Popup from "./Popup";


export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state ={
      getInput:"",
      items: [],
      buttonPopup:false,
      selectedItemIndex:null,
      editInput:"",
    }
  }
 
    
    handleChange = (event) => {
        this.setState({
            getInput: event.target.value,
        });

        console.log(this.state.getInput);
    };
    onStoreItem = (event) => {
        event.preventDefault();
        const { getInput } = this.state;
      
        this.setState({
            
            items: [...this.state.items, getInput],
            getInput: "",
        });
    };

    deleteItem = (key) => {
        this.setState({
            items: this.state.items.filter((data, index) => index !== key),
        });
    };
    editButton =(key) =>{
     this.setState({
      buttonPopup:true,
      selectedItemIndex:key,
      editInput:this.state.items[key]
     })
     console.log("editInput:", this.state.editInput);
    }
    onSaveEdit = (editedText) => {
      const { selectedItemIndex, items } = this.state;
      const updatedItems = [...items];
      updatedItems[selectedItemIndex] = editedText;
      this.setState({
        items: updatedItems,
        buttonPopup: false,
      });
    };
    onClose =()=>{
      this.setState({
        buttonPopup:false

      })
      
    }

    render() {
        const { getInput, items,buttonPopup,editInput} = this.state;
       
        return (
            <div className="todo-container">
                <h1>Todo Apps</h1>
                <form className="inputSection" onSubmit={this.onStoreItem}>
                    <input type="text" value={getInput} onChange={this.handleChange} placeholder="Enter Item..." />
                </form>
                <ul>
                    {items.map((data, index) => (
                        <li key={index}>
                            <span className="date-time">{new Date().toLocaleString()}</span>
                            {data}
                            <i className="fa-regular fa-pen-to-square fa-2xs" onClick={() => this.editButton(index)}></i>
                            <i className="fa-solid fa-trash-can fa-2xs" onClick={() => this.deleteItem(index)}></i>
                        </li>
                    ))}
                </ul>
                {
                  buttonPopup && (
                    <Popup trigger={buttonPopup}
                    editInput={editInput}
            onSaveEdit={this.onSaveEdit} 
            onClose={this.onClose}>

                    </Popup>

                  )
                }
            </div>
        );
    }
}
