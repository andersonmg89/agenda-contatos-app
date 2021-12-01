import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom"

const ContactList = (props) => {
    console.log(props);

    const deletContactHandler = (id) => {
        props.getContactId(id)
    }


    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler ={deletContactHandler} key={contact.id}/>
    });
    return(
    <div className="main">
        <h2 style={{position:"relative", display: "flex", marginTop: "52px"}}>Lista de Contatos</h2>
        <Link to="/add">
            <button className="ui button blue" style={{float:"right", marginTop: "-46px"}}>Adicionar Contatos</button>
        </Link>
        <div className="ui celled list">{renderContactList}</div>
    </div>
    )};

export default ContactList;