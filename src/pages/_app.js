import '../styles/globals.css'
import Sidebar from '../components/SideBar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
