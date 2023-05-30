// import Ancestralidade from 'pages/PaginaCadastro/Ancestralidade'
// import Experiencias from 'pages/PaginaCadastro/Experiencias';
// import Final from 'pages/PaginaCadastro/Final';
// import Profissao from 'pages/PaginaCadastro/Profissao';
// import PaginaForja from 'pages/PaginaForja';
import PaginaComum from 'pages/PaginaComum';
import PaginaDeErro from 'pages/PaginaDeErro';
import PaginaInicial from 'pages/PaginaInicial';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Carregando from 'pages/Carregando';

const PaginaForja = lazy(() => import('pages/PaginaForja'));
const Ancestralidade = lazy(() => import('pages/PaginaCadastro/Ancestralidade'));
const Experiencias = lazy(() => import('pages/PaginaCadastro/Experiencias'));
const Profissao = lazy(() => import('pages/PaginaCadastro/Profissao'));
const Final = lazy(() => import('pages/PaginaCadastro/Final'));

export default function Rotas() {

    return (
        <Suspense fallback={<Carregando />}>
            <Routes>
                <Route path='/' element={<PaginaComum />}>
                    <Route index element={<PaginaInicial />} />
                    <Route path='forja' element={<PaginaForja />} />
                    <Route path='forja/ancestralidade' element={<Ancestralidade />} />
                    <Route path='forja/experiencias' element={<Experiencias />} />
                    <Route path='forja/profissao' element={<Profissao />} />
                    <Route path='forja/final' element={<Final />} />
                </Route>
                <Route path='*' element={<PaginaDeErro />} />
            </Routes>
        </Suspense>
    )
}