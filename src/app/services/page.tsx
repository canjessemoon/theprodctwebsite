import Image from "next/image";
import Link from "next/link";

export default function Services() {
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
            OUR SERVICES
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
            We provide comprehensive AI solutions to help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="max-w-7xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-full aspect-square mb-6 overflow-hidden rounded-xl">
              <Image 
                src="/images/forest.png" 
                width={400} 
                height={400} 
                alt="AI Strategy" 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase">AI STRATEGY</h3>
            <p className="text-base mb-6">
              We help define the right approach to integrate AI into your business, with tailored plans that drive efficiency and growth.
            </p>
            <div className="text-left space-y-3">
              <h4 className="font-bold">What we offer:</h4>
              <ul className="text-sm space-y-2">
                <li>• AI readiness assessment</li>
                <li>• Custom AI roadmap development</li>
                <li>• Technology stack recommendations</li>
                <li>• ROI analysis and projections</li>
                <li>• Implementation planning</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-full aspect-square mb-6 overflow-hidden rounded-xl">
              <Image 
                src="/images/upskilling.png" 
                width={400} 
                height={400} 
                alt="AI Upskilling" 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase">AI UPSKILLING</h3>
            <p className="text-base mb-6">
              Through training and workshops, we ensure your team has the skills to implement and scale AI solutions effectively.
            </p>
            <div className="text-left space-y-3">
              <h4 className="font-bold">What we offer:</h4>
              <ul className="text-sm space-y-2">
                <li>• Custom training programs</li>
                <li>• Hands-on workshops</li>
                <li>• AI literacy for leadership</li>
                <li>• Technical skill development</li>
                <li>• Ongoing mentorship</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-full aspect-square mb-6 overflow-hidden rounded-xl">
              <Image 
                src="/images/dev.png" 
                width={400} 
                height={400} 
                alt="AI Development" 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase">AI DEVELOPMENT</h3>
            <p className="text-base mb-6">
              Our experts work side by side with your team to build products at unmatched speed that are not only innovative but also practical and ROI-focused.
            </p>
            <div className="text-left space-y-3">
              <h4 className="font-bold">What we offer:</h4>
              <ul className="text-sm space-y-2">
                <li>• Custom AI product development</li>
                <li>• Machine learning solutions</li>
                <li>• API integration and automation</li>
                <li>• Proof of concept development</li>
                <li>• Ongoing support and maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
          READY TO GET STARTED?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Let's discuss how our services can transform your business with AI.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#EC5C39] px-8 py-3 rounded-2xl text-white font-semibold shadow hover:bg-[#d44b2c] transition"
        >
          Contact Us Today
        </Link>
      </section>

      {/* Footer */}
      <footer className="p-6 text-xs text-gray-400 flex justify-center border-t">
        <span>THEPRODCT ™</span>
      </footer>
    </div>
  );
}
