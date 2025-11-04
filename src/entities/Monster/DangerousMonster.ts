import Monster from "./Monster";
import MonsterDecorator from "./MonsterDecorator";

export default class DangerousMonster extends MonsterDecorator {
  public attackPower: number;

  constructor(monster: Monster, attackPower: number) {
    super(monster);
    this.attackPower = attackPower;
  }
}
