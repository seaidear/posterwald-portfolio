// components
import Button from "components/Buttons/Button";

interface Props {
  id: string;
  ctaButtonText: string;
}

const classNames = {
  form: "grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 max-w-2xl mx-auto",
  label: "block text-sm font-medium text-gray-700 dark:text-gray-400",
  input:
    "py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border-gray-300 rounded-md",
};

const sendTelegramMessage = async (formData: FormData) => {
  const ipResponse = await fetch('https://api.ipify.org?format=json');
  const ipData = await ipResponse.json();
  const visitorIp = ipData.ip;

  const currentDomain = window.location.hostname;

  const message = `1️⃣ First Name: ${formData.get('first-name')}\n2️⃣ Last Name: ${formData.get('last-name')}\n📨 Email: ${formData.get('email')}\n✍️ Subject: ${formData.get('subject')}\n🥡 Message: ${formData.get('message')}\n🌐 Domain: ${currentDomain}\n📍 IP Address: ${visitorIp}\n`;
  const telegramApiUrl = `https://api.telegram.org/bot6524797511:AAHWQ9TteRXNWWtmiNm7ZKrjc3amAqzgjis/sendMessage`;
  const chatId = '-1002273325971';

  await fetch(telegramApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
    }),
  });
};

const ContactForm = ({ ctaButtonText, id }: Props) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    await sendTelegramMessage(formData);
    form.submit();
  };

  return (
    <form
      data-netlify="true"
      action="/success"
      name={`contact-form-${id}`}
      netlify-honeypot="tel"
      method="POST"
      className={classNames.form}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={`contact-form-${id}`} />
      <div>
        <label htmlFor="first-name" className={classNames.label}>
          First Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            required
            className={classNames.input}
          />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className={classNames.label}>
          Last Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            required
            className={classNames.input}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className={classNames.label}>
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={classNames.input}
          />
        </div>
      </div>
      <div className="sm:col-span-2 hidden">
        <label htmlFor="tel" className={classNames.label}>
          Phone Number
        </label>
        <div className="mt-1">
          <input id="tel" name="tel" type="tel" autoComplete="off" className={classNames.input} />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="subject" className={classNames.label}>
          Subject
        </label>
        <div className="mt-1">
          <input type="text" name="subject" id="subject" required className={classNames.input} />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={classNames.label}>
          Message
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={classNames.input}
            defaultValue={""}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <Button text={ctaButtonText} size="lg" isFullWidth />
      </div>
    </form>
  );
};

export default ContactForm;
