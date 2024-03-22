import Image from 'next/image'

export default function Home() {
  return (
    <main className="mt-[130px] w-full px-[30px]">
      <section className="flex flex-col items-center bg-[#050505] w-full  rounded-[30px] p-[25px] box-border relative">
        <h1 className="text-white font-shippori text-center text-[18px] z-10 relative smm:text-[22px]">
          DESENVOLVEDOR E WEBDESIGNER
        </h1>
        <figure className="absolute inset-0 flex items-center justify-center mb-10">
          <Image
            src="/images/me/meMobile.svg"
            alt=""
            width={219}
            height={282}
            className="opacity-90 smm:w-[260px] h-[320px]"
          />
        </figure>
        <p className="text-[#D6D6D6] max-w-full w-[248px] text-center mt-[295px] text-[13px]">
          Como desenvolvedor web, meu foco está em criar sites que não só
          impressionam, mas impulsionam o seu negócio para novos horizontes
          online.
        </p>
        <button></button>
        <button></button>
      </section>
    </main>
  )
}
