import React, { Component } from "react";
import Person from "./Person";

class NameList extends Component {
  render() {
    const persons = [
      { id: 1, name: "Anirudh", age: 25 },
      { id: 2, name: "Ankit", age: 32 },
      { id: 3, name: "Pooja", age: 27 }
    ];
    const personList = persons.map(person => (
      <Person key={person.id} person={person} />
    ));
    return <div>{personList}</div>;
  }
}

export default NameList;
