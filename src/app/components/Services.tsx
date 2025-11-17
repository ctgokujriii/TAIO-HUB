import { motion } from 'framer-motion';

const services = [
  { title: 'Free 3 Day Trial', desc: '3 days of a week. You choose what days & what times. We cover it. If you love it, we move forwards.' },
  { title: 'Experienced Staff', desc: 'Our team has Telephonists and Dispatchers with years of industry experience.' },
  { title: 'Professional & Reliable support', desc: '24/7 availability, with multiple backups, in order to serve all your dispatch needs.' },
  { title: 'Free Add-on', desc: 'We provide performance & quality reports for all of our agents working with you.' },
  { title: 'Modern Feel', desc: 'You get your own dedicated login page, with a statistics sheet and all reports centered on one page.' },
  { title: 'Custom Plans', desc: 'We tailor each plan to your exact needs and requirements. You only pay for what you need.' },
];

const Services = () => (
  <section className="py-20 px-4 bg-gray-900/50">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-center mb-12 text-blue-400"
    >
      Our Services
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
          className="bg-gray-800 p-6 rounded-xl shadow-xl cursor-pointer border border-blue-500/20"
        >
          <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
          <p className="text-gray-300">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;