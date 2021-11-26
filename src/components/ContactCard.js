import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
    const {id, nome, email, telefone, categoria} = props.contact;
    return(
        <div className="ui item">
            <img style={{marginTop: "16px", marginRight: "8px"}} className="ui avatar image" src={user} />
            <div style={{marginTop: "12px", marginBottom: "12px"}} className="content">
                <div className="header">Nome: {nome}</div>
                <div>Email: {email}</div>
                <div>Telefone: {telefone}</div>
                <div>categoria: {categoria}</div>
            </div>
            <i style={{float:"right", marginTop: "32px"}} className="ui large icons trash alternate outline icon red" onClick = {() => props.clickHandler(id)}></i>
        </div>
    );
};

export default ContactCard;