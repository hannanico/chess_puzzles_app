import Footer from "./Footer"
import { SideInfoBar } from "./SideInfoBar"
import SideNavBar from "./SideNavbar"

export default function MainLayout({children}: MainLayoutProps) {
    return (
        <body className="bg-gray-900 text-white">
            <div className="flex flex-col lg:flex-row min-h-screen">
             <SideNavBar />

             <div className="flex flex-col flex-2">
             <main className="flex-1 p-4 overflow-y-auto">
             {children}
             </main>
            <Footer/>
             </div>
            </div>
        </body>
    )
}

type MainLayoutProps = {
    children: React.ReactNode
}