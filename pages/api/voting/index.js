import DomainVoting from "../../../models/domain_voting";

export default async function handler(req, res) {
  res
    .status(200)
    .json(
      // log: await DomainVoting.allLogs(),
      await DomainVoting.all(),
    );
}
