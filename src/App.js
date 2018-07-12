import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends Component {
  state = { 
    inputText: '',
    todo: [],
  }

  onInputChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }


  onDoneButton = (targetItem, e) => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        todo: prevState.todo.map(item => {
          if(item.name === targetItem && item.done === false) {
            return Object.assign(item, { done: true })
          } else if (item.name === targetItem && item.done === true) {
            return Object.assign(item, { done: false })
          } else {
            return item
          }
        })
      }
    })
  }

  onDeleteButton = (targetItem, e) => {
    e.preventDefault();

    this.setState(prevState => {
      const newArr = prevState.todo.filter(item => item.name !== targetItem)
      return {
        todo: newArr
      }
    })
  }

  onRemoveFinished = (e) => {
    e.preventDefault();
    
    this.setState(prevState => {
      const newArr = prevState.todo.filter(item => item.done === false)
      
      return {
        todo: newArr
      }
      
    })
  }

  
  onSubmitForm = (inputText, e) => {

    e.preventDefault();

    // Validation
    let allDifferent = true;
    this.state.todo.forEach(item => {
      if(item.name === inputText) {
        allDifferent = false;
      }
    })
    
    if(inputText.length > 0 && allDifferent ) {
      this.setState(prevState => {
        return {
          inputText: '',
          todo: [...prevState.todo, {name: inputText, done: false}]
        }
      })
    }
  }

  render() {
    return (
      <ToDoList inputText={this.state.inputText}
                onInputChange={this.onInputChange}
                onSubmitForm={this.onSubmitForm}
                items={this.state.todo}
                onDeleteButton={this.onDeleteButton}
                onDoneButton={this.onDoneButton}
                onRemoveFinished={this.onRemoveFinished}
      />
    );
  }
}

export default App;

