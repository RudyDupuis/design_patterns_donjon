import Clonable from "../../interfaces/Clonable";
import Item from "./Item";

export default class ItemEntity implements Item, Clonable<Item> {
  name: string;
  adjective: string;
  size: string;
  weight: string;

  constructor(name: string, adjective: string, size: string, weight: string) {
    this.name = name;
    this.adjective = adjective;
    this.size = size;
    this.weight = weight;
  }

  displayDescription(): void {
    console.log(
      `${this.name} ${this.adjective}.\n` +
        `Cet objet ${this.size} semble ${this.weight}.\n`
    );
  }

  // C'est juste pour ajouter un pattern design supplémentaire ^^'
  clone(): Item {
    return new ItemEntity(this.name, this.adjective, this.size, this.weight);
  }
}
