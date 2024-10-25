import "./test1.css"
export default function MyFirstComponent() {
  const person = {
    name: 'Chamseddine',
    email: 'chamsnfs@gmail.com',
    age: 22,
  };
  const elmStyle = {
    backgroundColor: 'red',
    fontSize: '24px',
    boxShadow: '0 20px 10px black',
  };
  return (
    <div>
      <h1 style={elmStyle}>{person.email}</h1>
      <h2 className={person.name === "mino" ? 'active' : 'inactive'}>Hello World</h2>
      <button onClick={sayHello}>BOUNJOUR</button>
    </div>
  );
}
function sayHello() {
  alert('SALAMOAYLAYKOMAYLAYKOMSALAAAAMMMMM');
}
