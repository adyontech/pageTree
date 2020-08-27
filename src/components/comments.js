// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const fetchGetOption = {
//   method: "GET",

//   headers: {
//     "Content-Type": "application/json",
//   },

//   credentials: "include",
// };
// useEffect(() => {
//   async function fetchPostAPI() {
//     const url = `https://jsonplaceholder.typicode.com/posts`;
//     const response = await fetch(url, fetchGetOption);
//     const res = await response.json();
//     console.log(res);
//     setPostData(res);
//     setRefAllData(res);
//   }
//   fetchPostAPI();
// }, []);

// const changeInput = (e) => {
//   e.persist();
//   const input = e.target.value;
//   console.log(input);
//   const newFilteredData = refAllData.filter((el) => el.title.includes(input));
//   setPostData(newFilteredData);
// };

/* <input
  placeholder="search"
  className="mainSearchBar"
  val={inputVal}
  onChange={changeInput}
  />
  
<Link to={`/comments/${el.id}`}>
    <div className="post">
    <h4 className="postTitle">{el.title}</h4>
    <div className="body">{el.body}</div>
    </div>
</Link> */
