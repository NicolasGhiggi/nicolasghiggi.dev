import { NextResponse } from "next/server"

import { resend } from "@/lib/resend"
import { ContactEmail } from "@/emails/contact-email"
import { contactFormSchema } from "@/schemas/contact-form-schema"

export async function POST(req: Request) {
    const body = await req.json().catch(() => null);
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json({ message: "Data not valid" }, { status: 400 });
    }

    if (parsed.data.hpToken) {
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    }

    try {
        const { error } = await resend.emails.send({
            from: "Portfolio <noreply@resend.dev>",
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

        if (error) {
            console.error("Resend error:", error.message);
            return NextResponse.json({ message: "Failed to send email" }, { status: 502 });
        }

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch {
        console.error("Unexpected error while sending contact email");
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}