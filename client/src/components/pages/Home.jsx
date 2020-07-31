//always need to do this...
// import React from 'react';

// function Home () {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Home;

//for directing traffic
//package.json main = after start: ,  "heroku-postbuild":"cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
//package.json client = brfore last } add , "proxy": "http://localhost:4000"

import React from 'react';

function Home () {
    return (
            <header className="home-cta">
                <h1>Welcome to my BLOG!</h1>
            </header>
    );
};

export default Home;