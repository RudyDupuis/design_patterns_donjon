import Clonable from "../../interfaces/Clonable";
import Item from "./Item";

export default class ItemEntity implements Item, Clonable<Item> {
  name: string;
  adjective: string;
  adjective2: string;
  adjective3: string;

  constructor(name: string, adjective: string, size: string, weight: string) {
    this.name = name;
    this.adjective = adjective;
    this.adjective2 = size;
    this.adjective3 = weight;
  }

  displayDescription(): void {
    console.log(
      `${this.name} ${this.adjective}.\n` +
        `Cet objet ${this.adjective2} semble ${this.adjective3}.\n`
    );
  }

  // C'est juste pour ajouter un pattern design supplementaire ^^'
  clone(): Item {
    return new ItemEntity(
      this.name,
      this.adjective,
      this.adjective2,
      this.adjective3
    );
  }
}
