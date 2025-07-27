'use client'

import { Cocktail } from '@/types/Cocktail';
import Image from "next/image";
import { useState } from 'react';

interface DrinkProps {
    cocktail: Cocktail,
}

export function Drink({cocktail}: DrinkProps) {

    const [alertSuccess, setAlertSuccess] = useState(false)

    function SubmitOrder(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name') as string;
        const note = formData.get('note') as string;

        console.log(`Order placed for ${name} with note: ${note}`);
        (event.currentTarget.closest('dialog') as HTMLDialogElement).close();

        setAlertSuccess(true);
        setTimeout(() => {
            setAlertSuccess(false);
        }, 5000);
    }

    return (
        <>
            {
                alertSuccess && 
                <div role="alert" className="alert alert-success fixed top-2 left-4 right-4 px-4 z-99">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Your order has been made successfully!</span>
                    <button className="btn btn-sm btn-circle" onClick={() => setAlertSuccess(false)}>
                        x
                    </button>
                </div>
            }
            
            <div className="card bg-base-100 shadow-xl m-4">
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
                        <button 
                        className="btn btn-accent"
                        onClick={()=>(document.getElementById("modal_details_" + cocktail.name) as HTMLDialogElement)?.showModal()}>
                            Details
                        </button>
                        <button 
                        className="btn btn-secondary"
                        onClick={()=>(document.getElementById("modal_" + cocktail.name) as HTMLDialogElement)?.showModal()}>
                            Order
                        </button>
                    </div>
                </div>
            </div>

            <dialog id={"modal_details_"+cocktail.name} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <button 
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={()=>(document.getElementById("modal_details_" + cocktail.name) as HTMLDialogElement)?.close()}>
                        ✕
                    </button>
                    <h3 className="font-bold text-xl">How to make the {cocktail.name} ?</h3>
                    <div>
                        <h4 className="py-4 text-lg font-bold">Ingredients:</h4>
                        <ul className="list-disc list-inside pl-5">
                            {cocktail.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <h4 className="py-4 text-lg font-bold">Method:</h4>
                        <p>{cocktail.method}</p>
                        <h4 className="py-4 text-lg font-bold">Garnish:</h4>
                        <p>{cocktail.garnish}</p>
                    </div>
                    <div className="modal-action">
                        <button 
                        onClick={()=>(document.getElementById("modal_details_" + cocktail.name) as HTMLDialogElement)?.close()}
                        className="btn btn-error">
                            Close
                        </button>
                    </div>
                </div>
            </dialog>

            <dialog id={"modal_"+cocktail.name} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{cocktail.name}</h3>
                    <p className="py-4">Enter your name and an optional note before placing your order.</p>
                    <button 
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={()=>(document.getElementById("modal_" + cocktail.name) as HTMLDialogElement)?.close()}>
                        ✕
                    </button>
                    <form method="dialog" onSubmit={SubmitOrder}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name:</legend>
                            <input type="text" id='name' name="name"
                            className="input input-secondary w-full validator" 
                            placeholder="Enter your name here" 
                            minLength={3} 
                            maxLength={30}
                            required/>
                            <p className="validator-hint">
                                The name is required and must be 3 to 30 characters
                            </p>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Note:</legend>
                            <textarea id='note' name="note"
                            className="textarea textarea-secondary h-24 w-full" 
                            placeholder="Enter a note here"/>
                            <div className="label">Optional</div>
                        </fieldset>
                        <div className="modal-action">
                            <button className="btn btn-secondary">Order</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}