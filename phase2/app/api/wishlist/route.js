// app/api/wishlist/route.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const items = await prisma.wishlistItem.findMany();
  return Response.json(items);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { productId, name, description } = body;

    if (!productId || !name) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const exists = await prisma.wishlistItem.findUnique({
      where: { productId },
    });

    if (exists) {
      return new Response(
        JSON.stringify({ error: "Item already in wishlist" }),
        { status: 400 }
      );
    }

    const newItem = await prisma.wishlistItem.create({
      data: { productId, name, description },
    });

    return Response.json(newItem, { status: 201 });
  } catch (err) {
    console.error("❌ API error:", err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}
