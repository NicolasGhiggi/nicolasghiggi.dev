import { NextResponse } from "next/server"

import { resend } from '@/lib/resend'
import { ContactEmail } from "@/emails/contact-email"
import { contactFormSchema } from "@/schemas/contact-form-schema"

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsed = contactFormSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json({ message: "Data not valid" }, { status: 400 });
        }

        await resend.emails.send({
            from: `Portfolio <noreply@resend.dev>`,
            to: process.env.CONTACT_EMAIL_TO!,
            subject: `[Portfolio] ${parsed.data.subject}`,
            replyTo: parsed.data.email,
            react: ContactEmail({
                name: parsed.data.name,
                email: parsed.data.email,
                subject: parsed.data.subject,
                message: parsed.data.message,
            }),
        });

        return NextResponse.json(
            { message: "Email sent successfully", },
            { status: 200, }
        );

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Failed to send email", },
            { status: 500, }
        );
    }
}