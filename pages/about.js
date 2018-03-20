import Layout from './components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const url = 'http://api.invent.mx/v1/actitudfem/node.json/22360f3a2e03f847acf5339695e42e5b??limit=9&sort=created:DESC&fields=id%7Ctitle%7Csummary%7Curl%7Cimages%7Ctype'

const About = (props) => {
  console.log(props.shows.data)  
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      
    </Layout>
  )
}
About.getInitialProps = async function() {
  const res = await fetch('http://localhost:5000/api')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)
  console.log(res)

  return {
    shows: data
  }
}

export default About
