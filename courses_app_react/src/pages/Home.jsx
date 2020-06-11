import React, { useEffect, useState } from "react";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCourses(response);
      });
  }, []);

  return (
    <>
      <h1>Welcome</h1>
      <ul style={{ listStyle: " none" }}>
        {courses.map((course, i) => {
          return (
            <>
              <li key={i}>{course.name}</li>
              <br />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
