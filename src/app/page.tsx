import Image from 'next/image'

export default function Home() {
  return (
    <main className="mt-[130px] w-full px-[30px]">
      <section className="flex flex-col items-center bg-[#050505] w-full  rounded-[30px] px-[25px] py-[30px] box-border relative mdd:py-[40px]">
        <div className="flex flex-col items-center">
          <h1 className="text-white font-shippori text-center text-[20px] z-10 relative smm:text-[22px] mdd:text-[28px]">
            DESENVOLVEDOR E WEBDESIGNER
          </h1>
          <figure className="absolute flex items-center justify-center top-8">
            <Image
              src="/images/me/meMobile.svg"
              alt=""
              width={219}
              height={282}
              className="opacity-90 smm:w-[280px] h-[340px] sm:w-[330px] sm:h-[390px] mdd:w-[320px] mdd:h-[410px]"
            />
          </figure>
          <p className="text-[#D6D6D6] max-w-full w-[238px] text-center mt-[250px] mb-[30px] text-[12px] relative smm:mt-[270px] sm:mt-[340px] sm:text-[14px] sm:w-[370px] mdd:w-[420px] mdd:text-[16px]">
            Como desenvolvedor web, meu foco está em criar sites que não só
            impressionam, mas impulsionam o seu negócio para novos horizontes
            online.
          </p>
        </div>
        <div className="flex gap-[13px] mb-[30px]">
          <button className="text-white w-[93px] h-[34px] border-solid border-[1px] border-white bg-transparent text-[12px] rounded-[17px] font-bold sm:w-[150px] sm:h-[45px] sm:text-[14px] mdd:w-[170px] mdd:h-[50px]">
            Sobre mim
          </button>
          <button className="w-[93px] h-[34px] bg-white border-solid border-[1px] border-white text-[12px] rounded-[17px] font-bold sm:w-[150px] sm:h-[45px] sm:text-[14px] mdd:w-[170px] mdd:h-[50px]">
            Começar
          </button>
        </div>
        <nav className="flex w-[140px] justify-between sm:w-[200px]">
          <a href="#">
            <Image
              src="/images/assets/firstSection/whatsappicon.svg"
              alt=""
              width={35}
              height={35}
              className="sm:w-[40px] h-[40px]"
            />
          </a>
          <a href="#">
            <Image
              src="/images/assets/firstSection/linkedin.svg"
              alt=""
              width={35}
              height={35}
              className="sm:w-[40px] h-[40px]"
            />
          </a>
          <a href="#">
            <Image
              src="/images/assets/firstSection/github.svg"
              alt=""
              width={35}
              height={35}
              className="sm:w-[40px] h-[40px]"
            />
          </a>
        </nav>
      </section>
    </main>
  )
}
