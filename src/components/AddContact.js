import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div>
        <br /> <br />
        <h3>Adicionar Contato</h3>
        <form className="ui form">
          <div className="field">
            <label>Nome</label>
            <input type="text" name="nome" placeholder="Nome" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div className="field">
            <label>Telefone</label>
            <input type="email" name="telefone" placeholder="Telefone" />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" className="hidden" readOnly="" tabIndex="0" />
              <label>Pessoal</label>
            </div>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" className="hidden" readOnly="" tabIndex="0" />
              <label>Profissional</label>
            </div>
          </div>
          <button type="submit" className="ui button blue">
            Adicionar 
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
