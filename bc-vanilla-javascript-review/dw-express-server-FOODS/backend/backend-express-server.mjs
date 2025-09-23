import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

// create a new prisma orm client
const prisma = new PrismaClient();

// create the backend webserver
const app = express();

// enable cors
app.use(cors());

// read json body in response
app.use(express.json());

// Define routes and middleware here...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// GET endpoint to list items and search for items
app.get('/items', async (req, res) => {
  try {

    const { q } = req.query;
    
    if (!q) {
    
      const items = await prisma.item.findMany();
      res.json(items);
      return
    }

    // Construct the query based on the provided parameters
    const items = await prisma.item.findMany({
      where:{
        OR: [
          { name: { contains: q } },
          { category: { contains: q } },
        ]
      }
    });

    res.json(items);
  } catch (error) {
    console.error('Error searching for items:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});

// GET endpoint to fetch a single item by id
app.get('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const item = await prisma.item.findUnique({
      where: {
        id: parseInt(id)
      }
    });

    if (!item) {
      res.status(404).json({ error: 'Item not found' });
      return;
    }

    res.json(item);
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
})

// GET endpoint to list saved-items and search for saved-items
app.get('/saved-items', async (req, res) => {
  try {

    const { q } = req.query;
    
    if (!q) {
    
      const savedItems = await prisma.savedItem.findMany();
      res.json(savedItems);
      return
    }

    // Construct the query based on the provided parameters
    const savedItems = await prisma.savedItem.findMany({
      where:{ 
        itemId: parseInt(q)
      }
    });

    res.json(savedItems);
  } catch (error) {
    console.error('Error searching for items:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});

// GET endpoint to fetch a single saved-item by itemId
app.get('/saved-items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const savedItem = await prisma.savedItem.findUnique({
      where: {
        itemId: parseInt(id)
      }
    });

    if (!savedItem) {
      res.status(404).json({ error: 'saved-item not found' });
      return;
    }

    res.json(savedItem);
  } catch (error) {
    console.error('Error fetching saved-item:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
})

// POST endpoint to save a item
app.post('/saved-items', async (req, res) => {
  try {
    // parse the body of the request
    const { itemId } = req.body;

    // Create a new saved item record in the database
    const savedItem = await prisma.savedItem.create({
      data: {
        itemId: parseInt(itemId),
      },
    });

    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error saving saved-item:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});

// DELETE endpoint to delete a single saved-item by id
app.delete('/saved-items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const savedItem = await prisma.savedItem.findUnique({
      where: {
        id: parseInt(id)
      }
    });

    if (!savedItem) {
      console.log(`saved-item with ID ${id} not found, no deletion performed.`);
      res.status(404).json({ error: 'saved-item not found' });
      return;
    }
    if (savedItem) {
      const deletedItem = await prisma.savedItem.delete({
        where: {
          id: parseInt(id)
        }
      });
      if (deletedItem) {
        res.status(200).json({ message: 'saved-item deleted successfully.' });
        console.log(`saved-item with ID ${id} deleted successfully.`);
      } else {
        res.status(500).json({ message: 'saved-item NOT deleted successfully.' });
        console.log(`saved-item with ID ${id} NOT deleted successfully.`);
      }
    }
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
})

