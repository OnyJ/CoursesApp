import React, { useEffect, useState } from "react";
//
// const Home = () => {
// let [fuckingCourses, setFuckingCourses] = useState([]);
//
// handleSetCourses = (courses) => {
// setFuckingCourses((courses.target))
// };

// const [searchValue, setSearchValue] = useState("");
// const handleChange = (search) => {
// setSearchValue((search.target.value = search.target.value.toLowerCase));
// };

// useEffect(() => {
// async function fetchCourses() {
// const response = await fetch("http://localhost:3000/courses", {
// method: "GET",
// headers: {
// "Content-Type": "application/json",
// },
// });
// const courses = await response.json();
// fuckingCourses = courses;
// console.log(fuckingCourses);
// }
// fetchCourses();
// }, []);
//
// return (
// <>
// {
/* <h1>Welcome</h1> */
// }
// {
/* {fuckingCourses} */
// }

// <ul style={{ listStyle: " none" }}>
// {
/* {fuckingCourses.map(({ id, name }) => ( */
// }
// <li key={id}>{name.name}</li>
// ))}
// {
/* </ul> */
// }
// </>
// );
// };
//
// export default Home;

const Home = () => {
  const [courses, setCourses] = useState([]);

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

  return (
    <>
      <h1>Welcome</h1>
      <p>{courses[0]}</p>
    </>
  );
};

export default Home;
