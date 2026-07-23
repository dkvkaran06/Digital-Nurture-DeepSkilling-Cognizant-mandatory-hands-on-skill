import React from "react";
import "./App.css";
import { books, blogs, courses } from "./Data";

function App() {

  // Conditional Rendering using Element Variable
  let content;

  if (blogs.length > 0) {
    content = (
      <ul>
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
  <h3>{blog.title}</h3>
  <h4>{blog.author}</h4>
  <p>{blog.desc}</p>
</div>
        ))}
      </ul>
    );
  } else {
    content = <p>No Blogs Available</p>;
  }

  // Conditional Rendering using Ternary Operator
  const bookdet =
    books.length > 0 ? (
      <ul>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </ul>
    ) : (
      <p>No Books Available</p>
    );

  // Conditional Rendering using &&
  const coursedet =
    courses.length > 0 && (
      <ul>
        {courses.map((course) => (
          <div key={course.id}>
            <h3>{course.cname}</h3>
            <h4>{course.date}</h4>
          </div>
        ))}
      </ul>
    );

  return (
    <div className="container">

      <div className="column">
        <h1>Course Details</h1>
        {coursedet}
      </div>

      <div className="column">
        <h1>Book Details</h1>
        {bookdet}
      </div>

      <div className="column">
        <h1>Blog Details</h1>
        {content}
      </div>

    </div>
  );
}

export default App;