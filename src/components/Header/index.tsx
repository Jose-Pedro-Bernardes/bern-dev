import Image from "next/image";

export default function Header() {
  return (
    <header>
      <figure>
        <Image src="/images/logo/logoHeader.svg" alt="Logotipo da marca escrito BN" width={50} height={41} />
      </figure>
      <button>
        <Image src="/images/assets/menu.svg" alt="" width={34} height={34} />
      </button>
    </header>
  )
}
