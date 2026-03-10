import React from "react";
import {
  Building2,
  ShieldCheck,
  FileText,
  BarChart3,
  Image,
  Monitor, // New icon for Web Design
  Search,
  Server,
  Globe,
  Mail,
  ExternalLink,
  QrCode, // New icon for QR Generator
  RefreshCw, // New icon for Annual Returns
} from "lucide-react";

const servicesData = [
  {
    title: "CIPC Registration",
    desc: "New company registrations and compliance setup.",
    icon: <Building2 />,
    color: "text-primary",
  },
  {
    title: "Annual Returns",
    desc: "Keep your company active and avoid CIPC de-registration.",
    icon: <RefreshCw />,
    color: "text-primary",
  },
  {
    title: "Director Changes",
    desc: "Seamless updates to company records and mandates.",
    icon: <ShieldCheck />,
    color: "text-primary",
  },
  {
    title: "SARS Tax Clearance",
    desc: "Get your tax PIN and stay compliant for tenders.",
    icon: <FileText />,
    color: "text-primary",
  },
  {
    title: "VAT Registration",
    desc: "Expert handling of mandatory and voluntary VAT applications.",
    icon: <BarChart3 />,
    color: "text-primary",
  },
  {
    title: "Visual Branding",
    desc: "Flyers, posters, and digital ads for your brand.",
    icon: <Image />,
    color: "text-success",
  },
  {
    title: "Web Design",
    desc: "Custom, mobile-friendly websites that convert visitors.",
    icon: <Monitor />,
    color: "text-success",
  },
  {
    title: "QR Code Generator",
    desc: "Custom QR codes for menus, payments, or links.",
    icon: <QrCode />,
    color: "text-success",
  },
  {
    title: "Company Profiles",
    desc: "Professional PDF profiles to win big contracts.",
    icon: <Search />,
    color: "text-success",
  },
  {
    title: "Web Hosting",
    desc: "Ultra-fast, 99.9% uptime for your digital home.",
    icon: <Server />,
    color: "text-info",
  },
  {
    title: "Domain Registration",
    desc: "Secure your .co.za or .com address today.",
    icon: <Globe />,
    color: "text-info",
  },
  {
    title: "Business Emails",
    desc: "Professional @YourCompany accounts for credibility.",
    icon: <Mail />,
    color: "text-info",
  },
];

const Services = () => {
  const whatsappNumber = "27793752769";

  const requestQuote = (title) => {
    const text = `Hi! I'm interested in a quote for "${title}".`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section id="services" className="container overflow-hidden py-5">
      <div className="text-center mb-5" data-aos="fade-down">
        <h2 className="fw-bold text-white display-5">Our Services</h2>
        <p className="text-white-50">
          Professional compliance and digital solutions for South African
          entrepreneurs.
        </p>
      </div>

      <div className="row g-4">
        {servicesData.map((s, i) => (
          <div
            className="col-md-6 col-lg-4"
            key={i}
            data-aos="fade-up"
            data-aos-delay={(i % 3) * 100}
          >
            <div className="glass-card p-4 h-100 d-flex flex-column">
              <div className={`mb-3 ${s.color}`}>
                {React.cloneElement(s.icon, { size: 38, strokeWidth: 1.5 })}
              </div>
              <h5 className="fw-bold text-white mb-2">{s.title}</h5>
              <p className="text-white-50 small mb-4">{s.desc}</p>
              <button
                onClick={() => requestQuote(s.title)}
                className="btn btn-outline-light btn-sm mt-auto d-flex align-items-center justify-content-center gap-2"
              >
                Request Quote <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
