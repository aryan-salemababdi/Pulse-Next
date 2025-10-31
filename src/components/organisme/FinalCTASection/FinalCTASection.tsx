import Button from '@/components/atom/Button/Button';

const FinalCTASection = () => (
  <section className="w-full bg-blue-600 py-20 px-6">
    <div className="w-full max-w-4xl mx-auto text-center">
      <h2 className="text-white text-4xl font-bold mb-6">
        Ready to Compete in the Digital Age?
      </h2>
      <p className="text-blue-100 text-xl mb-10">
        Don't let Cision and Meltwater hold you back with slow, expensive tools.
        Modernize your media war room today.
      </p>

      <Button className="!bg-white !text-blue-900 px-10 py-4 rounded-2xl text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-out">
        Get Started
      </Button>
    </div>
  </section>
);

export default FinalCTASection;
