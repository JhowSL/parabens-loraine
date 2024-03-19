import formatura from '../formatura.png'
import Image from 'next/image'

export default function ImagemCapa() {
  return <Image src={formatura} width={50} height={50} alt="Imagem da Capa" />
}
