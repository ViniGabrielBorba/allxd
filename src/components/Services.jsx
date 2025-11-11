import { motion } from 'framer-motion'
import { User, Users, Video, Briefcase, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: User,
      title: 'Terapia Individual',
      description: 'Atendimento personalizado focado no seu desenvolvimento pessoal e bem-estar emocional.',
    },
    {
      icon: Users,
      title: 'Terapia de Casal',
      description: 'Ajuda para casais que buscam melhorar a comunicação e fortalecer o relacionamento.',
    },
    {
      icon: Video,
      title: 'Atendimento Online',
      description: 'Sessões de terapia pela internet, com toda segurança e sigilo, no conforto da sua casa.',
    },
    {
      icon: Briefcase,
      title: 'Orientação Profissional',
      description: 'Suporte para decisões de carreira, desenvolvimento profissional e planejamento de futuro.',
    },
  ]

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-bgLight">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-textMain mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Oferecemos diferentes modalidades de atendimento para atender suas necessidades específicas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <service.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-textMain mb-3">
                {service.title}
              </h3>
              <p className="text-textSecondary mb-6 flex-grow">
                {service.description}
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-primary font-semibold group"
              >
                <span>Saiba mais</span>
                <ArrowRight 
                  size={18} 
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

