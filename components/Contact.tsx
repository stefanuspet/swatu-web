"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phone = "628133622313";

    const text = `
Hi Swatu Design, I found your website and I'm interested in discussing a project.

*Project Inquiry*

*Name:* ${form.name}
*Email:* ${form.email}
*Project Type:* ${form.projectType}

*Message:*
${form.message}
`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  const contactItems = [
    {
      label: "Email",
      value: "swatudesign@gmail.com",
      href: "mailto:swatudesign@gmail.com",
    },
    {
      label: "WhatsApp",
      value: "+62 813 3622 313",
      href: "https://wa.me/628133622313",
    },
    {
      label: "Instagram",
      value: "@swatu.design",
      href: "https://instagram.com/swatu.design",
    },
    {
      label: "Yogyakarta Office",
      value:
        "Bleber Kidul RT 06 RW 17, Sumberharjo, Prambanan, Sleman, DIY 55572",
      href: "https://maps.google.com/?q=Sumberharjo+Prambanan+Sleman",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-charcoal py-20 md:py-24"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* Header */}
      <div className="text-center mb-14 px-6">
        <p className="text-[11px] tracking-[0.22em] uppercase text-sage-light mb-4 font-sans">
          Let&apos;s work together
        </p>

        <h2
          className="font-serif font-light text-white leading-tight"
          style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
        >
          Get in{" "}
          <em className="italic" style={{ color: "#c9a882" }}>
            Touch
          </em>
        </h2>

        <div className="w-14 h-px bg-warm-light mx-auto mt-6" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 max-w-4xl mx-auto px-6 md:px-12">
        {/* Contact info */}
        <div className="pt-2">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="mb-7 pb-7 border-b border-white/10 last:border-0 last:mb-0 last:pb-0"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-sage-light mb-1.5 font-sans">
                {item.label}
              </p>

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-base md:text-lg font-light text-white hover:text-warm-light transition-colors duration-200 leading-snug"
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {[
            {
              key: "name",
              label: "Full name",
              type: "text",
              placeholder: "Your name",
            },
            {
              key: "email",
              label: "Email",
              type: "email",
              placeholder: "your@email.com",
            },
            {
              key: "projectType",
              label: "Project type",
              type: "text",
              placeholder: "e.g. Residential, Commercial...",
            },
          ].map(({ key, label, type, placeholder }) => (
            <div key={key} className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-[0.18em] uppercase text-white/40 font-sans">
                {label}
              </label>

              <input
                type={type}
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="bg-white/6 border border-white/12 text-white placeholder-white/30 px-4 py-3 text-sm font-sans outline-none focus:border-warm-light transition-colors duration-200"
                required
              />
            </div>
          ))}

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-[0.18em] uppercase text-white/40 font-sans">
              Message
            </label>

            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-white/6 border border-white/12 text-white placeholder-white/30 px-4 py-3 text-sm font-sans outline-none focus:border-warm-light transition-colors duration-200 resize-y"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-fit bg-warm text-white border border-warm px-8 py-3.5 text-[11px] tracking-[0.16em] uppercase font-sans hover:bg-transparent hover:text-warm-light transition-all duration-200 mt-3"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
