import Layout from './components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const About = (props) => {
  console.log(props.shows.data)  
  return (
    <div>
      <ul>
      {props.shows.data.map((show) => (
        <li key={show.id}>
          <img src={show.images.files[0].url}/>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.title}</a>
          </Link>
        </li>
      ))}
    </ul>
      
    </div>
  )
}

About.getInitialProps = async function() {
  const res = await fetch('http://localhost:5000/api')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default About
