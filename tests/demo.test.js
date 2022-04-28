import should from "should"
import {calculerTVA} from "../index.js"
const produit1 = {name: 'Stylo', poids: 0.1, quantity: 10, prixHT: 3, tauxTVA: 5}
const produit2 = {name: 'Carnet', poids: 0.5, quantity: 5, prixHT: 10, tauxTVA: 15}
const produit3 = {name: 'Pochette', poids: 0.3, quantity: 3, prixHT: 5, tauxTVA: 10}

describe("Test de la fonction calculer la TVA",
    ()=> {
        it("Caluler la TVA avec un prix hors taxe positif",
            () =>{
            debugger

                should(calculerTVA(produit1)).be.equal(4)
            })
    })