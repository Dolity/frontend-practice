export default function Footer() {
    return (
        <>
        <footer className="footer flex py-4 px-4 bg-footer justify-between">
            <p className="text-sm text-primary">Todo list write what ever you want to remind yourself</p>
            <p className="text-sm text-primary">Made with ❤️ by Dolity © {new Date().getFullYear()}</p>
        </footer>
        </>
    )
}