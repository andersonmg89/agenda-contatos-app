import React from "react";

const ContactList = (props) => {
    console.log(props)

    const renderContactList = props.contacts.map((contact) => {
        return (
            <div className="ui item">
                <div style={{marginTop: "12px", marginBottom: "12px"}} className="content">
                    <div className="header">Nome: {contact.nome }</div>
                    <div>Email: {contact.email }</div>
                    <div>Telefone: {contact.telefone}</div>
                    <div>categoria: {contact.categoria["0"] }</div>
                </div>
                <i style={{float:"right", marginTop: "-57px"}} className="ui big icons trash alternate outline icon red" ></i>
            </div>
        );
    });
    return <div className="ui celled list">{renderContactList}</div>
};

export default ContactList;