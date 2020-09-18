import React, { useState } from "react";
import classes from "./MyLogo.module.css";
import Layout from "../../UI/Layout/Layout";
import { Fade, Bounce, Zoom } from "react-reveal";
import Jump from "react-reveal";

// const MyLogo = (props) => {
//   return (
//     <Layout {...props}>
//       <Fade bottom duration={1000} distance={"20px"}>
//         <div className={classes.MyLogo}>
//           <Bounce left delay={300} duration={1000} distance={"20px"}>
//             <div className={classes.logo}>
//               <img
//                 src={`${process.env.PUBLIC_URL}/assets/Mylogo.png`}
//                 alt={`${process.env.PUBLIC_URL}/assets/skills/Mylogo.png`}
//               />
//             </div>
//           </Bounce>
//           <Zoom right cascade delay={800} duration={1500} distance={"20px"}>
//             <h1 className={classes.intro}>Reena Panwar</h1>
//           </Zoom>
//         </div>
//       </Fade>
//     </Layout>
//   );
// };
// export default MyLogo;

const MyLogo = (props) => {
  const [jump, setJump] = useState(null);

  const handleEnter = (prevState) => {
    setJump((prevState) => prevState + 1);
  };
  return (
    <Layout {...props}>
      <Fade bottom duration={1000} distance={"20px"}>
        <div className={classes.MyLogo}>
          <Bounce left delay={300} duration={1000} distance={"20px"}>
            <div className={classes.logo}>
              <img
                onClick={handleEnter}
                src={`${process.env.PUBLIC_URL}/assets/Mylogo.png`}
                alt={`${process.env.PUBLIC_URL}/assets/skills/Mylogo.png`}
              />
            </div>
          </Bounce>
          <Jump spy={jump}>
            <Zoom right cascade delay={800} duration={1500} distance={"20px"}>
              <h1 className={classes.intro}>Reena Panwar</h1>
            </Zoom>
          </Jump>
        </div>
      </Fade>
    </Layout>
  );
};
export default MyLogo;
