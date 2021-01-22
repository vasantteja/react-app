import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

 const [ personsState, setPersonsState ] = useState({
  persons: [
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29},
    { name: 'Stephanie', age: 26}
    
  ],
  showPersons : false
})

const switchNameHandler = (newName) => {
  //console.log('Was clicked!');
  setPersonsState({
    persons: [
      { name: newName, age: 30 },
      { name: 'Manu', age: 27},
      { name: 'Stephanie', age: 29}
    ],
  });
};

const nameChangeHandler = (event)  => {
  //console.log('Was clicked!');
  setPersonsState({
    persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29},
      { name: 'Stephanie', age: 26}
    ]
  });
};

const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
};
   
const togglePersonHandler = () => {
  const doesShow = personsState.doesShow;
  setPersonsState({showPersons: !doesShow});
}
     return (
       <div className="App">
         <h1>Hi, I'm React App</h1>
         <p>This is really working!</p>
         <button 
         style = {style}
         onClick = {togglePersonHandler}>Switch Name</button>
         {personsState.showPersons ?
           <div>
            <Person 
            name={this.personsState.persons[0].name} 
            age={this.personsState.persons[0].age} />
           <Person 
            name={this.personsState.persons[1].name} 
            age={this.personsState.persons[1].age}
            click = {switchNameHandler.bind(this, 'Max!!')} 
            changed={nameChangeHandler}> My Hobbies include tennis!!</Person>
            <Person 
            name={this.personsState.persons[2].name} 
            age={this.personsState.persons[2].age} />
            </div> : null
         }
       </div>
     );

    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Does this work now?'));
  
}

export default app;




