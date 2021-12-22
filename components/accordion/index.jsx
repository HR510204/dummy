import React, { useState } from "react";
import style from "../../styles/components/accordion.module.scss";
export default function index(props) {
  //   const initialAccordianState = {};

  //   const [accordian, setAccordian] = useState(initialAccordianState);
  //   const [dropdownValues, setDropdownvalues] = useState([]);
  //   const handleAccordion = (title) => {
  //     let dropdownValuesArray = [];
  //     let filteredDropdownValuesArray =
  //       props.data[0].field_footer_menu_link.filter(
  //         (item) => item.field_parent_menu_link == title
  //       )[0];
  //     filteredDropdownValuesArray.field_child_menu_link.map((item) => {
  //       dropdownValuesArray.push(item.title);
  //     });
  //     console.log("dropdownValuesArray", dropdownValuesArray);

  //     setDropdownvalues([...dropdownValuesArray]);
  //     setAccordian({ initialAccordianState, [title]: !accordian[title] });
  //   };

  const [open, setOpen] = useState(false);
  const handleAccordion = () => {
    setOpen(!open);
  };
  return (
    <section className={style.accordion}>
      <div className={style.head}>
        <h3>Copyright Restrictions/Use of Content</h3>
        <span onClick={() => handleAccordion()}>
          <img src={!open ? "/minus.svg" : "/plusBlue.svg"} />
        </span>
      </div>
      <div className={style.content}>
        {!open ? (
          <p>
            The term "Graphic Era Hospital" is a trademark and the Graphic Era
            Hospital logo and all related product and service names, designs and
            slogans are Graphic Era Hospital trademarks. You may not use such
            marks without Graphic Era Hospital's prior written permission. All
            other names, brands and marks are used for identification purposes
            only and may be trademarks or registered trademarks of their
            respective owners.
          </p>
        ) : null}
      </div>
    </section>
  );
}
