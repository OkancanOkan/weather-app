import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  // let keyxx = "45aab7374feaeb7f2691a4412255fd60";
  let lang = navigator.language.split("-")[0];

  const [key, setKey] = useState("");

  const searchLocation = (event) => {
    let location = event.target.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&lang=${lang}&units=metric`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        return setError(error.code);
      });
  };

  useEffect(() => {
    if (sessionStorage.getItem("apiKey")) {
      setKey(sessionStorage.getItem("apiKey"));
    }
  }, [key]);

  const keyStorageAdd = (event) => {
    if (event.key === "Enter") {
      setKey(event.target.value);
      sessionStorage.setItem("apiKey", event.target.value);
    }
  };

  return (
    <div className="app">
      {key.length == "" && (
        <div className="search">
          <input type="text" onKeyPress={keyStorageAdd} />
        </div>
      )}

      {key.length > 0 && (
        <div>
          <div className="search">
            <select name="il" onChange={searchLocation}>
              <option value="" selected hidden>
                İl Seçiniz
              </option>
              <option value="İstanbul">İstanbul</option>
              <option value="Ankara">Ankara</option>
              <option value="İzmir">İzmir</option>
              <option value="Adana">Adana</option>
              <option value="Adıyaman">Adıyaman</option>
              <option value="Afyonkarahisar">Afyonkarahisar</option>
              <option value="Ağrı">Ağrı</option>
              <option value="Aksaray">Aksaray</option>
              <option value="Amasya">Amasya</option>
              <option value="Antalya">Antalya</option>
              <option value="Ardahan">Ardahan</option>
              <option value="Artvin">Artvin</option>
              <option value="Aydın">Aydın</option>
              <option value="Balıkesir">Balıkesir</option>
              <option value="Bartın">Bartın</option>
              <option value="Batman">Batman</option>
              <option value="Bayburt">Bayburt</option>
              <option value="Bilecik">Bilecik</option>
              <option value="Bingöl">Bingöl</option>
              <option value="Bitlis">Bitlis</option>
              <option value="Bolu">Bolu</option>
              <option value="Burdur">Burdur</option>
              <option value="Bursa">Bursa</option>
              <option value="Çanakkale">Çanakkale</option>
              <option value="Çankırı">Çankırı</option>
              <option value="Çorum">Çorum</option>
              <option value="Denizli">Denizli</option>
              <option value="Diyarbakır">Diyarbakır</option>
              <option value="Düzce">Düzce</option>
              <option value="Edirne">Edirne</option>
              <option value="Elazığ">Elazığ</option>
              <option value="Erzincan">Erzincan</option>
              <option value="Erzurum">Erzurum</option>
              <option value="Eskişehir">Eskişehir</option>
              <option value="Gaziantep">Gaziantep</option>
              <option value="Giresun">Giresun</option>
              <option value="Gümüşhane">Gümüşhane</option>
              <option value="Hakkâri">Hakkâri</option>
              <option value="Hatay">Hatay</option>
              <option value="Iğdır">Iğdır</option>
              <option value="Isparta">Isparta</option>
              <option value="Kahramanmaraş">Kahramanmaraş</option>
              <option value="Karabük">Karabük</option>
              <option value="Karaman">Karaman</option>
              <option value="Kars">Kars</option>
              <option value="Kastamonu">Kastamonu</option>
              <option value="Kayseri">Kayseri</option>
              <option value="Kırıkkale">Kırıkkale</option>
              <option value="Kırklareli">Kırklareli</option>
              <option value="Kırşehir">Kırşehir</option>
              <option value="Kilis">Kilis</option>
              <option value="Kocaeli">Kocaeli</option>
              <option value="Konya">Konya</option>
              <option value="Kütahya">Kütahya</option>
              <option value="Malatya">Malatya</option>
              <option value="Manisa">Manisa</option>
              <option value="Mardin">Mardin</option>
              <option value="Mersin">Mersin</option>
              <option value="Muğla">Muğla</option>
              <option value="Muş">Muş</option>
              <option value="Nevşehir">Nevşehir</option>
              <option value="Niğde">Niğde</option>
              <option value="Ordu">Ordu</option>
              <option value="Osmaniye">Osmaniye</option>
              <option value="Rize">Rize</option>
              <option value="Sakarya">Sakarya</option>
              <option value="Samsun">Samsun</option>
              <option value="Siirt">Siirt</option>
              <option value="Sinop">Sinop</option>
              <option value="Sivas">Sivas</option>
              <option value="Şırnak">Şırnak</option>
              <option value="Tekirdağ">Tekirdağ</option>
              <option value="Tokat">Tokat</option>
              <option value="Trabzon">Trabzon</option>
              <option value="Tunceli">Tunceli</option>
              <option value="Şanlıurfa">Şanlıurfa</option>
              <option value="Uşak">Uşak</option>
              <option value="Van">Van</option>
              <option value="Yalova">Yalova</option>
              <option value="Yozgat">Yozgat</option>
              <option value="Zonguldak">Zonguldak</option>
            </select>
          </div>
          {error &&(
              <div className="search"> {error === 'ERR_BAD_REQUEST' ? 'apiKey hatalı...' : 'Internet problemı var...'} {error}</div>
            )}
          <div className="container">
            <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed(1)} °C </h1> : null}
              </div>
              <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>
            
            {data.name !== undefined && (
              <div className="bottom">
                <div className="feels">
                  {data.main ? (
                    <p className="bold">{data.main.feels_like.toFixed(1)}°C</p>
                  ) : null}
                  <p>Feels Like</p>
                </div>
                <div className="humidity">
                  {data.main ? (
                    <p className="bold">{data.main.humidity}%</p>
                  ) : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  {data.wind ? (
                    <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                  ) : null}
                  <p>Wind Speed</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
