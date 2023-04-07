import './Card.css'

function Card() {
  // JSX - Javascript XML: https://babeljs.io/repl
  const name = '';
  if (name) {
    return <h1>Hello {name}</h1>;
  } else {
    return <h1>Hello World</h1>;
  }
}

export default Card;
