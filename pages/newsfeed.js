import styles from '../styles/Home.module.css'
import Article from './article';

const reactTutorialArticles = [
    {      title: "Getting Started with React: A Beginner's Guide",      body: "In this tutorial, we will explore the basics of React, covering concepts such as components, JSX, and state. By the end, you'll have a solid foundation to build upon."    },
    {      title: "Understanding React Components and Props",      body: "Learn how to create reusable components in React and pass data between them using props. This article dives into the core building blocks of a React application."    },
    {      title: "State Management in React: A Comprehensive Overview",      body: "Delve into the intricacies of state management in React. We'll discuss local state, lifting state up, and using state effectively to build dynamic and interactive UIs."    },
    {      title: "Handling Forms in React: Controlled Components",      body: "Explore the best practices for handling forms in React. We'll cover controlled components, form validation, and how to manage form data efficiently."    },
    {      title: "Routing in React: Navigating Your Single Page Application",      body: "Take a deep dive into React Router and learn how to implement client-side routing in your single-page applications. Navigation made easy!"    },    
    {      title: "Working with APIs in React: Fetching and Displaying Data",      body: "Discover how to fetch data from APIs and integrate it into your React application. This tutorial will guide you through making asynchronous requests and updating the UI accordingly."    },    
    {      title: "Styling in React: CSS-in-JS and Other Approaches",      body: "Explore different styling approaches in React, from traditional CSS to modern solutions like styled-components. Find the best method for your project and enhance the visual appeal of your components."    },
    {      title: "Stateful vs. Stateless Components in React",      body: "Distinguish between stateful and stateless components in React. Understand when to use each type and how they contribute to building scalable and maintainable applications."    },
    {      title: "Testing React Applications: A Comprehensive Guide",      body: "Ensure the reliability of your React application by mastering the art of testing. From unit tests to end-to-end testing, this tutorial covers the tools and techniques you need to know."    },
    {      title: "Optimizing React Performance: Best Practices and Tips",      body: "Learn how to optimize the performance of your React applications. This tutorial covers techniques such as memoization, code splitting, and lazy loading to ensure a smooth user experience."    }
  ];


  export default function Newsfeed() {
    const articlesArray = reactTutorialArticles.map((article, idx) => {
        return <Article title={article.title} body={article.body} key={idx} />
    });

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
            {articlesArray}
            </div>
        </div>
    )
}