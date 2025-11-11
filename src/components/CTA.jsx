import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Agende sua primeira sessão e dê o primeiro passo para o seu bem-estar.
          </h2>
          <p className="text-lg sm:text-xl text-white/90">
            Estou aqui para te ajudar nessa jornada de autoconhecimento e crescimento pessoal.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-colors duration-200 shadow-xl flex items-center space-x-2 mx-auto group"
            >
              <span>Agendar consulta</span>
              <ArrowRight 
                size={22} 
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

