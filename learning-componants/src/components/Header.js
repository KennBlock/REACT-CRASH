export default function Header() {
  const elmstyle = {
    backgroundColor: '#007575',
    width: `100%`,
    height: '100%',
    fontSize: '34px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'Header',
  };
  return (
    <h1 style={elmstyle} className={'Header'}>
      BOUDJEHEM CHEMSSEDDINE ACADEMY
    </h1>
  );
}
