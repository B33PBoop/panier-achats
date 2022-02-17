import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import { useState } from 'react';

function App() {

  const etatPanier = useState({});
  const panier = etatPanier[0];
  //const setPanier = etatPanier[1];

  console.log("L'état panier: ", panier);

  const[compteur, setCompteur] = useState(0);

  return (
    <div className="App">
      <Entete panier={panier}/>
      <ListeProduits etatPanier={etatPanier}/>
      <div>
        <span>Nombres de clicks : {compteur}</span>
        <button onClick={() => setCompteur(compteur+1)}>cliquez moi</button>
      </div>
      <PiedPage />
    </div>
  );
}

export default App;
