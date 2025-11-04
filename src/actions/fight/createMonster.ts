import ItemBuilder from "../../entities/Item/ItemBuilder";
import { ITEM_NAMES } from "../../entities/Item/ItemNames";
import DangerousMonster from "../../entities/Monster/DangerousMonster";
import HarmlessMonster from "../../entities/Monster/HarmlessMonster";
import LootableMonster from "../../entities/Monster/LootableMonster";
import Monster from "../../entities/Monster/Monster";
import { MONSTER_NAMES } from "../../entities/Monster/MonsterName";

export default function createMonster(): Monster {
  let monster = new HarmlessMonster(
    MONSTER_NAMES[Math.floor(Math.random() * MONSTER_NAMES.length)],
    Math.floor(Math.random() * 11) + 100
  );

  if (Math.random() < 0.5) {
    monster = new DangerousMonster(
      monster,
      Math.floor(Math.random() * 11) + 10
    );
  }

  if (Math.random() < 0.3) {
    const itemBuilder = new ItemBuilder();
    itemBuilder.name(ITEM_NAMES[Math.floor(Math.random() * ITEM_NAMES.length)]);
    itemBuilder.adjective("monstrueux");
    itemBuilder.size("moyen");
    itemBuilder.weight("leger");
    const lootItem = itemBuilder.build();
    monster = new LootableMonster(monster, lootItem);
  }

  return monster;
}
