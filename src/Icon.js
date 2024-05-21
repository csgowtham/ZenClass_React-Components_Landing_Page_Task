import React from 'react';

function Icon({ icons }) {
  return (
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {icons.map((icon, index) => (
            <div key={index} className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className={`${icon.icon}`}></i>
                </div>
                <h3>{icon.name}</h3>
                <p className="lead mb-0">{icon.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Icon;
