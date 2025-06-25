import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
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
      <section className="relative w-full h-[1080px] flex flex-col justify-center items-center text-white">
        {/* Background Image + Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Mountains"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Darker overlay for text pop */}
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
            YOUR PARTNER IN NAVIGATING THE WORLD OF AI STRATEGY AND DEVELOPMENT
          </h1>
          <p className="
            font-mono
            text-white
            text-xl
            text-left
            mt-12
            mb-12
            max-w-5xl
            mx-auto
          ">
            AI can seem overwhelming with all the noise surrounding it. At The Prodct, we focus on turning complexity into clarity. We work alongside you to craft a practical, customized strategy that meets your specific business needs. From empowering your team with the right skills to developing AI products that generate meaningful ROI, we help you build sustainable, impactful AI solutions.
          </p>
          <p className="font-sans font-bold text-5xl mt-8 mb-12 text-white uppercase tracking-tight max-w-4xl mx-auto text-center">
            DO MORE WITH LESS ... NO REALLY
          </p>
          <a
            href="#services"
            className="mt-12 inline-block bg-[#EC5C39] px-8 py-3 rounded-2xl text-white font-semibold shadow hover:bg-[#d44b2c] transition"
          >
            LEARN MORE BELOW
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto mt-16 px-4">
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
          HOW WE HELP AND WORK WITH OUR PARTNERS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="w-full aspect-square mb-4 overflow-hidden rounded-xl">
              <Image 
                src="/images/forest.png" 
                width={300} 
                height={300} 
                alt="Strategy" 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="font-bold mb-2">AI STRATEGY</h3>
            <p className="text-sm">
              We help define the right approach to integrate AI into your business, with tailored plans that drive efficiency and growth.
            </p>
          </div>
          <div>
            <div className="w-full aspect-square mb-4 overflow-hidden rounded-xl">
              <Image 
                src="/images/upskilling.png" 
                width={300} 
                height={300} 
                alt="Upskilling" 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="font-bold mb-2">AI UPSKILLING</h3>
            <p className="text-sm">
              Through training and workshops, we ensure your team has the skills to implement and scale AI solutions effectively.
            </p>
          </div>
          <div>
            <div className="w-full aspect-square mb-4 overflow-hidden rounded-xl">
              <Image 
                src="/images/dev.png" 
                width={300} 
                height={300} 
                alt="Development" 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="font-bold mb-2">AI DEVELOPMENT</h3>
            <p className="text-sm">
              Our experts work side by wide with your team to build products at unmatched speed that are not only innovative but also practical and ROI-focused, designed to solve your real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started Form */}
      <section className="max-w-7xl mx-auto my-16 px-4">
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
        ">READY TO GET STARTED</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Copy */}
          <div className="space-y-6">
            <div>
              <p className="text-lg font-semibold mb-4">
                Let&apos;s turn your AI ideas into action.
              </p>
              <p className="text-sm mb-6">
                Whether you&apos;re just beginning to explore AI or looking to take your strategy to the next level, we&apos;re here to help. Book a free consultation or demo with our experts and discover how AI can drive growth, efficiency, and innovation in your business.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Why Book a Consultation?</h3>
              <ul className="text-sm space-y-2">
                <li>• Get personalized insights on how AI can benefit your business.</li>
                <li>• Explore potential solutions tailored to your unique challenges.</li>
                <li>• See a live demo of the AI products we can help you build.</li>
                <li>• No obligation, just actionable advice.</li>
              </ul>
            </div>
            
            <p className="text-sm font-semibold">
              Book your free session now and start transforming your business with AI.
            </p>
          </div>
          
          {/* Right side - Contact Form */}
          <div>
            {/* --- Resend API Contact Form --- */}
            <ContactForm buttonText="Book Session" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-16 px-4">
        <div className="flex-1 w-full">
          <Image src="/images/tree-hands.png" width={400} height={300} alt="Why Choose Us" className="rounded-xl" />
        </div>
        <div className="flex-1 w-full">
          <h2 className="
            font-sans
            font-bold
            uppercase
            text-[72px]
            leading-[1.05]
            tracking-tight
            text-dark
            text-left
            mb-6
          ">WHY CHOOSE US</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Global Reach, Boutique Service:</h3>
              <p className="text-sm mb-4">
                Our team works with companies around the world, providing personalized attention to you and your organizations specific needs.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">No Hype, Just Results:</h3>
              <p className="text-sm mb-4">
                We cut through the noise and focus on what&apos;s essential. Our solutions are based on your unique challenges and goals, not on buzzwords.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Collaborative Approach:</h3>
              <p className="text-sm mb-6">
                We believe in working closely with our clients, ensuring that you&apos;re involved every step of the way. Your insights and feedback are crucial as we build AI solutions that truly align with your business objectives.
              </p>
            </div>
          </div>
          
          <a
            href="#contact"
            className="inline-block bg-[#EC5C39] px-6 py-2 rounded-2xl text-white font-semibold shadow hover:bg-[#d44b2c] transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Substack/Blog */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="
            font-sans
            font-bold
            uppercase
            text-[72px]
            leading-[1.05]
            tracking-tight
            text-dark
            text-left
            mb-2
            px-4
          ">FOLLOW US ON SUBSTACK</h2>
          <p className="text-sm text-gray-600 mb-4 px-4">Click on the images to view the blog posts</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
            <div className="bg-white p-3 rounded-xl">
              <a 
                href="https://substack.com/home/post/p-163672891"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-4/5 aspect-square mb-2 overflow-hidden rounded-xl hover:opacity-80 transition-opacity cursor-pointer mx-auto">
                  <Image 
                    src="/images/blog1.png" 
                    width={240} 
                    height={240} 
                    alt="Blog 1" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="text-sm hover:text-accent transition-colors">How a concussion kit could transform youth sports safety</p>
              </a>
            </div>
            <div className="bg-white p-3 rounded-xl">
              <a 
                href="https://coachingthemachine.substack.com/p/coaching-the-machine-how-gpt-pods"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-4/5 aspect-square mb-2 overflow-hidden rounded-xl hover:opacity-80 transition-opacity cursor-pointer mx-auto">
                  <Image 
                    src="/images/blog2.png" 
                    width={240} 
                    height={240} 
                    alt="Blog 2" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="text-sm hover:text-accent transition-colors">How GPT Pods are redesigning delivery</p>
              </a>
            </div>
            <div className="bg-white p-3 rounded-xl">
              <a 
                href="https://coachingthemachine.substack.com/p/why-im-coaching-the-machine"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-4/5 aspect-square mb-2 overflow-hidden rounded-xl hover:opacity-80 transition-opacity cursor-pointer mx-auto">
                  <Image 
                    src="/images/blog3.png" 
                    width={240} 
                    height={240} 
                    alt="Blog 3" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="text-sm hover:text-accent transition-colors">Why I&apos;m coaching the machine</p>
              </a>
            </div>
            <div className="bg-white p-3 rounded-xl">
              <a 
                href="https://coachingthemachine.substack.com/p/govdoc-copilot-your-ai-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-4/5 aspect-square mb-2 overflow-hidden rounded-xl hover:opacity-80 transition-opacity cursor-pointer mx-auto">
                  <Image 
                    src="/images/blog4.png" 
                    width={240} 
                    height={240} 
                    alt="Blog 4" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="text-sm hover:text-accent transition-colors">GovDoc Copilot – Your AI Assistant for Government Project Docs</p>
              </a>
            </div>
            <div className="bg-white p-3 rounded-xl">
              <a 
                href="https://coachingthemachine.substack.com/p/modernizing-legacy-systems-with-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-4/5 aspect-square mb-2 overflow-hidden rounded-xl hover:opacity-80 transition-opacity cursor-pointer mx-auto">
                  <Image 
                    src="/images/blog5.png" 
                    width={240} 
                    height={240} 
                    alt="Blog 5" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="text-sm hover:text-accent transition-colors">Modernizing Legacy Systems with AI: What's Now Possible</p>
              </a>
            </div>
            <div className="bg-white p-3 rounded-xl">
              <a 
                href="https://coachingthemachine.substack.com/p/coaching-with-code-teaching-baseball"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-4/5 aspect-square mb-2 overflow-hidden rounded-xl hover:opacity-80 transition-opacity cursor-pointer mx-auto">
                  <Image 
                    src="/images/blog6.png" 
                    width={240} 
                    height={240} 
                    alt="Blog 6" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="text-sm hover:text-accent transition-colors">Coaching with Code: Teaching baseball plays through AI</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="https://coachingthemachine.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EC5C39] px-6 py-2 rounded-2xl text-white font-semibold shadow hover:bg-[#d44b2c] transition"
          >
            Substack
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto my-16 px-4">
        <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
        <p className="mb-4 text-sm">
          Interested in working together? Fill out the form below and we&apos;ll be in touch shortly.
        </p>
        {/* --- Resend API Contact Form --- */}
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="p-6 text-xs text-gray-400 flex justify-center border-t">
        <span>THEPRODCT ™</span>
      </footer>
    </div>
  );
}
