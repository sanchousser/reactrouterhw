import { NavLink, Outlet } from "react-router-dom"

export const Navigation = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/movies'>Movies</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>

    )
}