import React from 'react';
import {withRouter, Link, history} from 'react-router-dom'


const sidebar = [
  "About Tasweiq",
  "Vision and Mission",
  "Core Values",
  "What We Do",
  "CEO Message",
  "Our Consultants",
];

function BreadCrumbComp( {history}){

  function goto(vars){
  history.push(vars)
  console.log(history.push(vars))
}
    const arrlist =sidebar.map((list, index) => (
        <small key={index}
          className="sideTabIcons"
          onClick={() => goto( list.replace(/ /g, ""))}
        >
          {list} 
          {console.log(list.replace(/ /g, ""))}
          </small>
      ))
        return(
            <div className="bread">
                <ul>
                    {arrlist}
                </ul>
                
            </div>
            
        )
}

function TopCrumb(arr){
    const arrlist =arr.map((list,index) => ( !index === index.length()?

        <Link 
          to={"AboutUs/" + list.replace(/ /g, "")}
          className="sideTabIcons"
          onClick={() => console.log("AboutUs/" + list.replace(/ /g, ""))}
        >
          <small>{list + " " + ">" } </small>
        </Link> : 
        <Link
        to={"AboutUs/" + list.replace(/ /g, "")}
        className="sideTabIcons"
        onClick={() => console.log("AboutUs/" + list.replace(/ /g, ""))}
      >
        <small>{list } </small>
      </Link>
      ))
        return(
            <div className="bread2">
                <ul>
                    {arrlist}
                </ul>
            </div>
        )

}

function BreadCrumbComp2(arr){
  const arrlist =arr.map((list) => (
      <Link
        to={"/" + list.replace(/ /g, "")}
        className="sideTabIcons"
       
      >
        <small>{list} </small>
      </Link>
    ))
      return(
          <div className="bread">
              <ul>
                  {arrlist}
              </ul>
          </div>
      )
}

export default withRouter( BreadCrumbComp);