import '../style/findCar.css'

const FormCar = () => {
  return (
    <>
      <section id="cari">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-md-12 info-panel">
              <div className="shadow p-3 rounded  ">
                <div className="row row-cols-lg-auto g-0 justify-content-around">
                  <div className="col-12 col-lg-2">
                    <label htmlFor="exampleDataList" className="form-label">
                      Tipe Driver
                    </label>
                    <select
                      id="tipedriver"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value={0} selected="">
                        Pilih Tipe Driver
                      </option>
                      <option value="Dengan Supir">Dengan Sopir</option>
                      <option value="Lepas Kunci">
                        Tanpa Sopir (Lepas Kunci)
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-lg">
                    <label htmlFor="exampleDataList" className="form-label">
                      Tanggal
                    </label>
                    <input
                      id="inputDate"
                      placeholder="Select date"
                      type="date"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 col-lg-2">
                    <label htmlFor="exampleDataList" className="form-label">
                      Waktu Jemput/Ambil
                    </label>
                    <select
                      id="inputTime"
                      className="form-control"
                      aria-label="Default select example"
                    >
                      <option value={0} selected="" hidden="">
                        Pilih waktu
                      </option>
                      <option value="08:00">08.00 WIB</option>
                      <option value="09:00">09.00 WIB</option>
                      <option value="10:00">10.00 WIB</option>
                      <option value="11:00">11.00 WIB</option>
                      <option value="12:00">12.00 WIB</option>
                    </select>
                  </div>
                  <div className="col-12 col-lg">
                    <label htmlFor="exampleDataList" className="form-label">
                      Jumlah Penumpang (Optional)
                    </label>
                    <input
                      id="inputCapacity"
                      type="number"
                      className="form-control"
                      placeholder="Jumlah Penumpang"
                    />
                  </div>
                  <button
                    id="searchBtn"
                    className="btn btn-success btn-cari-mobil"
                  >
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button id="load-btn" className="button">
        Load
      </button>
      <button id="clear-btn" className="button">
        Clear
      </button>
      <div id="cars-container" />
    </>
  );
};

export default FormCar;
