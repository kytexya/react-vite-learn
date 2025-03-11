// () => {}
// component = html + css + js

import './style.css';

  const MyComponent = () => {
    const kyte = "abcdefghjk";
    return (
        <>
            
            <div>{kyte} abcdefgh </div>
            <div>{console.log("kyte")}</div>
            <div className='child'
            style={
                {borderRadius:"10px"}}
            >child</div>
        </>
    );
  }


  export default MyComponent;
