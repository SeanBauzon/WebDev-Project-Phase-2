import prisma from "../../lib/prisma";

export async function GET() {
  try {
    const items = await prisma.wishlistItem.findMany();
    return Response.json(items);
  } catch (err) {
    console.error("Error in GET /api/wishlist:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { productId, name, description } = body;

    if (!productId || !name) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const exists = await prisma.wishlistItem.findUnique({
      where: { productId },
    });

    if (exists) {
      return new Response(JSON.stringify({ error: "Item already in wishlist" }), { status: 400 });
    }

    const newItem = await prisma.wishlistItem.create({
      data: { productId, name, description },
    });

    return Response.json(newItem, { status: 201 });
  } catch (err) {
    console.error("Error in POST /api/wishlist:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { productId } = await req.json();

    if (!productId) {
      return new Response(JSON.stringify({ error: "Missing productId" }), { status: 400 });
    }

    await prisma.wishlistItem.delete({
      where: { productId },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Error in DELETE /api/wishlist:", err);
    return new Response(JSON.stringify({ error: "Failed to delete item" }), { status: 500 });
  }
}
