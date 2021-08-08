/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import './pagenotfound.css';
export default function NotFound() {
  return (
    <section id="not-found">
      <div id="title"> 404 Error Page Not Found</div>
      <div className="circles">
        <p>
          404
          <br />
          <small>PAGE NOT FOUND</small>
        </p>
        <span className="circle big" />
        <span className="circle med" />
        <span className="circle small" />
      </div>
    </section>
  );
}
