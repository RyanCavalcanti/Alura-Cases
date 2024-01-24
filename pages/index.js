import Link from "../src/components/Link";

function Title({ as, children }) {
    const Tag = as;
    return(
        <>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                }
            `}</style>
        </>
    )
}


export default function HomePage() {
    return(
        <div>
            <Title as="h1">Alura Cases - Home Page</Title>
                <Link href="/faq">
                    Ir para o FAQ
                </Link>
        </div>
    )
}