import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import useSWR from 'swr'

const api = 'https://restcountries.eu/rest/v2/alpha/col';

function profile( api ) {
    const fetcher = ( api ) => fetch( api ).then( data => data.json())
    const { data, error } = useSWR( api, fetcher)
    console.log('fetched data', data )
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return <div>hello {data.name}!</div>
}


const getTodos = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(data => data.json())
};

function App() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(todos => setTodos(todos));
    }, []);

    const country = profile( api );
    

  return (
    <>
    <Head>
      <title>To dos list</title>
    </Head>
    <div>
      <Link href="/"><a>Back to home</a></Link>
      {country}
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App;