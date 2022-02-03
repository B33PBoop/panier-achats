import './PiedPage.css';

export default function PiedPage() {
    return (
        // Les {} définissent une zone de JS, et la fonction a l'intérieur retourne l'année courante
        <footer>
            &copy;{new Date().getFullYear()} - TIM Maisonneuve - Tous droits réservés
        </footer>
    );
}