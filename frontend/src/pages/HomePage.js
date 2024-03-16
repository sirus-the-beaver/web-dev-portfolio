// Import dependencies
import React from 'react';

function HomePage() {
    return(
        <>
        <h2>Home Page</h2>
        <article>
            <p>
                My career goals are to become a software engineer after graduating with my bachelors in computer science. My plan is 
                to eventually pursue a masters in computer science with a specialization in machine learning and artificial intelligence 
                so that I can work in the machine learning field as a machine learning engineer.
            </p>
            <p>
                Throughout this course in web development, I learned about the following technologies:
                <dl>
                    <strong><dt>JavaScript</dt></strong>
                    <dd>JavaScript is a programming language that is primarily used for writing client-side code for web apps. In addition, JavaScript is now also used to develop the backend/server side code of web apps.</dd>

                    <strong><dt>Node</dt></strong>
                    <dd>Node is a JavaScript runtime environment for developing server-side applications. Node apps are written in JavaScript and can be run in the Node runtime.</dd>

                    <strong><dt>Express</dt></strong>
                    <dd>Express is a framework developed for building apps with Node. Express provides APIs of various tasks that web apps need to do. Express allows us to get, post, and delete data. Additionally, with Express, we can define the ports and routes that data will take. We can also use middleware to handle requests that are made within the route the data takes with Express.</dd>

                    <strong><dt>MongoDB</dt></strong>
                    <dd>MongoDB is a NoSQL database management system, which means that it's document oriented. In document based database management systems, data is stored in as a document in a format such as JSON or XML. Internally, MongoDB stores documents in BSON, which is binary JSON. Although, the MongoDB API exposes the documents as JSON which makes MongoDB very easy to use along with Node.</dd>

                    <strong><dt>React</dt></strong>
                    <dd>React is a framework developed for writing frontend apps. React apps are written in JavaScript with additional React syntax. React works by building a component tree made from components we build for our app. This component tree is then mapped to the DOM tree that the browser renders. This means that when we write React apps, we are modifying each component instead of directly modifying the DOM.</dd>
                </dl>
            </p>
        </article>
        </>
    );
}
export default HomePage;