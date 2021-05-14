import { Injectable } from '@angular/core';
import firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class DownloadsService {
  image = "";
  constructor() { }

 async OneImage() {
    const storage = firebase.storage();
    const gsReference = storage.refFromURL('gs://osm-soft-dev.appspot.com/images/osm-soft/');
    return await gsReference.child('logo.png').getDownloadURL().then((url) =>{
   /*   document.querySelector('img').src = url; */
   this.image = url;
   console.log(url);
    }).catch(()=>{

    });
   }

   allImages(){
     const storage = firebase.storage();
     const gsReference = storage.refFromURL('gs://osm-soft-dev.appspot.com/images/osm-soft/catalog');
     gsReference.listAll().then(function(result) {
       result.items.forEach(function(imageRef) {
        displayImage(imageRef);
       });
     }).catch(function(error) {

     });
 }
 }

 function displayImage(imageRef: firebase.storage.Reference) {
   imageRef.getDownloadURL().then(function(url:any) {
  /*  document.querySelector('img').src = url;
     return url; */
     console.log(url);
   })

}
