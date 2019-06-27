import React, { Component } from 'react';

const Home = () => (
    <div className='home'>
<div>
  <header>
    <div className="overlay" />
    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <source src="img/hero-video.mp4" type="video/mp4" />
    </video>
    {/* <img src="img/"> */}
    <div className="overlay-content">
      <h1 className="text-center text-white text-title">Indonesian Medical Model United Nations</h1>
      <h2 className="text-center text-white text-subtitle">28TH - 30TH JUNE 2019</h2>
    </div>
  </header>
  <section className="content">
    <div className="container">
      <h1 className="index-title text-center mt-5 mb-5">THIS YEAR'S THEME</h1>
      <div className="img-content mb-5">
        <div className="row">
          <div className="col">
            <div className="container">
              <h2 className="img-title">
                Preserving Rights and Duties in an International Realm of Anarchy
              </h2>
            </div>
          </div>
          <div className="col">
            <img className="img-fluid img-col-content" src="img/2.webp" style={{}} />
          </div>
        </div>
      </div>
      <div className="content">
        Abnormalities on vulnerable mental health in adolescents creates various problems like depression which leads to death, 
        alcoholism and drugs prohibited, physical health disorders, etc. These problems need to be discussed at a conference. 
        one of the conferences is MUN. Indonesia Medical Model United Nation (IMMUN) is present as one form of the United Nation Model (MUN) focusing on world health issues not only for medical students but also for other students. 
        IMMUN is an ISMKI work program or the Indonesian Medical Student Executive Association and this year it was held at Jenderal Sudirman University through a tenderization taken by the association of KBMK Unsoed students, 
        the participants will discuss the topic "Prevention and Control of Increasing Amount Infectious Diseases in 2019 and Beyond "through the Grand Theme" Raisingawareness of Mental Health: Good Health Agenda and Welfare for SDG 2030 ". 
        Therefore, this year's conference is expected to provide two councils that will deal with such issues and create solutions that effectively solve them. The two councils are the World Health Organization (WHO) and the Office of the High Commissioner for Human Rights (OHCHR).  
      </div>
    </div>
  </section>
  <section className="content mt-5 mb-5">
    <div className="container">
      <h1 className="index-title text-center mt-5 mb-5">In partnership with</h1>
      <div className="img-content text-center">
        <img className="img-fluid" src="img/ismki.jpg" style={{width: '175px'}} />
        <img className="img-fluid" src="img/unsoed.png" style={{width: '100px'}} />
        <img class="img-fluid" src="img/1555482706301.jpg" style={{width: '100px', marginLeft: '50px'}} />
      </div>
    </div>
  </section>
</div>

    </div>
  );

export default Home;