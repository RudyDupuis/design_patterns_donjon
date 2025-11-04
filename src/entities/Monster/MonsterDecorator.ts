import Monster from "./Monster";

export default class MonsterDecorator implements Monster {
  protected monster: Monster;

  constructor(monster: Monster) {
    this.monster = monster;
  }

  get name(): string {
    return this.monster.name;
  }

  get health(): number {
    return this.monster.health;
  }

  takeDamage(damage: number): void {
    this.monster.takeDamage(damage);
  }
}
