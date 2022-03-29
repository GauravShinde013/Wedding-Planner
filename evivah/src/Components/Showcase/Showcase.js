import React from 'react'
import './showcase.css'

const Showcase = () => {
  return (
    <section className='showcase'>
      <div className='showcase-overlay'>
        <h1>Plan Your Dream Wedding</h1>
        <button type="button" className="btn btn-danger showcase-btn">Start Your Journey</button>
     </div>
    </section>
  );
}

export default Showcase