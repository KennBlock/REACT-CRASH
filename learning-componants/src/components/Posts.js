export default function Posts() {
  const elmStyle = {
    gridArea: 'Post',
    backgroundColor: 'white',
    margin: '0 0 0 20px',
    border: '5px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    minHeight: '500px'
  };
  return (
    <main style={elmStyle} className="Post">
      <h4>This is The Post Title</h4>
      <hr></hr>
      <p>this is the post body</p>
    </main>
  );
}