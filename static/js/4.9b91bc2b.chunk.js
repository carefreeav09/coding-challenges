(this.webpackJsonpcodingchallenges=this.webpackJsonpcodingchallenges||[]).push([[4],{92:function(e,t,a){"use strict";a.r(t);var c=a(48),n=a(0),l=a.n(n),o=a(91),r=a(61),s=a.n(r),i=a(78),m="".concat("AIzaSyDKtC9_Vs1OZUSkjuUlL8OsWjPnqgXmyp0"),u={lat:37.7749,lng:122.4194},g=Object(i.GoogleApiWrapper)({apiKey:m})((function(e){var t=e.vehicles,a=Object(n.useState)(u),o=Object(c.a)(a,2),r=o[0],s=o[1],m=function(e){s(u)};Object(n.useEffect)((function(){return navigator.geolocation?navigator.geolocation.getCurrentPosition(m):console.log("geo location isnt set by browser"),function(){}}),[]);return l.a.createElement(i.Map,{className:"map-style",google:e.google,zoom:13,style:{width:"100%",height:"60vh"},center:r},t&&t.length>0&&t.map((function(t){return l.a.createElement(i.Marker,{key:t.id,title:t.id,name:t.id,icon:{url:"https://image.flaticon.com/icons/png/512/171/171255.png",anchor:new e.google.maps.Point(32,32),scaledSize:new e.google.maps.Size(32,32)},position:{lat:t.lat,lng:t.lon}})})),l.a.createElement(i.Marker,{name:"Current location"}))})),d=function(){var e=Object(o.a)(),t=e.register,a=(e.handleSubmit,e.getValues),r=Object(n.useState)([]),i=Object(c.a)(r,2),m=i[0],u=i[1],d=Object(n.useState)([]),p=Object(c.a)(d,2),b=p[0],f=p[1],h=Object(n.useState)([]),v=Object(c.a)(h,2),y=v[0],E=v[1],N=Object(n.useState)(!1),O=Object(c.a)(N,2),S=O[0],j=O[1];Object(n.useEffect)((function(){return s.a.get("http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList").then((function(e){u(e.data.agency),j(!1)})).catch((function(e){return console.log(e)})),function(){}}),[]);return l.a.createElement("div",{className:"gradient-background-black"},l.a.createElement("div",{className:"container py-5"},l.a.createElement("div",{className:"card p-3 mb-3"},l.a.createElement("h3",null,"Departure Times"),l.a.createElement("h6",null,"Create a service that gives real-time departure time for public transportation (use freely available public API). The app should geolocalize the user."),l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"location",className:"black-text"},"Location"),l.a.createElement("select",{name:"location",className:"form-control","aria-describedby":"locationHelp",placeholder:"Select your preferred location",ref:t({required:!0})},l.a.createElement("option",{value:"san"},"San Fransisco")),l.a.createElement("small",{id:"locationHelp",className:"form-text text-muted"},"Choose the location you are in."))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"agency",className:"black-text"},"Agency"),l.a.createElement("select",{name:"agency",className:"form-control","aria-describedby":"agencyHelp",placeholder:"Select your preferred agency",ref:t({required:!0}),onChange:function(e){j(!0),s.a.get("http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=".concat(e.target.value)).then((function(e){E(e.data.route),j(!1)}))}},m instanceof Array&&m.map((function(e){return l.a.createElement("option",{key:e.tag,value:e.tag},e.title)}))," "),l.a.createElement("small",{id:"agencyHelp",className:"form-text text-muted"},"Choose the Agency you are looking for."))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"routes",className:"black-text"},"Routes"),l.a.createElement("select",{name:"routes",className:"form-control","aria-describedby":"routesHelp",placeholder:"Select your preferred routes",ref:t({required:!0}),disabled:S,onChange:function(e){var t;j(!0);var c=null===(t=a())||void 0===t?void 0:t.agency;s.a.get("http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=".concat(c,"&r=").concat(e.target.value,"&t=0")).then((function(e){f(e.data.vehicle),j(!1)}))}},y instanceof Array&&y.map((function(e){return l.a.createElement("option",{key:e.tag,value:e.tag},e.title)}))," "),l.a.createElement("small",{id:"routesHelp",className:"form-text text-muted"},"Choose the Routes you are in.")))))),l.a.createElement(g,{vehicles:b})))};t.default=d}}]);
//# sourceMappingURL=4.9b91bc2b.chunk.js.map