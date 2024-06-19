import React, { useEffect } from 'react';

const TranslationAPI = () => {
  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "pt",
      wrapper_selector: ".gtranslate_wrapper",
      flag_style: "3d",
      alt_flags: {
        en: "usa",
        pt: "brazil",
        es: "argentina",
        fr: "quebec"
      }
    };

    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default TranslationAPI;

