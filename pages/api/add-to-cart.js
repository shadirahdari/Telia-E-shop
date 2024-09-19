let cart = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { phoneId } = req.body;

    if (+phoneId > 0) {
      cart.push(phoneId);
      return res.status(200).json({ message: "Phone added to cart", cart });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
