import Link from "next/link";
import { useCartCtx } from "../../store/cart-context";
import { useFormik } from "formik";
import * as Yup from 'yup';
import CheckoutPopup from "./CheckoutPopup";
import React from "react";

export type Popup = {
    popupHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckoutForm = ({ popupHandler }: Popup) => {
    const { clearCart } = useCartCtx();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            adress: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().min(2, "First name must be longer than 2 characters").max(15, "First name must be shorter than 15 characters").required("First name is required"),
            lastName: Yup.string().min(2, "Last name must be longer than 2 characters").max(20, "Last name must be shorter than 20 characters").required("Last name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            city: Yup.string().min(2, "City name must be longer than 2 characters").max(20, "City name must be shorter than 15 characters").required("City name is required"),
            adress: Yup.string().min(2, "Adress must be longer than 2 characters").required("Adress is required")
        }),
        onSubmit: () => {
            popupHandler(true);
            clearCart();
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col mx-6 sm:mx-20 rounded gradient--reversed p-4 md:px-10 md:py-6 lg:w-2/3 xl:w-1/2 lg:mx-auto shadow-2xl text-white">
            <label htmlFor="firstName">
                First name
            </label>
            <input value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} className="outline-0 text-cyan-600 p-2 rounded" type='text' id="firstName" />
            {formik.touched.firstName && formik.errors.firstName ? <p className="font-bold">{formik.errors.firstName}</p> : null}
            <label htmlFor="lastName">
                Last name
            </label>
            <input value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} className="outline-0 text-purple-600 p-2 rounded" type='text' id="lastName" />
            {formik.touched.lastName && formik.errors.lastName ? <p className="font-bold">{formik.errors.lastName}</p> : null}
            <label htmlFor="email">
                Your email
            </label>
            <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="outline-0 text-pink-600 p-2 rounded" type='email' id="email" />
            {formik.touched.email && formik.errors.email ? <p className="font-bold">{formik.errors.email}</p> : null}
            <label htmlFor="city">
                Your city
            </label>
            <input value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className="outline-0 text-orange-600 p-2 rounded" type='text' id="city" />
            {formik.touched.city && formik.errors.city ? <p className="font-bold">{formik.errors.city}</p> : null}
            <label htmlFor="adress">
                Your adress
            </label>
            <input value={formik.values.adress} onChange={formik.handleChange} onBlur={formik.handleBlur} className="outline-0 text-red-600 p-2 rounded" type='text' id="adress" />
            {formik.touched.adress && formik.errors.adress ? <p className="font-bold">{formik.errors.adress}</p> : null}
            <div className="flex gap-2 rounded mt-6 text-center font-bold text-lg justify-evenly">
                <div className="bg-white w-1/2 sm:w-1/4">
                    <button className="gradient--text w-full py-2 cursor-pointer">
                        Pay
                    </button>
                </div>
                <Link href='/shop'>
                    <div className="bg-white w-1/2 sm:w-1/4 cursor-pointer">
                        <p className="gradient--text py-2">
                            Cancel
                        </p>
                    </div>
                </Link>
            </div>
        </form>
    )
}

export default CheckoutForm;