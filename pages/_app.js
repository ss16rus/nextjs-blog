import '../styles/global.css'

let counter = 0;

export default function App({ Component, pageProps }) {
    console.log(`This is the App component. Visited ${++counter} pages`)
    return <div><Component  className="app" {...pageProps} /></div> 
  }