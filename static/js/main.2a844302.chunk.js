(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var c=n(7),i=n(1),a=n.n(i),r=n(14),o=n.n(r),s=(n(121),n(109)),d=n(184),l=(n(122),n(186)),b=n(185),u=n(181),j=n(164),p=n(183),O=n(22),m=a.a.memo((function(e){var t=Object(O.c)((function(e){return e.cart.books})).some((function(t){return t.id===e.book.id}));return Object(c.jsxs)(u.a,{container:!0,direction:"column",justify:"space-between",alignItems:"center",style:{minHeight:"550px"},children:[Object(c.jsx)(u.a,{item:!0,children:Object(c.jsx)("img",{src:e.book.image,alt:"book",style:{maxWidth:"100px"}})}),Object(c.jsxs)(u.a,{item:!0,children:[Object(c.jsx)("p",{children:e.book.title}),Object(c.jsx)("p",{children:e.book.description}),Object(c.jsx)("p",{children:e.book.author}),Object(c.jsx)("p",{children:"".concat(e.book.price," $")})]}),Object(c.jsx)(u.a,{item:!0,children:Object(c.jsx)(l.a,{variant:"contained",disabled:t,color:"primary",onClick:function(){e.addToCart(e.book)},children:"add cart"})})]})})),x=n(104),f=n(83),h=n.n(f),k=n(105),y=n(42),g=n(85);g.a.initializeApp({apiKey:"AIzaSyBf1G7QLO4zdA5W1PVZ_RP1xx8jLyNq2uM",authDomain:"bookshop-firebase.firebaseapp.com",databaseURL:"https://bookshop-firebase-default-rtdb.firebaseio.com",projectId:"bookshop-firebase",storageBucket:"bookshop-firebase.appspot.com",messagingSenderId:"868504473049",appId:"1:868504473049:web:b7eaae96a5ebc350f8ddc8"});var v=g.a,C=Object(y.b)("catalog/fetchBooks",Object(k.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,v.database().ref("book").once("value",(function(e){t=e.val()}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),I=Object(y.c)({name:"catalog",initialState:{book:[]},reducers:{},extraReducers:function(e){e.addCase(C.fulfilled,(function(e,t){e.book=t.payload}))}}),S=I.reducer;Object(x.a)(I.actions);var w=n(38),P=Object(y.c)({name:"cart",initialState:{books:[],totalPrice:0},reducers:{addToCart:function(e,t){e.books.every((function(e){return e.id!==t.payload.id}))&&e.books.push(Object(w.a)(Object(w.a)({},t.payload),{},{count:1}))},incrQuantityAC:function(e,t){var n=e.books.findIndex((function(e){return e.id===t.payload.productId}));e.books[n].count+=1},decrQuantityAC:function(e,t){var n=e.books.findIndex((function(e){return e.id===t.payload.productId}));e.books[n].count-=1,0===e.books[n].count&&e.books.splice(n,1)},calculateCost:function(e,t){var n=e.books.reduce((function(e,t){return e+t.price*t.count}),0);n=Math.floor(100*n)/100,e.totalPrice=n}}}),F=P.reducer,T=P.actions,A=T.addToCart,Q=T.incrQuantityAC,E=T.decrQuantityAC,_=T.calculateCost,W=a.a.memo((function(){var e=Object(O.c)((function(e){return e.catalog.book})),t=Object(O.b)();Object(i.useEffect)((function(){t(C())}),[t]);var n=Object(i.useCallback)((function(e){t(A(e)),t(_())}),[t]),a=e.map((function(e){return Object(c.jsx)(u.a,{item:!0,style:{margin:"10px"},md:3,children:Object(c.jsx)(j.a,{elevation:3,style:{padding:"10px",minHeight:"500px"},children:Object(c.jsx)(m,{book:e,addToCart:n})})},e.id)}));return Object(c.jsx)(p.a,{children:Object(c.jsx)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,children:a})})})),B=a.a.memo((function(e){return Object(c.jsxs)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",alignContent:"center",style:{padding:"10px"},children:[Object(c.jsx)(u.a,{container:!0,item:!0,xs:12,md:4,alignContent:"center",justify:"center",children:Object(c.jsx)("img",{src:e.book.image,alt:"",style:{maxWidth:"100px"}})}),Object(c.jsxs)(u.a,{container:!0,item:!0,xs:12,md:4,direction:"column",justify:"space-evenly",children:[Object(c.jsxs)("p",{children:["Title : ",e.book.title]}),Object(c.jsxs)("p",{children:["Author: ",e.book.author]}),Object(c.jsxs)("p",{children:["Price: ",e.book.price," $"]})]}),Object(c.jsxs)(u.a,{container:!0,item:!0,xs:12,md:4,justify:"space-evenly",alignItems:"center",direction:"row",children:[Object(c.jsx)(l.a,{variant:"contained",color:"primary",size:"small",onClick:e.decrQuantity,children:"-"}),Object(c.jsx)("div",{children:e.book.count}),Object(c.jsx)(l.a,{variant:"contained",color:"primary",size:"small",onClick:e.incrQuantity,children:"+"})]})]})})),L=n(108),R=n(59),z=n.n(R),D=a.a.memo((function(){var e=Object(L.a)({initialValues:{name:"",surname:"",address:"",phone:""},onSubmit:function(e){}});return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)(z.a,Object(w.a)({id:"name",type:"text",label:"Filled",variant:"outlined",fullWidth:!0,margin:"dense"},e.getFieldProps("name"))),Object(c.jsx)(z.a,Object(w.a)({id:"surname",label:"Filled",variant:"outlined",fullWidth:!0,margin:"dense"},e.getFieldProps("surname"))),Object(c.jsx)(z.a,Object(w.a)({id:"address",label:"Filled",variant:"outlined",fullWidth:!0,margin:"dense"},e.getFieldProps("address"))),Object(c.jsx)(z.a,Object(w.a)({id:"phone",label:"Filled",variant:"outlined",fullWidth:!0,margin:"dense"},e.getFieldProps("phone"))),Object(c.jsx)(l.a,{variant:"outlined",color:"primary",type:"submit",children:"ORDER"})]})})),M=a.a.memo((function(){var e=Object(O.c)((function(e){return e.cart.books})),t=Object(O.b)(),n=Object(i.useCallback)((function(e){t(Q({productId:e})),t(_())}),[t]),a=Object(i.useCallback)((function(e){t(E({productId:e})),t(_())}),[t]),r=e.map((function(e){return Object(c.jsx)(j.a,{style:{marginBottom:"10px"},children:Object(c.jsx)(B,{book:e,incrQuantity:function(){return n(e.id)},decrQuantity:function(){return a(e.id)}})},e.id)}));return Object(c.jsx)(p.a,{children:Object(c.jsxs)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:3,style:{marginTop:"20px"},children:[Object(c.jsx)(u.a,{item:!0,xs:12,sm:12,md:8,children:r}),Object(c.jsx)(u.a,{item:!0,xs:12,sm:12,md:4,children:Object(c.jsx)(j.a,{elevation:3,style:{padding:"10px"},children:Object(c.jsx)(D,{})})})]})})}));var N=function(){Object(O.b)();var e=Object(i.useState)(!0),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(O.c)((function(e){return e.cart.totalPrice})),o=function(){a(!n)},u=n?Object(c.jsx)(l.a,{variant:"outlined",color:"secondary",onClick:o,children:"Cart"}):Object(c.jsx)(l.a,{variant:"outlined",color:"secondary",onClick:o,children:"Shop"});return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d.a,{position:"static",children:Object(c.jsxs)(b.a,{children:[u,r?Object(c.jsxs)("div",{children:[r," $"]}):null]})}),n?Object(c.jsx)(W,{}):Object(c.jsx)(M,{})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))},$=n(27),H=n(58),J=Object($.c)({catalog:S,cart:F}),U=Object(y.a)({reducer:J,middleware:function(e){return e().prepend(H.a)}});window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d;o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O.a,{store:U,children:Object(c.jsx)(N,{})})}),document.getElementById("root")),V()}},[[157,1,2]]]);
//# sourceMappingURL=main.2a844302.chunk.js.map