// console.log("Hello world!");

class Personnage {
  pv: number;
  name: string;
  constructor(pv: number, name: string) {
    this.pv = pv;
    this.name = name;
  }

  attaque(cible: Personnage) {
    cible.pv -= 1;
    console.log(this.name + " attaque " + cible.name + " et lui enlève 1pv!");
  }
}

class Guerrier extends Personnage {
  constructor(degats: number) {
    super(10, "bebou");
  }
  //   pv: number;
  //   constructor(pv: number) {
  //     this.pv = pv;
  //   }
  //   attaque(cible: Monstre) {
  //     cible.pv -= 1;
  //     console.log(
  //       "Bebou attaque Anxieté et lui enlève 1PV !",
  //     );
  //     console.log(cible.pv);
  //   }
}

class Soigneur {
  pv: number;
  constructor(pv: number) {
    this.pv = pv;
  }
  soin(cible: Guerrier) {
    cible.pv += 1;
    console.log("Soigneur soigne bebou et lui redonne 1pv!");
  }
}

class Monstre extends Personnage {
  constructor() {
    super(10, "Anxieté");
  }
  //   pv: number;

  //   constructor(pv: number) {
  //     this.pv = pv;
  //   }
  //   attaque(cible: Guerrier | Soigneur) {
  //     cible.pv -= 1;
  //     console.log(
  //       "Anxiété attaque Bébou et lui enlève 1PV !",
  //     );
  //     console.log(cible.pv);
  //   }
}

const guerrier = new Guerrier();
const monstre = new Monstre();
const soigneur = new Soigneur(10);

guerrier.attaque(monstre);
monstre.attaque(guerrier);
// monstre.attaque(soigneur);

soigneur.soin(guerrier);
console.log(guerrier, monstre, soigneur);
