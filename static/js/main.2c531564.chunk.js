(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(5),a=n.n(c),o=(n(15),n(4)),i=n.n(o),h=n(6),u=n(7),l=n(8),d=n(2),j=n(10),p=n(9),m=(n(17),n(18),n(0)),f=function(e){return Object(m.jsxs)("div",{className:"card-container",children:[Object(m.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(m.jsx)("h2",{children:e.monster.name}),Object(m.jsx)("p",{children:e.monster.email})]})},b=(n(20),function(e){return Object(m.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(m.jsx)(f,{monster:e},e.id)}))})}),O=(n(21),function(e){var t=e.placeholder,n=e.handleChange;return Object(m.jsx)("input",{type:"search",placeholder:t,className:"search",onChange:n})}),x=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){return e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState((function(){return{monsters:n}}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Monster Rolodex"}),Object(m.jsx)(O,{placeholder:"search monsters",handleChange:this.handleChange}),Object(m.jsx)(b,{monsters:r})]})}}]),n}(s.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),g()}],[[22,1,2]]]);
//# sourceMappingURL=main.2c531564.chunk.js.map