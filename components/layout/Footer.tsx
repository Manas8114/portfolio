export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="py-8 border-t"
            style={{
                background: "var(--ink-black)",
                borderColor: "var(--fog)",
            }}
        >
            <div className="container text-center">
                <p className="body-sm" style={{ color: "var(--stone-gray)" }}>
                    © {currentYear} Manas. Crafted with discipline.
                </p>
                <p
                    className="caption mt-2"
                    style={{ color: "var(--fog)", letterSpacing: "0.2em" }}
                >
                    道
                </p>
            </div>
        </footer>
    );
}
