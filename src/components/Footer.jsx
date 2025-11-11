import { motion } from 'framer-motion'
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer id="contato" className="bg-text-main text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Name */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Dr. João Martins</h3>
            <p className="text-gray-400">
              Psicólogo clínico especializado em ansiedade e desenvolvimento pessoal.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:contato@joaomartinspsi.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>contato@joaomartinspsi.com</span>
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>(11) 99999-9999</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="mt-1" />
                <span>São Paulo - SP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Depoimentos'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Dr. João Martins. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

