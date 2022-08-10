import Image from "next/image";
import Link from "next/link";

const landingPage = () => {
  return(
    <div className="gradient--reversed min-h-screen text-center py-8 lg:py-20">
    <div className="container mx-auto text-white">
      <h1 className="text-white font-bold text-2xl md:text-4xl">
        Welcome to the best UFC related site in the world!
      </h1>  
      <p className="mt-4 lg:mt-8 font-semibold text-lg md:text-2xl">
        Here you can find very interesting articles about UFC fighters and also you can get yourself official merchendise!
      </p>
      <section className="flex flex-col md:flex-row gap-10 mt-10 lg:mt-20">
        <Link href='/blog'>
          <div className="w-3/4 md:w-1/2 mx-auto">
            <p className="mb-8 font-bold text-4xl">
              Blog
            </p>
            <figure className="bg-white cursor-pointer h-96 shadow-2xl relative">
              <Image layout="fill" objectFit="cover" src="/../public/image/2013-ufc-event-poster-collage.webp" />
            </figure>
          </div>
        </Link>
        <Link href='/shop'>
        <div className="w-3/4 md:w-1/2 mx-auto">
          <p className="mb-8 font-bold text-4xl">
            Shop
          </p>
          <figure className="bg-white cursor-pointer h-96 shadow-2xl relative">
            <Image layout='fill' objectFit='contain' src="/../public/image/ufc-logo.webp" />
          </figure>
        </div>
        </Link>
      </section>
    </div>
  </div>
  )
}

export default landingPage;