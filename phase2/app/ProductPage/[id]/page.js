// app/ProductPage/[id]/page.jsx
import prisma from "../../lib/prisma";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductDetails from "../../components/ProductDetails";

export default async function ProductPage({ params }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  });

  return (
    <>
    <div className="bg-blue-400 min-h-screen flex flex-col">
      <Navbar />
      <ProductDetails product={product} />
      <Footer />
    </div>
    </>
  );
}
