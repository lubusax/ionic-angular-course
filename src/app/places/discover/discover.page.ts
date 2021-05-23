import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
// import { Uid } from '@ionic-native/uid/ngx';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];
  id: any;

  constructor(
    private placesService: PlacesService,
    private uniqueDeviceID: UniqueDeviceID
    // private uid: Uid,
    // private androidPermissions: AndroidPermissions
    ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.getUniqueDeviceID();
    // this.uniqueDeviceID.get()
    //   .then((uuid: any) => console.log(uuid))
    //   .catch((error: any) => console.log(error));
  }

  getUniqueDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log(uuid);
        this.id = uuid;
      })
      .catch((error: any) => {
        console.log(error);
        this.id = "Error! ${error}";
      });
  }

}
