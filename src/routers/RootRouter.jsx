import { BrowserRouter, Routes, Route } from "react-router-dom";

/** Locals */
import { Home, } from '../containers';

export const RootRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' /* path={paths.home} */ element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

/** Redirecciona directamente a '/' si se ingresa cualquier url. Sin el 'replace'
 * la url incorrecta queda en el historial y con el 'replace' no quedaría.
 * <Route path='*' element={<Navigate replace to='/' />} />
 * 
 * 'NavLink' en className devuelve un objeto que indica si el link en cuestion está activo o no.
 * Se puede hacer la prueba en un menu con los <li> y un <NavLink> dentro
 * <NavLink className={(data)=>console.log(data)} />  // Esto imprime el elemento 'isActive'
 * Ejemplo para .css:
 * <NavLink className={(data.isActive)=>(data.isActive? "un estilo" : "otro estilo")} /> 
 * lo mismo pero con destructuring
 * <NavLink className={({isActive})=>(isActive? "un estilo" : "otro estilo")} /> 
 */