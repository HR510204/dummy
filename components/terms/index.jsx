import React from "react";
import style from "../../styles/components/terms.module.scss";
export default function index(props) {
  const { paragraph1, paragraph2, paragraph3, paragraph4 } = props.data;
  return (
    <section className={style.term}>
      <div className={style.content}>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <div dangerouslySetInnerHTML={{ __html: paragraph3 }} />
        <p>{paragraph4}</p>
      </div>
    </section>
  );
}
