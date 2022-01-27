import ArcGISMap from "@arcgis/core/Map";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import esriConfig from "@arcgis/core/config";
import RouteParameters from "@arcgis/core/rest/support/RouteParameters";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import * as route from "@arcgis/core/rest/route";
import * as locator from "@arcgis/core/rest/locator";
//import { addressToLocations, locationToAddress } from "esri/rest/locator";
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Vuex from 'vuex'
Vue.use(Vuex)

@Component
export default class VisualizzionePercorso extends Vue {
  map = new Map({
    basemap: "arcgis-navigation" //Basemap layer service
  });
  view=new MapView({
    container: "viewDiv",
    map: this.map,
    center: [12.390828, 43.110717], //Longitude, latitude
    zoom: 12
  });

  mounted () {
    esriConfig.apiKey = "AAPK304c7b4480c74cafacd2f18d2b6cbddb9C34TQ2vsQWj_BK1hUu73I0y2qiBXLIEinORQjAhdnXn_cTfJNgNlnB7-NQrcQje";
    this.map = new Map({
      basemap: "arcgis-navigation" //Basemap layer service
    });
    this.view = new MapView({
      container: "viewDiv",
      map: this.map,
      center: [12.390828, 43.110717], //Longitude, latitude
      zoom: 12
    });
    this.view.on("click",(event) =>{
    if (this.view.graphics.length === 0) {
      this.addGraphic("origin", event.mapPoint);
    }else if (this.view.graphics.length === 1) {
      this.addGraphic("destination", event.mapPoint);
      this.getPercorso(this.$store.state.tipo === 'T'?[0,0,1]:[255,255,1] )
    } else {
      this.view.graphics.removeAll();
      this.addGraphic("origin",event.mapPoint);
    }
    })
  }

  add (type:string,Point:any){
    this.addGraphic(type,Point)
    if(this.view.graphics.length > 1){
      this.getPercorso(this.$store.state.tipo === 'T'?[0,0,1]:[255,255,1] )
    }
  }

  addGraphic (type:string, point:any) {
    const graphic = new Graphic({
      geometry: point
    });
    this.view.graphics.add(graphic);
  }
  
  get partenza() {
    const routeurl='https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer'
    
    const singleline=this.$store.state.partenza
    const addres = {
      address : {
        singleline
      }
    }
    locator.addressToLocations(routeurl,addres).then((Respons)=>{
      console.log(Respons)
      this.view.graphics.removeAll()
      this.add("origine",Respons[0].location)
    })
    return this.$store.state.partenza
  }
  get arrivo() {
    const routeurl='https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer'
    
    const singleline=this.$store.state.arrivo
    const addres = {
      address : {
        singleline
      }
    }
    locator.addressToLocations(routeurl,addres).then((Respons)=>{
      console.log(Respons)
      this.add("arrivo",Respons[0].location)
    })
    return this.$store.state.arrivo
  }

  
  getPercorso (color:any){
    console.log("cio")
    
    esriConfig.apiKey = "AAPK304c7b4480c74cafacd2f18d2b6cbddb9C34TQ2vsQWj_BK1hUu73I0y2qiBXLIEinORQjAhdnXn_cTfJNgNlnB7-NQrcQje";

    const routeUrl = "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";
    route.solve(routeUrl,new RouteParameters({
      stops: new FeatureSet({
        features: this.view.graphics.toArray()
      })
    })).then((data:any) => {
          data.routeResults.forEach((result:any)=> {
            result.route.symbol = {
              type: "simple-line",
              color: color,
              width: 3
            };
            this.view.graphics.add(result.route);
          });

        })
  }
  
}