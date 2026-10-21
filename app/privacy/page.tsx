import type { Metadata } from "next"
import Link from "next/link"

import { H1 } from "@/components/ui/heading"

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How this website handles your personal data.",
}

const LAST_UPDATED = "October 21, 2026"

const Section = ({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) => (
    <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <div className="flex flex-col gap-3 text-muted-foreground leading-relaxed">
            {children}
        </div>
    </section>
)

const Page = () => {
    return (
        <main className="w-full max-w-3xl flex flex-col py-24 px-4 gap-10">
            <header className="flex flex-col gap-3">
                <p className="font-mono text-sm text-muted-foreground">Legal</p>
                <H1>Privacy Policy</H1>
                <p className="text-sm text-muted-foreground">
                    Last updated: {LAST_UPDATED}
                </p>
            </header>

            <Section title="Summary">
                <p>
                    This website does not use tracking or advertising cookies, and it
                    does not show a cookie banner. It collects anonymous usage
                    statistics, stores your theme preference in your browser, and
                    processes the details you send through the contact form. Nothing is
                    sold or used for marketing.
                </p>
            </Section>

            <Section title="Who is responsible">
                <p>
                    The person responsible for the processing of your personal data on
                    this website is Nicolas Ghiggi, Switzerland. You can contact
                    me at{" "}
                    <a
                        href="mailto:nicolas.ghiggi@gmail.com"
                        className="underline underline-offset-4"
                    >
                        nicolas.ghiggi@gmail.com
                    </a>
                    .
                </p>
            </Section>

            <Section title="Contact form">
                <p>
                    If you write to me through the contact form, I receive your full
                    name, email address, the subject, and the content of your message.
                    You decide what to write, so please do not include sensitive
                    information.
                </p>
                <p>
                    <strong className="text-foreground">Purpose:</strong> to read your
                    message and reply to it. I do not use your details for newsletters
                    or marketing, and I do not add you to any list.
                </p>
                <p>
                    <strong className="text-foreground">Legal basis:</strong> your
                    request to be contacted and my legitimate interest in answering
                    messages sent to me.
                </p>
                <p>
                    <strong className="text-foreground">How it works:</strong> the
                    form sends your message by email to my inbox through Resend, an
                    email delivery service. Resend keeps a record of sent emails,
                    including their content, for 30 days. Your message is not stored
                    in a database on this website.
                </p>
                <p>
                    <strong className="text-foreground">Retention:</strong> messages
                    messages are kept only in my mailbox, for as long as needed to
                    handle your request and for the duration of any project that
                    follows. I do not delete them automatically, and you can ask me to
                    delete them at any time.
                </p>
            </Section>

            <Section title="Analytics">
                <p>
                    To understand how the site is used (for example which pages are
                    visited), I use OpenPanel and Vercel Web Analytics. Neither sets
                    cookies in your browser. Instead, a visitor is recognized only
                    through a hash computed from technical request data (such as IP
                    address and browser information). OpenPanel rotates the hash
                    every day, so you cannot be followed from one day to the next,
                    and Vercel discards the visitor session after 24 hours.
                </p>
                <p>
                    The reports I see are aggregated statistics such as page views,
                    approximate location (country or city), browser, device type, and
                    referrer. I do not combine them with the details you send through
                    the contact form.
                </p>
                <p>
                    <strong className="text-foreground">Legal basis:</strong> my
                    legitimate interest in keeping the site working and improving it.
                </p>
            </Section>

            <Section title="Cookies and local storage">
                <p>
                    This website does not set cookies for tracking or advertising. It
                    stores one item in your browser&#39;s local storage: your theme
                    preference (light or dark). It is saved only when you choose a
                    theme, it never leaves your device, and it is used only to remember
                    your choice. You can delete it at any time from your browser
                    settings.
                </p>
            </Section>

            <Section title="Hosting and server logs">
                <p>
                    The website is hosted on Vercel. Like any web host, Vercel
                    processes technical data needed to deliver the site and keep it
                    secure, such as your IP address, the requested page, and browser
                    information, and may keep it in server logs for a limited time.
                </p>
            </Section>

            <Section title="Map">
                <p>
                    The contact page shows an interactive map built with MapLibre GL.
                    To display it, your browser loads map tiles from CARTO (based on
                    OpenStreetMap data) and some map library files from the unpkg
                    CDN. These providers therefore receive your IP address and
                    technical information about your request.
                </p>
            </Section>

            <Section title="Who receives your data">
                <p>
                    Your data is processed on my behalf by these providers, only to
                    run the features described above:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-1">
                    <li>Vercel Inc. (hosting and Web Analytics)</li>
                    <li>OpenPanel (analytics)</li>
                    <li>Resend (delivery of contact form emails)</li>
                    <li>My email provider (storage of the messages I receive)</li>
                    <li>CARTO (map tiles) and unpkg (map library files)</li>
                </ul>
                <p>
                    I do not sell your data and I do not share it with anyone else,
                    unless the law requires it.
                </p>
            </Section>

            <Section title="Transfers outside your country">
                <p>
                    Some of these providers are based in, or process data in, other
                    countries, including the United States. Where this happens, the
                    transfer relies on the safeguards those providers offer, such as
                    standard contractual clauses or the EU-US Data Privacy Framework.
                    Check their own privacy documentation for details.
                </p>
            </Section>

            <Section title="Your rights">
                <p>
                    Under the data protection law that applies to you, including the
                    Swiss Federal Act on Data Protection and, where applicable, the
                    GDPR, you can ask me to:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-1">
                    <li>tell you whether I hold data about you and give you a copy;</li>
                    <li>correct data that is wrong;</li>
                    <li>delete your data;</li>
                    <li>restrict the processing or object to it.</li>
                </ul>
                <p>
                    To use any of these rights, email{" "}
                    <a
                        href="mailto:nicolas.ghiggi@gmail.com"
                        className="underline underline-offset-4"
                    >
                        nicolas.ghiggi@gmail.com
                    </a>
                    . You also have the right to lodge a complaint with your local data
                    protection authority.
                </p>
            </Section>

            <Section title="Security">
                <p>
                    The site is served over HTTPS and the contact form validates and
                    limits what it accepts. No system that is connected to the
                    internet can be perfectly secure, so please do not send sensitive
                    information through the form.
                </p>
            </Section>

            <Section title="Changes to this policy">
                <p>
                    If I change how this website handles data, I will update this page
                    and the date at the top.
                </p>
            </Section>

            <p className="text-sm text-muted-foreground">
                <Link href="/" className="underline underline-offset-4">
                    Back to home
                </Link>
            </p>
        </main>
    )
}

export default Page