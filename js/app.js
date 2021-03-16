'use strict';

let myForm = document.getElementById( 'mainForm' );
let myTable = document.getElementById( 'mainTable' );
let HeaderArray=['Image','Name','Season'];
let GardenArray = [];


function MyGarden( name,image,season ){
  this.name = name;
  this.image = image;
  this.season = season;
  GardenArray.push( this );
}


function renderHeader(){
  let HeaderRow=document.createElement( 'tr' );
  let TableH;
  for ( let index = 0; index < HeaderArray.length; index++ ) {
    TableH=document.createElement( 'th' );
    TableH.textContent=HeaderArray[index];
    HeaderRow.appendChild( TableH );
  }
  myTable.appendChild( HeaderRow );
}


MyGarden.prototype.renderGarden= function () {


  let Row = document.createElement( 'th' );

  let TdName = document.createElement( 'td' );
  TdName.textContent= this.name;

  let TdImage = document.createElement( 'td' );
  TdImage.textContent= this.image;

  let TdSeason = document.createElement( 'td' );
  TdSeason.textContent= this.season;

  Row.appendChild( TdName );
  Row.appendChild( TdImage );
  Row.appendChild( TdSeason );

  myTable.appendChild( Row );

};

function EventHandler( event ){
  event.preventDefault();

  let names = event.target.name.value;
  let images = event.target.image.value;
  let seasons = event.target.season.value;

  let Garden = new MyGarden( names,images,seasons );

  Garden.renderGarden();
  localStorage.setItem( 'GardenKey', JSON.stringify( GardenArray ) );
  console.log( localStorage );
}

function renderAfterRefresh() {
  for ( let index = 0; index < GardenArray.length; index++ ) {
    let Row = document.createElement( 'tr' );


    let TdName = document.createElement( 'td' );
    TdName.textContent= GardenArray[index].name;

    let TdImage = document.createElement( 'td' );
    TdImage.textContent= GardenArray[index].image;

    let TdSeason = document.createElement( 'td' );
    TdSeason.textContent= GardenArray[index].season;

    Row.appendChild( TdName );
    Row.appendChild( TdImage );
    Row.appendChild( TdSeason );
    myTable.appendChild( Row );

  }


}

function refreshLS() {
  if( localStorage.getItem( 'GardenKey' ) ){
    GardenArray=JSON.parse( localStorage.getItem( 'GardenKey' ) );
    renderAfterRefresh();
  }

}



myForm.addEventListener( 'submit',EventHandler );


renderHeader();
refreshLS();









