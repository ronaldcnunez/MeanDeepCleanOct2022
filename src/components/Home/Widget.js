import React from "react";
import InnerHTML from 'dangerously-set-html-content'






function Widget() {

const html = `
    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    <div class="elfsight-app-77aa2f63-fc92-4d64-b9de-1b0ca1464ef9"></div> `

  return (



    <InnerHTML html={html}  className="img-fluid"              
        style={{ 
        alt:'home pic',
        width:'500px',
        float: 'left',
        height:'450px',
        position:'relative'
        }} 
    />
  );
}

export default Widget;

