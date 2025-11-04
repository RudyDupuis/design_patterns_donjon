import DangerousMonster from "../../entities/Monster/DangerousMonster";
import Monster from "../../entities/Monster/Monster";
import PlayerStatistics from "../../entities/PlayerStatistics/PlayerStatistics";

export default function monsterAttack(
  monster: DangerousMonster,
  playerStatistics: PlayerStatistics
): void {
  playerStatistics.health -= monster.attackPower;
  console.log(
    `Le monstre ${monster.name} vous attaque et inflige ${monster.attackPower} points de degats!\n`
  );
  console.log(`Vos PV restants: ${playerStatistics.health}\n`);

  if (playerStatistics.health <= 0) {
    console.log("Vous avez ete vaincu... Game Over!\n");
    process.exit(0);
  }
}
