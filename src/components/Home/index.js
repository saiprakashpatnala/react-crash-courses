import { useState, useEffect } from "react";
import CourseItem from "../CourseItem";

const Home = () => {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(false);
      try {
        let response = await fetch("https://apis.ccbp.in/te/courses");
        let data = await response.json();

        setArr(data.courses);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  console.log(arr.courses);

  return (
    <div>
      {loading === true ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {arr.map((i) => (
            <CourseItem key={i.id} data={i} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
