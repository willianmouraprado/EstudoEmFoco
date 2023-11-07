import Link from "next/link"

function Hero(){
    return(
        <div className="hero py-32 bg-base-100">
            <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
                <img src="https://picsum.photos/seed/picsum/500/300" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Estudo em Foco</h1>
                <p className="py-6">Seja inspirado, aprenda e transforme sua vida com nossa coleção de e-books. Descubra segredos para o sucesso nos estudos, estratégias para mudança de vida e insights para criar novas fontes de renda. Nossos e-books são a chave para alcançar seus objetivos e desbloquear seu potencial. Comece sua jornada de autodesenvolvimento hoje!</p>
                <Link href="https://pay.kiwify.com.br/gqzdQ6X">
                    <button className="btn btn-primary">Mude seu destino</button>
                </Link>
                </div>
            </div>
        </div>
    )    
}

export default Hero