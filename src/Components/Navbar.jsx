import './Navbar.css'


function Navbar() {
    return <>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand fs-1 apna-solution" href="#">
                    <svg id="nav" xmlns="http://www.w3.org/2000/svg" width="45" height="55" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="2 2 16 16" style={{ marginLeft: "20px", color: "aqua" }}>
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                    </svg>
                    Electra-X
                </a>
                <button class="btn btn-outline-light me-3 apna-login" type="button" style = {{borderRadius:"40px"}}>Log In / Sign Up</button>
            </div>
        </nav>
    </>
}

export default Navbar;