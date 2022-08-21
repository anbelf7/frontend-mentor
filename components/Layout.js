import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header title={title} />
      <div className="flex flex-1 flex-col sm:overflow-y-auto">
        <main className="container mx-auto my-5 flex-1 px-5 ">{children}</main>
        <Footer title={title} />
      </div>
    </div>
  );
};

export default Layout;
