import React, { useState, useEffect } from "react";
import { fetchData } from "../data";

const RenderPageChild = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      {data.children ? (
        <div
          key={data.id}
          onClick={() => {
            e.stoppropagation();
            setIsOpen(!isOpen);
          }}
        >
          <p>
            {isOpen ? <span> ▼ </span> : <span> ▶ </span>}
            {data.name}
          </p>
          {isOpen && <RenderPageTree data={data.children} />}
        </div>
      ) : (
        <div key={data.id}> • {data.name} </div>
      )}
    </div>
  );
};

const RenderPageTree = ({ data }) => {
  return (
    <div style={{ marginLeft: "15px" }}>
      {data.map((el, index) => {
        return <RenderPageChild data={el} />;
      })}
    </div>
  );
};

function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const folderData = await fetchData();
      setData(folderData);
    };

    loadData();
  }, []);

  return (
    <React.Fragment>{data && <RenderPageTree data={data} />}</React.Fragment>
  );
}

export default Home;
