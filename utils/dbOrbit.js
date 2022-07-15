import OrbitInitializer from "./orbitInitializer";

const orbitDb = await OrbitInitializer.getInstance();

const options = {
  // Give write access to everyone
  accessController: {
    write: ["*"],
  },
};

const db = await orbitDb.docs("first-database", options);
await db.load();
console.log("DB ADDRESS:      " + db.address.toString());

export default db;
