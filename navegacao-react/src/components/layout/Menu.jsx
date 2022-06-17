import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = props => {
    return (
        <aside className='Menu'>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/param/1">Param1</Link>
                    </li>
                    <li>
                        <Link to="/param/2">Param2</Link>
                    </li>
                    <li>
                        <Link to="/pagina-que-nao-existe">Não existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
export default Menu;