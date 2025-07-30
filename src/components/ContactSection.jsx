import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {}, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          Looking to build a robust backend or a sleek frontend interface? I’d
          love to help you turn your ideas into reality. Reach out and let’s
          chat.
        </p>

        <div className="grid grid-cols1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information{" "}
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail />
                </div>
                <div className="">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:bhambreomi18@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    bhambreomi18@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone />
                </div>
                <div className="">
                  <h4 className="font-medium ">Phone</h4>
                  <a
                    href="tel:7385955937"
                    className="text-muted-foreground hover:text-primary transition-colors "
                  >
                  +91 7385955937
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin />
                </div>
                <div className="">
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="mailto:bhambreomi18@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Pune, Maharashtra, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-10">
              <h4 className="font-medium mb-4"> Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a>
                  <Linkedin />
                </a>

                <a>
                  <Twitter />
                </a>

                <a>
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Messages</h3>
            <form className="space-y-6" action="">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Helo, I'd like to Talk about ..."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {" "}
                <Send />{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
