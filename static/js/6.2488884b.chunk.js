(this.webpackJsonpcodingchallenges=this.webpackJsonpcodingchallenges||[]).push([[6],{96:function(e,t,a){"use strict";a.r(t);var c=a(47),n=a(0),o=a.n(n),l=a(57),r=a(61),s=a.n(r),i=a(78),m="".concat("AIzaSyDKtC9_Vs1OZUSkjuUlL8OsWjPnqgXmyp0"),u=("".concat("zcu9lu3k2dqo4yoctgnig8r93e1ydsuk5qq0zaelgkdgtqak3"),"".concat("d7d2c20mw44hq9yq9kwk8ej3m"),{lat:37.7749,lng:122.4194}),g=Object(i.GoogleApiWrapper)({apiKey:m})((function(e){var t=e.vehicles,a=Object(n.useState)(u),l=Object(c.a)(a,2),r=l[0],s=l[1],m=function(e){s(u)};Object(n.useEffect)((function(){return navigator.geolocation?navigator.geolocation.getCurrentPosition(m):console.log("geo location isnt set by browser"),function(){}}),[]);return o.a.createElement(i.Map,{className:"map-style",google:e.google,zoom:13,style:{width:"100%",height:"60vh"},center:r},t&&t.length>0&&t.map((function(t){return o.a.createElement(i.Marker,{key:t.id,title:t.id,name:t.id,icon:{url:"https://image.flaticon.com/icons/png/512/171/171255.png",anchor:new e.google.maps.Point(32,32),scaledSize:new e.google.maps.Size(32,32)},position:{lat:t.lat,lng:t.lon}})})),o.a.createElement(i.Marker,{name:"Current location"}))})),d=function(){var e=Object(l.a)(),t=e.register,a=(e.handleSubmit,e.getValues),r=Object(n.useState)([]),i=Object(c.a)(r,2),m=i[0],u=i[1],d=Object(n.useState)([]),p=Object(c.a)(d,2),b=p[0],h=p[1],f=Object(n.useState)([]),v=Object(c.a)(f,2),y=v[0],E=v[1],N=Object(n.useState)(!1),k=Object(c.a)(N,2),O=k[0],j=k[1];Object(n.useEffect)((function(){return s.a.get("http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList").then((function(e){u(e.data.agency),j(!1)})).catch((function(e){return console.log(e)})),function(){}}),[]);return o.a.createElement("div",{className:"gradient-background-black"},o.a.createElement("div",{className:"container py-5"},o.a.createElement("div",{className:"card p-3 mb-3"},o.a.createElement("h3",null,"Departure Times"),o.a.createElement("h6",null,"Create a service that gives real-time departure time for public transportation (use freely available public API). The app should geolocalize the user."),o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"location",className:"black-text"},"Location"),o.a.createElement("select",{name:"location",className:"form-control","aria-describedby":"locationHelp",placeholder:"Select your preferred location",ref:t({required:!0})},o.a.createElement("option",{value:"san"},"San Fransisco")),o.a.createElement("small",{id:"locationHelp",className:"form-text text-muted"},"Choose the location you are in."))),o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"agency",className:"black-text"},"Agency"),o.a.createElement("select",{name:"agency",className:"form-control","aria-describedby":"agencyHelp",placeholder:"Select your preferred agency",ref:t({required:!0}),onChange:function(e){j(!0),s.a.get("http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=".concat(e.target.value)).then((function(e){E(e.data.route),j(!1)}))}},m instanceof Array&&m.map((function(e){return o.a.createElement("option",{key:e.tag,value:e.tag},e.title)}))," "),o.a.createElement("small",{id:"agencyHelp",className:"form-text text-muted"},"Choose the Agency you are looking for."))),o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"routes",className:"black-text"},"Routes"),o.a.createElement("select",{name:"routes",className:"form-control","aria-describedby":"routesHelp",placeholder:"Select your preferred routes",ref:t({required:!0}),disabled:O,onChange:function(e){var t;j(!0);var c=null===(t=a())||void 0===t?void 0:t.agency;s.a.get("http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=".concat(c,"&r=").concat(e.target.value,"&t=0")).then((function(e){h(e.data.vehicle),j(!1)}))}},y instanceof Array&&y.map((function(e){return o.a.createElement("option",{key:e.tag,value:e.tag},e.title)}))," "),o.a.createElement("small",{id:"routesHelp",className:"form-text text-muted"},"Choose the Routes you are in.")))))),o.a.createElement(g,{vehicles:b})))};t.default=d}}]);
//# sourceMappingURL=6.2488884b.chunk.js.map