import React, { useState, useEffect } from 'react';

const Main = () => {
  useEffect(() => {
  }, []);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleEmailChange = (e) => {
    setEmail({ email: e.target.value });
  }
  const handlePasswordChange = (e) => {
    setPassword({ password: e.target.value });
  }
  const login = () => {
    let user = {
      user: {
        email: email.email,
        password: password.password
      }
    }
    let user_json = JSON.stringify(user)
    fetchData(user_json);
  }

  const fetchData = async (user) => {
    const response = await fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: user
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
          <div className="d-flex flex-column align-items-center">
            <img src="https://stc.sp.zdn.vn/zaloid/client/images/logo.png" alt="" className="image_logo" style={styleLogo} />
            <h4 className="mt-3">Đăng nhập bằng tài khoản zalo</h4>
            <h5 className="mt-3">chat.zalo.me</h5>
          </div>
          <div className="col-md-5 col-sm-12">
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
                      <input type="text" className="form-control" value={email.email} onChange={handleEmailChange}  aria-describedby="emailHelp" placeholder="Email" style={{border: 0}} />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-lock"></i>
                      <input type="password" className="form-control" value={password.password} onChange={handlePasswordChange} aria-describedby="emailHelp" placeholder="Password" style={{border: 0}} />
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
        </div>
        <div className="col-md-3">
        </div>
        <div className="col-md-3">
        </div>
      </div>
    </div>
  )
}

export default Main
