import { FirebaseCatalgService } from './../../Service/firebase-catalg.service';
import { environment } from './../../../environments/environment.prod';
import { DownloadsService } from './../../Service/downloads.service';
import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";



@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {
  image = "";
  allImage = [""];
  constructor(private downloadsFirebase: DownloadsService, private firebaseCatalog: FirebaseCatalgService) {

  }

  ngOnInit(): void {
  }


  async OneImage() {
    const storage = firebase.storage();
    const gsReference = storage.refFromURL('gs://osm-soft-dev.appspot.com/images/osm-soft/');
    return await gsReference.child('logo.png').getDownloadURL().then((url) =>{
   this.image = url;
   console.log(url);
    }).catch(()=>{

    });
   }

   allImages(){
    const storage = firebase.storage();
    const gsReference = storage.refFromURL('gs://osm-soft-dev.appspot.com/images/osm-soft/catalog');
    gsReference.listAll().then((result) => {
      result.items.forEach( async (imageRef) => {
       this.allImage.push( await displayImage(imageRef));
      });
    }).catch(function(error) {

    });
    console.log(this.allImage);
}

firebase(){
  this.firebaseCatalog.ImageCatalog("osm-soft")
  .subscribe((catalog) =>{
    console.log(catalog.catalog.code);
  })
}
}

 async function displayImage(imageRef: firebase.storage.Reference):Promise<string> {
  return await imageRef.getDownloadURL();
}

