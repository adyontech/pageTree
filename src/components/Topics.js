import React, { useState, useEffect } from "react";

function About({ match }) {
  useEffect(() => {
    // console.log(match.params.id);
  }, []);

  return <div className="commentBody">render about</div>;
}
export default About;
