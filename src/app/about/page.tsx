import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="font-sans bg-white text-dark min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6">
        <Link href="/" className="text-xs tracking-widest font-bold text-dark">THEPRODCT ™</Link>
        <nav className="space-x-6 text-sm">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative w-full h-[540px] flex flex-col justify-center items-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Mountains"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="z-10 flex flex-col items-center justify-center h-full w-full max-w-7xl mx-auto px-6">
          <h1 className="
            font-sans
            font-bold
            uppercase
            text-[72px]
            leading-[1.05]
            tracking-tight
            text-white
            text-center
            drop-shadow-xl
            max-w-6xl
            mx-auto
            mb-16
          ">
            ABOUT THE PRODCT
          </h1>
          <p className="
            font-mono
            text-white
            text-xl
            text-center
            mt-12
            mb-12
            max-w-5xl
            mx-auto
          ">
            We turn AI complexity into clarity, helping businesses navigate the world of artificial intelligence with confidence.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto mt-16 px-4">        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="
              font-sans
              font-bold
              uppercase
              text-[72px]
              leading-[1.05]
              tracking-tight
              text-dark
              text-left
              mb-8
            ">
              WHO WE ARE
            </h2>
            <p className="text-lg mb-6">
              At The Prodct, we are a team of AI strategists, developers, and innovators who are passionate about transforming how businesses use artificial intelligence. We believe in the power of AI to solve real-world problems, but we also understand that it's not a one-size-fits-all solution. That's why we take a collaborative approach, working closely with you to build customized AI strategies and products that align with your goals.
            </p>
            <p className="text-lg mb-6">
              Our team combines deep technical expertise with a business-first mindset, ensuring that every solution we deliver is practical, scalable, and focused on delivering measurable value. We're here to help you navigate the AI landscape and empower your team to achieve success with cutting-edge technology.
            </p>
          </div>
          <div>
            <Image 
              src="/images/team.png" 
              width={500} 
              height={400} 
              alt="Our Team" 
              className="rounded-xl w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <Image 
              src="/images/forest.png" 
              width={500} 
              height={400} 
              alt="Our Approach" 
              className="rounded-xl w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="
              font-sans
              font-bold
              uppercase
              text-[72px]
              leading-[1.05]
              tracking-tight
              text-dark
              text-left
              mb-8
            ">
              OUR APPROACH
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl mb-3">Global Reach, Boutique Service:</h3>
                <p className="text-base">
                  Our team works with companies around the world, providing personalized attention to you and your organizations specific needs.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-3">No Hype, Just Results:</h3>
                <p className="text-base">
                  We cut through the noise and focus on what's essential. Our solutions are based on your unique challenges and goals, not on buzzwords.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-3">Collaborative Approach:</h3>
                <p className="text-base">
                  We believe in working closely with our clients, ensuring that you're involved every step of the way. Your insights and feedback are crucial as we build AI solutions that truly align with your business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto my-16 px-4 text-center">
        <h2 className="
          font-sans
          font-bold
          uppercase
          text-[72px]
          leading-[1.05]
          tracking-tight
          text-dark
          text-center
          mb-8
        ">
          WORK WITH US
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Ready to turn AI complexity into clarity for your business?
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#EC5C39] px-8 py-3 rounded-2xl text-white font-semibold shadow hover:bg-[#d44b2c] transition"
        >
          Get Started Today
        </Link>
      </section>

      {/* Footer */}
      <footer className="p-6 text-xs text-gray-400 flex justify-center border-t">
        <span>THEPRODCT ™</span>
      </footer>
    </div>
  );
}
