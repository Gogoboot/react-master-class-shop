import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {Header} from "./Header.tsx";
import {BestSellers} from "./BestSellers.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Header/>
        <BestSellers/>
        <App/>
    </StrictMode>,
)
