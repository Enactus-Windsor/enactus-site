// src/app/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../assets/artboard.png';

export default function Home() {
  return (
    //PLEASE CHANGE BG BACK TO PRIMARY COLOUR ONCE WE GET IMGAES FOR SITE, THHIS IS JSUT TO SEE THE LAYOUT
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-black">
      <img
        src={heroImage.src}
        alt="Local Solutions to Global Problems"
        className="max-w-full h-auto"
      />

      <Link href="/join-us">
        <div className="mt-6 bg-white text-gray-900 font-semibold py-3 px-8 rounded-full shadow hover:shadow-md transition cursor-pointer">
          Join Us!
        </div>
      </Link>
    </div>
  );
}
