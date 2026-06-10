const services = [
  {
    title: "Landing Pages",
    description:
      "Σελίδες για υπηρεσίες, καμπάνιες, events ή προσωπικά brands, σχεδιασμένες για ξεκάθαρο μήνυμα και επικοινωνία.",
  },
  {
    title: "Business Websites",
    description:
      "Ολοκληρωμένα websites για επαγγελματίες και μικρές επιχειρήσεις με μοντέρνο design και σωστή δομή.",
  },
  {
    title: "Website Redesign",
    description:
      "Ανανέωση παλιών websites με στόχο καλύτερη εικόνα, ταχύτητα, mobile εμπειρία και ευχρηστία.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Τεχνική υποστήριξη, μικροαλλαγές, updates και βελτιώσεις μετά την παράδοση του website.",
  },
];

const projects = [
  {
    title: "MedCare Clinic",
    type: "Demo website για ιδιωτικό ιατρείο",
    description:
      "Καθαρό, αξιόπιστο website για γιατρό ή μικρή κλινική, με παρουσίαση υπηρεσιών και φόρμα επικοινωνίας.",
  },
  {
    title: "Ammos Beach Bar",
    type: "Demo website για χώρο εστίασης / events",
    description:
      "Μοντέρνο website για beach bar με sections για menu, events, reservations και social παρουσία.",
  },
  {
    title: "LaunchPro",
    type: "Demo landing page για υπηρεσία",
    description:
      "Conversion-focused landing page για παρουσίαση digital υπηρεσίας με δυνατό call-to-action.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-bold tracking-tight">
            DK Web Studio
          </a>

          <div className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
           <a href="#about" className="hover:text-white">
  About
</a>
           
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#work" className="hover:text-white">
              Work
            </a>
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          DK Web Studio
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Modern websites for professionals and small businesses.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
          Δημιουργώ γρήγορα, responsive και καθαρά websites που βοηθούν
          επαγγελματίες και μικρές επιχειρήσεις να αποκτήσουν αξιόπιστη online
          παρουσία.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-neutral-950 transition hover:bg-cyan-300"
          >
            Ζήτησε προσφορά
          </a>

          <a
            href="#work"
            className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
          >
            Δες δουλειές
          </a>
        </div>
      </section>

      <section id="services" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Services
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold md:text-5xl">
            Websites που δείχνουν επαγγελματικά και δουλεύουν πρακτικά.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-neutral-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Demo projects για διαφορετικούς τύπους πελατών.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-neutral-900 p-6"
              >
                <div className="mb-6 h-48 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-700" />

                <p className="text-sm text-cyan-400">{project.type}</p>
                <h3 className="mt-3 text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-neutral-300">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Process
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold md:text-5xl">
            Καθαρή διαδικασία από την πρώτη συζήτηση μέχρι την παράδοση.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              "Συζήτηση",
              "Πρόταση",
              "Design & Development",
              "Παράδοση & Support",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="text-sm text-cyan-400">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 px-6 py-24">
  <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
        About
      </p>

      <h2 className="mt-4 text-3xl font-bold md:text-5xl">
        Web development με καθαρή επικοινωνία και πρακτικό αποτέλεσμα.
      </h2>
    </div>

    <div className="space-y-6 text-lg leading-8 text-neutral-300">
      <p>
        Είμαι web developer και δημιουργώ websites που συνδυάζουν καθαρό
        design, γρήγορη απόδοση και σωστή λειτουργία σε όλες τις συσκευές.
      </p>

      <p>
        Μέσα από το DK Web Studio βοηθάω επαγγελματίες, μικρές επιχειρήσεις
        και projects να αποκτήσουν αξιόπιστη online παρουσία χωρίς περίπλοκες
        διαδικασίες.
      </p>
    </div>
  </div>
</section>

      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Έχεις ιδέα για νέο website;
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Στείλε μου λίγες πληροφορίες για το project σου και θα σου απαντήσω
            με πρόταση.
          </p>

          <a
            href="mailto:dkarampas.work@gmail.com"
            className="mt-10 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-semibold text-neutral-950 transition hover:bg-cyan-300"
          >
            dkarampas.work@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}