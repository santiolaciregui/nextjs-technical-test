export const dynamic = "force-dynamic";

export default async function Dashboard() {
  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center">
          🛠️ Implement your solution here! 🚀
        </h1>
        <p className="text-lg text-gray-600 text-center">
          This is where you can implement the search bar for the technical test. 
          Make it efficient, shareable, and user-friendly!
        </p>
        <p className="text-center text-sm text-gray-500 italic">
          Remember, we’re looking for clean and optimized code. 💡
        </p>
      </section>
    </main>
  );
}