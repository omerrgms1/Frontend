import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [searchKey, setSearchKey] = useState('');
  const [error, setError] = useState('');

  const { data, loading, error: fetchError, reFetch } = useFetch(`api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)

  useEffect(() => {
    reFetch();
  }, [destination, dates, options, min, max]);

  useEffect(() => {
    // Herhangi bir giriş alanında değişiklik olduğunda aramayı yeniden başlat
    const timer = setTimeout(() => {
      setSearchKey(Math.random().toString(36).substr(2, 9));
    }, 500); // Kullanıcı giriş yapmayı durdurduğunda 500ms bekleyin
    return () => clearTimeout(timer);
  }, [destination, dates, options, min, max]);

  const handleChangeDestination = (event) => {
    const { value } = event.target;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setDestination(capitalizedValue);
  };

  const handleChangeDates = (newDates) => {
    setDates([newDates.selection]);
  };

  const handleChangeOptions = (name, value) => {
    setOptions({ ...options, [name]: value });
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Araştır</h1>
            <div className="lsItem">
              <label>Şehir</label>
              <input placeholder={destination} type="text" value={destination} onChange={handleChangeDestination} />
            </div>
            <div className="lsItem">
              <label>Seçilen Tarih Aralığınız</label>
              <span className="readonly-date" onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={handleChangeDates}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Tercihler</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    En Düşük <small>gecelik fiyat</small>
                  </span>
                  <input type="number" value={min || ''} onChange={(e) => setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    En Yüksek <small>gecelik fiyat</small>
                  </span>
                  <input type="number" value={max || ''} onChange={(e) => setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Yetişkin</span>
                  <input
                    type="number"
                    min={1}
                    value={options.adult}
                    onChange={(e) => handleChangeOptions('adult', e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Çocuk</span>
                  <input
                    type="number"
                    min={0}
                    value={options.children}
                    onChange={(e) => handleChangeOptions('children', e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Arsadaki Yerleşke Sayısı</span>
                  <input
                    type="number"
                    min={1}
                    value={options.room}
                    onChange={(e) => handleChangeOptions('room', e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
              </div>
            </div>
            {error && <p className="error">{error}</p>}
          </div>
          <div className="listResult">
            {loading ? "Loading" :
              <>
                {data.map(item => (
                  <SearchItem item={item} key={item._id + searchKey} />
                ))}
              </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
