import axios from "./axios";

export default class Explorer {
  static async getDetails(address) {
    return await axios.post(
      `https://api.ethplorer.io/getAddressInfo/${address}?showETHTotals=true&apiKey=${process.env.ETHPLORER_KEY}`
    );
  }
}
