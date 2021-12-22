import React from "react";
import style from "../../styles/components/banner.module.scss";
export default function index() {
  const image = `/dummy.png`;
  return (
    <section
      className={style.banner}
      style={{
        background: `linear-gradient(
      90deg,
      rgba(255, 140, 130, 0.8) 0%,
      rgba(94, 124, 208, 0.8) 60%,
      rgba(0, 115, 255, 0.8) 100%
    ),
    url(${image}) no-repeat center center / cover`,
      }}
    >
      <h3>Terms of use</h3>
    </section>
  );
}
