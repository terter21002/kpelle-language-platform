import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import PropTypes from "prop-types";
import "./mainFooter.css";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <ul className="space-y-5 text-xl">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function Footer(props) {
  const columns = {
    info: {
      title: "Info",
      links: [
        { label: "Services", href: "/services" },
        { label: "Pricing", href: "/pricing" },
        { label: "Community", href: "/community" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    legal: {
      title: "Legal Stuff",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Condition", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
    social: {
      title: "Social Media",
      links: [
        { label: "Facebook", href: "https://facebook.com" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "X", href: "https://x.com" },
      ],
    },
  };

  return (
    <footer className="bg-[#C23925] relative pt-32 pb-20">
      {/* Top curved border */}
      <div className="custom-shape-divider-top-1739929503">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className=""
            {...props}
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 relative">
        <div className="mx-auto relative flex justify-between gap-8 items-center">
          {/* Logo column */}
          <div className="lg:col-span-1">
            <img
              src="/landing_page/header_logo.png"
              alt="Liberian Native Voice Logo"
              width={220}
              height={220}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-16">
            {/* Footer columns */}
            {Object.values(columns).map((column, index) => (
              <FooterColumn key={index} {...column} />
            ))}
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-end gap-4 mt-12 mb-8 mx-20">
          <a
            href="https://instagram.com"
            className="text-white hover:text-white/80"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            className="text-white hover:text-white/80"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com"
            className="text-white hover:text-white/80"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a href="https://x.com" className="text-white hover:text-white/80">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
      {/* Copyright */}

      {/* Bottom curved border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%",
        }}
      >
        <div className="text-center text-xl text-[#57270E] my-5">
          ©2025 Liberian Native Voice. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  props: PropTypes.object.isRequired,
};
