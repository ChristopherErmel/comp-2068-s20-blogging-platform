import React from 'react';
import {Container} from 'react-bootstrap';


function About () {
    return (
        <Container className="my-5">
            <h2>Biography</h2> 
                <blockquote class="blockquote">
                    <p class="mb-0">Christopher is currently in his last year of study for Computer Programming at Georgian College, located in Barrie, ON.  Chris loves all aspects of programming and wishes to become a great programmer one day. His language focus is mainly JS, CSS, HTML, PHP and Database for website and mobile implementation and management. While web-programming is his main focus, he also love C++ and JAVA. Along with his interest in programming Chris also loves to fish, play hockey(Goalie) and hangout with friends.</p>
                    <footer class="blockquote-footer">by <cite>Christopher Ermel, 200250446</cite></footer>
                </blockquote>
        </Container>
    );
};

export default About;
