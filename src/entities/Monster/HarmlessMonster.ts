import Monster from "./Monster";

export default class HarmlessMonster implements Monster {
  name: string;
  health: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }

  takeDamage(damage: number): void {
    this.health -= damage;
  }
}
