import Ancestralidade from 'pages/PaginaCadastro/Ancestralidade'
import Experiencias from 'pages/PaginaCadastro/Experiencias';
import Final from 'pages/PaginaCadastro/Final';
import Profissao from 'pages/PaginaCadastro/Profissao';
import PaginaComum from 'pages/PaginaComum';
import PaginaDeErro from 'pages/PaginaDeErro';
import PaginaForja from 'pages/PaginaForja';
import PaginaInicial from 'pages/PaginaInicial';
import { Routes, Route } from 'react-router-dom';


export default function Rotas() {   
    
    return (
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
    )
}