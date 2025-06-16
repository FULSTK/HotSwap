// src/app/page.tsx
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="estimate" className="min-h-[60vh] bg-[#ddd] p-10 rounded-lg">
        <h2 className="text-3xl font-semibold">Estimate Section (Placeholder)</h2>
        <p className="mt-4">This is where the estimate form will go.</p>
      </section>
    </main>
  );
}
