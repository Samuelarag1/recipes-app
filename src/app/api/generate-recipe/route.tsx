// src/pages/api/generate-recipe.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { ingredients } = req.body;

      // Lógica para generar una receta
      const recipe = `Recipe for ${ingredients.join(", ")}`;

      res.status(200).json({ recipe });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
