import { useState } from 'react';
import { RiwayatPenjualan } from '../data/history';
import Prediction from './Prediction';

const TabelData = () => {
  const [active, setActive] = useState(false);
  const data1 = RiwayatPenjualan[0].data;
  const data2 = RiwayatPenjualan[1].data;
  const data3 = RiwayatPenjualan[2].data;
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
    <div className="w-100 d-flex justify-content-center align-items-center flex-column ">
      <h5 className="text-secondary">Data Penjualan :</h5>
      <table className="table w-50 border border-primary mt-5">
        <thead className="bg-primary">
          <tr className="bg-primary">
            <th scope="col" className="bg-primary text-light">
              No
            </th>
            <th scope="col" className="bg-primary text-light">
              Bulan
            </th>
            {RiwayatPenjualan.map((data, i) => {
              return (
                <th
                  scope="col"
                  key={i}
                  className="bg-primary text-light">
                  {data.tahun}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data1.map((data, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{bulan[i]}</td>
                <td>{data}</td>
                <td>{data2[i]}</td>
                <td>{data3[i]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => setActive(true)}
        className="btn btn-primary mt-5 btn-lg">
        Tampilkan Prediksi
      </button>
      {active && <Prediction />}
    </div>
  );
};

export default TabelData;
