import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';

const prisma = new PrismaClient();

async function seedData() {
  try {
    const data = await fs.readFile('./prisma-backend-tools/foods.json', 'utf-8');
    const foods = JSON.parse(data);

    for (const food of foods.all_foods) {
      await prisma.item.create({
        data: {
          name: food.name,
          date_posted: food.date_posted,
          category: food.category,
          rating: food.rating
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

seedData();