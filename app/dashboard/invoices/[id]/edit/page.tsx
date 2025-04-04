import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";
<<<<<<< HEAD
import { notFound } from "next/navigation";
=======
>>>>>>> 7ff9806fd68e27a29c0f81cf5d31f2a3db3f3a06

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [invoice, customers] = await Promise.all([fetchInvoiceById(id), fetchCustomers()]);
<<<<<<< HEAD

    if (!invoice) {
        notFound();
    }

=======
>>>>>>> 7ff9806fd68e27a29c0f81cf5d31f2a3db3f3a06
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Invoices", href: "/dashboard/invoices" },
                    {
                        label: "Edit Invoice",
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form invoice={invoice} customers={customers} />
        </main>
    );
}
