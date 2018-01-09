import React from "react";
import CommentBox from "./CommentBox";

export default function Presentational(props){
      return (
      <div>
          <div className="box header">
              <h1>Merry Christmas</h1>
              <h6 id="from">from</h6>
              <img id="imga" src="/images/1922007.gif" />
              <img id="imgb" src="/images/diamondmullions.png" />
              <img id="imgc" src="/images/diamondmullions.png" />
          </div>
          <div class="subHeader">Santa's Sweatshop</div>
          <div class="box content">
                <CommentBox url='http://localhost:3001/api/comments'
                pollInterval={2000}/>
          </div>
          <div class="box sidebar"></div>
          <div class="box ribbon"> </div>
          <div className="box footer">
              <h3 className='text-center'>
                &copy; MMXVII North Pole Christmas Industries, LTD.</h3>
          </div>
      </div>
  )
}
