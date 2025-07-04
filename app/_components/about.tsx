import Image from "next/image";
import about1Img from '../../public/about-1.png'
import about2Img from '../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { MessageCircle } from 'lucide-react';

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>

          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              Em Lajinha - MG, nasceu o PetShop que trata cada pet como parte da família. Acreditamos que o amor por um animal desperta o melhor em nós — por isso, oferecemos não apenas produtos e serviços, mas carinho, atenção e confiança.

                Nosso compromisso é garantir o bem-estar, a saúde e a alegria do seu melhor amigo, com atendimento próximo, suporte de qualidade e uma experiência segura e acessível. Aqui, seu pet está em boas patas — e você, em boas mãos.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com 3 veterinários.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target='_blank'
                href={`https://wa.me/553399464331?text=Ola vim pelo site EspaçoPet`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

             <a
                href="https://maps.app.goo.gl/PFh7gYGWp8oAB65N9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>

          </div>

        </div>


      </div>
    </section>
  )
}