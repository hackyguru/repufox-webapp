import DomainVoting from "../../../../models/domain_voting";
import Helper from "../../../../utils/helpers";

export default async function handler(req, res) {
  const { site } = req.query;

  if (!Helper.isValidDomain(site)) {
    return res.status(422).json({ error: "Please enter a valid domain" });
  }

  res.status(200).json({
    data: await DomainVoting.query((vote) => vote.site === site),
  });
}
