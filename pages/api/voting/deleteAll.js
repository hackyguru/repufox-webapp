import DomainVoting from "../../../models/domain_voting";

export default async function handler(req, res) {

    let docs = await DomainVoting.all();

    for (const doc of docs) {
        await DomainVoting.delete(doc._id);
    }

    res.status(200).json({
        status: "success",
    });
}
