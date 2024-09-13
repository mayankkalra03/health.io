// app/contact/page.tsx

'use client'; // This marks the component as a client component

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link'
import { send, EmailJSResponseStatus } from 'emailjs-com';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response: EmailJSResponseStatus = await send(
        'service_3rcss2h', 
        'template_w79v8gs', 
        formData as unknown as Record<string, unknown>, 
        'TsWsOStEDjTM4EVNM' 
      );

      if (response.status === 200) {
        setStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => router.push('/'), 2000); 
      } else {
        setStatus('Failed to send the message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex h-screen max-h-screen">
      <section className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md mx-auto p-4">
        <Link href="/" className="cursor-pointer">
        <Image
            src="/assets/icons/logo-full.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-20 w-fit"
          />
          </Link>
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 p-2 rounded-md w-full"
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="py-2 px-4 bg-green-500 text-white font-bold rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {status && (
            <div className={`mt-4 p-2 text-center ${status.includes('successfully') ? 'text-green-400' : 'text-red-500'}`}>
              {status}
            </div>
          )}
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png" 
        height={1000}
        width={1000}
        alt="Contact"
        className="hidden md:block max-w-[50%] object-cover"
      />
    </div>
  );
};

export default ContactPage;
