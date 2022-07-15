import OrbitInitializer from "./orbitInitializer";

const orbitDb = await OrbitInitializer.getInstance();

console.log(orbitDb);

const options = {
  // Give write access to everyone
  accessController: {
    write: ["*"],
  },
};

const db = await orbitDb.log("thirdscan_test", options);
await db.load();

console.log("DB ADDRESS Log:      " + db.address.toString());

export default db;
