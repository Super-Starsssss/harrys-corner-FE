import { useHistory } from "react-router-dom";


const Register = () => {
  let history = useHistory();

  function randomPassBase(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() *
        charactersLength)));
    }
    return result.join('');
  }
  const passwordBase = randomPassBase(6);

  const form = {
    user: {
      name: '',
      email: '',
      password: passwordBase,
      password_confirmation: passwordBase
    }
  };

  function handleChange(event) {
    Object.keys(form.user).forEach(element => {
      if (element === event.target.name) {
        form.user[element] = event.target.value
      }
    });

  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const URL = 'http://localhost:3000/api/v1/users';
      let dataSend = JSON.stringify(form);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: dataSend
      }
      const response = await fetch(URL, requestOptions);
      const result = await response.json();

      if (response.status === 200) {
        history.push("/login")
      } else {
        console.log(result.message); //handle errors in form here
      }
    }
    catch (err) {
      console.log(err)
    }

  }



  return (
    <div className="container" style={{ height: 3000 }}>
      <div className="row pt-6">
        <div className="col-md-12 col-sm-12 d-flex flex-row" style={{ paddingTop: 100 }}>
          <div className="col-md-3">
          </div>
          <div className="col-md-6 col-sm-12">
            <form className="d-flex flex-column justify-content-around" onSubmit={handleSubmit}>
              <h3 style={{ textAlign: `center` }}>Sign up</h3>
              <div className="form-group">
                <label htmlFor="email">Your Name :</label>
                <input type="text" name="name" onChange={handleChange} className="form-control bg-transparent
                  " placeholder="Enter your name" style={{ color: "#d0c31f" }} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" onChange={handleChange} className="form-control bg-transparent
                  " placeholder="Example@gmail.com" style={{ color: "#d0c31f" }} />
              </div>
              <button type="submit" className="btn btn-outline-warning" >Send activate link</button>
            </form>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 col-sm-12 d-flex justify-content-center">
          <div className="separator">or continue with</div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-3">
          
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-around">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.7" cx="32" cy="32" r="32" fill="#333336"></circle><path d="M25.3189 34.5026L24.4835 37.6212L21.4301 37.6858C20.5176 35.9933 20 34.0569 20 31.9991C20 30.0092 20.4839 28.1327 21.3417 26.4805H21.3424L24.0607 26.9788L25.2515 29.6809C25.0023 30.4075 24.8665 31.1875 24.8665 31.9991C24.8666 32.88 25.0261 33.7239 25.3189 34.5026Z" fill="#FBBB00"></path><path d="M43.7881 29.7578C43.9259 30.4837 43.9978 31.2334 43.9978 31.9995C43.9978 32.8587 43.9075 33.6967 43.7354 34.505C43.1512 37.2558 41.6249 39.6577 39.5104 41.3575L39.5097 41.3568L36.0858 41.1821L35.6012 38.1571C37.0043 37.3342 38.1008 36.0465 38.6784 34.505H32.2617V29.7578H38.772H43.7881Z" fill="#518EF8"></path><path d="M39.5113 41.3577L39.5119 41.3583C37.4555 43.0113 34.8432 44.0003 31.9995 44.0003C27.4296 44.0003 23.4565 41.446 21.4297 37.6872L25.3184 34.5039C26.3318 37.2085 28.9408 39.1338 31.9995 39.1338C33.3142 39.1338 34.5458 38.7783 35.6027 38.1579L39.5113 41.3577Z" fill="#28B446"></path><path d="M39.6575 22.7626L35.77 25.9452C34.6762 25.2615 33.3832 24.8665 31.998 24.8665C28.8701 24.8665 26.2123 26.8801 25.2497 29.6817L21.3405 26.4812H21.3398C23.337 22.6307 27.3602 20 31.998 20C34.9096 20 37.5793 21.0371 39.6575 22.7626Z" fill="#F14336"></path></svg>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.7" cx="32" cy="32" r="32" fill="#333336"></circle><circle cx="32" cy="33.1836" r="13" fill="white"></circle><path d="M46 32.0856C46 24.3063 39.732 18 32 18C24.268 18 18 24.3063 18 32.0856C18 39.1161 23.1196 44.9433 29.8125 46V36.1572H26.2578V32.0856H29.8125V28.9823C29.8125 25.4521 31.9026 23.5022 35.1005 23.5022C36.6322 23.5022 38.2344 23.7773 38.2344 23.7773V27.2436H36.469C34.7299 27.2436 34.1875 28.3294 34.1875 29.4433V32.0856H38.0703L37.4496 36.1572H34.1875V46C40.8804 44.9433 46 39.1161 46 32.0856Z" fill="#3F88FA"></path></svg>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.7" cx="32" cy="32" r="32" fill="#333336"></circle><path d="M43.5191 38.0401C43.1211 38.9571 42.6293 39.8318 42.0512 40.6507C41.2778 41.7383 40.6473 42.4915 40.1597 42.9103C39.403 43.5973 38.596 43.9483 37.7283 43.9698C37.1062 43.9698 36.3563 43.7943 35.4837 43.44C34.6076 43.0858 33.8023 42.9103 33.0658 42.9103C32.294 42.9103 31.4668 43.0858 30.5807 43.44C29.6946 43.7943 28.98 43.978 28.4335 43.9979C27.6029 44.031 26.774 43.6701 25.9484 42.9103C25.4204 42.4551 24.7613 41.6754 23.9694 40.5712C23.1219 39.3909 22.4242 38.0219 21.8777 36.4625C21.2926 34.7773 21 33.1468 21 31.5659C21 29.7565 21.3951 28.1971 22.1871 26.8894C22.7852 25.8629 23.6423 25.0059 24.6756 24.4013C25.6913 23.7999 26.8515 23.4759 28.0367 23.4627C28.6958 23.4627 29.5617 23.6646 30.6378 24.0619C31.7089 24.4592 32.3983 24.6612 32.6992 24.6612C32.9262 24.6612 33.6913 24.4261 34.986 23.9543C36.2134 23.519 37.2491 23.3385 38.0966 23.4081C40.3934 23.5918 42.1202 24.4874 43.2669 26.1014C41.2122 27.333 40.1967 29.0563 40.2168 31.2679C40.2336 32.9895 40.8675 34.4247 42.1101 35.562C42.6717 36.0917 43.3005 36.499 44 36.7886C43.8487 37.224 43.6889 37.6412 43.5191 38.0401ZM38.2496 17.5397C38.2496 18.8905 37.7502 20.1519 36.7565 21.3189C35.556 22.7062 34.1049 23.5074 32.5311 23.3799C32.5094 23.2102 32.4982 23.0394 32.4975 22.8684C32.4975 21.5722 33.0692 20.1866 34.083 19.051C34.6231 18.4518 35.2794 17.965 36.0133 17.6191C36.7918 17.2433 37.5283 17.0331 38.221 17C38.2412 17.1804 38.2496 17.3609 38.2496 17.5397Z" fill="white"></path></svg>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.7" cx="32" cy="32" r="32" fill="#333336"></circle><path d="M37.7143 21H26.2857C25.0233 21 24 22.0745 24 23.4V42.6C24 43.9255 25.0233 45 26.2857 45H37.7143C38.9767 45 40 43.9255 40 42.6V23.4C40 22.0745 38.9767 21 37.7143 21Z" fill="white"></path><path d="M32 41H32.01" stroke="#2C2D30" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default Register
