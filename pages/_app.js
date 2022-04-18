import 'tailwindcss/tailwind.css'
import Prism from 'prism-react-renderer/prism'

(typeof global !== "undefined" ? global : window).Prism = Prism

require("prismjs/components/prism-python")
require("prismjs/components/prism-csharp")
require("prismjs/components/prism-javascript")

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
