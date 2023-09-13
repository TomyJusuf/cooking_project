import { useState, useEffect } from 'react';
const Main = () => {
  const [serverMessage, setServerMessage] = useState('');
  const [materialy, setMaterialy] = useState([]);
  useEffect(() => {
    pridaniMaterialu();
  }, []);

  const pridaniMaterialu = async () => {
    setServerMessage('Loading data');
    const data = await fetch('http://localhost:5000/get-materials');
    const finalData = await data.json();
    const { msg, document } = finalData;
    setMaterialy(document);
    console.log(finalData);
    setServerMessage(msg);
  };
  return (
    <div>
      {materialy.map((material, index) => {
        return <div key={index}>{material.name}</div>;
      })}
      {/* <div className="btn" onClick={pridaniMaterialu}>
        Pridej material
      </div> */}
      <p>{serverMessage}</p>
    </div>
  );
};
export default Main;
