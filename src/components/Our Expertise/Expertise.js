import React, { useContext, useState } from "react";
import "./Expertise.css";
import { Categories } from "../../Data/ExpertiseCategory";
import { useDrag, useGesture } from "@use-gesture/react";
import { useSpring, animated } from "react-spring";
import { ThemeContext } from "../../context";

const Expertise = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [data, setData] = useState(Categories);
  const [indi, setIndi] = useState(data[0]);
  const [selected, setSelected] = useState(data[0].id);

  // const cardSlide = useSpring({ x: 0, y: 0 });
  // const bindCard = useDrag((params) => {
  //   cardSlide.x.set(params.offset[0]);
  //   cardSlide.y.set(params.offset[1]);
  // });

  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  const resultShow = (id) => {
    const result = Categories.filter((curData) => {
      return curData.id === id;
    });
    setIndi(result[0]);
    setSelected(result[0].id);
    console.log(result);
  };

  return (
    <>
      <div className="container-fluid">
        {/* <h1>Technologies and Platforms We Work With</h1> */}
        <div className="container">
          <h1 className="expertise__Title">
            Technologies and Platforms We Work With
          </h1>
          <div className="hr-line"></div>
          <div className="card expertise_card">
            <div className="row">
              <div className=" left col-md-3 col-sm-3">
                <div className="list-group">
                  {data.map((list) => {
                    const { id, title } = list;
                    return (
                      <a
                        className={`list-group-item ${
                          id === selected ? "vr-line" : ""
                        } `}
                        key={id}
                        onClick={() => resultShow(id)}
                      >
                        {title}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className=" right col-md-9 col-sm-9">
                {/* <div className="col-md-9"> */}
                <div className="row">
                  <div className="col-md-12" key={indi.id}>
                    <h1 style={{ color: darkMode && "#333" }}>{indi.title}</h1>
                    <div className="hr-line"></div>
                    <p
                      style={{ color: darkMode && "#333" }}
                      className="right__Paragraph"
                    >
                      Technologies that we used :
                    </p>
                    <h3 style={{ color: darkMode && "#333" }}>
                      {indi.subtitle2}
                    </h3>
                    <div className="image__container">
                      {indi.front_end.map((a) => {
                        return (
                          <img className="img" src={a} key={a} alt=""></img>
                        );
                      })}
                    </div>
                    <h3 style={{ color: darkMode && "#333" }}>
                      {indi.subtitle1}
                    </h3>
                    <div className="image__container">
                      {indi.back_end.map((a) => {
                        return (
                          <img className="img" src={a} key={a} alt=""></img>
                        );
                      })}
                    </div>
                    <h3 style={{ color: darkMode && "#333" }}>
                      {indi.subtitle3}
                    </h3>
                    <div className="image__container">
                      {indi.others.map((a) => {
                        return (
                          <img className="img" src={a} key={a} alt=""></img>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    // </div>
  );
};

export default Expertise;
