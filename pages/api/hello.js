import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    res.status(200).json({ name: "Hi Fran! This is your gated WP Content page here! Stoked" });
  } else {
    res.status(401).json({ error: "Don't come in here without your ID" });
  }
}
