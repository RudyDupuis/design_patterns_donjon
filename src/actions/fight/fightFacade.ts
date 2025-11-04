import * as readlineSync from "readline-sync";
import DangerousMonster from "../../entities/Monster/DangerousMonster";
import LootableMonster from "../../entities/Monster/LootableMonster";
import Room from "../../entities/Room/Room";
import PlayerStatisticsSingleton from "../../entities/PlayerStatistics/PlayerStatisticsSingleton";
import createMonster from "./createMonster";
import fightWithHands from "./fightWithHands";
import useInventoryItemToFight from "./useInventoryItemToFight";
import monsterAttack from "./monsterAttack";
import InventorySingleton from "../../entities/Inventory/InventorySingleton";

export default function fightFacade(currentRoom: Room): void {
  const playerStatistics = PlayerStatisticsSingleton.getInstance();
  const inventory = InventorySingleton.getInstance();
  console.log(`⚔️  ${currentRoom.nbMonsters} monstre(s) vous attaque(nt)!\n`);

  for (let i = 0; i < currentRoom.nbMonsters; i++) {
    const monster = createMonster();

    console.log(
      `Vous combattez le monstre ${monster.name} (PV: ${monster.health}) ${
        monster instanceof DangerousMonster
          ? "(Attaque: " + monster.attackPower + ")"
          : ""
      } ${
        monster instanceof LootableMonster
          ? "(Butin: " + monster.item.name + ")"
          : ""
      }\n`
    );

    while (monster.health > 0) {
      let validInput = false;
      while (!validInput) {
        console.log("1. Attaquer à main nue");
        console.log("2. Utiliser un objet de l'inventaire");

        const choice = readlineSync.question("Entrez votre choix (1-2): ");
        console.log("\n");

        switch (choice) {
          case "1":
            fightWithHands(monster, playerStatistics);
            validInput = true;
            break;
          case "2":
            useInventoryItemToFight(monster, inventory);
            validInput = true;
            break;
          default:
            console.log("Choix invalide. Veuillez reessayer.\n");
        }
      }

      if (monster.health > 0) {
        if (monster instanceof DangerousMonster) {
          monsterAttack(monster, playerStatistics);
        }
      } else {
        console.log(`Vous avez vaincu le monstre ${monster.name}!\n`);
        currentRoom.nbMonsters -= 1;
        if (monster instanceof LootableMonster) {
          console.log(
            `Vous avez obtenu un(e) ${monster.item.name} du monstre ${monster.name}!\n`
          );
          inventory.addItem(monster.item);
        }
      }
    }
  }
}
