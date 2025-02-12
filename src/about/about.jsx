import React from 'react';

export function About() {
  return (
    <main>
      <div id="picture" className="picture-box"><img src="hello.PNG" alt="random" /></div>

      <p>
        Hi, this is a page about me
      </p>

      <p>
        I'm here to share what I'm thinking about.  I also hope to implement a quotes collection and links collection. If you'd like to hire me, you can check out dat resume 
      </p>

      <div id="picture" className="picture-box"><img width="400px" src="friends.jpeg" alt="random" /></div>


      <div id="quote">
        <div>“Loneliness does not come from having no people about one, but from being unable to communicate the things that seem important to oneself.” </div>
        <div>- Carl Jung</div>
      </div>
    </main>
  );
}
