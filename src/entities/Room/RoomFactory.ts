import Room from "./Room";
import RoomEntity from "./RoomEntity";
import { ROOM_NAMES } from "./RoomNames";

export default class RoomFactory {
  static getInitialRoom(): Room {
    return new RoomEntity("Entree du donjon", 3, 0, 0);
  }

  static getNextRoom(): Room {
    const randomNumberOfDoors = Math.floor(Math.random() * 3) + 1;
    const randomName =
      ROOM_NAMES[Math.floor(Math.random() * ROOM_NAMES.length)];
    const randomNumberOfItems = Math.floor(Math.random() * 3);
    const randomNumberOfMonsters = Math.floor(Math.random() * 2);
    return new RoomEntity(
      randomName,
      randomNumberOfDoors,
      randomNumberOfItems,
      randomNumberOfMonsters
    );
  }
}
