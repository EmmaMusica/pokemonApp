import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'


/**
 * 
 * @returns FC
 *  ====
 *  Siempre que utilicemos una imagen de otro dominio en Next.js, hay que especificar en 
 *  next.config.ts agregando en nextConfig{}
 *  images: {
      domains: ['raw.githubusercontent.com']
    }
 *  
 */


export const Navbar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
        display:'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        padding: '0px 20px',
        backgroundColor: theme?.colors.black.value
    }}>
        <Link href="/">
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Image 
              src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
              alt="icono de la aplicación"
              width={70}
              height={70}
            />
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okémon</Text>
          </div>
        </Link> 
        <Spacer css={{ flex: 1 }}/>
        <Link href={'/favorites'}>
          <Text color='white'>Favoritos</Text>
        </Link>
    </div>
  )
}
