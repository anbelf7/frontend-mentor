const Footer = ({ title }) => {
  return (
    <footer className="w-full bg-slate-200 text-slate-500">
      <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
        <p className="text-center text-sm  sm:text-left">
          © 2022 {title} —
          <a href="/" className="ml-1 text-gray-600" target="_blank">
            by @anbelf7
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
