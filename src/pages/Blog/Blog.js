import React from 'react';

const Blog = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <h2 className='text-center mb-5 text-primary'>Blog/News</h2>
                <div className="col-md-10 col-12 mx-auto text-center">
                    <h4>1. Difference between javascript and nodejs?</h4>
                    <p>Both of these are used for programming. But there is a significant difference between Node.JS and Javascript. JavaScript (abbreviated as JS) is a lightweight scripting language that is object-oriented. It is used for developing HTML pages that are dynamic and have various interactive effects on their web pages. The Node.JS, on the other hand, helps in representing a list of all the methods and objects that the JavaScript code can access when run via node interpreters or in the V8 engine.</p>
                    <h5 className='text-info'>What is Node.JS?</h5>
                    <p>It is a JS runtime environment that lets Javascript to be run on the server-side. It is cross-platform, and it thus allows the JS code to run outside any browser easily. There are various modules in NodeJS, and it is mainly utilised in the process of web development..</p>

                    <h5 className='text-info'>What is Javascript?</h5>
                    <p>It is a scripting language, but JS is basically the ECMA script’s updated version. Javascript is mainly utilised in making the HTML web pages more dynamic and interactive</p>
                    <p className='text-primary'>. It is a high-level language, and it makes use of the Oops concept. Yet, it is based primarily on the concept of prototype inheritance.</p>
                </div>
                <div className='col-md-10 col-12 mx-auto text-center'>
                    <h4>2. When should you use nodejs and when should you use mongodb?</h4>
                    <p>Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
                    Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent</p>
                    
                    <p>databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.
                    Document databases are popular in ecommerce and securities trading platforms, among other uses, because they scale out well across multiple servers to support high data volumes and traffic.
                    </p>
                </div>
                <div className='col-md-10 col-12 mx-auto text-center'>
                    <h4>3.Differences between sql and nosql databases?</h4>
                    <p>SQL programming can be effectively used to insert, search, update, delete database records.
                    That doesn't mean SQL cannot do things beyond that. It can do a lot of things including, but not limited to, optimizing and maintenance of databases.</p>
                    <p>NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.</p>
                    <p>SQL databases are primarily called RDBMS or Relational Databases.NoSQL databases are primarily called as Non-relational or distributed database</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;