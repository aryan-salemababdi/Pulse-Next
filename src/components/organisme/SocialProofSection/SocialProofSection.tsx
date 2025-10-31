const SocialProofSection = () => (
  <section className="w-full bg-gray-950 py-20 px-6">
    <div className="w-full max-w-5xl mx-auto text-center">
      <h2 className="text-white text-4xl font-bold mb-10">
        Trusted by Leading Political Leaders
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <blockquote className="bg-gray-900 p-8 rounded-2xl border border-gray-700 text-left">
          <p className="text-gray-300 text-lg mb-4">
            "Pulse changed how we approach political communications. We were alerted
            to emerging issues before they hit the news. Their 'AI Strategist' feature
            has been invaluable for rapid, informed decision-making."
          </p>
          <footer className="mt-4">
            <div className="text-white font-semibold">
              Leah Taylor Roy
            </div>
            <div className="text-gray-500 text-sm">Former Member of Parliament, Canada</div>
          </footer>
        </blockquote>
        <blockquote className="bg-gray-900 p-8 rounded-2xl border border-gray-700 text-left">
          <p className="text-gray-300 text-lg mb-4">
            "Switching to Pulse allowed our team to respond faster and more strategically
            to political developments. Real-time insights gave us a clear advantage in
            every campaign."
          </p>
          <footer className="mt-4">
            <div className="text-white font-semibold">
              Political Campaign Team
            </div>
            <div className="text-gray-500 text-sm">Enterprise Customer</div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
);

export default SocialProofSection;