// src/app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen px-6 pt-24">
      <section className="mb-64">
        <h1 className="text-4xl font-bold">Welcome to HotSwap</h1>
        <p className="mt-4">Scroll down or click the button...</p>
      </section>

      <section id="estimate" className="min-h-[60vh] bg-[#ddd] p-10 rounded-lg">
        <h2 className="text-3xl font-semibold">Estimate Section (Placeholder)</h2>
        <p className="mt-4">This is where the estimate form will go.</p>
      </section>
    </main>
  );
}
