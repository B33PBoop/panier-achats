import "./ListeProduits.scss";
import Produit from "./Produit";
import { useState, useEffect } from "react";
import { bdFirestore } from "./firebase/init";
import { collection, getDocs } from "firebase/firestore";


export default function ListeProduits({etatPanier}){
    //Variable d'état des produits
    const [produits, setProduits] = useState([]);

    //Obtenir les produits de la collection Firestore
    useEffect(function() {
        // obtenir tout les documents de la collection 'Mag-gen-produits'
        getDocs(collection(bdFirestore, 'Mag-gen-produits')).then(
            qs => setProduits(qs.docs.map(doc => ({id:doc.id, ...doc.data()})))
        );
    }, [])
    
    return(
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {
                    produits.map(p => <Produit etatPanier= {etatPanier} key={p.id} nom = {p.nom} prix={p.prix} pid={p.id} />)
                }
            </div>
        </section>
    );
}