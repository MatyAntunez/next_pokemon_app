import Head from "next/head"
import { NavBar } from "../ui"


export const Layouts = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Matias Antunez" />
                <meta name="descriptions" content="Informacion sobre el pokemon XXXX" />
                <meta name="keywords" content="XXXX, pokemon, pokedex" />
            </Head>

            <NavBar/>


            <main>
                {children}
            </main>
        </>
    )
}
