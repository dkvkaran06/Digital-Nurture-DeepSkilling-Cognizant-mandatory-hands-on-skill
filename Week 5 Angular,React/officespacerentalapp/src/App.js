import './App.css';
import office from './office.jpg';

function App() {

  const element = "Office Space";

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: office
    },
    {
      Name: "Regus",
      Rent: 70000,
      Address: "Bangalore",
      Image: office
    },
    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Hyderabad",
      Image: office
    },
    {
      Name: "SmartWorks",
      Rent: 90000,
      Address: "Mumbai",
      Image: office
    }
  ];

  return (
    <div className="App">

      <h1>{element}, at Affordable Range</h1>

      {
        officeList.map((ItemName, index) => {

          let colors = [];

          if (ItemName.Rent <= 60000) {
            colors.push("textRed");
          } else {
            colors.push("textGreen");
          }

          return (
            <div key={index}>

              <img
                src={ItemName.Image}
                width="25%"
                height="25%"
                alt="Office Space"
              />

              <h2>Name: {ItemName.Name}</h2>

              <h3 className={colors.join(" ")}>
                Rent: Rs. {ItemName.Rent}
              </h3>

              <h3>Address: {ItemName.Address}</h3>

              <hr />

            </div>
          );
        })
      }

    </div>
  );
}

export default App;