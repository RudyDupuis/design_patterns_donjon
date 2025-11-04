import PlayerStatistics from "./PlayerStatistics";
import PlayerStatisticsEntity from "./PlayerStatisticsEntity";

export default class PlayerStatisticsSingleton {
  private static instance: PlayerStatistics | null = null;

  public static getInstance(): PlayerStatistics {
    if (PlayerStatisticsSingleton.instance === null) {
      PlayerStatisticsSingleton.instance = new PlayerStatisticsEntity(500, 10);
    }
    return this.instance;
  }
}
