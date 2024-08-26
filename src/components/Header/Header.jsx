// this component includes the nav bar and its JS
function Header(props) {
  return (
    <header>
      <h1> Portfile </h1>
      <nav>
        <button onClick={() => props.setCurrentPage("AboutMe")}>
          about me
        </button>
        <button onClick={() => props.setCurrentPage("Contact")}>contact</button>
        <button onClick={() => props.setCurrentPage("Projects")}>
          projects
        </button>
      </nav>
    </header>
  );
}

// export this component to the parent component App
export default Header;
