import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui";

type Props = {
    children: JSX.Element[] | JSX.Element,
    title?: string
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC <Props> = ({ children, title }) => {
    
    console.log(origin)

  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Emmanuel Araujo" />
            <meta name="description" content={`Información del pokemon ${title}`} />
            <meta name="keywords" content={`${title}, XXXX, pokemon, pokedex` }/>
            {/* OPEN GRAPH META TAGS */}
            <meta property="og:title" content={`Información del pokemon ${title}`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
        <Navbar />
        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
