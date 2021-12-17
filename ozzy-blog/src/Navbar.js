const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1>CodeGuru<span id="logo_name">Ozzy</span></h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create" style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius : "5px",
                padding: "4px"
            }}>New Blog</a>
        </div>
    </nav>
    );
}
 
export default Navbar;