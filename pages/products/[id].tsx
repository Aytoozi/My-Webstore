import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-2 text-gray-700">Price: ${product.price}</p>
            <button
                onClick={() => alert("Added to cart!")}
                className="mt-4 px-4 py-2 bg-blue-500 text-whiet rounded hover:bg-blue-600"
            >
                Add to Cart
            </button>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const products: Product[] = await res.json();

    const paths = products.map((product) => ({
        params: { id: product.id.toString() },
    }));
    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch("http://localhost/api/procuts");
    const products: Product[] = await res.json();
    const product = products.find((p) => p.id.toString() === params?.id);

    return { props: { product } };
};
