import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";



function App() {

  const contacts = [
  {
    id: "1",
    nome: "Anderson",
    email: "anderson@gmail.com",
    telefone: "31 975122266",
    categoria: {
      pessoal: "pessoal",
      profissional: "profissional"
    }
  },
  {
    id: "2",
    nome: "Roberson",
    email: "roberson@gmail.com",
    telefone: "31 975122266",
    categoria: {
      pessoal: "pessoal",
      profissional: "profissional"
    }
  }
]

  return (
    <div className="ui container">
        <Header />
        <AddContact />
        <ContactList contacts={contacts}/>
    </div>
  )
}

export default App;
