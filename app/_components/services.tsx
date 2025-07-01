"use client"
import useEmblaCarousel from "embla-carousel-react" 
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel,MessageCircle, Clock} from "lucide-react"

const services = [
  {
    title: "Banho & Tosa",
    description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
  },
  {
    title: "Consulta Veterinária",
    description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
  },
  {
    title: "Táxi Pet",
    description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
  },
  {
    title: "Hotel para pets",
    description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
  },
]

export function Services(){

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': {
                slidesToScroll: 3,
            }
           
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return(
        <section className=" bg-white py-16">
            <div className="container mx-auto px-4">
                <div >
                    <h2 className="text-4xl font-bold mb-12">
                        Serviços
                    </h2>
                    <div className="relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex ">
                                {services.map((item,index)=> (
                                    <div key={index} className="flex-[0_0_100%] min-w 0 md:flex-[0_0_calc(100%/3)] px-3">
                                        <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4
                                        h-full flex flex-col ">
                                            <div className="flex-1 flex items-start justify-between">
                                                <div className="flex gap-3">
                                                    <span className="text-3xl">{item.icon}</span>
                                                    <div>
                                                        <h3 className="font-bold text-xl my-1">
                                                            {item.title}
                                                        </h3>
                                                        <p className=" text-gray-400 text-sm select-none">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="border-t border-gray-600 pt-4 flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                                    <Clock className="w-4 h-4"/>
                                                    <span>{item.duration}</span>
                                                </div>
                                                <a target='_blank'
                href={`https://wa.me/553399464331?text=Ola vim pelo site EspaçoPet, gostaria de imformaçoes sobre ${item.title}`} className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300">

                                                    <MessageCircle className="w-5 h-5"/>
                                                    Entrar em contato
                                                </a>
                                            </div>

                                        </article>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <button>
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 duration-300"
                                onClick={scrollPrev}>
                                <ChevronLeft className="w-6 h-6 text-gray-600" />
                            </div>
                        </button>
                        <button>
                            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 duration-300"
                                onClick={scrollNext}>
                                <ChevronRight className="w-6 h-6 text-gray-600" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}