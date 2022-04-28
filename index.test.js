import {calculerTotal, calculerTVA} from "./index.js";
import {calculerFraisDePort} from "./index.js";

const produit1 = {name: 'Stylo', poids: 0.1, quantity: 10, prixHT: 3, tauxTVA: 5}

test('Calcul TVA égal à 4', () => {
    expect(calculerTVA(produit1)).toBe(4);
});

test('Calcul du frais de port égal à 8', () => {
    expect(calculerFraisDePort(produit1)).toBe(8);
});

test('Calcul du panier égal à 48', () => {
    expect(calculerTotal(produit1)).toBe(48);
});