import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <Testimonials />
      <ProblemStatement />
      <SolutionOverview />
      <ProgramBenefits />
      <HowWeHelp />
      <WhoWereLookingFor />
      <CallToAction />
      <Sponsors />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="bg-background/80 shadow-sm sticky top-0 z-10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2 sm:py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <Image
            src="/krea-logo-negro.svg"
            alt="Krea logo"
            width={80}
            height={32}
            className="w-20 sm:w-24 h-auto dark:hidden"
          />
          <Image
            src="/krea-logo-blanco.svg"
            alt="Krea logo"
            width={80}
            height={32}
            className="w-20 sm:w-24 h-auto hidden dark:block"
          />
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <span className="text-xs sm:text-sm">Powered by:</span>
          <Image
            src="/Pygma-logo-negro.svg"
            alt="Powered by logo"
            width={80}
            height={32}
            className="w-20 sm:w-24 h-auto dark:hidden"
          />
          <Image
            src="/Pygma-logo-blanco.svg"
            alt="Powered by logo"
            width={80}
            height={32}
            className="w-20 sm:w-24 h-auto hidden dark:block"
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 opacity-50" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          El lugar donde creas y lanzas
          <br />
          esas ideas que te apasionan
          <br />
          en solo 2 semanas
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Únete a una comunidad de Kreadores como tú y convierte esas ideas en resultados tangibles.
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
        >
          ¡Aplicar ahora!
        </Button>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      name: "Keila Iluquea",
      text: "Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae.",
      cohort: "Cohorte Krea S2",
    },
    {
      name: "Sebastian Correa",
      text: "Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae.",
      cohort: "Cohorte Krea S2",
    },
    {
      name: "Juan Manuel Galeano",
      text: "Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae.",
      cohort: "Cohorte Krea S1",
    },
    {
      name: "Yerferson Peña",
      text: "Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae.",
      cohort: "Cohorte Krea S1",
    },
    {
      name: "Thaymara Bolivar",
      text: "Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae.",
      cohort: "Cohorte Krea S1",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Lo que dicen nuestros Kreadores</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-card p-6 rounded-lg shadow-md h-full flex flex-col justify-between transform transition-all duration-300 hover:scale-105">
                  <p className="mb-4 italic text-card-foreground">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.cohort}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

function ProblemStatement() {
  const problems = [
    {
      title: "Miedo al fracaso",
      description: "Seguramente tienes miedo de darle vida a esa idea que te apasiona.",
    },
    {
      title: "No saber por dónde empezar",
      description: "No tienes un camino claro y sencillo de como empezar.",
    },
    {
      title: "Falta de equipo, dinero o tiempo",
      description: "Crees que necesitas demasiado tiempo, dinero o un equipo sofisticado.",
    },
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">¡Comenzar es mas facil de lo que parece!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4 text-card-foreground">{problem.title}</h3>
              <p className="text-card-foreground/80">{problem.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xl mt-12 text-foreground">
          Relax. Darle vida a eso que te apasiona no tiene por qué ser difícil.
        </p>
        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            ¡Aplicar ahora!
          </Button>
        </div>
      </div>
    </section>
  )
}

function SolutionOverview() {
  const carouselItems = [
    { src: "/Kreadora-1.svg", alt: "" },
    { src: "/Kreador-2.svg", alt: "Launch your idea 2" },
    { src: "/Kreador-3.svg", alt: "Launch your idea 3" },
    { src: "/Kreador-4.svg", alt: "Launch your idea 3" },
    { src: "/Kreador-5.svg", alt: "Launch your idea 3" },
    { src: "/Kreador-6.svg", alt: "Launch your idea 3" },
    { src: "/Kreador-7.svg", alt: "Launch your idea 3" },
    { src: "/8.svg", alt: "Launch your idea 3" },
  ]

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6 text-primary">¿Estas listo para convertirte en un Kreador?</h2>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Lanza tu idea en solo 2 semanas.</h3>
          <p className="mb-6 text-foreground/80">
            Junto a una comunidad que te apoya y resultados que puedes medir. Sin excusas, sin costos, sin barreras.
          </p>
          <ul className="mb-8 space-y-2">
            <li className="flex items-center">
              <span className="bg-accent text-accent-foreground rounded-full p-1 mr-2">✓</span>
              100% Gratuito
            </li>
            <li className="flex items-center">
              <span className="bg-accent text-accent-foreground rounded-full p-1 mr-2">✓</span>
              Durante las noches y fines de semana
            </li>
            <li className="flex items-center">
              <span className="bg-accent text-accent-foreground rounded-full p-1 mr-2">✓</span>
              100% Online
            </li>
          </ul>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            ¡Aplicar ahora!
          </Button>
        </div>
        <div className="md:w-1/2">
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={item.src || "/kreadora#1.svg"}
                    alt={item.alt}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="mt-4 text-center text-foreground/80">
            Explora nuestro proceso paso a paso para lanzar tu idea en solo 2 semanas. Desde la conceptualización hasta
            la implementación, te guiamos en cada etapa.
          </p>
        </div>
      </div>
    </section>
  )
}

function ProgramBenefits() {
  const benefits = [
    {
      title: "Validar tu idea y construir tu primer prototipo.",
      description: "Convierte tu idea en algo real con estructura, experimentación y feedback en vivo.",
    },
    {
      title: "Lograr tus primeros usuarios, tracción o ventas.",
      description: "Aprende a lanzar, atraer usuarios y generar impacto en solo 2 semanas.",
    },
    {
      title: "Pertenecer a una comunidad apasionada como tú.",
      description: "Conéctate con otros Kreadores, comparte tu progreso y crece junto a ellos.",
    },
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          ¿Qué puedes esperar después de 2 semanas en Krea?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4 text-card-foreground">{benefit.title}</h3>
              <p className="text-card-foreground/80">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            ¡Aplicar ahora!
          </Button>
        </div>
      </div>
    </section>
  )
}

function HowWeHelp() {
  const helpItems = [
    {
      title: 'Workshops para el "qué"',
      description: "Aprende los fundamentos clave para dar vida a tu idea con sesiones guiadas.",
      icon: "🎓",
    },
    {
      title: "Feedback en vivo",
      description: "Recibe retroalimentación inmediata para mejorar y avanzar más rápido.",
      icon: "💬",
    },
    {
      title: 'Labs para el "cómo"',
      description: "Aplica lo aprendido, experimenta y construye con apoyo en tiempo real.",
      icon: "🔬",
    },
    {
      title: "Comparte tu trabajo al mundo",
      description: "Expón tu proyecto, gana visibilidad y conecta con una audiencia real.",
      icon: "🌍",
    },
  ]

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">¿Como te ayudamos?</h2>
        <p className="text-center text-xl mb-12 text-foreground">
          No somos un curso, bootcamp o escuela. Somos tu espacio para experimentar y crear
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">{item.title}</h3>
              <p className="text-card-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-xl font-bold mb-4 text-foreground">¡Cupos limitados!</p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            ¡Aplicar ahora!
          </Button>
        </div>
      </div>
    </section>
  )
}

function WhoWereLookingFor() {
  const criteria = [
    {
      title: "Personas sin miedo a cagarla y aprender rápido.",
      description: "Si te atreves a experimentar, fallar y mejorar rápido, este es tu lugar.",
    },
    {
      title: "Constantes, con al menos 2 horas al día para tu idea.",
      description: "El progreso requiere compromiso. Dedica 2 horas diarias y verás resultados.",
    },
    {
      title: "Gente que disfruta colaborar y compartir con otros.",
      description: "Conéctate con otros Kreadores, comparte avances y crece en comunidad.",
    },
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          ¿Estas listo para convertirte en un Kreador?
        </h2>
        <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Buscamos a nuestros próximos Kreadores</h3>
        <p className="text-center text-xl mb-12 text-foreground/80">
          ¿Listo para lanzar tu idea? Si te apasiona crear y aprender rápido, aplica ahora. Cupos limitados hasta el 23
          de febrero.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4 text-card-foreground">{item.title}</h3>
              <p className="text-card-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            ¡Aplicar ahora!
          </Button>
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/40 opacity-30" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6">Comparte al mundo tu idea</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          ¡Construir en publico es la norma y el mejor camino!
          <br />
          No puedes construir solo tu idea y esperar que la gente llegue.
        </p>
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
        >
          ¡Aplicar ahora!
        </Button>
      </div>
    </section>
  )
}

function Sponsors() {
  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "/placeholder-sponsor1.svg",
      darkLogo: "/placeholder-sponsor1-dark.svg",
    },
  ]

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Nuestros patrocinadores</h2>
        <p className="text-center text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estamos orgullos de ser patrocinados por compañias que estan ayudando a facilitar el camino para hacer realidad las ideas que les apasionan a las personas.
        </p>

        {/* Logos grid */}
        <div className="flex justify-center items-center mb-16">
          <div className="w-32 h-32 relative">
            <Image
              src={sponsors[0].logo || "/placeholder.svg"}
              alt={sponsors[0].name}
              layout="fill"
              objectFit="contain"
              className="dark:hidden"
            />
            <Image
              src={sponsors[0].darkLogo || "/placeholder.svg"}
              alt={sponsors[0].name}
              layout="fill"
              objectFit="contain"
              className="hidden dark:block"
            />
          </div>
        </div>

        {/* Partner CTA */}
        <div className="max-w-4xl mx-auto bg-card rounded-lg p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Want to partner with us?</h3>
              <p className="text-muted-foreground">Promote your company with the power of community</p>
            </div>
            <Button size="lg" className="bg-[#00e6b3] hover:bg-[#00e6b3]/90 text-background w-full sm:w-auto">
              Find out more
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Krea. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

