import Item from "./Item";
import ItemEntity from "./ItemEntity";

export default class ItemBuilder {
  private item: Partial<Item> = {};

  build(): Item {
    return new ItemEntity(
      this.item.name || "",
      this.item.adjective || "",
      this.item.adjective2 || "",
      this.item.adjective3 || ""
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
  adjective2(size: string): ItemBuilder {
    this.item.adjective2 = size;
    return this;
  }
  adjective3(weight: string): ItemBuilder {
    this.item.adjective3 = weight;
    return this;
  }
}
