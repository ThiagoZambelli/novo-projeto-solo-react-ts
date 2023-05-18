import PaginaComum from 'pages/PaginaComum';
import PaginaForja from 'pages/PaginaForja';
import PaginaInicial from 'pages/PaginaInicial';
import { Routes, Route } from 'react-router-dom';

export default function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<PaginaComum />}>
                <Route index element={<PaginaInicial />} />
                <Route path='forja' element={<PaginaForja />} />
            </Route>
        </Routes>
    )
}