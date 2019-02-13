(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),s=a(6),l=a(7),o=a(9),u=a(8),m=a(10),p=(a(27),a(50)),d=(a(29),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("ul",{className:"header__list"},r.a.createElement("li",{className:"header__list-item"},r.a.createElement(p.a,{to:"/people/"},"People")),r.a.createElement("li",{className:"header__list-item"},r.a.createElement(p.a,{to:"/planets/"},"Planets")),r.a.createElement("li",{className:"header__list-item"},r.a.createElement(p.a,{to:"/starships/"},"Starships"))))}),h=a(3),f=a.n(h),v=a(11),E=function(){function e(){var t=this;Object(s.a)(this,e),this.makeRequest=function(){var e=Object(v.a)(f.a.mark(function e(a){var n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiUrl).concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getPerson=function(){var e=Object(v.a)(f.a.mark(function e(a){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.makeRequest("/people/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformPerson(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getPersonImage=function(e){var a=e.id;return"".concat(t._imgUrl,"/characters/").concat(a,".jpg")},this.getPlanetImage=function(e){var a=e.id;return"".concat(t._imgUrl,"/planets/").concat(a,".jpg")},this.getStarshipImage=function(e){var a=e.id;return"".concat(t._imgUrl,"/starships/").concat(a,".jpg")},this.getPlanet=function(){var e=Object(v.a)(f.a.mark(function e(a){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.makeRequest("/planets/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformPlanet(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getStarship=function(){var e=Object(v.a)(f.a.mark(function e(a){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.makeRequest("/starships/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformStarship(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(v.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.makeRequest("/people/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPerson));case 4:case"end":return e.stop()}},e,this)})),this.getAllPlanets=Object(v.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.makeRequest("/planets/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPlanet));case 4:case"end":return e.stop()}},e,this)})),this.getAllStarships=Object(v.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.makeRequest("/starships/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformStarship));case 4:case"end":return e.stop()}},e,this)})),this._transformPlanet=function(e){return{id:t._extractId(e),population:e.population,rotationPeriod:e.rotation_period,name:e.name}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,height:e.height,eyeColor:e.eye_color}},this._apiUrl="https://swapi.co/api",this._imgUrl="https://starwars-visualguide.com/assets/img"}return Object(l.a)(e,[{key:"_extractId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}}]),e}(),g=(a(35),function(){return r.a.createElement("div",{className:"error"},r.a.createElement("h1",{className:"error__title"},"Sorry something went wrong."))}),_=(a(37),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"}))}),b=(a(39),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).starService=new E,e.state={planet:{},loading:!0,error:!1},e.onPlanetLoaded=function(t){e.setState({planet:t,loading:!1})},e.onError=function(){e.setState({error:!0,loading:!1})},e.updatePlanet=function(){var t=Math.floor(25*Math.random())+3;e.starService.getPlanet(t).then(e.onPlanetLoaded).catch(e.onError)},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.updatedInterval;this.updatePlanet(),setInterval(this.updatePlanet,e),this.interval=setInterval(this.updatePlanet,1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.planet,a=e.loading,n=e.error?r.a.createElement(g,null):a?r.a.createElement(_,null):r.a.createElement(w,{planet:t});return r.a.createElement("div",{className:"random-planet"},n)}}]),t}(n.Component));b.defaultProps={updatedInterval:1e4};var w=function(e){var t=e.planet,a=t.id,n=t.population,c=t.rotationPeriod,i=t.planetName;return setTimeout(function(){document.querySelector(".random-planet__population").classList.add("random-planet__population--loaded")},100),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"random-planet__image"},r.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/planets/".concat(a,".jpg"),alt:"planet-photo"})),r.a.createElement("div",{className:"random-planet__description"},r.a.createElement("h1",{className:"random-planet__name"},i),r.a.createElement("div",{className:"random-planet__info"},r.a.createElement("p",{className:"random-planet__population"},"Population: ",r.a.createElement("span",null," ",n," ")),r.a.createElement("p",{className:"random-planet__period"},"Rotation period: ",r.a.createElement("span",null," ",c," ")))))},j=function(e,t){return function(a){function n(e){var t;return Object(s.a)(this,n),(t=Object(o.a)(this,Object(u.a)(n).call(this,e))).state={data:null},t}return Object(m.a)(n,a),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;t().then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var t=this.state.data;return t?r.a.createElement(e,Object.assign({},this.props,{data:t})):r.a.createElement(_,null)}}]),n}(n.Component)},N=(a(41),function(e){var t=e.renderItem,a=e.onItemSelected,n=e.data.slice(5,10).map(function(e){var n=t(e);return r.a.createElement("li",{className:"item-list__item",key:e.id,onClick:function(){return a(e.id)}},n)});return r.a.createElement("div",{className:"item-list"},r.a.createElement("ul",{className:"item-list__list"},n))}),I=new E,O=I.getAllPeople,P=I.getAllPlanets,k=I.getAllStarships,y=j(N,O),S=j(N,P),x=j(N,k),C=a(12),R=a.n(C),q=R()(function(e){var t=e.history;return r.a.createElement(y,{onItemSelected:function(e){t.push(e)},renderItem:function(e){var t=e.name,a=e.gender;return"".concat(t," (").concat(a,")")}})}),U=R()(function(e){var t=e.history;return r.a.createElement(S,{onItemSelected:function(e){t.push(e)},renderItem:function(e){var t=e.name;return"".concat(t)}})}),A=a(54),M=Object(A.a)(function(e){var t=e.history;return r.a.createElement(x,{onItemSelected:function(e){t.push(e)},renderItem:function(e){var t=e.name;return"".concat(t)}})}),D=(a(47),function(e){var t=e.item,a=e.field,n=e.label;return r.a.createElement("p",{className:"item-details__label"},n," ",r.a.createElement("span",null,t[a]))}),W=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(!this.props.item)return r.a.createElement(_,null);var e=this.props,t=e.item.name,a=e.image,n=this.props.item;return r.a.createElement("div",{className:"item-details"},r.a.createElement("div",{className:"item-details__photo"},r.a.createElement("img",{src:a,alt:"item-photo"})),r.a.createElement("div",{className:"item-details__description"},r.a.createElement("div",{className:"item-details__name"},t),r.a.createElement("div",{className:"item-details__separator"}),r.a.Children.map(this.props.children,function(e){return r.a.cloneElement(e,{item:n})})))}}]),t}(n.Component),L=function(e,t,a,c){return function(n){function i(e){var t;return Object(s.a)(this,i),(t=Object(o.a)(this,Object(u.a)(i).call(this,e))).updateItem=function(){t.props.itemId&&a(t.props.itemId).then(function(e){t.setState({item:e,image:c(e)})})},t.state={item:null,image:null},t}return Object(m.a)(i,n),Object(l.a)(i,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&this.updateItem()}},{key:"render",value:function(){return r.a.createElement(e,{image:this.state.image,item:this.state.item},t)}}]),i}(n.Component)},B=new E,H=B.getPerson,J=B.getPersonImage,$=B.getStarship,F=B.getStarshipImage,G=B.getPlanet,T=B.getPlanetImage,z=L(W,[r.a.createElement(D,{field:"gender",label:"Gender:"}),r.a.createElement(D,{field:"eyeColor",label:"Eye Color:"}),r.a.createElement(D,{field:"height",label:"Height:"})],H,J),K=L(W,[r.a.createElement(D,{field:"name",label:"Name:"}),r.a.createElement(D,{field:"population",label:"Population:"}),r.a.createElement(D,{field:"rotationPeriod",label:"Rotation period:"})],G,T),Q=L(W,[r.a.createElement(D,{field:"model",label:"Model:"}),r.a.createElement(D,{field:"costInCredits",label:"Cost:"}),r.a.createElement(D,{field:"passengers",label:"Passengers:"}),r.a.createElement(D,{field:"crew",label:"Crew:"})],$,F),V=a(52),X=a(53),Y=a(51),Z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).starService=new E,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(V.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__wrapper"},r.a.createElement("div",{className:"app__inner"},r.a.createElement("div",{className:"app__header"},r.a.createElement(p.a,{to:"/",className:"app__logo","data-hover":"SpaceStars"},"SpaceStars"),r.a.createElement(d,null)),r.a.createElement(b,null),r.a.createElement("div",{className:"app__details"},r.a.createElement(X.a,null,r.a.createElement(Y.a,{path:"/",render:function(){return r.a.createElement("h2",{className:"app--welcome"},"Welcome to SpaceStars")},exact:!0}),r.a.createElement(Y.a,{path:"/people/",exact:!0,component:q}),r.a.createElement(Y.a,{path:"/planets",exact:!0,component:U}),r.a.createElement(Y.a,{path:"/starships",exact:!0,component:M}),r.a.createElement(Y.a,{path:"/starships/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(Q,{itemId:t})}}),r.a.createElement(Y.a,{path:"/planets/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(K,{itemId:t})}}),r.a.createElement(Y.a,{path:"/people/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(z,{itemId:t})}}),r.a.createElement(Y.a,{render:function(){return r.a.createElement("div",{className:"page-not-found"},r.a.createElement("h2",null,"Page not found"),r.a.createElement(p.a,{to:"/"},"Home"))}})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.c44bce22.chunk.js.map