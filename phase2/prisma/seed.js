import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    id: "1",
    name: "Gaming Monitor",
    description: "144Hz, 27-inch display",
    price: 249.99,
    image: "/images/GamingMonitor1.png",
    category: "Monitor",
  },
  {
    id: "2",
    name: "Flexy Keyboard",
    description: "Normal Keyboard",
    price: 89.99,
    image: "/images/Keyboard1.png",
    category: "Keyboard",
  },
  {
    id: "3",
    name: "Wireless Mouse",
    description: "Ergonomic and wireless",
    price: 49.99,
    image: "/images/Mouse1.png",
    category: "Mouse",
  },
  {
    id: "4",
    name: "Smartphone",
    description: "Latest model",
    price: 799.99,
    image: "/images/SmartPhone1.png",
    category: "Smartphone",
  },
  {
    id: "5",
    name: "Bluetooth Speaker",
    description: "Portable and waterproof",
    price: 99.99,
    image: "/images/Speaker1.png",
    category: "Speaker",
  },
];

async function main() {
  console.log("Seeding products");
  for (const product of products) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: {},
      create: product,
    });
  }
  console.log("Done seeding");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
