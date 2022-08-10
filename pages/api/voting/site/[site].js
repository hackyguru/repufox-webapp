import DomainVoting from "../../../../models/domain_voting";
import Helper from "../../../../utils/helpers";
import corsMiddleware from "../../../../utils/corsMiddleware";

export default async function handler(req, res) {
  corsMiddleware(req, res);

  const { site } = req.query;

  if (!Helper.isValidDomain(site)) {
    return res.status(422).json({ error: "Please enter a valid domain" });
  }

  let data = await DomainVoting.query((vote) => vote.site === site);
  let logs = [];

  let score = {
    trust: 0,
    performance: 0,
    reviews: 0,
    decentralization: 0,
  };

  for (const vote of data.reverse()) {
    score = vote;
    logs.push(await DomainVoting.findLog(vote.log_id));
  }

  res.status(200).json({
    trust: score.trust,
    performance: score.performance,
    reviews: score.reviews,
    decentralization: score.decentralization,
    score:
      score.trust + score.performance + score.reviews + score.decentralization,
    logs,
  });
}
