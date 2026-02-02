import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <>
            <div>это будущее меню</div>
            <main>
                <Outlet />
            </main>
        </>
    )
}