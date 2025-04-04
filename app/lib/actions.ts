"use server";
<<<<<<< HEAD

=======
>>>>>>> 7ff9806fd68e27a29c0f81cf5d31f2a3db3f3a06
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(["pending", "paid"]),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
<<<<<<< HEAD
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
=======
>>>>>>> 7ff9806fd68e27a29c0f81cf5d31f2a3db3f3a06

export async function createInvoice(formData: FormData) {
    const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get("customerId"),
        amount: formData.get("amount"),
        status: formData.get("status"),
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split("T")[0];

<<<<<<< HEAD
    try {
        await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;
    } catch (error) {
        // We'll log the error to the console for now
        console.error(error);
    }
=======
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
>>>>>>> 7ff9806fd68e27a29c0f81cf5d31f2a3db3f3a06

    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
}

<<<<<<< HEAD
=======
// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

// ...

>>>>>>> 7ff9806fd68e27a29c0f81cf5d31f2a3db3f3a06
export async function updateInvoice(id: string, formData: FormData) {
    const { customerId, amount, status } = UpdateInvoice.parse({
        customerId: formData.get("customerId"),
        amount: formData.get("amount"),
        status: formData.get("status"),
    });

    const amountInCents = amount * 100;

<<<<<<< HEAD
    try {
        await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
        `;
    } catch (error) {
        // We'll log the error to the console for now
        console.error(error);
    }
=======
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
    `;
>>>>>>> 7ff9806fd68e27a29c0f81cf5d31f2a3db3f3a06

    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
}
<<<<<<< HEAD
=======

>>>>>>> 7ff9806fd68e27a29c0f81cf5d31f2a3db3f3a06
export async function deleteInvoice(id: string) {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath("/dashboard/invoices");
}
