const Hero = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center flex-column mt-5">
      <h4 className="text-secondary">
        Sistem Prediksi dengan Metode Double Exponential Smoothing
      </h4>
      <h2 className="text-primary">Penjualan Karangan Bunga</h2>
      <img
        src="/images/karangan-bunga.png"
        alt=""
        width={300}
        height={500}
        className="border mt-2"
      />
    </div>
  );
};

export default Hero;
