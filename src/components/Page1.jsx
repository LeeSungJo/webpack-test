import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page1() {
  const navigate = useNavigate();
  return (
    <>
      <div>여긴 1페이지입니다.</div>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
}
