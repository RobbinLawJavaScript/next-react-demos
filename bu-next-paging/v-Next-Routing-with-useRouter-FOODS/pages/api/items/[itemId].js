import prisma from "@/prisma-backend-tools/localClient";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed, please use GET' });
  }
  
  try {
    const { itemId } = req.query
    const item = await prisma.item.findUnique({
      where: {
        id: parseInt(itemId)
      }
    });
    if (!item) {
      res.status(404).json({ error: 'Item not found' });
      return;
    }
    res.status(200).json(item);
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}
