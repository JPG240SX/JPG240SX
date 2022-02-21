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

/**
 * Tests unitaires
 */
var point1 = new point(2, 2);
var point2 = new point(5, 6);

console.log("distance : " + point1.distance(point2));

//console.log(point1);