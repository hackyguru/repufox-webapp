import DomainVoting from "../../../models/domain_voting";
import Helper from "../../../utils/helpers";
import Wallet from "../../../utils/wallet";

export default async function handler(req, res) {
  let data = {
    _id: Helper.random(32),
    wallet: Wallet.getWallet(),
    site: req.query.site,
    trust: parseInt(req.query.trust),
    performance: parseInt(req.query.performance),
    reviews: parseInt(req.query.reviews),
    decentralization: parseInt(req.query.decentralization),
  };

  let log_id = await DomainVoting.insertLog(data);
  let doc = await DomainVoting.insert({ ...data, log_id });

  res.status(200).json({
    status: "success",
  });
}
