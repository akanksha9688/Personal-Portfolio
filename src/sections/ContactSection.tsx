import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import SocialLinks from '../components/UI/SocialLinks';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',

  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    const value = name === 'phone'
      ? e.target.value.replace(/\D/g, '').slice(0, 10)
      : e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const ownerTemplateId = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID;
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !ownerTemplateId || !autoReplyTemplateId || !publicKey) {
      throw new Error('EmailJS is not configured');
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      name: formData.name,
      email: formData.email,
      owner_email: 'srivastavaakanksha9415@gmail.com',
      to_email: formData.email,
      reply_to: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      auto_reply_message:
        'Thanks for reaching out! We have received your message and will get in touch with you soon.',
    };

    try {
      await emailjs.send(serviceId, ownerTemplateId, templateParams, publicKey);
    } catch (error) {
      console.error('EmailJS owner notification failed:', error);
      throw new Error('OWNER_EMAIL_FAILED');
    }

    try {
      await emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey);
    } catch (error) {
      console.error('EmailJS auto-reply failed:', error);
      throw new Error('AUTO_REPLY_FAILED');
    }

    setSubmitStatus({
      success: true,
      message: 'Your message has been sent successfully!',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  } catch (error) {
    console.error(error);

    setSubmitStatus({
      success: false,
      message: error instanceof Error && error.message === 'AUTO_REPLY_FAILED'
        ? 'Your message was sent, but the confirmation email could not be sent.'
        : 'An error occurred while sending your message. ',
    });
  } finally {
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitStatus({});
    }, 5000);
  }
};

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold mb-6 gradient-text">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-black dark:text-white">Email</h4>
                  <p className="text-black/80 dark:text-white/80">srivastavaakanksha9415@gmail.com</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-black dark:text-white">Location</h4>
                  <p className="text-black/80 dark:text-white/80">Lucknow, UP (India)</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">Social Profiles</h4>
                  <SocialLinks />
                </div>
              </div>
              
              <div className="mt-12">
                <a
                  href="https://drive.google.com/file/d/1ggYrRXZ-cZD0fKB9TDx42Kxy73Qprld_/view?usp=sharing"
                  className="btn btn-primary w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 gradient-text">Fill Out the Form and I'll get back to you shortly!
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-black dark:text-white mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange} 
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-slate-300/10 border border-white/20 dark:border-slate-700/30 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      placeholder="Full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-black dark:text-white mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-slate-300/10 border border-white/20 dark:border-slate-700/30 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-black dark:text-white mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        e.currentTarget.setCustomValidity('');
                        handleChange(e);
                      }}
                      required
                      inputMode="numeric"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      title="Check your phone number"
                      onInvalid={(e) => e.currentTarget.setCustomValidity('Check your phone number')}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-slate-300/10 border border-white/20 dark:border-slate-700/30 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      placeholder="1234567890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-black dark:text-white mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-slate-300/10 border border-white/20 dark:border-slate-700/30 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      placeholder="What is your query about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-black dark:text-white mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-green-300/10 border border-white/20 dark:border-slate-700/30 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={<Send size={18} />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  
                  {submitStatus.message && (
                    <div
                      className={`p-3 rounded-lg ${
                        submitStatus.success
                          ? 'bg-success-500/20 text-success-500'
                          : 'bg-error-500/20 text-error-500'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;