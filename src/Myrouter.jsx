import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import Cadastro from "./Pages/Cadastro";
import CadastroIten from './Pages/CadastroIten';
import PinturaIndustrialDetalhamento from './src/pages/PinturaIndustrialDetalhamento'
import HistoriaSENAI from "./src/pages/HistoriaSENAI";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                path: 'Cadastro-user',
                element: <Cadastro/>
            },
            {
                path: 'Cadastro-iten',
                element: <CadastroIten/>
            },
            {
                path: 'Pintura-industral',
                element: <PinturaIndustrialDetalhamento/>
            },
            {
                path: 'Historia',
                element: <HistoriaSENAI/>
            }
        ]
    }
]);