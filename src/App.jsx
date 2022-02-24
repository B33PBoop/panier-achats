import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  //si le panier est déja sauvegardé en localStorage, l'afficher, sinon ouvrir un panier vide
  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});

  const panier = etatPanier[0];
  //const setPanier = etatPanier[1];

  console.log("L'état panier: ", panier);

  const[compteur, setCompteur] = useState(0);

  // sauvegarder le panier dans LocalStorage
  // utiliser le hook useEffect pour executer ce code de facon controlée

  useEffect(() => window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier]);

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
