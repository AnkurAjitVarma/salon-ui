import type { JSX } from "react";
import Header from "./Header.tsx";
import { Outlet } from "@tanstack/react-router";

const Root = (): JSX.Element => {
    return <>
        <Header />
        <main>
            <Outlet />
        </main>
    </>
}

export default Root;