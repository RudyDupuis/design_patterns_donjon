import PlayerStatistics from "./PlayerStatistics";

export default class PlayerStatisticsEntity implements PlayerStatistics {
  health: number;
  attack: number;

  constructor(health: number, attack: number) {
    this.health = health;
    this.attack = attack;
  }
}
