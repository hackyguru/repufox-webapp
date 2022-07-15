import db from "../utils/dbOrbitLog";
import Base from "./base";

export default class BaseLog extends Base {
  static async insertLog(data) {
    await db.add(data, { pin: true });
  }

  static async findLog(hash) {
    return await db.get(hash);
  }

  static async allLogs() {
    return await db.iterator({ limit: -1 }).collect();
  }
}
