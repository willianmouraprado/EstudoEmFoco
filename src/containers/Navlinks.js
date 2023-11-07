import Link from 'next/link'


function Navlinks(){
    return(
        <>
            <li className="mr-2"><Link href="/about-us">Sobre nós</Link></li>
            <li className="mr-2"><Link href="/contact-us">Entre em contato</Link></li>
        </>
    )
}

export default Navlinks