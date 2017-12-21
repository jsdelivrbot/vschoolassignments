import React from "react";
import CommentBox from "./CommentBox";


export default function Presentational(props){
      return (
      <div>
          <div className="box header">Header
            <div className="box1">
              <h1>Merry Christmas</h1>
              <h3>from</h3>
            </div>
          </div>


          <div class="box2">Santa's Sweatshop</div>


          <div class="box content">Content</div>
                <div className="box3">
                <CommentBox url='http://localhost:3001/api/comments'
                pollInterval={2000}/>
                </div>


            <div class="box sidebar">Sidebar</div>

            <div class="box4">Ribbon</div>

            <div className="box5">Footer
              <h2 className='text-center'>&COPY;
                Santa Claus Christmas Enterprises, LTD.</h2>
            </div>
      </div>
  )
}
