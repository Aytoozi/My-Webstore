import {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse){
    const products = [
        {id: 1, name: "Product 1", price: 50},
        {id: 2, name: "Product 2", price: 70},
        {id: 3, name: "Product 3", price: 30}, 
    ];
    res. status(200).json(products);
}