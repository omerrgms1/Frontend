import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Tatil Rezervasyonunu Erteleme!</h1>
      <span className="mailDesc">Şikayet ve Önerin İçin Bizimle İletişime Geçebilirsin</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Mail Adresiniz" />
        <input type="text" placeholder="Şikayet/Öneriniz" />
        <button>Gönder</button>
      </div>
    </div>
  )
}

export default MailList