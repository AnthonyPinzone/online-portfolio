import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { isEmpty, isEmail, normalizeEmail, trim } from 'validator';
import emailjs from '@emailjs/browser';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsFillSendFill } from 'react-icons/bs';
import { Alert, Input } from '..';
import './ContactForm.scss';

const initialFormData = {
  name: '',
  email: '',
  message: '',
  recaptchaValid: false,
  'g-recaptcha-response': '',
};

const initialFormStatus = {
  type: '',
  messages: [],
};

export function ContactForm() {
  const recaptchaRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState(initialFormStatus);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValidForm = validateForm();

    if (isValidForm) {
      sendEmail();
    }
  };

  const validateForm = () => {
    const errors = [];

    if (!isEmail(formData.email)) {
      errors.push('Please provide a valid email address.');
    }

    if (isEmpty(formData.message) || isEmpty(formData.name)) {
      errors.push('Please make sure all fields are filled out.');
    }

    if (errors.length > 0) {
      setFormStatus({
        type: 'error',
        messages: errors,
      });
      return false;
    }

    return true;
  };

  const sendEmail = () => {
    setSending(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          name: trim(formData.name),
          email: normalizeEmail(formData.email),
          message: trim(formData.message),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setFormStatus({
            type: 'success',
            messages: ['Message received! Chat soon.'],
          });
          setFormData(initialFormData);
          recaptchaRef.current.reset();
          setSending(false);
        },
        (error) => {
          setFormStatus({
            type: 'error',
            messages: `Messaged failed. ${error}`,
          });
          setSending(false);
        },
      );
  };

  return (
    <form className="contact-form" onSubmit={handleFormSubmit}>
      <h5 className="contact-form__title">Let&apos;s Connect!</h5>

      {formStatus.type && formStatus.messages.length > 0 && (
        <Alert
          className="contact-form__status"
          dismissable={formStatus.type === 'success'}
          messages={formStatus.messages}
          show={!!formStatus.type && formStatus.messages.length}
          status={formStatus.type}
          onClose={() => setFormStatus(initialFormStatus)}
        />
      )}

      <Input
        id="contact-form__name"
        className="contact-form__input"
        label="What's your name?"
        name="name"
        placeholder="John Doe"
        required={true}
        type="text"
        value={formData.name}
        onChange={handleInputChange}
      />

      <Input
        id="contact-form__email"
        className="contact-form__input"
        label="How can I reach you?"
        name="email"
        placeholder="your-email@gmail.com"
        required={true}
        type="email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <Input
        id="contact-form__message"
        className="contact-form__textarea"
        label="What would you like to ask or say?"
        name="message"
        placeholder="I'd love to chat more!"
        required={true}
        type="textarea"
        cols={30}
        rows={5}
        value={formData.message}
        onChange={handleInputChange}
      />

      <ReCAPTCHA
        className="contact-form__recaptcha"
        ref={recaptchaRef}
        sitekey={import.meta.env.VITE_GOOGLE_SITE_KEY}
        onChange={(response) => {
          setFormData({
            ...formData,
            recaptchaValid: true,
            'g-recaptcha-response': response,
          });
        }}
        onErrored={(e) => {
          e.preventDefault();
          setFormData({ ...formData, recaptchaValid: false });
          setFormStatus({
            type: 'error',
            messages: [
              ...formStatus.messages,
              'Recaptcha validation failed, please try again.',
            ],
          });
        }}
        onExpired={(e) => {
          e.preventDefault();
          setFormData({ ...formData, recaptchaValid: false });
          setFormStatus({
            type: 'error',
            messages: [
              ...formStatus.messages,
              'Recaptcha validation expired, please validate again.',
            ],
          });
        }}
      />

      <button
        type="submit"
        className="button button--yellow contact-form__submit"
        disabled={sending || !formData.recaptchaValid}
      >
        {sending ? (
          <>
            <AiOutlineLoading3Quarters className="spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <BsFillSendFill />{' '}
          </>
        )}
      </button>
    </form>
  );
}
