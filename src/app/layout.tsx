import './globals.css'
import Navbar from "@/src/components/Navbar";

export const metadata = {
    title: 'Nutritioneer',
    description: 'Track your food',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        <main className="min-h-screen flex flex-col items-center">
            {children}
        </main>
        </body>
        </html>
    )
}
