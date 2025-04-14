import prisma from "../../lib/prisma";

export async function GET() {
  try {
    const items = await prisma.cartItem.findMany();
    return Response.json(items);
  } catch (err) {
    console.error("GET /api/cart error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch cart" }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const { productId, name, price } = await req.json();

    const existing = await prisma.cartItem.findFirst({ where: { productId } });

    let updatedItem;
    if (existing) {
      updatedItem = await prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: { increment: 1 } },
      });
    } else {
      updatedItem = await prisma.cartItem.create({
        data: {
          productId,
          name,
          price: parseFloat(price),
          quantity: 1,
        },
      });
    }

    return Response.json(updatedItem, { status: 201 });
  } catch (err) {
    console.error("POST /api/cart error:", err);
    return new Response(JSON.stringify({ error: "Failed to add item to cart" }), {
      status: 500,
    });
  }
}
