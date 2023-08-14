import React, { Component } from 'react';
import Stavka from './Stavka';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ime: '',
      brojTelefona: '',
      stavke: JSON.parse(localStorage.getItem('stavke')) || []
    };
  }

  dodajStavku = () => {
    const { ime, brojTelefona, stavke } = this.state;
    if (ime && brojTelefona) {
      const novaStavka = { ime, brojTelefona };
      stavke.push(novaStavka);
      localStorage.setItem('stavke', JSON.stringify(stavke));
      this.setState({ ime: '', brojTelefona: '', stavke });
    }
  }

  obrisiStavku = (index) => {
    const { stavke } = this.state;
    stavke.splice(index, 1);
    localStorage.setItem('stavke', JSON.stringify(stavke));
    this.setState({ stavke });
  }

  render() {
    const { ime, brojTelefona, stavke } = this.state;
    return (
      <div className="imenik">
        <h2>Imenik</h2>
        <div>
          <input type="text" placeholder="Ime" value={ime} onChange={(e) => this.setState({ ime: e.target.value })} />
          <input type="text" placeholder="Broj telefona" value={brojTelefona} onChange={(e) => this.setState({ brojTelefona: e.target.value })} />
          <button onClick={this.dodajStavku}>Dodaj</button>
        </div>
        <div className="stavke">
          {stavke.map((stavka, index) => (
            <Stavka key={index} ime={stavka.ime} brojTelefona={stavka.brojTelefona} obrisiStavku={() => this.obrisiStavku(index)} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
