import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: 'A terapia com o Dr. João transformou minha forma de ver a vida. Encontrei ferramentas para lidar com minha ansiedade e hoje me sinto muito mais confiante e equilibrada.',
      author: 'Paciente anônimo',
    },
    {
      text: 'O atendimento online foi uma surpresa positiva. A qualidade é a mesma do presencial e a flexibilidade de horários facilitou muito minha rotina. Recomendo!',
      author: 'Paciente anônimo',
    },
    {
      text: 'Dr. João tem uma escuta atenta e acolhedora. Me ajudou a entender melhor minhas emoções e a desenvolver estratégias para enfrentar os desafios do dia a dia.',
      author: 'Paciente anônimo',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-textMain mb-4">
            Depoimentos
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Veja o que nossos pacientes têm a dizer sobre o atendimento.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-bgLight p-8 sm:p-12 rounded-2xl shadow-md"
            >
              <Quote className="text-primary mb-6" size={40} />
              <p className="text-lg sm:text-xl text-textSecondary leading-relaxed mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-textMain font-semibold">
                – {testimonials[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-primary"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-primary"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

