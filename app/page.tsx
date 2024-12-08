'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { ProductCard } from './components/ProductCard'
import { products } from './data/products'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Zap, Truck, Shield } from 'lucide-react'
import { Droplet, Palette, TruckIcon } from 'lucide-react'
import Image from 'next/image'

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrendingProducts />
      <ProductFacts />
      <VideoTestimonials />
      <FeaturedInfluencer />
      <ProductTestimonials />
    </div>
  )
}

function HeroSection() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snippet-GnhCrsGbdUTj4vnB4XfVkVVxPwdugx.txt"
        alt="Hero GIF"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <Badge variant="secondary" className="mb-4">Discover Rovi</Badge>
          <h2 className="text-5xl font-bold mb-4">Bye-Bye Expensive Lip Fillers</h2>
          <p className="text-xl mb-6">Get The Hottest Lipsticks Before They're Gone!</p>
          <Link href="/products">
            <Button size="lg" className="animate-pulse bg-black hover:bg-gray-800">
              Shop Now <TrendingUp className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;


function TrendingProducts() {
  return (
    <section className="container mx-auto px-4 py-12 my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Trending at Rovi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/products">
          <Button variant="outline" size="lg">View All Products</Button>
        </Link>
      </div>
    </section>
  )
}

function ProductFacts() {
  return (
    <section className="bg-gray-50 py-16 my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-400 p-4 rounded-full mb-4 shadow-lg transform hover:scale-110 transition-transform duration-200">
              <Droplet size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Moisturizes & Plumps</h3>
            <p className="text-gray-600">Soft, smooth, kissable lips all day. 💋</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-500 p-4 rounded-full mb-4 shadow-lg transform hover:scale-110 transition-transform duration-200">
              <Palette size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rich, Lasting Color</h3>
            <p className="text-gray-600">Ultra-pigmented with a mirror-like shine. ✨</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-600 p-4 rounded-full mb-4 shadow-lg transform hover:scale-110 transition-transform duration-200">
              <TruckIcon size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">3-7 day delivery across the USA. 🚚💨</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function VideoTestimonials() {
  const testimonials = [
    { 
      id: 1, 
      name: "Sarah L.", 
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20(3)-4pKFRDo3TuMesvrHOztK7t7LoXOzFN.mp4", 
      poster: "https://media-hosting.imagekit.io//f7db17c37ac24004/Screenshot%202024-12-06%20at%203.58.59%E2%80%AFPM.png?Expires=1733691553&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ACrkrEVLuFKJzSW5CY0-W5HUCtkKxmjSd3O-uYcW0uC24qhFI1eiD7OeEjBJUUPawzkOSLk6pDgIsK4uJhmcsB6RF7WkkzyheifxwBrlgn2aYZwcFGbzHzzgJZqLWuFZNzU~UqG1Q-cfpTdNNdJCSzTKQlzpGFVkNFt7HZiU0dbmfQ7rvH4TcJsaM0Ob35uj-syv84K2StqYevzoNC~4-OwGS27qZ~hjCrtlh2sO-qhUFlGa2DlsdZ26X05N2F6KfNdfrAkTbCiLPgQc5V1M4XmQm78FC5HTPCc4qkSqdUMxdmfCHfYDrRoL3EONwRIMeLzSywNNVBmWyDLCMdScpQ__" 
    },
    { 
      id: 2, 
      name: "Mia T.", 
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20(4)-EuXeEAABr2q6ttyvjsRpNj4UjTXLYs.mp4", 
      poster: "https://media-hosting.imagekit.io//84e175d97aad4145/Screenshot%202024-12-06%20at%203.53.38%E2%80%AFPM.png?Expires=1733691229&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vxK~YIVgG16ThPEtEBp8RCuim5xD4~96qlk2VnFqcT1Y1mnhRt5j4raTmWL9yEZdO~bmo7NdJ7d2BsuQhrPy3jndONuGaB9ufuGDgjQmUtx-DKwV3vaEIo-TS7NFCHN99xosg~G067BiqZ8pDHvNA675iQWEz5mGbPkHxsA3OxePi0H0eL-V3MMgPdeguYRvH0Bn0SjZlLEFXvw84WgRI7DFxGE6mNMW4jZaJf2rmjfaf~hu1xx6~jMsBNcCJbdn243ByEh3omrATgDNHhmYYD5OdV6HuyEkcJBQJsWLGURQ0KtRwXNMq5gbKUvPIyxtc7y3GAQFwkgklf8o4qWTyA__" 
    },
    { 
      id: 3, 
      name: "Emma R.", 
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20(2)-Zpa8cvbh0rwJ4powJ5qEmCmlQ18jRp.mp4", 
      poster: "https://media-hosting.imagekit.io//b15ad90ef91a4679/Screenshot%202024-12-06%20at%203.58.27%E2%80%AFPM.png?Expires=1733691553&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0~ObEwabGeD~wiLP3hxrBCaaiTzwKTgvt3rhT1o0mgG0bKEZ0XD0~K0hIwYxhrSpxzi91F6W6v28jnHwmGNSBesmOfaLIGdPOvgCIrYSLuyj-uuJgaek69y0JSQWsv99Vf1Hi6SA0n74iq5-X14qzNaaGViSt~bl9xEwkrwVzN9YEPIZQ3gRueN8uFW9uOdyLguoyyhfkZKIV8g01DCOfIkcF1rFO89xO72wb68l9OQo3nzPEGiYdBKwELw-13s4voSDhwsd5ZD3nD6SPBZK8~s5iVajasAgPh8yYt2lhJjvErSEhkzu5-nLkIJA1B-O7TLGXFjZ5TEgNLQt0G8qiw__" 
    },
    { 
      id: 4, 
      name: "Alex K.", 
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20(6)-uYuvyhouZQ2AeIdbkfWkFNok8RboDx.mp4", 
      poster: "https://media-hosting.imagekit.io//70924e4094f340f0/Screenshot%202024-12-06%20at%203.52.34%E2%80%AFPM.png?Expires=1733691229&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AGb~MwZaN9YIpBJaMeM7mQVPN0Ll1ssptpzY7ZHFRSra2AKb3LVSeVHiTUdefva0eg-9~mqzvLmR5HTS3Yyl-VJTbQy8KMhG-LTqGjJ2Z5drTQSBNupdPt8Sn-5vA~cI22IViOCB37jUWezgaPNbu2W1sI9aXW6rPKYsKbsbHpqh-ERqZ1NBgmRdgPqsb2dMH8nLKLxUluVr7SdXq8Fn~iVLpbTvQTbWJ1vsJYGWmeyM~TbHi4Lgd~tnjJqtE3P6xLRFgtHr5PUCop0dtLmpCQeAnwuPBCzPAaORc3oXsik8zcT2FA4A~vLVgJ4wjOVxLVOp4dJqcyFi5j-6fOsAhQ__" 
    },
  ]

  return (
    <section className="bg-gray-100 py-12 my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
              <video 
                controls 
                className="w-full h-48 object-cover" 
                style={{ objectPosition: 'center 30%' }} 
                poster={testimonial.poster}
              >
                <source src={testimonial.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 flex-grow">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">Verified Buyer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedInfluencer() {
  return (
    <section className="container mx-auto px-4 py-12 my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12_043205af-0287-44b9-aede-c5d291f0b8ae.jpg-H9KPMPl3bh8kfMf2S3H3pcuVXRybdG.png"
            alt="Plump Lip Plumping Products Duo"
            width={400}
            height={400}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11_f548b662-61d8-41d3-b869-514abf12b69a.jpg-Av8GTBfOJANRyKdyI5uk68kHhGDtGF.png"
            alt="Plump Lip Collection Color Range"
            width={400}
            height={400}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_9270b15f-ad60-4e06-83cf-acb0f3f80791.jpg-fsE8gdBQgmkcSbkB2fmsWhKVoEw5Uf.png"
            alt="Lip Plumping Booster Results"
            width={400}
            height={400}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}

function ProductTestimonials() {
  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <TestimonialCard name="Sarah L." rating={5} text="This thing plumps! I tried it as soon as it arrives and let me tell you, let this be a warning that it hurts 😭" />
        <TestimonialCard name="Lauren M." rating={4} text="It works amazing. It just takes like 1 minute to take effect and for it to show results it takes about 4-5 minutes." />
        <TestimonialCard name="Hailey B." rating={5} text="After receiving it and using it for a week, very moisturizing and smooth. It can even be used as lip gloss without any other cosmetics. Great!" />
      </div>
      <Accordion type="single" collapsible className="w-full mt-12">
        <AccordionItem value="about" className="border rounded-lg mb-2 shadow-sm" data-accordion-item="about">
          <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-lg font-medium">
            🛍️ About Our Products
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 bg-gray-50">
            <p className="text-gray-700">Our lip gloss collection is designed to bring out your inner glow! Lightweight, silky, and ultra-pigmented, each gloss glides on smoothly for a mirror-like shine and all-day comfort. Infused with moisturizing ingredients, it keeps your lips soft, plump, and irresistible. With 6 stunning shades to match any mood or occasion, our glosses are your go-to for effortless glam, anytime, anywhere. ✨💋</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping" className="border rounded-lg mb-2 shadow-sm" data-accordion-item="shipping">
          <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-lg font-medium">
            🚚 Shipping Information
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 bg-gray-50">
            <p className="text-gray-700">We offer 3-7 day shipping across the USA! Your order will be on its way quickly, so you can start shining sooner. 💨✨ Track your package every step of the way for peace of mind.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns" className="border rounded-lg mb-2 shadow-sm" data-accordion-item="returns">
          <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-lg font-medium">
            💁‍♀️ Returns & Warranty
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 bg-gray-50">
            <p className="text-gray-700">Due to high demand and our products selling out quickly, all sales are final. We're committed to delivering top-quality products, so if there's an issue with your order, please contact us immediately—we'll make it right! 💖✨</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

function TestimonialCard({ name, rating, text }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4">{text}</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold">{name}</span>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
    </div>
  )
}



