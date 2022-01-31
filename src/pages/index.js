import Image from 'next/image';
import 'twin.macro';
import { AshLogo, EnvelopeIcon } from '../components/svgs';
import cuppa from '../../public/images/il_cuppa_715x756.png';

export default function Home() {
  return (
    <div className="bg-primary-light flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-extrabold text-8xl pt-6 text-primary-dark">
        Hello World!
      </h1>
      <h2>Test</h2>
      <EnvelopeIcon className="fill-pink-400 text-8xl" />
      <Image
        src="/images/plus_white.svg"
        alt="test svg"
        width={72}
        height={72}
      />
    </div>
  );
}
