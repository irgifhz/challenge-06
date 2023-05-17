import iconComplete from '../images/img/icon_complete.png'
import iconPrice from '../images/img/icon_price.png'
import icon24hrs from '../images/img/icon_24hrs.png'
import iconProfessional from '../images/img/icon_professional.png'

const WhyUs = () => {
  return (
    <section className="global-container" id="why-us">
      <h2 className="title-why-us">Why Us?</h2>
      <p className="title-why-us">Mengapa harus pilih Binar Car Rental?</p>
      <div className="row">
        <div className="col-md">
          <div className="card mb-3">
            <div className="card-body">
              <img src={iconComplete} alt="icon_complete" />
              <h5 className="card-title">Harga Murah</h5>
              <p className="card-text">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card mb-3">
            <div className="card-body">
              <img src={iconPrice} alt="" />
              <h5 className="card-title">Harga Murah</h5>
              <p className="card-text">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card mb-3">
            <div className="card-body">
              <img src={icon24hrs} alt="" />
              <h5 className="card-title">Layanan 24 Jam</h5>
              <p className="card-text">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card mb-3">
            <div className="card-body">
              <img src={iconProfessional} alt="" />
              <h5 className="card-title">Sopir Profesial</h5>
              <p className="card-text">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
