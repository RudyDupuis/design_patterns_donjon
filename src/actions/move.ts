import * as readlineSync from "readline-sync";
import Room from "../entities/Room/Room";
import RoomFactory from "../entities/Room/RoomFactory";

export default function move(currentRoom: Room): Room {
  ["Aller de l'avant", "Aller a gauche", "Aller a droite"]
    .sort(() => Math.random() - 0.5)
    .slice(0, currentRoom.nbDoors)
    .forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });

  readlineSync.question("Entrez votre choix (1-3): ");
  console.log("\n");

  return RoomFactory.getNextRoom();
}
