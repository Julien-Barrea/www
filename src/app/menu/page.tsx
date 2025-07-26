import { promises as fs } from 'fs';
import Image from "next/image";

interface Cocktail {
    name: string;
    image: string;
    ingredients: string[];
    method: string;
    garnish: string;
}

export default async function menu() {
    const file = await fs.readFile(process.cwd() + '/public/cocktails/cocktails.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Menu</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li>
                        <details>
                            <summary>Category</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Drinks</a></li>
                                <li><a>Food</a></li>
                            </ul>
                        </details>
                    </li>
                    </ul>
                </div>
            </div>

            <div className='py-5 px-3'>
                <h2 className='text-3xl mb-3'>Cocktails</h2>
                <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                    {data.map((cocktail : Cocktail) => (
                        <div key={cocktail.name} className="card bg-base-100 shadow-xl m-4">
                            <figure>
                                <Image src={`/cocktails/${cocktail.name.replaceAll(' ','_')}.webp`} alt={cocktail.name} width={452} height={660}/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{cocktail.name}</h2>
                                <ul>
                                    {cocktail.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                                <div className="card-actions justify-end mt-auto pt-4">
                                    <button className="btn btn-secondary">Order</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-5 px-3'>
                <h2 className='text-3xl mb-3'>Digestifs</h2>
                <ul className='list-disc list-inside pl-5'>
                    <li className='mb-2'>Rhum</li>
                    <li className='mb-2'>Baileys</li>
                </ul>
            </div>

            <div className='py-5 px-3'>
                <h2 className='text-3xl mb-3'>Softs</h2>
                <ul className='list-disc list-inside pl-5'>
                    <li className='mb-2'>Water</li>
                    <li className='mb-2'>Let&apos;z Cola</li>
                    <li className='mb-2'>Let&apos;z Limo</li>
                    <li className='mb-2'>Oasis</li>
                    <li className='mb-2'>Juice</li>
                    <li className='mb-2'>Grenadine</li>
                </ul>
            </div>

        </div>
    )
}

