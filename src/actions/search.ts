import * as readlineSync from "readline-sync";
import { ITEM_NAMES } from "../entities/Item/ItemNames";
import ItemBuilder from "../entities/Item/ItemBuilder";
import InventorySingleton from "../entities/Inventory/InventorySingleton";
import Room from "../entities/Room/Room";
import { ITEM_ADJECTIVES } from "../entities/Item/ItemAdjectives";

export default function search(currentRoom: Room): void {
  if (currentRoom.nbItems === 0) {
    console.log("Vous n'avez trouve aucun item dans cette piece.\n");
    return;
  }

  const foundItem = ITEM_NAMES[Math.floor(Math.random() * ITEM_NAMES.length)];
  console.log(`◻️ Vous avez trouve un(e) ${foundItem}!\n`);
  currentRoom.nbItems -= 1;

  const itemBuilder = new ItemBuilder();
  itemBuilder.name(foundItem);

  const adjective = readlineSync.question(
    `Choisissez un adjectif pour decrire l'item ${foundItem}: `
  );
  console.log("\n");
  itemBuilder.adjective(adjective);

  itemBuilder.adjective2(
    ITEM_ADJECTIVES[Math.floor(Math.random() * ITEM_ADJECTIVES.length)]
  );
  itemBuilder.adjective3(
    ITEM_ADJECTIVES[Math.floor(Math.random() * ITEM_ADJECTIVES.length)]
  );

  const item = itemBuilder.build();
  const inventory = InventorySingleton.getInstance();
  inventory.addItem(item);
  console.log(`✅ L'item ${foundItem} a ete ajoute a votre inventaire.\n`);
}
