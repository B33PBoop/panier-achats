import './Produit.scss';
import BoutonAjoutPanier from './BoutonAjoutPanier';

export default function Produit({etatPanier : [panier, setPanier], nom, prix, pid}) {
    //Si l'article est dans le panier, afficher une pastille avec sa qte, sinon elle est 0 et rien ne s'affiche
    let qte = 0;
    if(panier[pid]){
        qte = panier[pid].qte;
    }

    function ajouterAuPanier(){

        if(panier[pid]){
            panier[pid].qte++;
        }
        else {
            panier[pid] = {
                prix: prix,
                qte: 1
            };
        }
        console.log("le panier après ajout: ", panier);
        //Notifier React que le panier à changé:
        //Il faut cloner l'objet panier pour que React détecte que le panier a changé
        //setPanier(JSON.parse(JSON.stringify(panier))); Cette méthode clone le panier en temps que string, puis la retransforme en objet
        //setPanier(Object.assign({}, panier)); Cette méthode fait... quelque chose.
        //La méthode ci-dessous utilise le Spread Operator (look it up)
        setPanier({...panier});
    }

    return(
        <article className='Produit'>
            <img src={"images-produits/" + pid + ".webp"} alt= {nom} />
            <div className="titre">{nom}</div>
            <div className="prix">{prix}</div>
            <BoutonAjoutPanier qte={qte} onClick={ajouterAuPanier}/>                    
        </article>
    )
}
