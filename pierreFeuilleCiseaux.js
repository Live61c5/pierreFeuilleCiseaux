function obtenirChoixAleatoire() {
    const choix = ['pierre', 'feuille', 'ciseaux'];
    return choix[Math.floor(Math.random() * choix.length)];
}

function determinerGagnant(choixJoueur1, choixJoueur2) {
    if (choixJoueur1 === choixJoueur2) {
        return "Égalité";
    } else if (
        (choixJoueur1 === 'pierre' && choixJoueur2 === 'ciseaux') ||
        (choixJoueur1 === 'feuille' && choixJoueur2 === 'pierre') ||
        (choixJoueur1 === 'ciseaux' && choixJoueur2 === 'feuille')
    ) {
        return "Joueur 1";
    } else {
        return "Joueur 2";
    }
}

function jouerPierreFeuilleCiseaux() {
    let scoreJoueur1 = 0;
    let scoreJoueur2 = 0;
    let manche = 0;

    while (manche < 3 && scoreJoueur1 < 2 && scoreJoueur2 < 2) {
        const choixJoueur1 = obtenirChoixAleatoire();
        const choixJoueur2 = obtenirChoixAleatoire();
        const gagnant = determinerGagnant(choixJoueur1, choixJoueur2);

        console.log(`Manche ${manche + 1}: Joueur 1 choisit ${choixJoueur1}, Joueur 2 choisit ${choixJoueur2}. Résultat: ${gagnant}`);

        if (gagnant === "Joueur 1") {
            scoreJoueur1++;
        } else if (gagnant === "Joueur 2") {
            scoreJoueur2++;
        }

        manche++;
    }

    if (scoreJoueur1 > scoreJoueur2) {
        console.log("Joueur 1 remporte la partie !");
    } else {
        console.log("Joueur 2 remporte la partie !");
    }
}

jouerPierreFeuilleCiseaux();
module.exports = { obtenirChoixAleatoire, determinerGagnant, jouerPierreFeuilleCiseaux };