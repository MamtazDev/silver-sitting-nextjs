import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr",
        },
        "google_translate_element"
      );
    }

    // Load the Google Translate script when the component mounts
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    // Cleanup when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://static.wixstatic.com/media/ac65b3_f3b0ba7677cf44c59de81efd4329eb8d~mv2.jpg/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/ac65b3_f3b0ba7677cf44c59de81efd4329eb8d~mv2.jpg"
        />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="google_translate_element"></div>
      </body>
    </Html>
  );
}
