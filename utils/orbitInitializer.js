import { create as IPFS_create } from "ipfs";
import OrbitDB from "orbit-db";

class OrbitInitializer {
  instance = false;

  async createInstance() {
    const ipfsOptions = { repo: "./ipfs" };

    const ipfs = await IPFS_create(ipfsOptions);
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
