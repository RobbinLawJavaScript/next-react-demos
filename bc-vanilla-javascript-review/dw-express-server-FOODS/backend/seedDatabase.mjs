import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';

const prisma = new PrismaClient();

async function seedData() {
  try {
    // Read the contents of the JSON file
    const data = await fs.readFile('foods.json', 'utf-8');
    const items = JSON.parse(data);

    // Create item postings in the database
    for (const item of items.all_foods) {
      await prisma.item.create({
        data: {
          name: item.name,
          category: item.category,
          rating: item.rating
        }
      });
    }

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the seedData function
seedData();