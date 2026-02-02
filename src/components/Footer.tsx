import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import logo from "@/assets/logo.gif";
import { BOOKING_URL } from "@/utils/navigation";

const footerLinks = [
  {
    category: "Product",
    links: [
      { name: "Features", href: "/#features" },
      { name: "Integrations", href: "/#integrations" },
      { name: "Pricing", href: "/#pricing" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
  {
    category: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
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
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="py-8 md:py-12 border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-1"
          >
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={logo} alt="Create Assistants Logo" className="w-9 h-9 object-cover" />
              <span className="font-semibold">Create Assistants</span>
            </motion.div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Automate and grow your business with custom CRM and AI solutions.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
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
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, categoryIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{section.category}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + categoryIndex * 0.05 + linkIndex * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-8 origin-center scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between pt-5 border-t border-border gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2026 Create Assistants. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <motion.a
              href="https://go.createassistants.ai/privacy-policy"
              className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-8 origin-center scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </motion.a>
            <motion.a
              href="https://go.createassistants.ai/terms-and-conditions"
              className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-8 origin-center scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
