import React from "react";

import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Profile</h1>
      <button onClick={() => navigate("/page1")}>페이지 1이동</button>
    </>
  );
}
