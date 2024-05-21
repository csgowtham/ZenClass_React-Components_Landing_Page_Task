import React from 'react'

function Testimonals({testimonals}) {
  return <>
    <section className="testimonials text-center bg-light">
        <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                {testimonals.map((feedback,index)=>(
                    <div className="col-lg-4" key={index}>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={feedback.image} alt="..." />
                            <h5>{feedback.name}</h5>
                            <p className="font-weight-light mb-0">{feedback.feedbacks}</p>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    </section>
  </>
}

export default Testimonals