import Link from "next/link"

const featuresData = [
    {title : "Desenvolvimento de Habilidades de Estudo", description : "Domine as técnicas e estratégias de estudo com o nosso E-Book, aprimore seu aprendizado e conquiste seu sucesso acadêmico.", link: "https://pay.kiwify.com.br/gqzdQ6X"},
    {title : "Fontes de Renda Extra", description : "Estratégias Eficientes para Alcançar Sucesso Financeiro, aqui você encontrará um guia prático que explora estratégias comprovadas para aumentar sua renda e alcançar estabilidade financeira", link: "https://pay.kiwify.com.br/vqFb7dr"},
    {title : "A Importância da Produtividade e Organização", description : "Maximize seu potencial com estratégias essencias de produtividade e organização, transforme sua vida agora!", link: "https://pay.kiwify.com.br/FGKzEJO"},
    {title : "Pack Mudança de Vida", description : "Alavanque a sua carreira e sua receita levando todos os E-Books da Estudo em Foco com um desconto especial.", link: "https://pay.kiwify.com.br/qTGnsvV"}
]

function Features(){
    return(
        <>
             <div className="grid place-items-center w-full bg-base-200">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">Nossos livros</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    featuresData.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl">
                                <div className="card-body mt-4 items-center text-center">
                                    <h2 className="card-title">{i.title}</h2>
                                    <p>{i.description}</p>
                                    <Link href={i.link}>
                                        <button className="btn btn-primary">COMPRAR</button>
                                    </Link>
                                </div>
                                </div>
                        )
                    })
                }
                
            </div>
            </div>
        </div>
        </>
    )
}

export default Features