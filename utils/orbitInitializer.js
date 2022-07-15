import { create as IPFS_create } from "ipfs";
import OrbitDB from "orbit-db";

class OrbitInitializer {
  instance = false;

  async createInstance() {
    console.log();
    const ipfsOptions = { repo: "./ipfs" };
    console.log("CREATING IPFS INSTANCE");

    const ipfs = await IPFS_create(ipfsOptions);
    console.log("OBJECT CREATING");
    return await OrbitDB.createInstance(ipfs, {});
  }

  async getInstance() {
    if (!this.instance) {
      this.instance = await this.createInstance();
    }

    return this.instance;
  }
}

let instance = global.orbitInitializer;

if (!instance) {
  instance = new OrbitInitializer();
  await instance.getInstance();
  Object.freeze(instance);

  global.orbitInitializer = instance;
}

export default instance;
