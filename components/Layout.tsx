import Navbar from '#components/Navbar';
import Footer from '#components/Footer';
import BackToTop from '#components/BackToTop';

export default function Layout({ children }) {
  return (
    <>
      <BackToTop />
      <Navbar />
      <div className="container mx-auto pt-10 lg:pt-2 w-full font-sans">
        <main className="flex flex-col pt-16 px-8 sm:px-16 md:px-32 lg:px-40 xl:px-56 2xl:px-72">
          <div className="flex-1 h-full min-h-screen">{children}</div>
          <Footer />
        </main>
      </div>
    </>
  );
}
