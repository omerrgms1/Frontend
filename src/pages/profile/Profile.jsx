import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import axios from "axios";
import { useEffect } from "react";


const ProfilePage = () => {
  const location = useLocation();
  const { state } = location;
  const { selectedRooms, storedHotelId } = state;
  const { data, loading, error } = useFetch(`api/hotels/room/${storedHotelId}`)



  // console.log(data[0].roomNumbers[0].unavailableDAtes);

  // const { data, loading, error } = useFetch(`hotels/rooms/${selectedRooms}`)
  console.log("Selected Rooms:", selectedRooms); //localhost:5252/api/rooms/cancel/66453f1723f6f437a405bde1 rezervasyon iptali bunun ile 
  console.log("kontrol tayming", data);
  // console.log(data(0));
  console.log(storedHotelId);
  // console.log(storedDates);
  // console.log("usefetchtengelendata",data);
  // console.log(data[0].roomNumbers[0].unavailableDAtes);
  // console.log(data[0]._id);

  // const roomId = data[0]._id
  // const Dates = data[0].roomNumbers[0].unavailableDAtes

  // elimizde silieneck olan tarihler unavailableDAtes içeriğinde 

  // silmek için axios.put a localhost:5252/api/rooms/data[0]._id

  // bu endpointe içeriğinde "dates" = [unavailableDAtes] 

  //yolla 

  // const handleClick = () => {
  //   if (loading || !data) {
  //     return;
  //   }

  //   const roomId = data[0]._id;
  //   const Dates = data[0].roomNumbers[0].unavailableDAtes;

  //   console.log(roomId);
  //   console.log(Dates);

  //   // API'ye PUT isteği gönder
  //   axios.put(`http://localhost:5252/api/rooms/${roomId}`, {
  //     dates: Dates
  //   }, {
  //     headers: {
  //       'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDNmMWYyNzhlNmI4ZDFkZmNmOTdlNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNTg1MzE4OX0.zRPxrN0J17XCCrdZL4x7TaZiqdKEjYrXZkzFTuqoo10`
  //     }
  //   })
  //     .then(response => {
  //       console.log('Güncelleme başarılı:', response.data);
  //       // Başarılı işlem sonrası ek işlemler yapılabilir
  //     })
  //     .catch(error => {
  //       console.error('Güncelleme hatası:', error);
  //       // Hata durumunda gerekli işlemler yapılabilir
  //     });
  // };

  const handleClick = () => {
    // Token'ı localStorage'dan al
    const token = localStorage.getItem("token");
    
    if (loading || !data || !token) {
        return;
    }

    const roomId = data[0]._id;
    const Dates = data[0].roomNumbers[0].unavailableDAtes;

    // API'ye PUT isteği gönder
    axios.put(`https://bungalovbooking-api.onrender.com/api/rooms/${roomId}`, {
        dates: Dates
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        console.log('Güncelleme başarılı:', response.data);
        // Başarılı işlem sonrası ek işlemler yapılabilir
    })
    .catch(error => {
        console.error('Güncelleme hatası:', error);
        // Hata durumunda gerekli işlemler yapılabilir
    });
};


  //authorized hatası sebebi ile rezervasyon iptali yapılamıyor.***

  // const [reservations, setReservations] = useState([]);

  //   useEffect(() => {
  //       // Rezervasyonları getirmek için API isteği yap
  //       const fetchReservations = async () => {
  //           try {
  //               const response = await axios.get("/reservations");
  //               setReservations(response.data);
  //           } catch (error) {
  //               console.error("Error fetching reservations:", error);
  //           }
  //       };
  //       fetchReservations();
  //   }, []);

  // console.log(data[0]);
  //devam edilecek güncel hali gpt den alınmadı onu kontrol et


  // local storage deki otel id yi al buna göre axios ile otel adı nı getir
  //sonrasında room id ile axiostan oda adını ve getunavailbe dates getir 
  //iptal et butonuna tıklanıldığında unavailabledates içerisindeki tarihleri bir dizi oluşturup aralarını virgül ile ayıran bir fonksiyondan çekerek axios.put => cansel/room/oda idsi endopintine gönderererek dizi oluşturduğumuz daatesleri buraya "dates":[olarak gönder]
  //sonrasında ekrana rezervasyon iptal edildi alerti verdirip ana sayfaya yönlendir 


  // useEffect(() => {
  //   getHotel();
  // }, [])

  // const getHotel = async () => {
  //   try {
  //     const response = await axios.get(`/rooms/${storedHotelId}`)
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log('otel gelirken hata',error);
  //   }
  // } 

  return (
    <div>
      <button onClick={handleClick}>İptal Et</button>
    </div>
  );
};

export default ProfilePage;
