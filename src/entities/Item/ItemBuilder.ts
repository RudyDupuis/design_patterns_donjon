import Item from "./Item";
import ItemEntity from "./ItemEntity";

export default class ItemBuilder {
  private item: Partial<Item> = {};

  build(): Item {
    return new ItemEntity(
      this.item.name || "",
      this.item.adjective || "",
      this.item.size || "",
      this.item.weight || ""
    );
  }

  name(name: string): ItemBuilder {
    this.item.name = name;
    return this;
  }
  adjective(adjective: string): ItemBuilder {
    this.item.adjective = adjective;
    return this;
  }
  size(size: string): ItemBuilder {
    this.item.size = size;
    return this;
  }
  weight(weight: string): ItemBuilder {
    this.item.weight = weight;
    return this;
  }
}
