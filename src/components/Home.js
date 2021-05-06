import React, { useState, useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    fetchData();
  }, []);

  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    const items = await fetch('http://localhost:3000/api/v1/questions',{
      headers:{Authorization: localStorage.getItem('token')}
    });
    let questions = await items.json();
    if (questions === 401){
      alert(questions)
      questions = [];
    }
    setQuestions(questions); 
  }

  return (
    <div className='container-fuild'>
      <div className="row mb-5 mt-4">
        <div className="col-md-12 col-sm-12 d-flex">
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center pl-5" style={{
            background:
              'url("https://cdn2.topica.vn/99e8262a-7b95-4050-a1a0-d6977c9d98ed/product/6001647144d203002598c08e"), url("https://cdn2.topica.vn/99e8262a-7b95-4050-a1a0-d6977c9d98ed/product/6001647144d203002598c08e")',
            backgroundSize: 'cover',
            height: `720px`
          }}>
            <h1>Hỗ trợ tận tình</h1>
            <h3>Nếu cần thêm sự hỗ trợ. Chúng tôi luôn sẵn sàng ở đây để giúp bạn.</h3>
          </div>
          <div className="col-md-3 col-sm-12" style={{zIndex: 1}}>
            <h1>Tiếng Anh giao tiếp hằng ngày</h1>
            <h5>Rất nhiều bạn học tiếng Anh và đang gặp phải nhiều vấn để trở ngại. Sứ mạnh của chúng tôi sinh ra là để giúp các bạn</h5>
            <div >
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftheharryscorner%2Fvideos%2F349152939676811%2F&width=500&show_text=true&height=374&appId" 
            width="500" height="374" title="intro" style={{ border: `none`, overflow: `hidden` }} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            </div>
          </div>
          <div className="col-md-3" style={{
            background: `url("https://cdn2.topica.vn/5a7a63749f7bfc459700033e/product/600136d244d203002598befd"), url("https://cdn2.topica.vn/5a7a63749f7bfc459700033e/product/600136d244d203002598befd")`,
            backgroundSize: 'cover',
            height: `720px`
          }} >
            
          </div>
        </div>
      </div>


      

      <div className="row p-3">
        <div className="col-md-12 col-sm-12 m-0 d-flex" style={{ alignItems: `center` }}>
          <div className="ml-3">
            <h3 className="">Promotion for you</h3>
            <small>This is promotion for you</small>
          </div>
          <button type="submit" className="ml-auto btn btn-outline-warning" style={{ fontWeight: 700, borderRadius: 51, height: 50 }} >Get More</button>
        </div>
      </div>


      <div className="row" style={{ overflowX: `scroll`, marginRight: 10, marginLeft: 2, scrollBehavior: `smooth` }}>
        <div className="col-md-12 col-sm-12 d-flex">
          {
            questions.map(question => (
              <div className="col-md-2 col-sm-4 mr-3" key={question.id} style={{
                backgroundImage: `url("https://cdn2.topica.vn/99e8262a-7b95-4050-a1a0-d6977c9d98ed/product/600515e344d203002598c2ab")`,
                width: '100%', height: 'auto', backgroundSize: `cover`, cursor: 'pointer', borderRadius: 15
              }}>
                <div className="row">
                  <div className="col-md-12 d-flex flex-row justify-content-start mt-3">
                    <span className="mr-auto">
                    <svg width="24" height="24" className="font-weight-bold" xmlns="http://www.w3.org/2000/svg" 
                    fillRule="evenodd" clipRule="evenodd">
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                    <span className="ml-2" style={{color: 'black'}}>5</span>
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" style={{color: `black`}} width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                      </svg>
                    </span>
                  </div>
                </div>
                <h1 style={{ paddingTop: '7rem' }} >This is a course for newbie</h1>
                <div className="row">
                  <div className="col-12 d-flex flex-row justify-content-around p-3 align-items-center">
                    <span className="font-weight-bold">250.0000</span>
                    <button type="submit" className="btn btn-outline-warning font-weight-bold btn-lg btn-block ml-3" style={{ borderRadius: 25 }} >Get</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="row" style={{ overflowX: `scroll`, marginRight: 10, marginLeft: 2, scrollBehavior: `smooth` }}>
        <div className="col-md-12 col-sm-12 d-flex">
          {
            questions.map(question => (
              <div className="col-md-2 col-sm-4 mr-3" key={question.id} style={{
                backgroundImage: `url("https://cdn2.topica.vn/99e8262a-7b95-4050-a1a0-d6977c9d98ed/product/600515e344d203002598c2ab")`,
                width: '100%', height: 'auto', backgroundSize: `cover`, cursor: 'pointer', borderRadius: 15
              }}>
                <div className="row">
                  <div className="col-md-12 d-flex flex-row justify-content-start mt-3">
                    <span className="mr-auto">
                      <svg width="24" height="24" className="font-weight-bold" xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd" clipRule="evenodd">
                        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
                      <span className="ml-2" style={{ color: 'black' }}>5</span>
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: `black` }} width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <h1 style={{ paddingTop: '7rem' }} >This is a course for newbie</h1>
                <div className="row">
                  <div className="col-12 d-flex flex-row justify-content-around p-3 align-items-center">
                    <span className="font-weight-bold">250.0000</span>
                    <button type="submit" className="btn btn-outline-warning font-weight-bold btn-lg btn-block ml-3" style={{ borderRadius: 25 }} >Get</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="row p-3">
        <div className="col-md-12 col-sm-12 m-0 d-flex" style={{ alignItems: `center` }}>
          <div className="ml-3">
            <h3 className="">Hot Interests</h3>
            <small>This is promotion for you</small>
          </div>
          <button type="submit" className="ml-auto btn btn-outline-warning" style={{ fontWeight: 700, borderRadius: 51, height: 50 }} >Get More</button>
        </div>
      </div>

      <div className="row" style={{ overflowX: `scroll`, marginRight: 10, marginLeft: 2, scrollBehavior: `smooth` }}>
        <div className="col-md-12 col-sm-12 d-flex">
          {
            questions.map(question => (
              <div className="col-md-2 col-sm-4 mr-3" key={question.id} style={{
                backgroundImage: `url("https://cdn2.topica.vn/99e8262a-7b95-4050-a1a0-d6977c9d98ed/product/600515e344d203002598c2ab")`,
                width: '100%', height: 'auto', backgroundSize: `cover`, cursor: 'pointer', borderRadius: 15
              }}>
                <div className="row">
                  <div className="col-md-12 d-flex flex-row justify-content-start mt-3">
                    <span className="mr-auto">
                      <svg width="24" height="24" className="font-weight-bold" xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd" clipRule="evenodd">
                        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
                      <span className="ml-2" style={{ color: 'black' }}>5</span>
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" style={{ color: `black` }} width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <h1 style={{ paddingTop: '7rem' }} >This is a course for newbie</h1>
                <div className="row">
                  <div className="col-12 d-flex flex-row justify-content-around p-3 align-items-center">
                    <span className="font-weight-bold">250.0000</span>
                    <button type="submit" className="btn btn-outline-warning font-weight-bold btn-lg btn-block ml-3" style={{ borderRadius: 25 }} >Get</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>

  )
}

export default Home
