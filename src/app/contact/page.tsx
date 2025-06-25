import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
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
            GET IN TOUCH
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
            Ready to transform your business with AI? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Contact Info */}
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
              LET'S TALK
            </h2>
            
            <div className="space-y-8">
              <div>                <p className="text-lg font-semibold mb-4">
                  Let&apos;s turn your AI ideas into action.
                </p>
                <p className="text-base mb-6">
                  Whether you&apos;re just beginning to explore AI or looking to take your strategy to the next level, we&apos;re here to help. Book a free consultation or demo with our experts and discover how AI can drive growth, efficiency, and innovation in your business.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4">Why Book a Consultation?</h3>
                <ul className="text-base space-y-3">
                  <li>• Get personalized insights on how AI can benefit your business.</li>
                  <li>• Explore potential solutions tailored to your unique challenges.</li>
                  <li>• See a live demo of the AI products we can help you build.</li>
                  <li>• No obligation, just actionable advice.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4">What to Expect</h3>
                <p className="text-base mb-4">
                  Our initial consultation typically includes:
                </p>
                <ul className="text-base space-y-2">
                  <li>• Assessment of your current technology landscape</li>
                  <li>• Discussion of your business goals and challenges</li>
                  <li>• Exploration of AI opportunities specific to your industry</li>
                  <li>• Overview of potential solutions and next steps</li>
                </ul>
              </div>
              
              <p className="text-base font-semibold">
                Book your free session now and start transforming your business with AI.
              </p>
            </div>
          </div>
          
          {/* Right side - Contact Form */}
          <div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">BOOK YOUR FREE CONSULTATION</h3>
              <ContactForm buttonText="Book Session" />
            </div>
            
            {/* Contact Details */}
            <div className="mt-8 space-y-4">
              <div>
                <h4 className="font-bold mb-2">Email Us</h4>
                <p className="text-base">hello@theprodct.com</p>
              </div>
              
              <div>                <h4 className="font-bold mb-2">Response Time</h4>
                <p className="text-base">We typically respond within 24 hours</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Global Reach</h4>
                <p className="text-base">We work with clients worldwide across all time zones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="
            font-sans
            font-bold
            uppercase
            text-[72px]
            leading-[1.05]
            tracking-tight
            text-dark
            text-center
            mb-16
          ">
            OTHER WAYS TO CONNECT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold text-2xl mb-4 uppercase">FOLLOW OUR BLOG</h3>
              <p className="text-base mb-6">
                Stay updated with the latest AI insights, case studies, and industry trends.
              </p>
              <a
                href="https://coachingthemachine.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#EC5C39] px-6 py-3 rounded-2xl text-white font-semibold shadow hover:bg-[#d44b2c] transition"
              >
                Visit Our Substack
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="font-bold text-2xl mb-4 uppercase">QUICK QUESTIONS</h3>
              <p className="text-base mb-6">
                Have a quick question about our services? Send us a message anytime.
              </p>
              <a
                href="mailto:hello@theprodct.com"
                className="inline-block bg-[#EC5C39] px-6 py-3 rounded-2xl text-white font-semibold shadow hover:bg-[#d44b2c] transition"
              >
                Send Email
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="font-bold text-2xl mb-4 uppercase">PARTNERSHIP INQUIRIES</h3>              <p className="text-base mb-6">
                Interested in partnering with us? Let&apos;s explore collaboration opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EC5C39] px-6 py-3 rounded-2xl text-white font-semibold shadow hover:bg-[#d44b2c] transition"
              >
                Partnership Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-xs text-gray-400 flex justify-center border-t">
        <span>THEPRODCT ™</span>
      </footer>
    </div>
  );
}
