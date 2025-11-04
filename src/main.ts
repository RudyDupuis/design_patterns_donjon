import * as readlineSync from "readline-sync";
import move from "./actions/move";
import search from "./actions/search";
import RoomFactory from "./entities/Room/RoomFactory";
import InventorySingleton from "./entities/Inventory/InventorySingleton";
import fightFacade from "./actions/fight/fightFacade";

console.log("Vous entrez dans le donjon sombre et dangereux...\n");
console.log(
  "Votre objectif est de survivre et de collecter 20 objets precieux... Bon courage !\n"
);

let currentRoom = RoomFactory.getInitialRoom();
let gameOver = false;

while (!gameOver) {
  if (InventorySingleton.getInstance().items.length >= 20) {
    console.log(
      "Felicitation! Vous avez collecte 20 objets precieux et avez reussi a sortir du donjon en vie!\n"
    );
    process.exit(0);
  }

  currentRoom.displayInfo();

  if (currentRoom.nbMonsters > 0) {
    fightFacade(currentRoom);
  }

  console.log("1. Avancer");
  console.log("2. Chercher");
  console.log("3. Consulter l'inventaire");
  console.log("4. Abandonner le donjon");

  const choice = readlineSync.question("Entrez votre choix (1-4): ");

  console.log("\n");
  switch (choice) {
    case "1":
      currentRoom = move(currentRoom);
      break;
    case "2":
      search(currentRoom);
      break;
    case "3":
      const inventory = InventorySingleton.getInstance();
      inventory.displayItems();
      break;
    case "4":
      console.log("Vous fuyez le donjon en courant...\n");
      gameOver = true;
      break;
    default:
      console.log("Choix invalide. Veuillez reessayer.\n");
  }
}
