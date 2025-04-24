import Header from './Header';
import CardCollection from './CardCollection';
import Footer from './Footer';

function AbraQuando() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <Header />
        <main className="py-4 sm:py-6 md:py-8">
          <CardCollection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AbraQuando;