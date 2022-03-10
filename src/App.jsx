import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Accueil from './Accueil';
import Histoire from './Histoire';
import { authFirebase, authGoogle } from './firebase/init';
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

function App() {
  

  //si le panier est déja sauvegardé en localStorage, l'afficher, sinon ouvrir un panier vide
  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});

  const panier = etatPanier[0];
  //const setPanier = etatPanier[1];

  console.log("L'état panier: ", panier);

  // sauvegarder le panier dans LocalStorage
  // utiliser le hook useEffect pour executer ce code de facon controlée

  useEffect(() => window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier]);
  
  //État de l'utilisateur connecté
  const [util, setUtil] = useState(null);
  
  /**
   * Déclenche le processus d'authentification avec google auth provider
  */
  function connexion(){
    signInWithPopup(authFirebase, authGoogle).then(
      objetUtilGoogle => setUtil(objetUtilGoogle.user)
    );
  }

  //Attacher une observateur de chagement d'état de connexion
  useEffect(()=>onAuthStateChanged(authFirebase, user => setUtil(user)), []);

  return (
    <div className="App">
      {
        util ?
        <>
        <Entete util={util} setUtil={setUtil} panier={panier}/>
        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/notre-histoire' element={<Histoire/>}/>
          <Route path='/nos-produits' element={<ListeProduits etatPanier={etatPanier}/>}/>
        </Routes>
        <PiedPage />
        </>
      :
       <button onClick={connexion}>Connexion</button>
      }
    </div>
  );
}

export default App;
