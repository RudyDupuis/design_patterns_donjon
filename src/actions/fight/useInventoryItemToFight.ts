import Inventory from "../../entities/Inventory/Inventory";
import Monster from "../../entities/Monster/Monster";

export default function useInventoryItemToFight(
  monster: Monster,
  inventory: Inventory
): void {
  const randomItem = inventory.getRandomItem();
  if (randomItem !== null) {
    inventory.removeItem(randomItem!);
    monster.takeDamage(50);
    console.log(
      `Vous utilisez ${randomItem.name} et infligez 50 points de degats au monstre !\n`
    );
    console.log(`PV restants du monstre ${monster.name}: ${monster.health}\n`);
    console.log(
      `L'objet ${randomItem.name} a ete retire de votre inventaire.\n`
    );
  } else {
    console.log(
      "Votre inventaire est vide. Vous ne pouvez pas utiliser d'objet.\n"
    );
  }
}
