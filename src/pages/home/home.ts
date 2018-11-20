import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // servidor: string = 'http://127.0.0.1:5000/';
  // mensagem: Observable<any>;
  grafico: any;
  success = (data) => console.log(data);
  fail = (error) => console.log("ERROR");

  constructor(public navCtrl: NavController, public httpClient: HttpClient, public bluetoothSerial: BluetoothSerial) {
    Chart.defaults.global.legend.display = false;
    //this.mensagem = this.httpClient.get(this.servidor);
    this.bluetoothSerial.connect("3C:71:BF:0C:71:36").subscribe(this.success, this.fail);
  }

  sleep(delay) {
      var start = new Date().getTime();
      while (new Date().getTime() < start + delay);
  }

  calc(tipo){
    this.bluetoothSerial.write("g").then(this.success, this.fail);

    this.bluetoothSerial.readUntil("\n").then((data) => { console.log(data);
                                                          var geral = data.split(",");
                                                          var andar_geral = [0, 0, 0, 0];
                                                          andar_geral[0] = parseInt(geral[0]);
                                                          andar_geral[1] = parseInt(geral[1]);
                                                          andar_geral[2] = parseInt(geral[2]);
                                                          andar_geral[3] = parseInt(geral[3]);
                                                          if (tipo == "barraGeral") {
                                                            this.calcBarraGeral(andar_geral);
                                                          }
                                                        }
                                             );

    this.bluetoothSerial.readUntil("\n").then((data) => { console.log(data);
                                                          var andar1 = data.split(",");
                                                          var andar_1 = [0, 0, 0, 0];
                                                          andar_1[0] = parseInt(andar1[0]);
                                                          andar_1[1] = parseInt(andar1[1]);
                                                          andar_1[2] = parseInt(andar1[2]);
                                                          andar_1[3] = parseInt(andar1[3]);
                                                          if (tipo == "barra1") {
                                                            this.calcBarraGeral(andar_1);
                                                          }
                                                        }
                                             );

    this.bluetoothSerial.readUntil("\n").then((data) => { console.log(data);
                                                         var andar2 = data.split(",");
                                                         var andar_2 = [0, 0, 0, 0];
                                                         andar_2[0] = parseInt(andar2[0]);
                                                         andar_2[1] = parseInt(andar2[1]);
                                                         andar_2[2] = parseInt(andar2[2]);
                                                         andar_2[3] = parseInt(andar2[3]);
                                                         if (tipo == "barra2") {
                                                           this.calcBarraGeral(andar_2);
                                                         }
                                                        }
                                             );
  }

  calcBarraGeral(valores) {
    if (this.grafico != null) {
      this.grafico.destroy();
    }
    document.getElementById("teste").style.display = 'none';
    this.grafico = new Chart(document.getElementById("graficoBarraCanvas"), {
      type: 'bar',
  	  data: {
  		  labels: ["Disponíveis", "Ocupadas", "Idosos", "Deficientes"],
  		  datasets: [{
          backgroundColor: ["#0dbf10", "#bf0d0d","#ecef2f","#190f89"],
          data: [valores[0], valores[1], valores[2], valores[3]]
        }]
  	  },
      options: {
        responsive: true,
    		scales: {
    		  yAxes: [{
      			ticks: {
      			  beginAtZero: true
      			}
    		  }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
		    }
      }
    });
  }
}
