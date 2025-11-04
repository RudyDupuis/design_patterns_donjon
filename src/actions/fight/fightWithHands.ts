import Monster from "../../entities/Monster/Monster";
import PlayerStatistics from "../../entities/PlayerStatistics/PlayerStatistics";

export default function fightWithHands(
  monster: Monster,
  playerStatistics: PlayerStatistics
): void {
  monster.takeDamage(playerStatistics.attack);
  console.log(
    `Vous infligez ${playerStatistics.attack} points de degats au monstre !\n`
  );
  console.log(`PV restants du monstre ${monster.name}: ${monster.health}\n`);
}
