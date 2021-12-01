import React from "react";
import { Link } from "react-router-dom"
import user from  "../images/user.png"

const ContactDetail = (props) => {
    const {nome, email, telefone, categoria } = props.location.state.contact;
    return (
        <div style={{marginTop: "65px"}} className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{nome}</div>
                    <div className="description">Email: {email}</div>
                    <div className="description">Telefone: {telefone}</div>
                    <div className="description">Categoria: {categoria}</div>
                    <div className=""></div>
                </div>
            </div>
            <Link to={"/"}>
            <div style={{textAlign: "center"}} className="center-div">
                <button  className="ui button blue center">Voltar para lista de contatos</button>
            </div>
            </Link>
        </div>
    );
};

export default ContactDetail;

