// import React, { useState } from "react";
// import { Categories } from "../../Data/ExpertiseCategory";

// const Test = () => {
//   const [data, setData] = useState(Categories);
//   const [indi, setIndi] = useState(data[0]);
//   const [selected, setSelected] = useState(false);

//   const filterResult = (catItem) => {
//     const result = Categories.filter((curData) => {
//       return curData.category === catItem;
//     });
//     setData(result);
//   };

//   const resultShow = (id) => {
//     const result = Categories.filter((curData) => {
//       return curData.id === id;
//     });
//     setIndi(result[0]);
//     console.log(result);
//   };

//   return (
//     <div className="container-fluid">
//       <h1>Technologies and Platforms We Work With</h1>
//       <div className="hr-line"></div>
//       <div className="container">
//         <div className="card expertise_card">
//           <div className="row">
//             <div className=" left col-md-3 col-sm-12">
//               <div className="list-group">
//                 {data.map((list) => {
//                   const {
//                     id,
//                     title,
//                     subtitle1,
//                     subtitle2,
//                     front_end,
//                     back_end,
//                   } = list;
//                   return (
//                     <a
//                       className="list-group-item"
//                       key={id}
//                       onClick={() => resultShow(id)}
//                     >
//                       {title}
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="col-md-9 col-sm-12">
//               <div className="col-md-9">
//                 <div className="row">
//                   <div className="col-md-12" key={indi.id}>
//                     <h1>{indi.title}</h1>
//                     <p>Technologies that we used :</p>
//                     <h2>{indi.subtitle1}</h2>
//                     <div className="image__container">
//                       {indi.front_end.map((a) => {
//                         return (
//                           <img className="img" src={a} key={a} alt=""></img>
//                         );
//                       })}
//                     </div>
//                     <h2>{indi.subtitle2}</h2>
//                     <div className="image__container">
//                       {indi.back_end.map((a) => {
//                         return (
//                           <img className="img" src={a} key={a} alt=""></img>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* {indi.map((values) => {
//                     const {
//                       id,
//                       title,
//                       subtitle1,
//                       subtitle2,
//                       front_end,
//                       back_end,
//                     } = values;
//                     return (
//                       <div className="col-md-12" key={id}>
//                         <h1>{indi.title}</h1>
//                         <p>Technologies that we used :</p>
//                         <h2>{subtitle1}</h2>
//                         <div className="image__container">
//                           {front_end.map((a) => {
//                             return (
//                               <img className="img" src={a} key={a} alt=""></img>
//                             );
//                           })}
//                         </div>
//                         <h2>{subtitle2}</h2>
//                         <div className="image__container">
//                           {back_end.map((a) => {
//                             return (
//                               <img className="img" src={a} key={a} alt=""></img>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     );
//                   })} */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;
