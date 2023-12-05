import Head from "next/head"
import { NavBar } from "../ui"

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layouts = ({ children, title }) => {




    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Matias Antunez" />
                <meta name="descriptions" content="Informacion sobre el pokemon XXXX" />
                <meta name="keywords" content="XXXX, pokemon, pokedex" />

                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <NavBar />


            <main>
                {children}
            </main>
        </>
    )
}
