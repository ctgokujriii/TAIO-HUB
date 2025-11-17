import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const Contact = () => {
  const formik = useFormik({
    initialValues: { name: '', email: '', company: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      company: Yup.string().required('Company is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (res.ok) alert('Form submitted! (Dummy response)');
      } catch (err) {
        console.error(err);
      }
    },
  });

const hasError = (name: keyof typeof formik.touched) =>
  formik.touched[name] && formik.errors[name];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-center mb-12"
      >
        Get in Touch
      </motion.h2>
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto space-y-4">
        <motion.div
          className={`space-y-1 ${hasError('name') ? 'animate-shake' : ''}`}
          animate={hasError('name') ? { borderColor: '#EF4444' } : {}}
          transition={{ duration: 0.2 }}
        >
          <input
            type="text"
            {...formik.getFieldProps('name')}
            className={`w-full p-3 bg-gray-800 border rounded-lg text-white ${hasError('name') ? 'border-red-500 glow' : 'border-gray-600'}`}
            placeholder="Name"
          />
          {formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
        </motion.div>
        <motion.div className={`space-y-1 ${hasError('email') ? 'animate-shake' : ''}`}>
          <input
            type="email"
            {...formik.getFieldProps('email')}
            className={`w-full p-3 bg-gray-800 border rounded-lg text-white ${hasError('email') ? 'border-red-500' : 'border-gray-600'}`}
            placeholder="Email"
          />
          {formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
        </motion.div>
        <motion.div className={`space-y-1 ${hasError('company') ? 'animate-shake' : ''}`}>
          <input
            type="text"
            {...formik.getFieldProps('company')}
            className={`w-full p-3 bg-gray-800 border rounded-lg text-white ${hasError('company') ? 'border-red-500' : 'border-gray-600'}`}
            placeholder="Company"
          />
          {formik.errors.company && <p className="text-red-500 text-sm">{formik.errors.company}</p>}
        </motion.div>
        <motion.div className={`space-y-1 ${hasError('message') ? 'animate-shake' : ''}`}>
          <textarea
            rows={4}
            {...formik.getFieldProps('message')}
            className={`w-full p-3 bg-gray-800 border rounded-lg text-white ${hasError('message') ? 'border-red-500' : 'border-gray-600'}`}
            placeholder="Message"
          />
          {formik.errors.message && <p className="text-red-500 text-sm">{formik.errors.message}</p>}
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
        >
          Submit
        </motion.button>
      </form>
    </section>
  );
};

// Add shake animation to globals.css if needed: @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
export default Contact;