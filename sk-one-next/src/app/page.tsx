import { Header, Footer, Button, Card, Input, Textarea } from "@/components";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header
        logo={<span className="text-h5 font-bold text-brand-500">S&apos;K One</span>}
        navItems={[
          { label: "Services", href: "/services" },
          { label: "About", href: "/about" },
          { label: "Projects", href: "/projects" },
          { label: "Contact", href: "/contact" },
        ]}
        ctaButton={{ label: "Get Started", href: "/contact" }}
      />

      {/* Hero Section */}
      <section className="gradient-hero text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-3xl animate-fade-in visible">
            <h1 className="text-h1 md:text-display mb-6">
              Transform Your Business with{" "}
              <span className="gradient-text text-white">
                Expert IT Solutions
              </span>
            </h1>
            <p className="text-body-xl text-slate-300 mb-8 max-w-2xl">
              S&apos;K One Tech Support empowers SMEs across North India with innovative 
              IT services and professional staffing solutions. Your success is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="xl">
                Schedule a Consultation
              </Button>
              <Button variant="secondary" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Our Services</h2>
            <p className="text-body-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card variant="elevated" padding="lg" className="animate-fade-in stagger-1">
              <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-h4 mb-3">IT Consulting</h3>
              <p className="text-body text-slate-600 dark:text-slate-400 mb-6">
                Strategic technology guidance to optimize your infrastructure and drive business growth.
              </p>
              <Button variant="tertiary" size="sm">
                Learn More →
              </Button>
            </Card>

            {/* Service Card 2 */}
            <Card variant="elevated" padding="lg" className="animate-fade-in stagger-2">
              <div className="w-12 h-12 bg-accent-cyan rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-h4 mb-3">Staffing Solutions</h3>
              <p className="text-body text-slate-600 dark:text-slate-400 mb-6">
                Connect with top-tier IT talent for contract, contract-to-hire, and direct placements.
              </p>
              <Button variant="tertiary" size="sm">
                Learn More →
              </Button>
            </Card>

            {/* Service Card 3 */}
            <Card variant="elevated" padding="lg" className="animate-fade-in stagger-3">
              <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-h4 mb-3">Managed Services</h3>
              <p className="text-body text-slate-600 dark:text-slate-400 mb-6">
                Proactive IT management and support to keep your business running smoothly 24/7.
              </p>
              <Button variant="tertiary" size="sm">
                Learn More →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white dark:bg-slate-800">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">Why Partner with S&apos;K One?</h2>
              <p className="text-body-lg text-slate-600 dark:text-slate-400 mb-8">
                We combine deep technical expertise with a personalized approach to deliver 
                solutions that drive real business outcomes.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Expert Team", desc: "Certified professionals with years of industry experience" },
                  { title: "Proven Track Record", desc: "500+ successful projects across diverse industries" },
                  { title: "24/7 Support", desc: "Round-the-clock assistance when you need it most" },
                  { title: "Cost-Effective", desc: "Premium services at competitive pricing" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-h6 mb-1">{item.title}</h4>
                      <p className="text-body-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="primary" size="lg" className="mt-8">
                Get Started Today
              </Button>
            </div>

            <div className="relative">
              <Card variant="elevated" padding="none" className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-brand-500 to-accent-cyan flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-h1 font-bold mb-2">500+</div>
                    <div className="text-body-lg opacity-80">Projects Delivered</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">Get in Touch</h2>
              <p className="text-body-lg text-slate-600 dark:text-slate-400">
                Ready to transform your IT infrastructure? Let&apos;s talk.
              </p>
            </div>

            <Card variant="elevated" padding="lg">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    placeholder="John"
                    required
                  />
                  <Input
                    label="Last Name"
                    placeholder="Doe"
                    required
                  />
                </div>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@company.com"
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                />
                <Textarea
                  label="Message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />
                <Button variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-accent text-white">
        <div className="container text-center">
          <h2 className="text-h2 mb-6">Ready to Get Started?</h2>
          <p className="text-body-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their business with our IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="bg-white text-brand-600 border-white hover:bg-white/90">
              Schedule a Call
            </Button>
            <Button variant="ghost" size="xl" className="text-white hover:bg-white/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        columns={[
          {
            title: "Services",
            links: [
              { label: "IT Consulting", href: "/services#consulting" },
              { label: "Staffing", href: "/services#staffing" },
              { label: "Managed Services", href: "/services#managed" },
              { label: "Cloud Solutions", href: "/services#cloud" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Case Studies", href: "/case-studies" },
              { label: "Documentation", href: "/docs" },
              { label: "Support", href: "/support" },
              { label: "FAQ", href: "/faq" },
            ],
          },
        ]}
        socialLinks={[
          { platform: "linkedin", url: "#" },
          { platform: "twitter", url: "#" },
          { platform: "facebook", url: "#" },
        ]}
      />
    </div>
  );
}
