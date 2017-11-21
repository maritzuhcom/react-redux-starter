webpackJsonp([1],{118:function(e,t,n){"use strict";function r(e){return{type:a,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.toggleHomeDrawer=r;var a=t.HOME_DRAWER="HOME_DRAWER"},169:function(e,t,n){var r=n(472);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0};a.transform=void 0;n(108)(r,a);r.locals&&(e.exports=r.locals)},193:function(e,t,n){"use strict";function r(){var e=i.foodItems.filter(function(e){return"breakfast"===e.type});return{type:l,payload:e}}function a(){var e=i.foodItems.filter(function(e){return"lunch"===e.type});return{type:u,payload:e}}function o(){var e=i.foodItems.filter(function(e){return"dinner"===e.type});return{type:c,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.GET_DINNER=t.GET_LUNCH=t.GET_BREAKFAST=void 0,t.getBreakfast=r,t.getLunch=a,t.getDinner=o;var i=n(530),l=t.GET_BREAKFAST="GET_BREAKFAST",u=t.GET_LUNCH="GET_LUNCH",c=t.GET_DINNER="GET_DINNER"},332:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(0),o=r(a),i=n(13),l=r(i),u=n(132),c=r(u),s=n(27),f=(n(40),n(24)),p=n(149),d=r(p),h=n(470),m=r(h),y=n(532),b=r(y);n(194),n(561);var g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.compose,v=g((0,f.applyMiddleware)(c.default)),_=(0,f.createStore)(b.default,v),w=function(){return o.default.createElement(s.Provider,{store:_},o.default.createElement(d.default,null,o.default.createElement(m.default,null)))};l.default.render(o.default.createElement(w,null),document.body.querySelector(".container"))},470:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),s=n(40),f=n(471),p=r(f),d=n(503),h=r(d),m=n(511),y=r(m),b=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("section",{id:"main",style:g.mainStyle},c.default.createElement(s.HashRouter,null,c.default.createElement("div",{style:g.wrapper},c.default.createElement(h.default,null),c.default.createElement(p.default,null),c.default.createElement(y.default,null))))}}]),t}(u.Component);t.default=b;var g={mainStyle:{marginTop:"4rem",height:"calc(100% - 3rem)",width:"100%"},wrapper:{height:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}},471:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return e.overlays}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),s=r(c),f=n(27),p=n(40),d=n(168);r(d);n(169);var h=n(109),m=(r(h),n(110)),y=r(m),b=n(112),g=r(b),v=n(72),_=r(v),w=n(73),E=r(w),O=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("section",{id:"sideNav",className:"sideNav "+(this.props.homeDrawerOpen?"open":""),style:C.navStyle},s.default.createElement(p.Link,{to:"/"},s.default.createElement(y.default,{style:C.createBtn,primary:!0,label:"Home"})),s.default.createElement(g.default,{desktop:!0,autoWidth:!1,style:C.menu},s.default.createElement(p.Link,{to:"/food"},s.default.createElement(_.default,{style:C.menuItem,primaryText:"Food"})),s.default.createElement(p.Link,{to:"/locations"},s.default.createElement(_.default,{style:C.menuItem,primaryText:"Locations"})),s.default.createElement(E.default,null),s.default.createElement(p.Link,{to:"/contact"},s.default.createElement(_.default,{style:C.menuItem,primaryText:"Contact"})),s.default.createElement(p.Link,{to:"/careers"},s.default.createElement(_.default,{style:C.menuItem,primaryText:"Careers"}))))}}]),t}(c.Component);t.default=(0,f.connect)(l)(O);var C={navStyle:{display:"flex",flexDirection:"column",alignItems:"stretch",height:"100%",borderRight:"1px solid rgb(0,0,0)",overflow:"hidden",flexShrink:"0"},createBtn:{width:"calc(100% - 4rem)",margin:"1.5rem 2rem 0px",boxSizing:"border-box"},menu:{width:"100%",display:"flex",flexDirection:"column",alignItems:"stretch"},menuItem:{width:"100%",fontWeight:"600"}}},472:function(e,t,n){t=e.exports=n(107)(void 0),t.push([e.i,".sideNav{width:0;opacity:0;transition:width .5s ease-out,opacity .6s}.sideNav.open{width:20em;opacity:1}.hidden{display:none!important}",""])},503:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return c({},e.overlays)}function u(e){return{dispatchToggleHomeDrawer:(0,m.bindActionCreators)(w.toggleHomeDrawer,e),dispatchToggleCartDrawer:(0,m.bindActionCreators)(E.toggleCartDrawer,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),p=r(f),d=n(27),h=n(40),m=n(24),y=n(504),b=r(y),g=n(59),v=(r(g),n(506)),_=r(v),w=n(118),E=n(74);n(169);var O=n(39),C=r(O),j=function(e){function t(){var e,n,r,i;a(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.handleClick=function(){r.props.dispatchToggleCartDrawer(!0)},r.menuClickHandler=function(e){r.props.dispatchToggleHomeDrawer(!r.props.homeDrawerOpen)},i=n,o(r,i)}return i(t,e),s(t,[{key:"render",value:function(){return p.default.createElement("header",{id:"header",style:k.header},p.default.createElement("section",{style:k.section},p.default.createElement("div",{style:k.subSection},p.default.createElement(C.default,{id:"menu",iconClassName:"material-icons",iconStyle:k.icon,touchRippleColor:"white",onClick:this.menuClickHandler},"dehaze"),p.default.createElement(h.NavLink,{to:"/"},p.default.createElement("img",{style:k.img,src:b.default}))),p.default.createElement("span",{style:k.location},"React-Redux-Restaurant!")),p.default.createElement("section",{style:k.section},p.default.createElement(C.default,{onClick:this.handleClick,iconClassName:"material-icons",iconStyle:k.icon,touchRippleColor:"white",tooltip:"Checkout"},"add_shopping_cart"),p.default.createElement(_.default,null)))}}]),t}(f.Component);t.default=(0,d.connect)(l,u)(j);var k={header:{position:"absolute",top:"0",height:"4rem",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"stretch",backgroundColor:"rgb(0,0,0)"},img:{height:"1.1rem",marginLeft:"1rem"},icon:{color:"rgb(255,255,255)"},section:{display:"flex",alignItems:"center"},location:{color:"rgb(255, 255, 255)",fontFamily:"roboto"},subSection:{display:"flex",alignItems:"center",width:"20rem"}}},504:function(e,t,n){e.exports=n.p+"59c467536111a981d904a050d335c2be.png"},506:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return c({},e.cart)}function u(e){return{dispatchCloseCartDrawer:(0,h.bindActionCreators)(v.toggleCartDrawer,e),dispatchRemoveFromCart:(0,h.bindActionCreators)(v.removeFromCart,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),p=r(f),d=n(27),h=n(24),m=n(109),y=r(m),b=n(32),g=r(b),v=n(74),_=n(181),w=r(_),E=function(e){function t(){var e,n,r,i;a(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.handleClick=function(){r.props.dispatchCloseCartDrawer(!1)},r.deleteHandler=function(e){r.props.dispatchRemoveFromCart(e)},r.getChips=function(){return 0===r.props.orders.length?p.default.createElement("span",{style:O.empty},"CART IS EMPTY"):r.props.orders.map(function(e,t){return p.default.createElement("div",{key:t,style:O.chipWrapper},p.default.createElement(w.default,{onRequestDelete:function(){r.deleteHandler(e)},style:O.theChip,labelStyle:O.theChip},e))})},i=n,o(r,i)}return i(t,e),s(t,[{key:"render",value:function(){return p.default.createElement(y.default,{docked:!1,width:300,open:this.props.drawerOpen,containerStyle:O.wrapper},p.default.createElement("div",{style:O.shoppingItems},this.getChips()),p.default.createElement("div",{style:O.price},"PRICE: ",this.props.price),p.default.createElement("footer",{style:O.footer},p.default.createElement(g.default,{label:"Cancel",onClick:this.handleClick}),p.default.createElement(g.default,{label:"Checkout"})))}}]),t}(f.Component);t.default=(0,d.connect)(l,u)(E);var O={wrapper:{display:"flex",flexDirection:"column",fontFamily:"Roboto, sans-serif"},shoppingItems:{width:"100%",height:"100%",padding:"2em",boxSizing:"border-box",overflow:"scroll",fontFamily:"Roboto, sans-serif"},price:{width:"100%",height:"5em",margin:"3.5em",fontFamily:"Roboto, sans-serif"},footer:{width:"100%",height:"5em",display:"flex",justifyContent:"space-evenly",alignItems:"center"},theChip:{width:"100%"},chipWrapper:{margin:"1em 0 1em 0"},empty:{display:"flex",justifyContent:"center"}}},511:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),s=n(40),f=n(512),p=r(f),d=n(518),h=r(d),m=n(527),y=r(m),b=n(528),g=r(b),v=n(531),_=r(v),w=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement(s.Switch,null,c.default.createElement(s.Route,{exact:!0,path:"/",component:p.default}),c.default.createElement(s.Route,{path:"/careers",component:h.default}),c.default.createElement(s.Route,{path:"/contact",component:y.default}),c.default.createElement(s.Route,{path:"/food",component:g.default}),c.default.createElement(s.Route,{path:"/locations",component:_.default}))}}]),t}(u.Component);t.default=w},512:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),s=(n(27),n(24),n(118),n(182)),f=n(119),p=n(32),d=r(p),h=n(73),m=r(h),y=function(e){function t(){var e,n,r,i;a(this,t);for(var l=arguments.length,u=Array(l),f=0;f<l;f++)u[f]=arguments[f];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.getGridTiles=function(){return b.map(function(e){return c.default.createElement(s.GridTile,{key:e.img,title:e.title,titleStyle:g.titleStyle,titleBackground:"linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"},c.default.createElement("img",{src:e.img,style:g.imageSize}))})},i=n,o(r,i)}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("main",{id:"home",style:g.main},c.default.createElement(f.Card,{style:g.card},c.default.createElement(f.CardHeader,{title:"Promotions",titleStyle:g.titleStyles}),c.default.createElement("div",{style:g.root},c.default.createElement(s.GridList,{style:g.gridList,cols:2.2,cellHeight:"auto"},this.getGridTiles()))),c.default.createElement("div",{style:g.middleWrapper},c.default.createElement("div",{style:g.middle},c.default.createElement(d.default,{label:"Subscribe to Our News Letter",fullWidth:!0})),c.default.createElement(m.default,null),c.default.createElement("div",{style:g.restaurant},"Restaurant"),c.default.createElement("div",{style:g.paragraph},"Hello! I am Maritza; a front end developer, and I made this app as a playground using react and redux. Open the react or redux dev tools and see whats going on. If a page is blank, it is under construction!!! Filler text is next: Our Award-Winning Restaurants features “The Food That Makes Us Feel Fat And Good At The Same Time!®” – a menu of high-quality, savory signature dishes such as: delicious breakfast options, Angus Beef steaks and burgers, fresh fish, and chicken. It also offers a broad selection of innovative, healthy, and beautifully presented salads, appetizers, and homemade desserts."),c.default.createElement(m.default,null)))}}]),t}(u.Component);t.default=y;var b=[{img:"http://roaringforkliquors.com/wp-content/uploads/2017/11/breakfast_7.jpg",title:"Breakfast",author:"jill111"},{img:"https://www.bobevans.com/-/media/bobevans_com/images/our-restaurants/menu/breakfast/waffle-breakfast-with-bacon.jpg?h=333&w=500&la=en&hash=DAB668251C6F07DE002A4DB9199B609E349EF3C9",title:"Waffles",author:"pashminu"},{img:"http://img.taste.com.au/yvNTTrsD/taste/2016/11/family-favourite-hamburgers-2911-1.jpeg",title:"Burger",author:"Danson67"},{img:"http://img.taste.com.au/uh-PS-4S/taste/2016/11/poached-chicken-salad-with-tomato-and-raspberry-dressing-91967-1.jpeg",title:"Salad",author:"fancycrave1"},{img:"http://www.handsonthomascounty.org/wp-content/uploads/2015/03/BGC-Steak-Dinner1.jpg",title:"Steak",author:"Hans"},{img:"http://foudefoodmtl.com/wp-content/uploads/2013/02/LobsterPasta-5.jpg",title:"lobster lasagna",author:"fancycravel"},{img:"http://www.simplyrecipes.com/wp-content/uploads/2016/08/2016-08-24-Harissa-Salmon-2.jpg",title:"Salmon",author:"jill111"},{img:"https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps26090_THAT2453289D12_14_5b_WEB.jpg",title:"Banana Cream Pie",author:"BkrmadtyaKarki"}],g={main:{height:"100%",width:"100%",overflow:"scroll",padding:"2em",boxSizing:"border-box"},card:{width:"100%",height:"25em",overflowX:"scroll",flexShrink:"0"},titleStyles:{fontSize:"30px",fontWeight:"300"},root:{width:"100%",height:"20em",display:"flex",justifyContent:"space-around",overflowX:"scroll"},gridList:{width:"100%",height:"100%",display:"flex",flexWrap:"nowrap",overflowX:"scroll"},imageSize:{height:"20em"},middleWrapper:{height:"60%",display:"flex",flexDirection:"column",justifyContent:"space-around"},middle:{width:"100%",height:"7em",display:"flex",justifyContent:"center",alignItems:"center"},restaurant:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"3em",fontWeight:"100"},paragraph:{fontWeight:"300",fontSize:"20px"}}},518:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),s=n(49),f=r(s),p=(n(120),n(32)),d=r(p),h=n(59),m=r(h),y=n(110),b=(r(y),function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleOpen=function(){e.setState({modalOpen:!0})},e.handleClose=function(){e.setState({modalOpen:!1,firstName:"",lastName:"",email:""})},e.firstNameHandler=function(t){e.setState({firstName:t.target.value})},e.lastNameHandler=function(t){e.setState({lastName:t.target.value})},e.emailHandler=function(t){e.setState({email:t.target.value})},e.state={modalOpen:!1,firstName:"",lastName:"",email:""},e}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("main",{style:g.textFields},c.default.createElement("h2",null,"APPLY HERE!"),c.default.createElement(f.default,{hintText:"FIRST NAME",value:this.state.firstName,onChange:this.firstNameHandler}),c.default.createElement(f.default,{hintText:"LAST NAME",value:this.state.lastName,onChange:this.lastNameHandler}),c.default.createElement(f.default,{hintText:"EMAIL",value:this.state.email,onChange:this.emailHandler}),c.default.createElement(d.default,{label:"UPLOAD RESUME",style:g.uploadButton,containerElement:"label"},c.default.createElement("input",{type:"file",style:g.uploadInput})),c.default.createElement(d.default,{label:"SUBMIT",fullWidth:!0,onClick:this.handleOpen}),c.default.createElement("div",null,c.default.createElement(m.default,{actions:[c.default.createElement(d.default,{label:"Close",primary:!0,onClick:this.handleClose})],open:this.state.modalOpen,onRequestClose:this.handleClose},"Thank You For Applying!")))}}]),t}(u.Component));t.default=b;var g={textFields:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",fontFamily:"Roboto, sans-serif"},uploadButton:{verticalAlign:"middle"},uploadInput:{cursor:"pointer",position:"absolute",top:0,bottom:0,right:0,left:0,width:"100%",opacity:0}}},527:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("main",{id:"contact",style:s.contact},u.default.createElement("span",null,"Contact"))}}]),t}(l.Component);t.default=c;var s={contact:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}},528:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return c({},e.food)}function u(e){return{dispatchGetLunch:(0,h.bindActionCreators)(g.getLunch,e),dispatchGetBreakfast:(0,h.bindActionCreators)(g.getBreakfast,e),dispatchGetDinner:(0,h.bindActionCreators)(g.getDinner,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),p=r(f),d=n(120),h=n(24),m=n(27),y=n(529),b=r(y),g=n(193),v=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=function(e){n.setState({value:e})},n.getBreakfast=function(){n.props.dispatchGetBreakfast()},n.getLunch=function(){n.props.dispatchGetLunch()},n.getDinner=function(){n.props.dispatchGetDinner()},n.getBreakfastItems=function(){return n.props.breakfast.map(function(e,t){return p.default.createElement(b.default,{key:t,title:e.name,price:e.price})})},n.getLunchItems=function(){return n.props.lunch.map(function(e,t){return p.default.createElement(b.default,{key:t,title:e.name,price:e.price})})},n.getDinnerItems=function(){return n.props.dinner.map(function(e,t){return p.default.createElement(b.default,{key:t,title:e.name,price:e.price})})},n.state={value:"a"},n}return i(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.dispatchGetBreakfast()}},{key:"render",value:function(){return p.default.createElement("main",{id:"food",style:_.food},p.default.createElement(d.Tabs,{value:this.state.value,onChange:this.handleChange,contentContainerStyle:_.tabContainer,tabTemplateStyle:_.tabTemplateStyle,style:{height:"100%"}},p.default.createElement(d.Tab,{onActive:this.getBreakfast,label:"Breakfast",value:"a"},p.default.createElement("div",{style:_.innerTab},this.getBreakfastItems())),p.default.createElement(d.Tab,{onActive:this.getLunch,label:"Lunch",value:"b",style:_.tabs},p.default.createElement("div",{style:_.tabs},p.default.createElement("div",{style:_.innerTab},this.getLunchItems()))),p.default.createElement(d.Tab,{onActive:this.getDinner,label:"Dinner",value:"c",style:_.tabs},p.default.createElement("div",{style:_.tabs},p.default.createElement("div",{style:_.innerTab},this.getDinnerItems())))))}}]),t}(f.Component);t.default=(0,m.connect)(l,u)(v);var _={food:{height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",overflow:"scroll"},headline:{fontSize:24,paddingTop:16,marginBottom:12,fontWeight:400},tabTemplateStyle:{height:"100%"},tabContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start"},innerTab:function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({display:"flex",flexDirection:"row",flexWrap:"wrap",overflow:"auto",maxHeight:"100%"},"overflow","auto")}},529:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{dispatchAddToCart:(0,h.bindActionCreators)(y.addToCart,e)}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),s=r(c),f=n(119),p=n(32),d=r(p),h=n(24),m=n(27),y=n(74),b=function(e){function t(){var e,n,r,i;a(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.clickHandler=function(){r.props.dispatchAddToCart({item:r.props.title,price:r.props.price})},i=n,o(r,i)}return i(t,e),u(t,[{key:"render",value:function(){return s.default.createElement(f.Card,{style:g.card},s.default.createElement(f.CardHeader,{title:this.props.title,subtitle:this.props.price,actAsExpander:!0,showExpandableButton:!0}),s.default.createElement(f.CardActions,null,s.default.createElement(d.default,{label:"Add to cart",onClick:this.clickHandler})),s.default.createElement(f.CardText,{expandable:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."))}}]),t}(c.Component);t.default=(0,m.connect)(null,l)(b);var g={card:{width:"calc(50% - 1em)",margin:".5em"}}},530:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.foodItems=[{type:"breakfast",name:"Eggs",price:2},{type:"breakfast",name:"Potatoes",price:4},{type:"breakfast",name:"Bacon",price:3},{type:"breakfast",name:"Sausage",price:2},{type:"breakfast",name:"White bread",price:2},{type:"breakfast",name:"Wheat bread",price:2},{type:"breakfast",name:"Croissant",price:3},{type:"breakfast",name:"Pancakes",price:5},{type:"breakfast",name:"Waffles",price:5},{type:"breakfast",name:"Crepes",price:5},{type:"lunch",name:"Chicken Sandwich",price:10},{type:"lunch",name:"Veggie Sandwich",price:8},{type:"lunch",name:"Chicken salad",price:12},{type:"lunch",name:"Veggie salad",price:10},{type:"lunch",name:"Pasta",price:14},{type:"lunch",name:"Burger",price:9},{type:"lunch",name:"fish tacos",price:12},{type:"lunch",name:"shrimp tacos",price:12},{type:"lunch",name:"Chicken burrito",price:11},{type:"lunch",name:"Steak burrito",price:12},{type:"dinner",name:"Steak and potatoes",price:20},{type:"dinner",name:"Chicken and potatoes",price:17},{type:"dinner",name:"Salmon and veggies",price:18},{type:"dinner",name:"BBQ Chicken",price:17},{type:"dinner",name:"Surf n Turf",price:18},{type:"dinner",name:"Lobser pasta",price:22},{type:"dinner",name:"BBQ Ribs",price:25},{type:"dinner",name:"Lobser",price:23},{type:"dinner",name:"Cake and Icecream",price:10},{type:"dinner",name:"Banna creame pie",price:10}]},531:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("main",{id:"locations",style:s.locations},u.default.createElement("span",null,"Locations"))}}]),t}(l.Component);t.default=c;var s={locations:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}},532:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(24),o=n(533),i=r(o),l=n(534),u=r(l),c=n(535),s=r(c),f=(0,a.combineReducers)({overlays:i.default,food:u.default,cart:s.default});t.default=f},533:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case a.HOME_DRAWER:var n={homeDrawerOpen:t.payload};return r({},e,n);default:return r({},e)}};var a=n(118),o={homeDrawerOpen:!0}},534:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case a.GET_BREAKFAST:var n={breakfast:t.payload};return r({},e,n);case a.GET_LUNCH:var i={lunch:t.payload};return r({},e,i);case a.GET_DINNER:var l={dinner:t.payload};return r({},e,l);default:return r({},e)}return r({},e)};var a=n(193),o={breakfast:[],lunch:[],dinner:[]}},535:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case a.REMOVE_FROM_CART:var n=e.orders.slice(),i=n.indexOf(t.payload);n.splice(i,1);return r({},e,{orders:n});case a.ADD_TO_CART:var l=e.orders.slice();l.push(t.payload.item);var u=e.price+t.payload.price;return r({},e,{orders:l,price:u});case a.TOGGLE_CART_DRAWER:var c={drawerOpen:t.payload};return r({},e,c)}return r({},e)};var a=n(74),o={orders:[],price:0,drawerOpen:!1}},561:function(e,t,n){var r=n(562);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0};a.transform=void 0;n(108)(r,a);r.locals&&(e.exports=r.locals)},562:function(e,t,n){t=e.exports=n(107)(void 0),t.push([e.i,".container,body{position:fixed;top:0;left:0;height:100%;width:100%;margin:0}body *{font-family:roboto}a{color:inherit;text-decoration:inherit}",""])},74:function(e,t,n){"use strict";function r(e){return{type:i,payload:e}}function a(e){return{type:l,payload:e}}function o(e){return{type:u,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.addToCart=r,t.toggleCartDrawer=a,t.removeFromCart=o;var i=t.ADD_TO_CART="ADD_TO_CART",l=t.TOGGLE_CART_DRAWER="TOGGLE_CART_DRAWER",u=t.REMOVE_FROM_CART="REMOVE_FROM_CART"}},[332]);