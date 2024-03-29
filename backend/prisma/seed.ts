import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
 await prisma.user.upsert({
  where: { email: 'silva@email.com' },
  update: {},
  create: {
    name: 'Zé da Silva',
    email: 'silva@email.com',
  },
 })

}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
