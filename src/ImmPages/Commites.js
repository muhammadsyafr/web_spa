import React, { Component } from 'react';

const Commites = () => (
    <div className='home'>
<div>
  <header>
    <div className="overlay" />
    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <source src="img/" type="video/mp4" />
    </video>
    <img src="img/immcolor.jpg" />
    <div className="overlay-content">
      <h1 className="text-center text-white text-title">Commites Hospital International Model</h1>
      {/* <h2 className="text-center text-white text-subtitle">28TH - 30TH JUNE 2019</h2> */}
    </div>
  </header>
  <section className="content">
    <div className="container">
      <h1 className="index-title text-center mt-5 mb-5">COMMITES</h1>
      <div className="img-content mb-5">
        <div className="row">
          <div className="col">
            <div className="container">
              <h2 className="img-title">
                Subtitle for Commites International
              </h2>
            </div>
          </div>
          <div className="col">
            <img className="img-fluid img-col-content" src="img/4.webp" style={{}} />
          </div>
        </div>
      </div>

      <div className="content mb-5">
        The decision on such theme is a reflection of current events following the doubts and worries over developing international affairs. Escalating conflicts, controversial acts done by high-profile international actors and, most of all, massive worries toward the shortcomings of the President of arguably the most powerful country in the world; the United States of America. This year, we will bring a concept that challenges delegates to question the level of morality considered in state policies and their stances within the United Nations. This year, JOINMUN will be about deliberating ideas that would be in the best interest of global humanity through the fulfillment of duties of states and the recognition of rights of people as a whole. That being said, this year’s conference is expected to provide seven councils that would address such issues and create solutions that effectively resolve them. The seven councils are: United Nations General Assembly (UNGA): Special Political and Decolonization Committee (SPECPOL), United Nations Human Rights Council (UNHRC), United Nations Framework Convention on Climate Change (UNFCCC), The Group of Twenty (G20), Permanent Court of Arbitration (PCA), United Nations Security Council (UNSC), International Press Institute (IPI)
      </div>
    </div>
  </section>
 
</div>

    </div>
  );

export default Commites;