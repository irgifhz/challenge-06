import imgService from '../images/img/img_service.png'

const OurServices = () => {
  return (
    <section className="global-container" id="Service">
      <div className="Services">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src={imgService}
              className="img-serv"
              alt="orangcantik"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h3>Best Car Rental for any kind of trip in Jakarta!</h3>
            <p>
              Sewa mobil di Jakarta bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="list-group">
              <li className="list-group-item border-0">
                <i className="icon-check me-3" data-feather="check" /> Sewa
                Mobil Dengan Supir di Bali 12 Jam
              </li>
              <li className="list-group-item border-0">
                <i className="icon-check me-3" data-feather="check" /> Sewa
                Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li className="list-group-item border-0">
                <i className="icon-check me-3" data-feather="check" /> Sewa
                Mobil Jangka Panjang Bulanan
              </li>
              <li className="list-group-item border-0">
                <i className="icon-check me-3" data-feather="check" /> Gratis
                Antar - Jemput Mobil di Bandara
              </li>
              <li className="list-group-item border-0">
                <i className="icon-check me-3" data-feather="check" /> Layanan
                Airport Transfer / Drop In Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
