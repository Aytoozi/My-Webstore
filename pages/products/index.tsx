import exp from "constants";
import Link from "next/link";

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductsProps {
    products: Product[];
}

export default function Products({ products }: ProductsProps) {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Products</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cls-3 gap-4">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="p-4 border rounded shadow bg-white"
                    >
                        <Link href={`/products/${product.id}`}>
                            <a className="block">
                                <h2 className="text-lg font-semibold">
                                    {product.name}
                                </h2>
                                <p className="mt-2 text-gray-600">
                                    {product.price}
                                </p>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/products");
    const products: Product[] = await res.json();

    return{
        props:{
            products,
        },
    };
}
