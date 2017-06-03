
// import React from 'react'
// var fetch = require('react-fetch');

// var data = new FormData();
// data.append( "json", JSON.stringify( payload ) );

// fetch("http://35.154.41.72:8888/api/GetSelectMerchants",
// {
//     method: "POST",
//     // body: data
// })
// .then(function(res){
//   // return res.json();
//   console.log(res.json());
// })
// .then(function(data){ alert( JSON.stringify( data ) ) })

require('isomorphic-fetch');
require('es6-promise').polyfill();

 // var url = 'http://localhost:3000/api/data'
 // var url = 'http://35.154.41.72:8888/api/GetSelectMerchants'

 componentDidMount() {
   var that = this;
   var url = 'http://35.154.41.72:8888/api/GetSelectMerchants'
 
   fetch(url)
   .then(function(response) {
     if (response.status >= 400) {
       throw new Error("Bad response from server");
     }
     return response.json();
   })
   .then(function(data) {
     that.setState({ person: data.person });
   });
 }

  const personLoc = Object.keys(this.state.person.loc).map((content, idx) => {
      const items = this.state.person.loc[content].map((item, i) => (
          <p key={i}>{item.text}</p>
      ))

      return <div key={idx}>{items}</div>
  })

  export default function PersonLocation() {
      return (
          <div className="bio__location">
              {personLoc}
          </div>
      )
  }
