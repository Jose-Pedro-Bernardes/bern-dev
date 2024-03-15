import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="Redes">
      <section>
        <figure>
          <Image
            src="/images/logo/logoFooter.svg"
            alt=""
            width={50}
            height={41}
          />
        </figure>
        <p>José Pedro Bernardes.</p>
        <p>josepedro.bernardes1@gmail.com</p>
      </section>
      <section>
        <h4>Redes Sociais</h4>
        <nav>
          <a href="#" target="_blank">
            {/* Instagram */}
          </a>
          <a href="#" target="_blank">
            {/* LinkedIn */}
          </a>
          <a href="#" target="_blank">
            {/* GitHub */}
          </a>
          <a href="#" target="_blank">
            {/* WhatsApp */}
          </a>
        </nav>
      </section>
    </footer>
  )
}
