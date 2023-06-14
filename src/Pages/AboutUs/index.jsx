function AboutUs() {
  return (
    <div className="about-section" >
      <h1 style={{textAlign:"center", fontWeight:200}}>Made with love by:</h1>
      
        <div className="about-section-cards">

          <div className="card">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQEqfJ19MNO4Mw/profile-displayphoto-shrink_800_800/0/1684847026270?e=1691625600&v=beta&t=Lz9clUQ3u0S2-7uQgDFPao5Ze30zBYinIJ4E4gMtsrQ"
              alt="marisa-Image"
              style={{ width: 190, height: 200, borderWidth:  1,  borderStyle:  'solid', borderBlockColor: 'black' }}
            />
            <div className="container">
              <h2 style={{fontWeight: 100, fontSize: 15}}>Marisa Pinheiro</h2>
              <p className="title" style={{fontWeight: 100, fontSize: 10, fontStyle:"italic"}}>Junior Web Developer</p>
              <a style={{fontWeight: 100, fontSize: 10}} href="marisa.nbsp@gmail.com">Send me an email! </a> <br></br>
              <a style={{fontWeight: 100, fontSize: 10}} href="linkedin.com/in/marisa-pinheiro-833a12113">
                Find me on Linked In
              </a>
            </div>
          </div>


      
          <div className="card">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQHutZ64ysndtw/profile-displayphoto-shrink_800_800/0/1685901605393?e=1691625600&v=beta&t=hTvC1qnydDfAemXqCw_j3dD_V-lyrxqZJpJkHTSLmbI"
              alt="pedro-Image"
              style={{ width: 190, height: 200, borderWidth:  1,  borderStyle:  'solid', borderBlockColor: 'black' }}
            />
            <div className="container">
              <h2 style={{fontWeight: 100, fontSize: 15}}>Pedro Nogueira</h2>
              <p className="title" style={{fontWeight: 100, fontSize: 10, fontStyle:"italic"}}>Junior Web Developer</p>
              <a style={{fontWeight: 100, fontSize: 10}} href="pedr0.nogueira@hotmail.com">Send me an email! </a><br></br>
              <a style={{fontWeight: 100, fontSize: 10}} href="https://www.linkedin.com/in/pedroinogueira/">
                Find me on Linked In
              </a>
            </div>
          </div>

          </div>
    </div>
  );
}
export default AboutUs;
