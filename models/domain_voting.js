import BaseLog from "./base_log";

export default class DomainVoting extends BaseLog {
  static getModelName() {
    return "DomainVoting";
  }

  static getSchema() {
    return new this.SchemaDefiner({
      wallet: { required: true, type: String },
      site: { required: true, type: String },
    });
  }
}
