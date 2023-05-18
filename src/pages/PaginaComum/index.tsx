import Banner from 'components/Banner'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Outlet } from 'react-router-dom'

export default function PaginaComum() {
    return (
        <div>
            <Header />
            <main>
                <Banner />
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}