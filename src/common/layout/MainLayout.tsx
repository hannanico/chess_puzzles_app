import Footer from "./Footer"
import NavBar from "./NavBar"

export default function MainLayout({children}: MainLayoutProps) {
    return (
        <>
        <body className="bg-gray-500 text-white">
             <NavBar />
            {children}
            <Footer/>
        </body>
        </>
    )
}

type MainLayoutProps = {
    children: React.ReactNode
}