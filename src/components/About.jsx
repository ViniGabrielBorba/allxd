import { motion } from 'framer-motion'
import { CheckCircle, Monitor, Award, Shield } from 'lucide-react'

const About = () => {
  const highlights = [
    { icon: Monitor, text: 'Atendimento Online' },
    { icon: Award, text: '10+ anos de experiência' },
    { icon: Shield, text: 'CRP Ativo' },
  ]

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl font-bold text-primary">
                    JM
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Shield className="text-primary" size={32} />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-textMain">
              Sobre o Psicólogo
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              Sou o <strong className="text-textMain">Dr. João Martins</strong>, psicólogo clínico com mais de{' '}
              <strong className="text-textMain">10 anos de experiência</strong> ajudando pessoas a lidarem com{' '}
              ansiedade, depressão e autoestima.
            </p>
            <p className="text-lg text-textSecondary leading-relaxed">
              Minha abordagem é humanizada, baseada em evidências científicas e focada no seu bem-estar emocional. 
              Ofereço um espaço seguro e acolhedor para você expressar suas emoções e trabalhar seu desenvolvimento pessoal.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center sm:items-start space-y-2 p-4 bg-bgLight rounded-2xl"
                >
                  <highlight.icon className="text-primary" size={32} />
                  <p className="text-sm font-medium text-textMain text-center sm:text-left">
                    {highlight.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

