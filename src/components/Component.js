import React, { useState } from "react";
import { css } from "@emotion/react";
import {ClipLoader, RingLoader, ClockLoader} from "react-spinners";

const override = css`
  
  display: block;
  margin-top:50px;
  margin-left:50%;
  ${'' /* border-color:blue */}
`;


const Component = () => {
  let [loading, setLoading] = useState(true);
  return (
    <div>
    
       <ClipLoader color="red" loading={loading} css={override} size={50} />
       <RingLoader color="blue" loading={loading} css={override} size={50} />
       <ClockLoader
 color="blue" loading={loading} css={override} size={50} />
    

    </div>
  );
};

export default Component;
