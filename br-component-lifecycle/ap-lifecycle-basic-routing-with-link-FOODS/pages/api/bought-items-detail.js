import prisma from "@/prisma-backend-tools/localClient";

export default async function handler(req, res) {
  try {
    // Fetch all bought item records from the database
    // also get the nested item details.
    const boughtItems = await prisma.boughtItem.findMany({
      include: {
        item: true,
      },
    });
    res.json(boughtItems);
  } catch (error) {
    console.error('Error fetching bought items:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}
