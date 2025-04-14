import prisma from "../../lib/prisma";

export async function POST(req) {
  try {
    const { productId, name, rating, comment } = await req.json();

    if (!productId || !name || !rating || !comment) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
      });
    }

    const review = await prisma.review.create({
      data: { productId, name, rating: parseInt(rating), comment },
    });

    return Response.json(review, { status: 201 });
  } catch (err) {
    console.error("Error posting review:", err);
    return new Response(JSON.stringify({ error: "Failed to post review" }), {
      status: 500,
    });
  }
}
