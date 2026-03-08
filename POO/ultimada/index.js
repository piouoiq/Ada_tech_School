// console.log("Hello world!");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personnage = /** @class */ (function () {
    function Personnage(pv, name) {
        this.pv = pv;
        this.name = name;
    }
    Personnage.prototype.attaque = function (cible) {
        cible.pv -= 1;
        console.log(this.name + " attaque " + cible.name + " et lui enlève 1pv!");
    };
    return Personnage;
}());
var Guerrier = /** @class */ (function (_super) {
    __extends(Guerrier, _super);
    function Guerrier() {
        return _super.call(this, 10, "bebou") || this;
    }
    return Guerrier;
}(Personnage));
var Soigneur = /** @class */ (function () {
    function Soigneur(pv) {
        this.pv = pv;
    }
    Soigneur.prototype.soin = function (cible) {
        cible.pv += 1;
        console.log("Soigneur soigne bebou et lui redonne 1pv!");
    };
    return Soigneur;
}());
var Monstre = /** @class */ (function (_super) {
    __extends(Monstre, _super);
    function Monstre() {
        return _super.call(this, 10, "Anxieté") || this;
    }
    return Monstre;
}(Personnage));
var guerrier = new Guerrier();
var monstre = new Monstre();
var soigneur = new Soigneur(10);
guerrier.attaque(monstre);
monstre.attaque(guerrier);
// monstre.attaque(soigneur);
soigneur.soin(guerrier);
console.log(guerrier, monstre, soigneur);
