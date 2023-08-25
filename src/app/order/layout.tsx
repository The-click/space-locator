import Footer from "@/components/Footer/Footer";

export default function orderLayout({
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
