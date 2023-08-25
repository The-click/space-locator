import Footer from "@/components/Footer/Footer";

export default function AsterDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <section>{children}</section>
            <Footer />
        </>
    );
}
