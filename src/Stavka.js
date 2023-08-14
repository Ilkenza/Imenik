import React from 'react';

const Stavka = ({ ime, brojTelefona, obrisiStavku }) => {
  return (
    <div className="stavka">
      <p>{ime} - {brojTelefona}</p>
      <button onClick={obrisiStavku}>Obriši</button>
    </div>
  );
}

export default Stavka;
