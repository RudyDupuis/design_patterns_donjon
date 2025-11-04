import Item from "../Item/Item";
import Inventory from "./Inventory";

export default class InventoryEntity implements Inventory {
  items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  removeItem(item: Item): void {
    this.items = this.items.filter((i) => i !== item);
  }

  getRandomItem(): Item | null {
    if (this.items.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * this.items.length);
    return this.items[randomIndex];
  }

  displayItems(): void {
    if (this.items.length === 0) {
      console.log("Votre inventaire est vide.\n");
      return;
    }

    console.log(`${this.items.length} items dans votre inventaire: \n`);
    this.items.forEach((item) => {
      item.displayDescription();
    });
  }
}
