import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { SiweMessage } from "siwe";
import ironOptions from "../../utils/ironOptions";
import Explorer from "../../utils/explorer";

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const { message, signature } = req.body;
        const siweMessage = new SiweMessage(message);
        const fields = await siweMessage.validate(signature);

        if (fields.nonce !== req.session.nonce)
          return res.status(422).json({ message: "Invalid nonce." });

        req.session.siwe = fields;

        const { data } = await Explorer.getDetails(req.session.siwe?.address);

        req.session.address = data.ETH;
        req.session.address.countTxs = data.countTxs;

        await req.session.save();

        res.json({ ok: true });
      } catch (_error) {
        console.log(_error)
        res.json({ ok: false });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default withIronSessionApiRoute(handler, ironOptions);
