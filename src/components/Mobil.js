import { useNavigate } from 'react-router-dom';
import carImage from '../images/img/img_car.png'

const Mobil = () => {
  const navigate = useNavigate()
  return (
    <>
    
      <section className=" global-container bg-grey hero-section">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 hero-desc">
            <h1>Sewa &amp; Rental Mobil Terbaik di kawasan Jakarta</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <button className="btn btn-success btn-hero " onClick={() => navigate('/ListCar')}>
              Mulai Sewa Mobil
            </button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 text-center p-0">
            {/* <div class="hero-image"> */}
            <img
              src={carImage}
              className="img-car"
              alt="Mobil"
            />
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mobil;
