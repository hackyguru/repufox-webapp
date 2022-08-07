import DomainVoting from "../../../../models/domain_voting";
import Helper from "../../../../utils/helpers";
import corsMiddleware from "../../../../utils/corsMiddleware"

export default async function handler(req, res) {
  corsMiddleware(req, res);

  const { site } = req.query;

  console.log(site)
  if (!Helper.isValidDomain(site)) {
    return res.status(422).json({ error: "Please enter a valid domain" });
  }

  let data = await DomainVoting.query((vote) => vote.site === site);

  let score = 0;

  data.forEach((vote) => (score = vote.score));

  res.status(200).json({
    score,
  });
}
