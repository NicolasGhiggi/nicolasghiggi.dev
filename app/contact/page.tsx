"use client"

import * as z from "zod"
import axios from "axios"
import Link from "next/link"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { MailIcon, MapPinIcon, RotateCcwIcon, SendHorizonalIcon, UserIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Map, MapControls } from "@/components/ui/map"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Card, CardHeader, CardTitle , CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"

import { USER } from "@/data/app"
import { contactFormSchema } from "@/schemas/contact-form-schema"


const Page = () => {
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    })

    const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
        try {
            const res = await axios.post("/api/contact", data);
            console.log(res);
            toast.success(res.data.message);
            form.reset();
            
        } catch (error: any) {
            toast.error(
                error.response?.data?.message ?? "Something went wrong"
            );
        }
    }

    return (
        <main className="w-full max-w-2xl flex flex-col items-center py-24 px-6 gap-10">
            <section className="text-center space-y-4">

                <Badge variant="outline" className="text-sm h-7 p-1 pr-2">
                    <span className="relative flex size-5 items-center justify-center">
                        <span className="absolute z-10 top-1/2 left-1/2 size-3 rounded-full bg-emerald-500 animate-radar-pulse transform -translate-1/2"/>
                        <span className="relative z-10 size-2 rounded-full bg-emerald-500"/>
                    </span>
                    Available for new projects
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Let's work together
                </h1>
                <p className="text-muted-foreground max-w-xl">
                    Have an idea, a project, or just want to say hello?
                    Feel free to send me a message.
                </p>
            </section>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Contact me</CardTitle>
                    <CardDescription>
                        Email me and I&#39;ll get back to you as soon as possible.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form id="form-contact" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FieldGroup className="flex-row items-center gap-4">
                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-contact-name">
                                            Name
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupInput
                                                {...field}
                                                id="form-contact-name"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="John Doe"
                                                autoComplete="off"
                                            />
                                            <InputGroupAddon>
                                                <UserIcon />
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-contact-email">
                                            Email
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupInput
                                                {...field}
                                                id="form-contact-email"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="john.doe@acme.io"
                                                autoComplete="off"
                                            />
                                            <InputGroupAddon>
                                                <MailIcon />
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                        <FieldGroup>
                            <Controller 
                                name="subject"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-contact-subject">
                                            Subject
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupInput
                                                {...field}
                                                id="form-contact-subject"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Project proposal"
                                                autoComplete="off"
                                            />
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller 
                                name="message"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-contact-message">
                                            Message
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupTextarea
                                                {...field}
                                                id="form-contact-message"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Describe your project, idea or collaboration in detail. I will get back to you as soon as possible."
                                                rows={10}
                                                maxLength={2000}
                                                className="max-h-40 resize-none"
                                            />
                                            <InputGroupAddon align="block-end">
                                                <InputGroupText className="tabular-nums">
                                                    {field.value.length}/2000 characters
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-2">
                    <Field orientation="horizontal">
                        <Button type="button" variant="outline" size="lg" onClick={() => form.reset()}>
                            <RotateCcwIcon />
                            Reset
                        </Button>
                        <Button type="submit" size="lg" form="form-contact">
                            Send
                            <SendHorizonalIcon />
                        </Button>
                    </Field>
                    <Field orientation="horizontal" className="justify-end">
                        {USER.socials.map((social) => (
                            <Tooltip key={social.label}>
                                <TooltipTrigger render={
                                    <Link href={social.path} target="_blank">
                                        <Button
                                            size="icon-lg"
                                            variant="outline"
                                            aria-label={social.label}
                                        >
                                            <social.icon />
                                        </Button>
                                    </Link>
                                } />
                                <TooltipContent>
                                    <p>{social.label}</p>
                                </TooltipContent>
                            </Tooltip>
                            
                        ))}
                    </Field>
                </CardFooter>
            </Card>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Where you can find me</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4" />
                        {USER.location.label}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-foreground/10">
                        <Map center={[8.76, 46.17]} zoom={13}>
                            <MapControls
                              position="top-right"
                              showZoom
                              showCompass
                              showLocate
                              showFullscreen
                            />
                        </Map>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}

export default Page