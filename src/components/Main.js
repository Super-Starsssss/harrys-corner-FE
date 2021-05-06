import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
  }, []);
  
  const form = {
    user: {
      email: "",
      password: ""
    }
  }
  const login = (event) => {
    event.preventDefault();
    fetchData();
  }

  function handleChange(event) {
    Object.keys(form.user).forEach(element => {
      if (element === event.target.name) {
        form.user[element] = event.target.value
      }
    });

  }

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const jwt = await response.json()
    localStorage.setItem('token', jwt.auth_token)
    localStorage.setItem('username', jwt.user.name)
    let url = document.createElement('a')
    url.href = document.referrer
    if (localStorage.getItem('token')) {
      if (url.pathname === '/login') {
        url.pathname = '/'
      }
      window.location.replace(url.pathname)
    }
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-3">
        </div>
        <div className="col-md-5 col-sm-12">
<<<<<<< HEAD
          <div className="d-flex flex-column align-items-center">
            <h1 className="font-weight-bold" style={{ color: 'blue', fontSize: 62 }}>Harry's Corner</h1>
          </div>
          <div className="border-0 pt-3 pl-3 pb-3 pr-4 mt-3" style={{ background: `transparent` }}>
            <div className="row justify-content-around">
              <h3>Sign in with your account</h3>
            </div>
            <hr />
            <div className="pt-2 pl-2 mt-4">
              <form className="">
                <div className="form-group">
                  <i className="fa fa-mobile"></i>
                  <input type="text" className="form-control" value={email.email} onChange={handleEmailChange} aria-describedby="emailHelp" placeholder="Email" style={{ border: 0 }} />
                </div>
                <div className="form-group">
                  <i className="fa fa-lock"></i>
                  <input type="password" className="form-control" value={password.password} onChange={handlePasswordChange} aria-describedby="emailHelp" placeholder="Password" style={{ border: 0 }} />
                </div>
                <br />
                <div className="d-flex flex-column justify-content-around">
                  <button type="submit" className="btn btn-warning" onClick={login}>Login with password</button>
                  <button type="submit" className="btn btn-outline-warning mt-1">Send request login</button>
                  <a href="/" className="mt-2" >Forgot password?</a>
                </div>
              </form>
            </div>
          </div>
          <div className="row pl-5 mt-2">
            <p>Not a member yet?</p>
            <a href="/register" className="pl-1"> Sign up now !</a>
          </div>
=======
          
            <div className="d-flex flex-column align-items-center">
               <h1 className="font-weight-bold" style={{color: 'blue', fontSize: 62}}>Harry's Corner</h1>
            </div>
            <div className="border-0 pt-3 pl-3 pb-3 pr-4 mt-3" style={{background: `transparent`}}>
              <div className="row justify-content-around">
                  {/* <a href="/" className="font-weight-bold text-white">WITH NUMBER PHONE</a>
                 |
                  <a href="/" className="font-weight-bold text-white" > SCAN QR</a>  */}
                  <h3>Sign in with your account</h3>
              </div>  
                <hr />
                <div className="pt-2 pl-2 mt-4">
                  <form className="">
                    <div className="form-group">
                      <i className="fa fa-mobile"></i>
                      <input type="text" className="form-control" name="email" onChange={handleChange}  aria-describedby="emailHelp" placeholder="Email" style={{border: 0}} />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-lock"></i>
                      <input type="password" className="form-control" name="password" onChange={handleChange} aria-describedby="emailHelp" placeholder="Password" style={{border: 0}} />
                    </div>
                    <br />
                    <div className="d-flex flex-column justify-content-around">
                      <button type="submit" className="btn btn-warning" onClick={login}>Login with password</button>
                      <button type="submit" className="btn btn-outline-warning mt-1">Send request login</button>
                        <a href="/" className="mt-2" >Forgot password?</a>
                    </div>
                  </form>
                </div>
              </div> 
              <div className="row pl-5 mt-2">
                <p>Not a member yet?</p>
                <a href="/register" className="pl-1"> Sign up now !</a>
              </div> 
          
        </div>
        <div className="col-md-3">
>>>>>>> up
        </div>
        <div className="col-md-3">
        </div>
      </div>
    </div>
  )
}

export default Main
