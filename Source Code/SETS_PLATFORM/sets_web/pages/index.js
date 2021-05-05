import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
import CarouSel from '../components/carousel/carousel'
import Navibar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import CarbonTradingVideo from '../components/carbon-video/carbon-video'
import AboutSetsIntro from '../components/about-sets-intro/about-sets-intro'
import SetsPacketsIntro from '../components/sets-packets-intro/sets-packets-intro'

export default function Home() {
  return (
    <>
    <Navibar/>
    <br></br>
      <Head>
        <title>SETS</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <CarouSel/>
      <CarbonTradingVideo/>
      <AboutSetsIntro/>
      <SetsPacketsIntro/>
    <Footer/>
    
    </>
  )
}
