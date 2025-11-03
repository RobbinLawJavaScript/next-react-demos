import prisma from "@/prisma-backend-tools/localClient";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return await getBoughtItems(req, res);
  } else if (req.method === 'POST') {
    return await postBoughtItem(req, res);
  } else if (req.method === 'DELETE') {
    return await deleteBoughtItem(req, res);
  } else {
    return res.status(405).json({ error: 'Method not allowed, please use GET' });
  }
}

const getBoughtItems = async (req, res) => {
  try {
    const savedItems = await prisma.boughtItem.findMany();
    res.json(savedItems);
  } catch (error) {
    console.error('Error fetching saved items:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}

const postBoughtItem = async (req, res) => {
  try {
    const { itemId, fullName } = req.body;
    const savedItem = await prisma.boughtItem.create({
      data: {
        itemId: parseInt(itemId),
        fullName: fullName
      },
    });
    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}

const deleteBoughtItem = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedItem = await prisma.boughtItem.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(deletedItem);
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}
