import React from "react";
import "./Me.css";

import Quote from "../../Quote/Quote";
function easter() {
  console.log(
    `%c
    Hello.
  `,
    "font-family:monospace; color: pink;"
  );
}
const me = props => (
  <article className="Me">
    <h4>jmp</h4>
    <h1 onClick={easter}>Hello.</h1>
    <div>
      <p>My name is Jared.</p>
      <p>
        I am a web developer. I published my first website online using iWeb on
        my white 12" iBook G4 in 2006. I love design and development and have
        been able to make a career out of it even if it took me some time to
        figure out this is what I wanted to do.
      </p>
      <Quote author="Steve Jobs">
        Your work is going to fill a large part of your life, and the only way
        to be truly satisfied is to do what you believe is great work. And the
        only way to do great work is to love what you do. If you haven't found
        it yet, keep looking. Don't settle. As with all matters of the heart,
        you'll know when you find it.
      </Quote>
      <p>
        I like playing card and board games, running, playing softball on
        Thursday nights, playing basketball whenever possible, and traveling
        with my wife.
      </p>
    </div>
  </article>
);

export default me;
