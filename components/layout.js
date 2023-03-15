import Link from "next/link";

export default function Layout({children}){
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-900 mb-8 py-4">
                <div className="container mx-auto flex justify-center text-white">
                    <Link href="/">Home</Link>
                    <span className="mx-auto">Abdelrahman Shaheen</span>
                    <a target="_blank" href="https://github.com/aashahin">Source Code</a>
                </div>
            </header>
            <main className="container mx-auto flex-1">
                {children}
            </main>
            <footer className="bg-gray-900 mt-8 py-4">
                <div className="container mx-auto flex justify-center text-white">
                    &copy; 2022 Abdelrahman Shaheen
                </div>
            </footer>
        </div>
    )
}