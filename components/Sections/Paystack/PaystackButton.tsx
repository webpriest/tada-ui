"use client"

import { useCartStore } from "@/store/cartStore"
import { formatNumber } from '@/utils/fomatter';
import { useEffect } from 'react';

declare global {
  interface Window {
    PaystackPop?: any;
  }
}

type Props = {
  email: string;
  amount: number; // in Naira
  reference: string;
  onSuccess: (reference: string) => void;
  onClose?: () => void;
};

const PaystackButton = ({
  email,
  amount,
  reference,
  onSuccess,
  onClose,
}: Props) => {
    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;

    const { items } = useCartStore()
    const total = items.reduce((accumulated, item) => accumulated + item.price * item.quantity, 0)

    const handlePayment = () => {
        const handler = window.PaystackPop.setup({
        key: publicKey,
        email,
        amount: amount * 100, // Convert to Kobo
        ref: reference,
        callback: (response: any) => {
            onSuccess(response.reference);
        },
        onClose,
        });

        handler.openIframe();
    }

    useEffect(() => {
        if (!window.PaystackPop) {
        const script = document.createElement('script');
        script.src = 'https://js.paystack.co/v1/inline.js';
        script.async = true;
        document.body.appendChild(script);
        }
    }, [])

    return (
        <button
            onClick={handlePayment}
            className="ed-btn">
            Pay ₦{ formatNumber(total + (total * 0.075)) } Now<i className="fi fi-rr-money-bills"></i>
        </button>
    )
}

export default PaystackButton