export default interface Monster {
  name: string;
  health: number;
  takeDamage(damage: number): void;
}
