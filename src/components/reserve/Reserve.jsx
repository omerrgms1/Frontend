import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

import "../../components/reserve/reserve.css"
import useFetch from "../../hooks/useFetch"
import { useContext, useState } from "react"
import { SearchContext } from "../../context/SearchContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Reserve = ({ setOpen, hotelId }) => {
    const [selectedRooms, setSelectedRooms] = useState([])

    const { data, loading, error } = useFetch(`api/hotels/room/${hotelId}`)
    console.log(data);

    console.log(hotelId);
    localStorage.setItem('hotelId', hotelId);
    // console.log(data[0].roomNumbers[0].unavailableDAtes);
    const storedHotelId = localStorage.getItem('hotelId');
    const { dates } = useContext(SearchContext)

    const navigate = useNavigate()

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Eğer data yüklenmediyse veya hala loading durumundaysa boş bir dizi döndür
        if (loading || !data) {
            return [];
        }

        let date = new Date(start.getTime());
        let list = [];

        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return list;
    };
    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate)

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDAtes.some(date =>
            // backenddeki hata sebebi ile a => A yapıyoruz backend düzenlendikten sonra buradaki harf hatası düzeltilecek
            alldates.includes(new Date(date).getTime())
        );
        return !isFound;
    }

    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectedRooms(
            checked
                ? [...selectedRooms, value]
                : selectedRooms.filter((item) => item !== value))
    }
    console.log(selectedRooms);

    // console.log(data[0]._id);
    // console.log(data[0].roomNumbers[0].number);
    // console.log(data[0].roomNumbers[0].unavailableDAtes);
    // const storedDates = data[0].roomNumbers[0].unavailableDAtes
    // console.log(storedDates);

    const handleClick = async () => {
        try {
            const reservations = await Promise.all(selectedRooms.map(async (roomId) => {
                const res = axios.put(`/rooms/availability/${roomId}`, { dates: alldates });
                return res.data;
            }));
            setOpen(false);
            // navigate("/profile", { state: { selectedRooms, reservations, storedHotelId } }); //storedDates
            navigate("/");
            alert("Rezervasyon başarıyla tamamlandı!");
        } catch (err) {
            console.error("Reservation error:", err);
        }
    };
    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <span>Yerleşkeni seç:</span>


                {data.map(item => (
                    <div className="rItem" key={item._id}>
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">En Fazla kişi sayısı : <b> {item.maxPeople} </b>
                            </div>
                            <div className="rPrice">{item.price}TL</div>
                        </div>
                        <div className="rSelectRooms">

                            {item.roomNumbers.map(roomNumber => (
                                <div className="room" key={roomNumber._id}>
                                    <label>{roomNumber.number}</label>
                                    <input type='checkbox' value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className="rButton">Şimdi Kirala</button>
            </div>
        </div>
    )
}

export default Reserve