import { NavLink, Outlet } from "react-router-dom"
import css from './Navigation.module.css'

export const Navigation = () => {
    return (
        <>
            <header>
                <nav className={css.nav__list}>
                    <NavLink className={({isActive}) => (isActive ? css.nav__item__active : css.nav__item)} to='/'>Home</NavLink>
                    <NavLink className={({isActive}) => (isActive ? css.nav__item__active : css.nav__item)} to='/movies'>Movies</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>

    )
}