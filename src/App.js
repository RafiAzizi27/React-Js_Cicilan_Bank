import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      nominal: 0,  
      bunga: 0,
      periode: 0
    }
  }
  nominal = (event) => {
    this.setState({nominal: event.target.value});
  }
  bunga = (event) => {
    this.setState({bunga: event.target.value});
  }
  periode = (event) => {
    this.setState({periode: event.target.value});
  }
  hitung = () => {
    this.setState({cicilan: (this.state.nominal / this.state.periode) + (this.state.nominal * (this.state.bunga / 100) * (30 / 360)) })
  }
  render(){
    return (
      <div className="container text-center">
        <div className="row mt-4">
          <div className="col bg-dark">
            <h5 className="fw-bold p-4 putih"><span className="kotak">Cicilan Bank</span></h5>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label putih text-start">Nominal</label>
              <div class="col-sm-10">
                <input type="number" class="form-control" placeholder="Masukkan nominal pinjaman anda" onChange={this.nominal} />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label putih text-start">Bunga</label>
              <div class="col-sm-10">
                <input type="number" class="form-control" placeholder="Masukkan bunga" onChange={this.bunga} />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label putih text-start">Periode</label>
              <div class="col-sm-10">
                <input type="number" class="form-control" placeholder="Pilih periode pelunasan" onChange={this.periode} />
              </div>
            </div>
            <div className="row pt-4 mb-4">
              <div className="col d-grid gap-2">
                <button type="button" onClick={this.hitung} className="btn btn-success">Hitung</button>
              </div>
            </div>
            <div className="row p-2 mb-2">
              <div className="alert alert-info">
                <p>Cicilan yang harus dibayar perbulan senilai Rp. {this.state.cicilan},00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;