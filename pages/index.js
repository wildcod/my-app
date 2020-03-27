import React from 'react'


const Home = () => {

  const errorHandler = () => {
     throw new Error("Type Error")
  };

 return <div>
             <h1>Home</h1>
             <button onClick={errorHandler}>Click me..</button>
        </div>
};

export default Home
