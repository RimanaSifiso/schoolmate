import AppBar from '../components/layout/AppBar'
import AppLayout from '../components/layout/AppLayout'
import SideNav from '../components/SideNav'
import '../styles/globals.css'
import { AppContextProvider } from '../context/AppContext'
import Layout from '../components/layout/Layout'
import MobileNav from '../components/layout/MobileNav'
import Alert from '../components/shared/Alert'
import Modal from '../components/shared/Modal'

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <AppLayout>
        <AppBar />
        <SideNav />
        <Layout>
          <Component {...pageProps} />
          {null && <Alert type={'success'} text="This is a success alert" />}
        </Layout>
        <MobileNav />
      </AppLayout>
      {null && <Modal title={"This a modal title"} text="This is a modal text" />}
    </AppContextProvider>
  )
}

export default MyApp
