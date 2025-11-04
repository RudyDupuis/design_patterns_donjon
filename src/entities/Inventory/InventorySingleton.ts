import InventoryEntity from "./InventoryEntity";

export default class InventorySingleton {
  private static instance: InventoryEntity;
  static getInstance(): InventoryEntity {
    if (!InventorySingleton.instance) {
      InventorySingleton.instance = new InventoryEntity();
    }
    return InventorySingleton.instance;
  }
}
