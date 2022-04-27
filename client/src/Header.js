function Header ({user,onLogout}){
    
    function handleLogout() {
          fetch("/logout", {
            method: "DELETE",
          }).then(() => onLogout());
        }
    
    return (
        <div class="headerContainer">
              <h1 class= "title">OSKAR</h1>
                {user ? (
                    <div class= "profile">
                        <p>Welcome, {user.username}!</p>
                        <br></br>
                        <button class= "logoutButton" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <a id="loginButton"href="/">Login</a>
                    </div>
                )}
            <div class="containerNav">
              <nav>
                  <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/CreatePatient">Add Patient</a></li>
                      <li><a href="/EditProfile">Edit Profile</a></li>
                      <li><a href="/SavedDevices">Saved Devices</a></li>
                  </ul>
              </nav>
          </div>
        </div>
    )
  }
  
  export default Header;