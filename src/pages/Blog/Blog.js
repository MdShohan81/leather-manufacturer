import React from 'react';

const Blog = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <h2 className='text-center mb-5 text-primary'>Blog/News</h2>
                <div className="col-md-10 col-12 mx-auto text-center">
                    <h4>1. How will you improve the performance of a React Application?</h4>
                    <p>BIn React, you can sort out about more than half of performance issues by analyzing how your components interacted in your app by using amazing tools such as React dev tools. But before you figure out the components behavior, make sure that you know how React works under the hood.</p>
                    <p>the resources which are needed to be loaded first and lazyload the rest of code or resources with techniques such as code-splitting</p>

                </div>
                <div className='col-md-10 col-12 mx-auto text-center'>
                    <h4>What are the different ways to manage a state in a React application?</h4>
                    <p>React has an excellent tool for providing data across multiple components. The primary goal of Context is to avoid prop-drilling. Our goal is to get an easy-to-use tool to manage the state in various scenarios likely to be encountered in enterprise applications: frequent updates, redesigns, the introduction of new features, and so on.</p>
                    
                    <p>While all this is theoretically doable with Context, it would require a custom solution that requires time to set up, support, and optimize. The only advantage of Context is that it doesn’t depend on a third-party library, but that can’t outweigh the effort to maintain this approach.
                    </p>
                </div>
                <div className='col-md-10 col-12 mx-auto text-center'>
                    <h4>3. How does prototypical inheritance work?</h4>
                    <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
                    Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).
                    JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</p>
                </div>
                <div className='col-md-10 col-12 mx-auto text-center'>
                    <h4>4.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                    <p>For instance, do you want to get all items in an array that meet a specific condition? Do you want to check if any item meets the condition? Do you want to check if a specific value is in the array? Or do you want to find the index of the value in the array? hese methods are: Filter,Find,Includes,IndexOf</p>
                </div>
                <div className='col-md-10 col-12 mx-auto text-center'>
                    <h4>5. What is a unit test? Why should write unit tests?</h4>
                    <p>A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
                    Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;