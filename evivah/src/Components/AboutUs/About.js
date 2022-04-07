import React from 'react'
import './about.css'
import Navbar from "../Navbar/Navbar"


const about = () => {
  return (
    <div>
      <Navbar />
      <section className='about'>
        <div className='about-overlay'>
          <h1>About Us</h1>
        </div>
        <div className="about-us">
          <section>
            <div className="a-container">
              <p className="normal-16 dark-text">Evivah is an Indian online wedding planning platform and a wedding media publisher, enabling couples to plan their weddings in a convenient &amp; cost-effective manner.</p><br />
              <p className="normal-16 dark-text">Brain-child four CDAC Graduates, Pratik Suryavanshi &amp; Tejal Patil &amp; Gaurav Shinde &amp; Shruti Patil – Evivah is on a spree to make wedding planning in India exciting and hassle-free. With a millennial army of wedding fanatics, WeddingBazaar aims to aid wedding blues of every new-age couple across the country.</p><br />
              <p className="normal-16 dark-text">We’re a driven team of wedding enthusiasts working to build a new way of wedding planning through delightful products and amazing customer service.We love what we do, and that's how we help plan your wedding like a loved one!</p>
            </div>
          </section>
          <section style={{ background: "lightgrey" }} className="pad-40 values pb-3">
            <div className="a-container">
              <h2 className="bold-24 padb-40">Who we are</h2>
              <p className="normal-16 dark-text">We are <b>passionate</b>. We drive <b>change</b>. We move <b>fast</b>. We love to <b>win</b>. We value our <b>team</b>. We are <b>supportive</b>. We are <b>kind</b>. We are <b>optimistic</b>. We are <b>creative</b>. We <b>collaborate</b>. We say <b>cheers</b>.</p><br />
              <p className="normal-16 dark-text pb-3">We are <b>Evivah</b>.</p>
            </div>
          </section>
          <div class="margin-t-20">
            <div class="h4 text-bold">Make Planning decisions</div>
          </div>
          <div class="margin-t-20 fz-2"><b style={{ fontSize: "18px" }}>Vendors</b><div>
            <div class="regular">From photographers to wedding priests, <b>Evivah</b> has 1000+ active vendors for you to choose from.<br /> Browse their portfolio, prices, genuine client reviews &amp; much more to do your research and book just about any wedding vendor you might require.
            </div></div></div>

          <div class="margin-t-20"><b style={{ fontSize: "18px" }}>Blog</b><div>
            <div class="regular">That would be your chock-a-block for all your wedding "wows"! <br />500+ blogs dedicated to a mixed-platter of the latest wedding trends &amp; <br />ideas to serve you with just the right amount of wedding inspiration you need to kickstart your wedding planning.
            </div></div></div>

        </div>
      </section>
      
    </div>

  );
}

export default about