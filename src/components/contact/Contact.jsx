import { useState } from 'react';
import './Contact.css';

// eslint-disable-next-line react/prop-types
const Contact = ({ onClose }) => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const patterns = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    phone: /^(\+27|0)[6-8][0-9]{8}$/,
    name: /^[a-zA-Z]+ [a-zA-Z ]+$/,
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 3) return 'Name must be at least 3 characters';
        if (!patterns.name.test(value)) return 'Please enter your full name (first and last name)';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!patterns.email.test(value)) return 'Please enter a valid email address';
        break;
      case 'phone':
        if (value && !patterns.phone.test(value)) return 'Please enter a valid South African phone number';
        break;
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.length < 3) return 'Subject must be at least 3 characters';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        break;
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error || '' }));
    }

    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error || '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== 'phone') {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors in the form.',
      });
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormData(initialState);
      setTouched({});
      setSubmitStatus({
        type: 'success',
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setTimeout(() => {
        onClose();
      }, 2000);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modalOverlay">
      <div className="formContainer">
        <button className="closeButton" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="formHeader">
            <h1>{"Let's Connect"}</h1>
            <p>{"Fill out the form below and I'll get back to you soon."}</p>
          </div>

          {submitStatus.message && (
            <div className={`submitStatus ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <div className="formBody">
            <div className="inputGroup">
              <label htmlFor="name">
                Full Name
                <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your full name"
                className={errors.name ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.name && <span className="errorMessage">{errors.name}</span>}
            </div>

            <div className="inputGroup">
              <label htmlFor="email">
                Email Address
                <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email address"
                className={errors.email ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.email && <span className="errorMessage">{errors.email}</span>}
            </div>

            <div className="inputGroup">
              <label htmlFor="phone">
                Phone Number
                <span className="optional">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your phone number"
                className={errors.phone ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.phone && <span className="errorMessage">{errors.phone}</span>}
            </div>

            <div className="inputGroup">
              <label htmlFor="subject">
                Subject
                <span className="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="What's this about?"
                className={errors.subject ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.subject && <span className="errorMessage">{errors.subject}</span>}
            </div>

            <div className="inputGroup">
              <label htmlFor="message">
                Your Message
                <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell me more about your project, goals, or ideas..."
                className={errors.message ? 'error' : ''}
                disabled={isSubmitting}
              ></textarea>
              {errors.message && <span className="errorMessage">{errors.message}</span>}
              <span className="helper">Minimum 10 characters</span>
            </div>
          </div>

          <div className="formFooter">
            <button
              type="submit"
              disabled={isSubmitting}
              className={isSubmitting ? 'submitting' : ''}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
