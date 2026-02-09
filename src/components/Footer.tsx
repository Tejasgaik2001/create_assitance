import { m, useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Mail, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoBlack from "@/assets/logo_black.webp";
import logoWhite from "@/assets/logo_white.webp";
import { useTheme } from "@/hooks/useTheme";
import { BOOKING_URL } from "@/utils/navigation";

const footerLinks = [
  {
    category: "Product",
    links: [
      { name: "Features", href: "/how-it-works" },
      { name: "Command Center", href: "/command-center" },
      { name: "AI Employees", href: "/ai-employees" },
      { name: "What You Get", href: "/what-you-get" },
    ],
  },
  {
    category: "Company",
    links: [
      { name: "About", href: "/why-create-assistants" },
      { name: "Book a Call", href: BOOKING_URL },
      { name: "Contact", href: BOOKING_URL },
    ],
  },
  {
    category: "Legal",
    links: [
      { name: "Privacy Policy", href: "https://go.createassistants.ai/privacy-policy" },
      { name: "GDPR Compliance", href: "https://go.createassistants.ai/gdpr-compliance" },
      { name: "Terms & Conditions", href: "https://go.createassistants.ai/terms-and-conditions" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/g/1E457TVa3o/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/createassistants/", label: "Instagram" },
  { icon: Phone, href: "tel:+15155002224", label: "Phone" },
  { icon: Mail, href: "mailto:support@createassistants.ai", label: "Email" },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();

  const currentLogo = theme === "dark" ? logoWhite : logoBlack;

  return (
    <footer ref={ref} className="py-12 lg:py-20 border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 lg:gap-12 mb-16">
          {/* Brand */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-1"
          >
            <m.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={currentLogo} alt="Create Assistants Logo" loading="lazy" width={36} height={36} className="w-9 h-9 object-cover" />
              <span className="font-semibold">Create Assistants</span>
            </m.div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Automate and grow your business with custom CRM and AI solutions.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <m.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-foreground hover:text-background flex items-center justify-center transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <social.icon className="w-4 h-4" />
                </m.a>
              ))}
            </div>
          </m.div>

          {/* Links */}
          {footerLinks.map((section, categoryIndex) => (
            <m.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{section.category}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <m.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + categoryIndex * 0.05 + linkIndex * 0.05 }}
                  >
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-8 origin-center scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
                      </Link>
                    ) : (
                      <m.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-8 origin-center scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
                      </m.a>
                    )}
                  </m.li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>

        {/* Bottom */}
        <m.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-6 md:gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Create Assistants. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <m.a
              href="https://go.createassistants.ai/privacy-policy"
              className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-8 origin-center scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </m.a>
            <m.a
              href="https://go.createassistants.ai/terms-and-conditions"
              className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-8 origin-center scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </m.a>
          </div>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
