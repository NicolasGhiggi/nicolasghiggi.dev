import {
    Html,
    Head,
    Body,
    Container,
    Heading,
    Text,
    Hr,
    Preview,
    Section,
    Tailwind,
    Link,
} from "react-email";

interface ContactEmailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactEmail = ({
    name,
    email,
    subject,
    message,
}: ContactEmailProps) => {
    const previewText = `New message from ${name}: ${subject}`;

    return (
        <Html>
            <Head />

            <Preview>{previewText}</Preview>

            <Tailwind>
                <Body className="bg-zinc-100 font-sans my-auto mx-auto px-4 py-10">
                    <Container className="max-w-xl mx-auto bg-white border border-solid border-zinc-200 rounded-xl p-8">

                        {/* Header */}
                        <Section>
                            <Text className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">
                                Portfolio Contact
                            </Text>

                            <Heading className="text-zinc-950 text-2xl font-semibold tracking-tight m-0">
                                New message received
                            </Heading>

                            <Text className="text-zinc-500 text-sm leading-6 mt-3">
                                Someone contacted you through your portfolio website.
                            </Text>
                        </Section>


                        <Hr className="border border-solid border-zinc-200 my-6" />


                        {/* Sender information */}
                        <Section>
                            <Text className="text-sm font-semibold text-zinc-900 mb-4">
                                Contact information
                            </Text>


                            <Section className="bg-zinc-50 border border-solid border-zinc-200 rounded-lg p-4">

                                <Text className="text-sm text-zinc-700 m-0 mb-2">
                                    <span className="font-semibold text-zinc-900">
                                        Name:
                                    </span>{" "}
                                    {name}
                                </Text>


                                <Text className="text-sm text-zinc-700 m-0 mb-2">
                                    <span className="font-semibold text-zinc-900">
                                        Email:
                                    </span>{" "}
                                    <Link
                                        href={`mailto:${email}`}
                                        className="text-blue-600 no-underline"
                                    >
                                        {email}
                                    </Link>
                                </Text>


                                <Text className="text-sm text-zinc-700 m-0">
                                    <span className="font-semibold text-zinc-900">
                                        Subject:
                                    </span>{" "}
                                    {subject}
                                </Text>

                            </Section>
                        </Section>



                        <Hr className="border border-solid border-zinc-200 my-6" />



                        {/* Subject highlight */}
                        <Section>
                            <Text className="text-xs uppercase tracking-wide text-zinc-500 font-medium mb-2">
                                Subject
                            </Text>

                            <Text className="text-lg font-semibold text-zinc-950 m-0">
                                {subject}
                            </Text>
                        </Section>



                        {/* Message */}
                        <Section className="mt-6">

                            <Text className="text-xs uppercase tracking-wide text-zinc-500 font-medium mb-2">
                                Message
                            </Text>


                            <Section className="bg-zinc-50 border border-solid border-zinc-200 rounded-lg p-5">

                                <Text className="text-sm leading-7 text-zinc-700 m-0 whitespace-pre-wrap">
                                    {message}
                                </Text>

                            </Section>

                        </Section>



                        {/* Reply button */}
                        <Section className="text-center mt-8">

                            <Link
                                href={`mailto:${email}`}
                                className="inline-block bg-zinc-950 text-white text-sm font-medium px-5 py-3 rounded-lg no-underline"
                            >
                                Reply to {name}
                            </Link>

                        </Section>



                        <Hr className="border border-solid border-zinc-200 my-6" />



                        {/* Footer */}
                        <Text className="text-xs leading-5 text-center text-zinc-400 m-0">
                            This email was automatically generated from your
                            portfolio contact form.
                        </Text>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export { ContactEmail };