import Room from "./Room";

export default class RoomEntity implements Room {
  name: string;
  nbDoors: number;
  nbItems: number;
  nbMonsters: number;

  constructor(name: string, doors: number, items: number, monsters: number) {
    this.name = name;
    this.nbDoors = doors;
    this.nbItems = items;
    this.nbMonsters = monsters;
  }

  displayInfo(): void {
    console.log(
      `🚪 Vous etes dans la ${this.name} avec ${this.nbDoors} porte(s).\n`
    );
  }
}
