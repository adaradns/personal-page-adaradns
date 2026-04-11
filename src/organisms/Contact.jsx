import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Youtube, Send, AlertCircle, CheckCircle } from 'lucide-react'
import SectionTitle from '../atoms/SectionTitle'
import ContactLink from '../molecules/ContactLink'
import Button from '../atoms/Button'

function sanitize(value) {
  return value.replace(/[<>&"'/\\]/g, '')
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const contactLinks = [
  {
    href: 'mailto:codeaseguro@gmail.com',
    icon: Mail,
    label: 'Email',
    value: 'codeaseguro@gmail.com',
  },
  {
    href: 'https://youtube.com/@codeaseguro',
    icon: Youtube,
    label: 'YouTube',
    value: 'Codea Seguro',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = 'El nombre debe tener al menos 2 caracteres.'
    }
    if (!validateEmail(form.email)) {
      next.email = 'Ingresa un email valido.'
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'El mensaje debe tener al menos 10 caracteres.'
    }
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const clean = sanitize(value)
    setForm((prev) => ({ ...prev, [name]: clean }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length > 0) {
      setErrors(next)
      return
    }
    setSubmitting(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="contacto"
      className="section-padding bg-brand-dark"
      aria-label="Seccion de contacto"
    >
      <div className="container-max">
        <div className="inline-block bg-brand-accent brutal-border brutal-shadow px-4 py-1 mb-6">
          <span className="font-heading font-700 text-sm uppercase tracking-widest text-black">
            Hablemos
          </span>
        </div>
        <SectionTitle accent className="text-brand-accent">
          CONTACTO
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-body text-white text-base leading-relaxed mb-4">
              Para colegas o gente que quiera{' '}
              <span className="text-brand-accent font-600">aprender a programar</span>
              : Si tienen alguna{' '}
              <span className="text-brand-accent font-600">idea de contenido</span>
              {' '}que pueda crear hablenme, leo los mails, y si tenes alguna{' '}
              <span className="text-brand-accent font-600">duda tecnica</span>
              {' '}o queres aprender algo tambien.{' '}
              Si te interesa mi{' '}
              <span className="text-brand-accent font-600">perfil como profesional</span>
              , tambien hablame, seguramente algo pueda aportar, pero{' '}
              <span className="text-brand-light font-600">no esperes mucho</span>
              {' '}por que realmente{' '}
              <span className="text-brand-light font-600">no tengo tiempo</span>
              {' '}en este momento.
            </p>
            {contactLinks.map((link) => (
              <ContactLink key={link.href} {...link} />
            ))}
          </div>

          <div className="brutal-border border-white brutal-shadow-white bg-white p-6 md:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle size={48} className="text-brand-dark" aria-hidden="true" />
                <p className="font-heading font-700 text-xl uppercase">Mensaje enviado</p>
                <p className="font-body text-gray-600">Te respondo a la brevedad.</p>
                <Button onClick={() => setStatus(null)} variant="secondary" size="md">
                  Enviar otro
                </Button>
              </div>
            ) : status === 'error' ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <AlertCircle size={48} className="text-red-600" aria-hidden="true" />
                <p className="font-heading font-700 text-xl uppercase">Algo salio mal</p>
                <p className="font-body text-gray-600">Intenta de nuevo o escribime directamente a codeaseguro@gmail.com</p>
                <Button onClick={() => setStatus(null)} variant="outline" size="md">
                  Reintentar
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
                <div className="flex flex-col gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-heading font-700 text-sm uppercase tracking-wide mb-2"
                    >
                      Nombre
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      maxLength={80}
                      autoComplete="name"
                      className={`w-full brutal-border px-4 py-3 font-body text-base focus:outline-none focus:ring-2 focus:ring-brand-dark ${
                        errors.name ? 'border-red-600' : ''
                      }`}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="error-name" className="mt-1 text-sm text-red-600 flex items-center gap-1" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-heading font-700 text-sm uppercase tracking-wide mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      maxLength={120}
                      autoComplete="email"
                      className={`w-full brutal-border px-4 py-3 font-body text-base focus:outline-none focus:ring-2 focus:ring-brand-dark ${
                        errors.email ? 'border-red-600' : ''
                      }`}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="error-email" className="mt-1 text-sm text-red-600 flex items-center gap-1" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-heading font-700 text-sm uppercase tracking-wide mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      maxLength={1000}
                      rows={5}
                      className={`w-full brutal-border px-4 py-3 font-body text-base focus:outline-none focus:ring-2 focus:ring-brand-dark resize-none ${
                        errors.message ? 'border-red-600' : ''
                      }`}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="error-message" className="mt-1 text-sm text-red-600 flex items-center gap-1" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={submitting}
                    className="w-full justify-center"
                  >
                    <Send size={16} aria-hidden="true" />
                    {submitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
