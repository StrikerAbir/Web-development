import React, { useEffect, useState } from "react";
import { addToDB, getStoredData } from "../../utitlites/localStorage";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Side from "../Side/Side";
import "./Body.css";

const Body = () => {
    const [sports, setSports] = useState([]);
    const [adds, setAdds] = useState([]);
  useEffect(() => {
    fetch("info.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);
    
    useEffect(() => {
      const storedData = getStoredData("sports");
      const savedSports = [];
      for (const id in storedData) {
        const addedSport = sports.find((sport) => sport.idSport === id);
        if (addedSport) {
          addedSport.clickTimes = storedData[id];
          savedSports.push(addedSport);
        }
      }
      setAdds(savedSports);
    }, [sports]);
    const clickHandler = (addedSport) => {
        let newAdd = [];
        
        const exist = adds.find((sport) => sport.idSport === addedSport.idSport);
        if (!exist) {
          addedSport.clickTimes = 1;
          newAdd = [...adds, addedSport];
        } else {
          const rest = adds.filter(
            (sport) => sport.idSport !== addedSport.idSport
          );
          exist.clickTimes += 1;
          newAdd = [...rest, exist];
        }
        setAdds(newAdd);
        addToDB(addedSport.idSport);
}
    
  return (
    <div className="body-container">
      <div className="head-sports">
        <Header></Header>
        <div className="sports-container">
          {sports.map((sport) => (
            <Card
              sport={sport}
              key={sport.idSport}
              clickHandler={clickHandler}
            ></Card>
          ))}
        </div>
      </div>
      <div className="side-container">
        <Side adds={adds}></Side>
      </div>
    </div>
  );
};

export default Body;
