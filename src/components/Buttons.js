import React from 'react';

function Buttons() {
  const email = "assilomar@hotmail.com"; // Your email address

  return (
    <a href={`mailto:${email}`} className="btn btn-outline btn-primary flex align-middle">
      Contact Me
    </a>
  );
}

export default Buttons;
