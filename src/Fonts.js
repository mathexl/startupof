const FontLoader = () => {
  const LoadFont = (name, url) => {
    let myFont = new FontFace(name, url);
    myFont.load().then(
      (font) => {
        document.fonts.add(font);
      },
      (error) => {
        // your font could not be loaded.
        console.log(error);
      }
    );
  };

  LoadFont(
    "GilroyQ",
    "url(https://dl.dropbox.com/s/k35qsf8tjrau6hl/Radomir%20Tinkov%20-%20Gilroy-Regular.otf?dl=0)"
  );

  LoadFont(
    "GilroyB",
    "url(https://dl.dropbox.com/s/svqpzt65xp93ifq/Radomir%20Tinkov%20-%20Gilroy-ExtraBold.otf?dl=0)"
  );
};

export default FontLoader;
