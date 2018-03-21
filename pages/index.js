import React, {Component} from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from './components/layout'

import DFP from './components/DFP/dfp'

const imgs = [
	{
		href: 'http://www.imagen.com.mx/',
		position: '2px 63.6%',
		height: '32px',
		width: '87px',
	},
	{
		position: '40% 63.6%',
		height: '30px',
		width: '100px',
	}
]

const Index = (props) => {
  return (
    <div>
      <DFP width={300} height={100}/>
      <ul>
      {props.shows.data.map((show) => (
        <li key={show.id}>
          <img src={show.images.files[0].url}/>
            <h2>{show.title}</h2>
            <p>{show.summary}</p>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>VER MAS</a>
          </Link>
        </li>
      ))}
      </ul>
      <DFP width={600} height={100}/> 
    </div>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:5000/api')
  const data = await res.json()

  return {
    shows: data
  }
}


export default Index
