import Item from "../Item/Item";
import Monster from "./Monster";
import MonsterDecorator from "./MonsterDecorator";

export default class LootableMonster extends MonsterDecorator {
  public item: Item;

  constructor(monster: Monster, item: Item) {
    super(monster);
    this.item = item;
  }
}
