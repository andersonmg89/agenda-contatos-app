import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui container">
        <br /> <br />
        <h3>Adicionar Contato</h3>
        <form class="ui form">
          <div class="field">
            <label>Nome</label>
            <input type="text" name="nome" placeholder="Nome" />
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div class="field">
            <label>Telefone</label>
            <input type="email" name="telefone" placeholder="Telefone" />
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <label>Pessoal</label>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <label>Profissional</label>
            </div>
          </div>
          <button type="submit" class="ui button blue">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
