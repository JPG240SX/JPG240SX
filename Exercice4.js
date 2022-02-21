/**
 * Description: Exercice 4 Distance. Créer une classe point. Une seule méthode "distance(point)."
 * Auteur: Jean-Paul Généreux
 * Date 21 février 2022
 */

class point
{
    constructor(coordX, coordY)
    {
        this.coordX = coordX;
        this.coordY = coordY;
    }

    distance(autrePoint)
    {
        return Math.sqrt( (autrePoint.coordX - this.coordX)**2 + (autrePoint.coordY - this.coordY)**2  );
    }
}

class Cercle
{
    constructor(point, rayon)
    {
        this.point = point;
        this.rayon = rayon;
    }

    perimetre()
    {
        return 2 * 3.14 * this.rayon;
    }

    aire()
    {
        return 3.14 * (this.rayon ** 2);
    }
}

/**
 * Tests unitaires
 */
var point1 = new point(2, 2);
var point2 = new point(5, 6);

console.log("distance : " + point1.distance(point2));

//Arrondir à deux chiffres: Math.round(),2

var cercle1 = new Cercle(point1, 1);
var cercle2 = new Cercle(point2, 4);
console.log("Perimètre cercle 1: " + cercle1.perimetre());
console.log("Perimètre cercle 2: " + cercle2.perimetre());
console.log("Aire cercle 1: " + cercle1.aire());
console.log("Aire cercle 2: " + cercle2.aire());
//commentaire: 
