import React, { useState } from "react";
import "./App.css";
import Card from "./Component/card";
import Navbar from "./Component/navbar";
import axios from "axios";
function App() {
  const [userData, setUserData] = useState([]);
  const [click, setClick] = useState(false);
  const [gif, setGif] = useState(false);
  const onShow = () => {
    setClick(!click);
    setGif(!gif);
    //Used setTimeout  to mock server response delay so that loading screen could be shown
    setTimeout(() => {
      axios.get("https://reqres.in/api/users?page=1").then((fetchedData) => {
        //storing fetched data in userdata
        setUserData(fetchedData.data.data);
        setGif(gif);
      });
    }, 4000);
  };

  return (
    <div className="main">
      <div className="Nav">
        <Navbar onShow={onShow} click={click} />
      </div>
      {/* if show button is clicked  it will render cards  component */}
      {click ? (
        <div>
          <div className="Card">
            {userData.map((datas) => (
              <Card
                userData={userData}
                key={datas.id}
                email={datas.email}
                fname={datas.first_name}
                lname={datas.last_name}
                avImage={datas.avatar}
              />
            ))}
          </div>
        </div>
      ) : null}
      {/* render gif */}
      {gif ? (
        <img
          className="gif"
          src="https://i.gifer.com/yy3.gif"
          width="500px"
          height="500"
          alt="ok"
        />
      ) : null}
    </div>
  );
}

export default App;
