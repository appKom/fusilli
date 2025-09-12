import { useState, useEffect } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 100; // Juster denne verdien for å bestemme hvor langt du må scrolle før navbaren skjules
  const showThreshold = 900; // Hvor langt du må scrolle opp før navbaren vises igjen

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > scrollThreshold && window.scrollY > lastScrollY) {
        // Skjul navbaren når vi ruller ned etter å ha overskredet scrollThreshold
        setVisible(false);
      } else if (window.scrollY <= scrollThreshold || (window.scrollY < lastScrollY && window.scrollY > showThreshold)) {
        // Vis navbaren når vi ruller opp og har rullet opp mer enn showThreshold
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]); // Avhengig av sist scrollposisjon

  return (
    <nav
      className={`mt-8 h-24 w-full fixed flex items-center justify-center px-6 bg-transparent ${visible ? '' : 'hidden'}`}
    >
      <div className="mx-auto flex items-center text-xl gap-40">
        {/* Boks 1 */}
        <div className="flex justify-center">
          <h3 className="text-l text-white">
            <a href="/pictureWall">Bildevegg</a>
          </h3>
        </div>

        {/* Boks 2 */}
        <div className="flex justify-center">
          <h3 className="text-l text-white">
            <a href="/omOss">Om oss</a>
          </h3>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <a href="/">
            <img
              src="/logoHvit.png"
              alt="Realfagskjelleren logo"
              className="h-16"
            />
          </a>
        </div>


        {/* Boks 4 */}
        <div className="flex justify-center">
          <h3 className="text-l text-white">
            <a href="/menu">Meny</a>
          </h3>
        </div>

        {/* Boks 5 */}
        <div className="flex justify-center">
          <h3 className="text-l text-white">
            <a href="/event">Arrangementer</a>
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
