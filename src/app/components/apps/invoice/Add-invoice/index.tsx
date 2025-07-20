'use client'
import CardBox from "@/app/components/shared/CardBox";
import React from "react";
import CreateInvoice from '@/app/components/apps/invoice/Add-invoice/create';
import { InvoiceProvider } from '@/app/context/InvoiceContext/index';
// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Invoice App Create",
// };

function CreateInvoiceApp() {
    return (
        <InvoiceProvider>
            <CardBox>
                <CreateInvoice />
            </CardBox>
        </InvoiceProvider>
    )
}
export default CreateInvoiceApp;
