import DomainVoting from "../../../models/domain_voting";
import Wallet from "../../../utils/wallet";
import Helper from "../../../utils/helpers";

export default async function handler(req, res) {
  let data = {
    _id: Helper.random(32),
    wallet: Wallet.getWallet(),
    site: req.query.site,
  };
  res.status(200).json({
    status: "success",
    log: await DomainVoting.insertLog(data),
    docs: await DomainVoting.insert(data),
  });
}
