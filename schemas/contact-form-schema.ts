import * as z from "zod";

const contactFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Please enter your name.")
        .max(255, "Name cannot exceed 255 characters."),
    email: z
        .string()
        .trim()
        .max(320, "Email cannot exceed 320 characters.")
        .pipe(z.email("Please enter a valid email address.")),
    subject: z
        .string()
        .trim()
        .transform((value) => value.replace(/[\r\n]+/g, " "))
        .pipe(
            z
                .string()
                .min(2, "Please enter a subject.")
                .max(255, "Subject cannot exceed 255 characters.")
        ),
    message: z
        .string()
        .trim()
        .min(10, "Please write a message.")
        .max(2000, "Message cannot exceed 2000 characters."),
    hpToken: z.string().optional(),
})

export { contactFormSchema }