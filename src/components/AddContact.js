import React from "react";

class AddContact extends React.Component {
  state = {
    nome: "",
    email: "",
    telefone: "",
    categoria: "",
  };

  add= (e) => {
    e.preventDefault();
    if(this.state.nome === "" & this.state.email === "" & this.state.telefone === ""){
      alert('Todos os campos são obrigatórios');
      return
    }
    this.props.addContactHandler(this.state)
    this.setState({nome: "", email: "", telefone: "", categoria: ""});
  }

  render() {
    return (
      <div className = "ui main">
        <h3 style={{marginTop: "58px"}}>Adicionar Contato</h3>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Nome</label>
            <input type="text" name="nome" placeholder="Nome" value={this.state.nome} onChange={ (e) => this.setState({nome: e.target.value})}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})}/>
          </div>
          <div className="field">
            <label>Telefone</label>
            <input type="text" name="telefone" placeholder="Telefone" value={this.state.telefone} onChange={ (e) => this.setState({telefone: e.target.value})}/>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" className="" readOnly="" tabIndex="0" name="pessoal" value={this.state.pessoal} onChange={ (e) => this.setState({pessoal: e.target.value})}/>
              <label>Pessoal</label>
            </div>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" className="" readOnly="" tabIndex="0" name="profissional" value={this.state.profissional} onChange={ (e) => this.setState({profissional: e.target.value})}/>
              <label>Profissional</label>
            </div>
          </div>
          <button className="ui button blue">
            Adicionar 
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
