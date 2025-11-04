export default interface Room {
  name: string;
  nbDoors: number;
  nbItems: number;
  nbMonsters: number;
  displayInfo(): void;
}
