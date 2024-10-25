// buttons.js
export default function Buttons() {
  const containerStyle = {
    gridArea: 'Button',
    backgroundColor: 'white',
    margin: '0 20px 0 0',
    border: '5px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px'
  };

  const buttonStyle = {
    backgroundColor: '#800080',
    display:'flex',
    justifyContent:"center",
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    padding: '12px 16px',
    cursor: 'pointer',
    height: "36px",
  };

  return (
    <aside style={containerStyle} className="Button">
      <button style={buttonStyle} >Tag Name</button>
    </aside>
  );
}