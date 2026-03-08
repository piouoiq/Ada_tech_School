class Animaux {
  pelage: string;
  moyen_communication: string;
  nombre_membres: number;
  capacite: string;
  habitat: string;
  regime: string;
  gregaire: boolean;
  constructor(
    pelage: string,
    moyen_communication: string,
    nombre_membres: number,
    capacite: string,
    habitat: string,
    regime: string,
    gregaire: boolean,
  ) {
    this.pelage = pelage;
    this.moyen_communication = moyen_communication;
    this.nombre_membres = nombre_membres;
    this.capacite = capacite;
    this.habitat = habitat;
    this.regime = regime;
    this.gregaire = gregaire;
  }
}

class Mammifere extends Animaux {
  constructor(
    moyen_communication: string,
    nombre_membres: number,
    habitat: string,
    regime: string,
    gregaire: boolean,
  ) {
    super(
      "poils",
      moyen_communication,
      nombre_membres,
      "marcher",
      habitat,
      regime,
      gregaire,
    );
  }
}
