import React from 'react';
import './App.css';
import cat from '../public/beluga-cat-meme.png';

function App() {

  const header2 = React.createElement ('h2', {}, 'Hello world');
  const par = React.createElement ('p', null, 'lLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus doloremque corporis, quaerat animi aut? Nisi, vero eligendi non provident quaerat quas quidem quia officia voluptatem quod, corporis architecto in perferendis fugiat, commodi dolorum possimus!')
  const image = React.createElement('img', {src: cat, alt:'cat'})
  return (
   <>
   <h2>Hello world</h2>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus doloremque corporis, quaerat animi aut? Nisi, vero eligendi non provident quaerat quas quidem quia officia voluptatem quod, corporis architecto in perferendis fugiat, commodi dolorum possimus!</p>
   <img src={cat} alt="cat" />

   {header2}
   {par}
   {image}
   </>
  )
}

export default App
