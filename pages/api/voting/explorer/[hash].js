import DomainVoting from "../../../../models/domain_voting";
import corsMiddleware from "../../../../utils/corsMiddleware";

export default async function handler(req, res) {
  corsMiddleware(req, res);

  const { hash } = req.query;

  let log = await DomainVoting.findLog(hash);

  res.status(200).json(log.hash === hash ? log : {});
}
