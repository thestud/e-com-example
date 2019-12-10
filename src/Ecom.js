import React from 'react'



class Ecom extends React.Component {
   
  addToCart = (itemId) => {
    var data = new FormData();

    fetch("http://localhost:4000/cart/" + itemId,
      {
        method: "POST",
        body: data
      })
      .then(function(res){ return res.json(); })
      // .then(function(data){ alert( JSON.stringify( data ) ) })

  };

  render() {
    return (
      <div>
        <center><h1>Search Result</h1></center>
        {this.props.items.map((item) => (
          <div className="resultItem" key={item.ID}>
            <div className="card-button" >
              <button onClick={this.addToCart(item.ID)} className="itemButton">{item.Name}</button>
            </div>
          </div>
        ))}
      </div>
      );
   }


}


export default Ecom