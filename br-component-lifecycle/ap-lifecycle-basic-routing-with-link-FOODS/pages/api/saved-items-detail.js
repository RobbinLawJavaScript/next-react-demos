import prisma from "@/prisma-backend-tools/localClient";

export default async function handler(req, res) {
  try {
    // Fetch all saved item records from the database
    // also get the nested item details.
    const savedItems = await prisma.savedItem.findMany({
      include: {
        item: true,
      },
    });
    res.json(savedItems);
  } catch (error) {
    console.error('Error fetching saved items:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}
