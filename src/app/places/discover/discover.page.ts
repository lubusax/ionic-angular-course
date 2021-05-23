import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

// import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
// import { Uid } from '@ionic-native/uid/ngx';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];
  nfcStatus;

  constructor(
    private placesService: PlacesService,
    private nfc: NFC,
    private ndef: Ndef
    // private uniqueDeviceID: UniqueDeviceID
    // private uid: Uid,
    // private androidPermissions: AndroidPermissions
    ) { }

  nfcSuccess() {
  console.log("nfc Success");
  this.nfcStatus = "nfc Success";
  };

  nfcFailure() {
    console.log("nfc Failure");
    this.nfcStatus = "nfc Failure";
    };

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    // this.getUniqueDeviceID();
    // this.uniqueDeviceID.get()
    //   .then((uuid: any) => console.log(uuid))
    //   .catch((error: any) => console.log(error));
    // Read NFC Tag - Android
    // Once the reader mode is enabled, any tags that are scanned are sent to the subscriber
    //let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
    this.nfc.enabled()
    .then(()=>this.nfcSuccess(), ()=>this.nfcFailure());
  }



  // getUniqueDeviceID() {
  //   this.uniqueDeviceID.get()
  //     .then((uuid: any) => {
  //       console.log(uuid);
  //       this.id = uuid;
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //       this.id = "Error! ${error}";
  //     });
  // }

}
