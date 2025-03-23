import { useEffect, useState } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`h-24 w-full fixed flex items-center justify-center px-6 transition-colors duration-300 ${
        visible ? 'bg-[#FF6F00]' : 'bg-transparent'
      }`}
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
 
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        {/* Boks 1 */}
        <div className="flex justify-center w-1/5">
          <h3 className="text-l text-white">
            <a href="/events">Arrangementer</a>
          </h3>
        </div>

        {/* Boks 2 */}
        <div className="flex justify-center w-1/5">
          <h3 className="text-l text-white">
            <a href="/pictureWall">Bildevegg</a>
          </h3>
        </div>

        {/* Logo */}
        <div className="flex justify-center w-1/5">
          <img
            src="/logoHvit.png"
            alt="Realfagskjelleren logo"
            className="h-16"
          />
        </div>

        {/* Boks 4 */}
        <div className="flex justify-center w-1/5">
          <h3 className="text-l text-white">
            <a href="/menu">Meny</a>
          </h3>
        </div>

        {/* Boks 5 */}
        <div className="flex justify-center w-1/5">
          <h3 className="text-l text-white">
            <a href="/omoss">Om oss</a>
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
