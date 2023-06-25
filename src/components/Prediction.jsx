import { predictions } from '../data/method';

const Prediction = () => {
  console.log(predictions);
  const bulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  return (
    <div className="w-100 d-flex justify-content-center align-items-center mt-5 flex-column gap-5">
      <h5 className="text-secondary">
        Prediksi Penjualan Satu Tahun Mendatang :
      </h5>
      <table className="table w-50">
        <thead>
          <tr>
            <th scope="col" className="bg-primary text-light">
              Bulan
            </th>
            <th scope="col" className="bg-primary text-light">
              Prediksi Penjualan
            </th>
            <th scope="col" className="bg-primary text-light">
              Nilai Bulat
            </th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((value, i) => {
            return (
              <tr key={i}>
                <td>{bulan[i]}</td>
                <td>{value}</td>
                <td>{Math.round(value)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Prediction;
