import Item from "../Item/Item";

export default interface Inventory {
  items: Item[];
  addItem(item: Item): void;
  removeItem(item: Item): void;
  getRandomItem(): Item | null;
  displayItems(): void;
}
