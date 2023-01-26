import React from 'react';
import Typewriter from 'typewriter-effect';

const TextAnimation = () => (
    <span>
      <Typewriter
        options={{
          strings: ['Reja', 'Zheyenk'],
          autoStart: true,
          loop: true,
         }}
      />
    </span>
  )

export default TextAnimation

