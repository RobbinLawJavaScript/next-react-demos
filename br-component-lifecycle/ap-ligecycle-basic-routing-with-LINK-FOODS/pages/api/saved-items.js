import prisma from "@/prisma-backend-tools/localClient";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return await getSavedItems(req, res);
  } else if (req.method === 'POST') {
    return await postSavedItem(req, res);
  } else if (req.method === 'DELETE') {
    return await deleteSavedItem(req, res);
  } else {
    return res.status(405).json({ error: 'Method not allowed, please use GET' });
  }
}

const getSavedItems = async (req, res) => {
  try {
    const savedItems = await prisma.savedItem.findMany();
    res.json(savedItems);
  } catch (error) {
    console.error('Error fetching saved items:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}

const postSavedItem = async (req, res) => {
  try {
    const { itemId } = req.body;
    const savedItem = await prisma.savedItem.create({
      data: {
        itemId: parseInt(itemId),
      },
    });
    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}

const deleteSavedItem = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedItem = await prisma.savedItem.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(deletedItem);
  } catch (error) {
    console.error('Error deleting saved item:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}
