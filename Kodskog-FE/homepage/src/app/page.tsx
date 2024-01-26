import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects'
import Articles from '../components/Articles'
import Skills from '../components/Skills'
import Contract from '../components/Contact' 
import SessionProviderWrapper from '../../utils/sessionProviderWrapper';

export default function Home() {


  return (
    <SessionProviderWrapper>
    <div>
      <Head>
        <title>Hadi | Full-Stack Developer</title>
        <meta name="description" content="Welcome to the KodSkog!" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Articles/>
      <Projects />
      {/* <Skills /> */}
      <Contract />
    </div>
    </SessionProviderWrapper>
  )
}
