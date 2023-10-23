import React from 'react';

function Section({ id, title, content, isBlue }) {
  const sectionClassName = isBlue ? 'blue-section' : 'white-section';

  return (
    <section id={id} className={sectionClassName}>
      <h1>{title}</h1>
      <p>{content}</p>
    </section>
  );
}

export default Section;