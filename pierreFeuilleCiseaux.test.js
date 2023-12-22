const { obtenirChoixAleatoire, determinerGagnant } = require('./pierreFeuilleCiseaux');

describe('Pierre Feuille Ciseaux Jeu', () => {
    test('obtenirChoixAleatoire retourne pierre, feuille ou ciseaux', () => {
        const choix = obtenirChoixAleatoire();
        expect(['pierre', 'feuille', 'ciseaux']).toContain(choix);
    });

    test('determinerGagnant fonctionne correctement', () => {
        expect(determinerGagnant('pierre', 'ciseaux')).toBe('Joueur 1');
        expect(determinerGagnant('ciseaux', 'feuille')).toBe('Joueur 1');
        expect(determinerGagnant('feuille', 'pierre')).toBe('Joueur 1');
        expect(determinerGagnant('ciseaux', 'pierre')).toBe('Joueur 2');
        expect(determinerGagnant('feuille', 'ciseaux')).toBe('Joueur 2');
        expect(determinerGagnant('pierre', 'feuille')).toBe('Joueur 2');
        expect(determinerGagnant('pierre', 'pierre')).toBe('Égalité');
        expect(determinerGagnant('feuille', 'feuille')).toBe('Égalité');
        expect(determinerGagnant('ciseaux', 'ciseaux')).toBe('Égalité');
    });
});
