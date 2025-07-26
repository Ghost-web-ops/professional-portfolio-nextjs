export default function Footer() {
    return (
        <footer className="w-full border-t bg-card p-6">
            <div className="container mx-auto text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Omar Yasser. All Rights Reserved.</p>
            </div>
        </footer>
    );
}