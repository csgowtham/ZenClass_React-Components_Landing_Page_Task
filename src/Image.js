import React from 'react'


function Image({contents}) {
  return <>
    <section className="showcase">
        <div className="container-fluid p-0">
        {contents.map((content,index) =>(
            <div className="row g-0" key={content.id}>
                <div className={`${ content.id %2 === 0?'col-lg-6 text-white showcase-img':'col-lg-6 order-lg-2 text-white showcase-img'}`} style={{ backgroundImage:`url('${content.image}')` }}></div>
                <div className={`${content.id % 2 === 0 ?'col-lg-6 my-auto showcase-text' : 'col-lg-6 my-auto showcase-text'}`}>
                    <h2>{content.name}</h2>
                    <p className="lead mb-0">{content.description}</p>
                </div>
            </div>
           
        ))}
        </div>
    </section>
  </>
}

export default Image