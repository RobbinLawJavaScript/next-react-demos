import prisma from "@/prisma-backend-tools/localClient";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed, please use GET' });
  }
  try {
    const { q } = req.query;
    if (!q) {
      const items = await prisma.item.findMany();
      res.status(200).json(items);
      return
    }
    const items = await prisma.item.findMany({
      where:{
        OR: [
          { name: { contains: q } },
          { category: { contains: q } },
        ]
      }
    });
    res.status(200).json(items);
  } catch (error) {
    console.error('Error searching for items:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}

