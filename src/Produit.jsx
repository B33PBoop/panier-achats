import './Produit.scss';
import BoutonAjoutPanier from './BoutonAjoutPanier';

export default function Produit(props) {
    //Si l'article est dans le panier, afficher une pastille avec sa qte, sinon elle est 0 et rien ne s'affiche
    const [panier, setPanier] = props.etatPanier;

    let qte = 0;
    if(panier[props.pid]){
        qte = panier[props.pid].qte;
    }

    function ajouterAuPanier(){

        if(panier[props.pid]){
            panier[props.pid].qte++;
        }
        else {
            panier[props.pid] = {
                prix: props.prix,
                qte: 1
            };
        }
        console.log("le panier après ajout: ", panier);
        //Notifier React que le panier à changé:
        //Il faut cloner l'objet panier pour que React détecte que le panier a changé
        //setPanier(JSON.parse(JSON.stringify(panier))); Cette méthode clone le panier en temps que string, puis la retransforme en objet
        //setPanier(Object.assign({}, panier)); Cette méthode fait... quelque chose.
        setPanier({...panier});
    }

    return(
        <article className='Produit'>
            <img src={"images-produits/" + props.pid + ".webp"} alt= {props.nom} />
            <div className="titre">{props.nom}</div>
            <div className="prix">{props.prix}</div>
            <BoutonAjoutPanier qte={qte} onClick={ajouterAuPanier}/>                    
        </article>
    )
}
