import db from "../utils/dbOrbit";

export default class Base {
  static SchemaDefiner = (data) => data;

  //should be extended
  static getModelName() {
    return "Base";
  }

  //should be extended
  static getSchema() {
    return new this.SchemaDefiner({
      id: { required: true, type: Number },
    });
  }

  static async insert(data) {
    await db.put(data, { pin: true });
  }

  static async find(query) {
    return await db.get(query);
  }

  static async query(query) {
    return await db.query(query);
  }

  static async all() {
    return await db.get("");
  }
}
