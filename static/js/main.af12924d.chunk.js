(window.webpackJsonpwebpage=window.webpackJsonpwebpage||[]).push([[0],{105:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=a(119),i=a(120),m=(a(67),a(54)),u=a.n(m),s=a(55),p=a.n(s),d=function(){return r.a.createElement("div",{className:"homePage"},r.a.createElement("div",{className:"top"},r.a.createElement("img",{src:p.a,id:"no2",alt:"header"}),r.a.createElement("img",{src:u.a,id:"no1",alt:"header"})),r.a.createElement("div",{className:"content"},r.a.createElement(l.a,{fluid:!0},r.a.createElement(i.a,null,r.a.createElement("h1",null,"Welcome To G.B`s WebSite"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus euismod ullamcorper. Donec et fringilla diam, a fermentum elit. Fusce dignissim luctus turpis, et fringilla est aliquam vitae. Curabitur ornare mauris fringilla, volutpat nisl at, convallis erat. Vivamus quis justo molestie dui ultrices sagittis nec non orci. Mauris condimentum vehicula fringilla. Nullam eget mauris leo. Vestibulum sem dui, semper vel risus ultrices, dictum volutpat libero. Etiam vestibulum nunc sed finibus luctus. Phasellus euismod elit elementum nisl auctor, eu rhoncus ligula sagittis.")))))},h=a(6),E=a(5),g=a.n(E),f=a(11),b=a.n(f),v=a(14),O=(a(91),function(e){var t=Object(n.useState)({}),a=Object(h.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)(function(){g.a.get("https://company-webpage.herokuapp.com/api/auth/user",{headers:{token:localStorage.token}}).then(function(e){o(e.data)}).catch(function(e){console.log(e)})},[]),r.a.createElement("div",null,r.a.createElement(b.a,{justify:!0,variant:"tabs",defaultActiveKey:"link-1"},r.a.createElement(b.a.Item,null,r.a.createElement(v.LinkContainer,{to:"/home"},r.a.createElement(b.a.Link,{eventKey:"link-1"},"Home"))),r.a.createElement(b.a.Item,null,r.a.createElement(v.LinkContainer,{to:"/product"},r.a.createElement(b.a.Link,{eventKey:"link-2"},"Product"))),r.a.createElement(b.a.Item,null,r.a.createElement(v.LinkContainer,{to:"/about"},r.a.createElement(b.a.Link,{eventKey:"link-3"},"About"))),"user"!==c.authority&&localStorage.token?r.a.createElement(b.a.Item,null,r.a.createElement(v.LinkContainer,{to:"/addproduct"},r.a.createElement(b.a.Link,{eventKey:"link-4"},"Add Product"))):null,localStorage.token?r.a.createElement(b.a.Item,{onClick:function(t){t.preventDefault(),localStorage.removeItem("token"),e.history.push("/home")}},r.a.createElement(b.a.Link,{eventKey:"link-6"},"LogOut")):r.a.createElement(b.a.Item,null,r.a.createElement(v.LinkContainer,{to:"/login"},r.a.createElement(b.a.Link,{eventKey:"link-5"},"Login")))))}),y=a(124),S=(a(105),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"aboutPage"},r.a.createElement(y.a,null,r.a.createElement(y.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://picsum.photos/id/240/300/200",alt:"First slide"}),r.a.createElement(y.a.Caption,null,r.a.createElement("h3",null,"First slide label"),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),r.a.createElement(y.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://picsum.photos/id/241/300/200",alt:"Third slide"}),r.a.createElement(y.a.Caption,null,r.a.createElement("h3",null,"Second slide label"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),r.a.createElement(y.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://picsum.photos/id/242/300/200",alt:"Third slide"}),r.a.createElement(y.a.Caption,null,r.a.createElement("h3",null,"Third slide label"),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))))),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",null,r.a.createElement("h2",null,"About US"),r.a.createElement("h5",null,"Blog"),r.a.createElement("h5",null,"About"),r.a.createElement("h5",null,"Product"),r.a.createElement("h5",null,"Contact "),r.a.createElement("h5",null,"Pricing")),r.a.createElement("div",null,r.a.createElement("h2",null,"Find US"),r.a.createElement("h5",null,"Social Media"),r.a.createElement("h5",null,"Marketing"),r.a.createElement("h5",null,"Product Updates"),r.a.createElement("h5",null,"RSS Feed")),r.a.createElement("div",null,r.a.createElement("h2",null,"License"),r.a.createElement("h5",null,"Terms"),r.a.createElement("h5",null,"Privacy"),r.a.createElement("h5",null,"Help"))))}),k=a(123),w=a(125),j=a(121),A=a(59),P=a.n(A),L=a(60),C=a.n(L),I=(a(112),function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([0]),l=Object(h.a)(o,2),i=l[0],m=l[1],u=Object(n.useState)({}),s=Object(h.a)(u,2),p=s[0],d=s[1];Object(n.useEffect)(function(){g.a.get("https://company-webpage.herokuapp.com/api/product",{headers:{token:localStorage.token}}).then(function(e){c(e.data)}).catch(function(e){console.log(e)})},[]),Object(n.useEffect)(function(){g.a.get("https://company-webpage.herokuapp.com/api/auth/user",{headers:{token:localStorage.token}}).then(function(e){d(e.data)}).catch(function(e){console.log(e)})},[]),Object(n.useEffect)(function(){g.a.get("https://company-webpage.herokuapp.com/api/likes").then(function(e){m(e.data)}).catch(function(e){console.log(e)})},[]);var E=function(e){e.preventDefault();var t={id_product:e.target.id,id_user:p.id};g.a.put("https://company-webpage.herokuapp.com/api/likes",t).then(function(e){m(e.data)}).catch(function(e){console.log(e)})},f=function(e,t){return i.find(function(a){return a.id_product===e&&a.id_user===t})};return r.a.createElement("div",null,localStorage.token?r.a.createElement("div",{className:"productPage"},a.map(function(e,t){return r.a.createElement(w.a,{style:{width:"18rem"},key:t},r.a.createElement(w.a.Img,{variant:"top",src:e.img}),r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null,e.name),r.a.createElement(w.a.Text,null,"Price: ",e.price,"$"),r.a.createElement("div",{className:"cardBottom"},r.a.createElement(v.LinkContainer,{to:"/product/".concat(e.id)},r.a.createElement(j.a,{variant:"primary"},"View Detiled")),r.a.createElement("div",{className:"likeSection"},r.a.createElement("h5",null,i.map(function(t){return t.id_product===e.id?t.likes:0}).reduce(function(e,t){return e+t})),r.a.createElement("img",{className:"likeBtn",id:e.id,src:f(e.id,p.id)&&1===f(e.id,p.id).likes?P.a:C.a,alt:"like button",onClick:E})))))})):r.a.createElement("div",{className:"alert"},r.a.createElement(k.a,{variant:"danger"},r.a.createElement(k.a.Heading,null,"Hey, nice to see you"),r.a.createElement("p",null,"Sorry But you neet to login first."),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"If you don`t have account, please register first."))))}),N=a(10),x=a(122);a(113);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var U=function(){var e=Object(n.useState)({name:"",description:"",img:"",price:""}),t=Object(h.a)(e,2),a=t[0],c=t[1],o=function(e){e.persist(),c(function(t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach(function(t){Object(N.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,Object(N.a)({},e.target.name,e.target.value))})};return r.a.createElement("div",{className:"add-product"},r.a.createElement(x.a,{onSubmit:function(e){e.preventDefault(),g.a.post("https://company-webpage.herokuapp.com/api/product/add",a).then(function(e){console.log(e),console.log(e.data),alert("congrats U have successfully added new product")}).catch(function(e){console.log(e)})}},r.a.createElement(x.a.Group,{controlId:"formBasicText"},r.a.createElement(x.a.Label,null,"Name"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter Name",onChange:o,name:"name",value:a.name}),r.a.createElement(x.a.Text,{className:"text-muted"},"We'll never share your password with anyone else.")),r.a.createElement(x.a.Group,{controlId:"formBasicText"},r.a.createElement(x.a.Label,null,"Description"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Description",onChange:o,name:"description",value:a.description})),r.a.createElement(x.a.Group,{controlId:"formBasicText"},r.a.createElement(x.a.Label,null,"Image"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Image URL",onChange:o,name:"img",value:a.img})),r.a.createElement(x.a.Group,{controlId:"formBasicText"},r.a.createElement(x.a.Label,null,"Price: $"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Product Price in USD",onChange:o,name:"price",value:a.price})),r.a.createElement(j.a,{variant:"primary",type:"submit"},"Add")))},B=a(61);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var K=function(e){var t=Object(n.useState)({}),a=Object(h.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)({}),m=Object(h.a)(i,2),u=m[0],s=m[1],p=Object(n.useState)([]),d=Object(h.a)(p,2),E=d[0],f=d[1],b=Object(n.useState)([]),O=Object(h.a)(b,2),y=O[0],S=O[1],k=Object(n.useState)({}),w=Object(h.a)(k,2),A=w[0],P=w[1];Object(n.useEffect)(function(){var t=e.match.params.id;g.a.get("https://company-webpage.herokuapp.com/api/product/".concat(t),{headers:{token:localStorage.token}}).then(function(e){o(e.data)}).catch(function(e){console.log(e)})},[e.match.params.id]),Object(n.useEffect)(function(){g.a.get("https://company-webpage.herokuapp.com/api/auth/user",{headers:{token:localStorage.token}}).then(function(e){s(e.data)}).catch(function(e){console.log(e)})},[]),Object(n.useEffect)(function(){var t=e.match.params.id;g.a.get("https://company-webpage.herokuapp.com/api/comments/".concat(t)).then(function(e){f(e.data)}).catch(function(e){console.log(e)})},[e.match.params.id]),Object(n.useEffect)(function(){g.a.get("https://company-webpage.herokuapp.com/api/users").then(function(e){S(e.data)}).catch(function(e){console.log(e)})},[]);var L=function(e){e.preventDefault();var t=e.target.id;g.a.delete("https://company-webpage.herokuapp.com/api/comments/".concat(t),{headers:{token:localStorage.token}}).then(function(e){f(E.filter(function(e){return e.id.toString()!==t}))}).catch(function(e){console.log(e)})};return r.a.createElement("div",null,r.a.createElement(l.a,{className:"detiled"},r.a.createElement("div",{className:"description"},r.a.createElement("div",{className:"detText"},r.a.createElement("h1",null,c.name),r.a.createElement("p",null,c.description),r.a.createElement("h2",null,c.price,"$")),r.a.createElement("div",{className:"detImg"},r.a.createElement("img",{src:c.img,alt:"avatar"}))),r.a.createElement("div",{className:"detiledBtns"},r.a.createElement(v.LinkContainer,{to:"/product"},r.a.createElement(j.a,{variant:"primary"},"Go Back")),"user"!==u.authority?r.a.createElement("div",null,r.a.createElement(v.LinkContainer,{to:"/product/edit/".concat(c.id)},r.a.createElement(j.a,{variant:"dark"},"Edit")),r.a.createElement(j.a,{variant:"danger",onClick:function(t){t.preventDefault();var a=e.match.params.id;g.a.delete("https://company-webpage.herokuapp.com/api/product/".concat(a),{headers:{token:localStorage.token}}).then(function(){e.history.push("/product")}).catch(function(e){console.log(e),alert({message:"there was error while deleting"})})}},"Delete")):null)),r.a.createElement("div",{id:"commentsSection"},E.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"comments"},r.a.createElement("img",{src:"https://www.pinclipart.com/picdir/middle/200-2008697_account-customer-login-man-user-icon-login-icon.png",alt:"avatar"}),r.a.createElement(l.a,{className:"commentsText"},r.a.createElement("p",null,r.a.createElement("strong",null,y.map(function(t){if(t.id===e.id_user)return t.username})," "),e.text)),e.id_user===u.id||"admin"===u.authority?r.a.createElement("img",{src:"data:image/png;base64,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",alt:"delete btn",onClick:L,className:"deleteBtn",id:e.id}):null),r.a.createElement("div",{className:"comDate"},r.a.createElement("p",null,e.created_at)))}),r.a.createElement("div",{className:"newComment"},r.a.createElement("img",{src:"https://www.pinclipart.com/picdir/middle/200-2008697_account-customer-login-man-user-icon-login-icon.png",alt:"avatar"}),r.a.createElement(x.a,{onSubmit:function(e){e.preventDefault();var t=e.target;g.a.post("https://company-webpage.herokuapp.com/api/comments/add",A,{headers:{token:localStorage.token}}).then(function(e){f([].concat(Object(B.a)(E),[e.data])),P({text:""}),t.reset()}).catch(function(e){console.log(e)})},className:"commentForm"},r.a.createElement(x.a.Control,{id:"commentInput",type:"text",placeholder:"Write a comment...",name:"text",value:P.text,onChange:function(t){t.persist(),P(function(a){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach(function(t){Object(N.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},A,Object(N.a)({id_user:u.id,id_product:e.match.params.id},t.target.name,t.target.value))})}})))))};function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var T=function(e){var t=Object(n.useState)({name:"",description:"",img:"",price:""}),a=Object(h.a)(t,2),c=a[0],o=a[1],i=function(e){e.persist(),o(function(t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach(function(t){Object(N.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,Object(N.a)({},e.target.name,e.target.value))})};Object(n.useEffect)(function(){var t=e.match.params.id;g.a.get("https://company-webpage.herokuapp.com/api/product/".concat(t),{headers:{token:localStorage.token}}).then(function(e){o(e.data)}).catch(function(e){console.log(e)})},[e.match.params.id]);return r.a.createElement("div",null,r.a.createElement(l.a,{className:"detiled"},r.a.createElement("div",{className:"description"},r.a.createElement("div",{className:"detText"},r.a.createElement(x.a.Control,{type:"text",placeholder:"Name",value:c.name,onChange:i,name:"name"}),r.a.createElement(x.a.Control,{size:"sm",type:"text",placeholder:"Description",value:c.description,onChange:i,name:"description"}),r.a.createElement(x.a.Control,{type:"text",placeholder:"Price",value:c.price,onChange:i,name:"price"})),r.a.createElement("div",{className:"detImg"},r.a.createElement(x.a.Control,{size:"lg",type:"text",placeholder:"Img src",value:c.img,onChange:i,name:"img"}))),r.a.createElement(j.a,{variant:"primary",onClick:function(t){t.preventDefault();var a=e.match.params.id;g.a.put("https://company-webpage.herokuapp.com/api/product/".concat(a),c,{headers:{token:localStorage.token}}).then(function(t){e.history.push("/product/".concat(a))}).catch(function(e){console.log(e)})}},"Save")))};a(114);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var Q=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(h.a)(t,2),c=a[0],o=a[1],l=function(e){e.persist(),o(function(t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach(function(t){Object(N.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,Object(N.a)({},e.target.name,e.target.value))})};return r.a.createElement("div",{className:"loginPage"},r.a.createElement(x.a,{onSubmit:function(t){t.preventDefault(),g.a.post("https://company-webpage.herokuapp.com/api/auth/login",c).then(function(t){console.log(t),console.log(t.data),localStorage.setItem("token",t.data.token),e.history.push("/home")}).catch(function(e){console.log(e),alert("Invalid Credentials")})}},r.a.createElement(x.a.Group,{controlId:"formBasicEmail"},r.a.createElement(x.a.Label,null,"UserName"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter UserName",onChange:l,name:"username",value:c.username}),r.a.createElement(x.a.Text,{className:"text-muted"},"We'll never share your password with anyone else.")),r.a.createElement(x.a.Group,{controlId:"formBasicPassword"},r.a.createElement(x.a.Label,null,"Password"),r.a.createElement(x.a.Control,{type:"password",placeholder:"Password",onChange:l,name:"password",value:c.password})),r.a.createElement("div",{className:"btns"},r.a.createElement(j.a,{variant:"primary",type:"submit"},"Submit"),r.a.createElement(v.LinkContainer,{to:"/register"},r.a.createElement(j.a,{variant:"secondary",type:"button"},"Register")))))};a(115);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var M=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(h.a)(t,2),c=a[0],o=a[1],l=function(e){e.persist(),o(function(t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach(function(t){Object(N.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,Object(N.a)({},e.target.name,e.target.value))})};return r.a.createElement("div",{className:"registerPage"},r.a.createElement(x.a,{onSubmit:function(t){t.preventDefault(),g.a.post("https://company-webpage.herokuapp.com/api/auth/register",c).then(function(t){console.log(t),console.log(t.data),alert("Congrats U registered Successfully"),e.history.push("/home")}).catch(function(e){console.log(e)})}},r.a.createElement(x.a.Group,{controlId:"formBasicEmail"},r.a.createElement(x.a.Label,null,"UserName"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter UserName",onChange:l,name:"username",value:c.username}),r.a.createElement(x.a.Text,{className:"text-muted"},"We'll never share your password with anyone else.")),r.a.createElement(x.a.Group,{controlId:"formBasicPassword"},r.a.createElement(x.a.Label,null,"Password"),r.a.createElement(x.a.Control,{type:"password",placeholder:"Password",onChange:l,name:"password",value:c.password})),r.a.createElement(j.a,{variant:"primary",type:"submit"},"Register")))},z=a(17);var G=function(){return r.a.createElement("div",null,r.a.createElement(z.d,{path:"/",component:O}),r.a.createElement(z.d,{exact:!0,path:"/",component:d}),r.a.createElement(z.d,{exact:!0,path:"/home",component:d}),r.a.createElement(z.d,{exact:!0,path:"/product",component:I}),r.a.createElement(z.d,{exact:!0,path:"/about",component:S}),r.a.createElement(z.d,{exact:!0,path:"/login",component:Q}),r.a.createElement(z.d,{exact:!0,path:"/register",component:M}),r.a.createElement(z.d,{exact:!0,path:"/AddProduct",component:U}),r.a.createElement(z.d,{exact:!0,path:"/product/:id",component:K}),r.a.createElement(z.d,{exact:!0,path:"/product/edit/:id",component:T}))},X=(a(116),a(22));o.a.render(r.a.createElement(X.HashRouter,null,r.a.createElement(z.g,null,r.a.createElement(G,null))),document.getElementById("root"))},54:function(e,t,a){e.exports=a.p+"static/media/header1.641a9333.png"},55:function(e,t,a){e.exports=a.p+"static/media/header2.3f6967a3.png"},59:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABGCAYAAACwqagoAAAFI0lEQVR4nO2cS4gcRRjH/10zs7NZN1mzk5ANexB2c5Ik6kGiRgSjWQQlLHpYhEg8KPi4aQ6iePKBhyh48A3iE9lDRBJFiShENL5ASSJe1OjBhSDuY9xNsr09MyVfbXczz35Wd9fM1O8ysD298/W/v6qvHt9XBuccUVh5c5ZXfziNyve/ArUawFjn/2Jfz+2cQP663Rh++F4j0o+GZPnJI3ztu7PAP4vrN/rYaJQ2obD3amx86nAk+0KLWX7gcU4CGkNFoFgI92umJT74yiWwHeMo7NsjXdjy4Wd49dsz4BfNyDaKezcPozB1AzY+9lBg+wKLuXTPI7z6y7loBnbCNnzw4O247NH7Y4mapH3F+6YDvfRAYs5fdYAbwxvkGdmM7bGj38yGFlQ05WNfIUn7+OIK2MR2bD76iqd9vmLOXzPNyeXTgM//h4G7bwvctBbvepDz8wvJveRmTMvzhXuKmaaQDuQF+T1XYuTVZz0FXdg7s254WkLa0AsvnT7W1raOYmYhpItpgU2M4/J3X2hrtOh2Spuysc1+4aWfP2qxre1YQRiblZBY97bauTkRmZsvkUdmKSRBQW5+/6EW21rEVMFYQbGAyhc/YuWlt1yjqY/M1igb6lr+LWP5uZcb7GkQs/li1lDrMF//0LUt1WDjA9m29sFnDV9q6DMz7Sc94LkcjIurygjpYlrI7Zp0g6XrmReef4OLAa+CGNWqekLC7opoOm3jiml+clJNgxWHHNDpHl0xKdxrIlAswDp+Eq6YNCVTtYl3A7RwQxiVSoWX9x/qdz3iYVoo3nkrGJ87L6ZImnisnfoJrPLbn96Lphp/aMb2+xwYlpa1WpJg1b/+hg4+EmAMrLZU7vrnUAVWu2T2uwbS0JFHIoxt0P2lLJgxtqU3nkQBWH5sm9jO1MSkVgMztm/VMkqC5SevWE9f0USHNgB3jIPltm2FEns+XQ4lKNDQyKBkJSerQhMeJ+aIcSZlfekgFB930K7n5xExLeRvuVbc64qZu363buoRoBY9cuSJxt1J+oNu6hHYMuLe0zg3r7ugCQBtV0zf7H6vJXFL1UQEFWlO4GpdNdLeGQgSkjKK62mbUph1yl43QCk7pc/fbkgrbLueOXDgJh3ZPRDNu0lIdBIzaulGX2BaGLjjxrZP6p2GrZt7I6YFY2y0Y6GAUgUCyuNTIOC7BzQwM6WTuux+0q+0JlAdEFWlVc/+0bcph14VFvUErlBLveZGEYIKiTBbvdTpUufbT0MmMQQKKCSiFKJSyYaS+eWS6VTr40WkEumFfQe58NAeFTSKkIia0TH65XsGHxrsySYfVUhE9UyHXvPQOEIibq5RL3loXCEhI3GLJvzdHuXF8CemkJCVBdfNw6Yw40g/pKUUkqBU+tZNU0+ZQkJ2fibVENK2ZzcIKltIxI3mnaDyt7XZE1B1tSkJIZGUmLDPPTJffF+9PCafZbQ4JCYmsXr0U37h6dfU8FA6VmdosO12gywSFdNBLDDLPG8oLD5nfsgilQIBMYYjITMYOlEwpNSfpIVEmtUWNFsi70hTUBKSTvNycoGSJpVmXg+dCEMHmSTdjyYVsb1IXUzYR1isvnM8mUhvn98mY3oYlkzEdJC+8+mzFZs0mVaokfeI2ZKEflQEml2TmQkJFcr9SNC4iyTiQL6ZKd/z45Im02Zejzi68eOvQwcmGeuQslBGTISdgsY4czMplBLTwW/GJPrHnROpDMTDoKSYBK08WSdOtSznBTlhNRMA/A9KsIzm+D77kgAAAABJRU5ErkJggg=="},60:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABGCAYAAACwqagoAAAHo0lEQVR4nO2c3U8TTRTGDyshIipfASFIUEAisYAXCgbj5xUJ8cLwdxIuiLcWJRKFxJhgU0RCJEgUiKLBb4W+eZbOvmdmZ7bb7e62wP4SRbele/rsmTNnZs5MVS6XoyDMz8/ntre36devX2RZlucn7O/v08mTJ6mxsZFGR0erAt2wSDKZjG3f7u4u/fnzx5eNTU1N1NraSleuXAlkY1FiwsB3797ZxlVXVwf6kv/+/bN/Qti7d++GKmw2m819/PiRvnz5Yv+/FBsbGhro/PlOunSp17eNvsWcnp7O4SY6A4VAJkxfCr9XU1ND4+PjJYkKEVdWVshkX1Abi7WvoJgzMzO5nZ0d183EjeBh9fX1dPr0aaqtrXVe//v3r/2eb9++0devXwmfAY/WGY73BfXUR48e5XQtRQgLu+rq6ujMmTN06tQpo41bW1v2T90DwbWOjg4aHh72tM9TTBiKWKJ+8Llz56i3t5eam5vpxIkTvr703t4e/fz5k9bX10k0RZ03PHjwwJeg8MalpSXjg7l48aId/7h4hYB9EHV1ddVln2j69+7dM9pnFBPNWjUSH3b9+nX7aZcKjM5kMlqjHz586CkoOr+NjQ3X77W3t1MqlQrFPnz+q1evpP6hkKBaMVWPxIekUgMIxiUbqfL27QotLWWlq/gCExMTWoNVIUW4wUOGJ4bN/Pw8qfdDy9RlJS4x5+bmcpubm9Iv37x5MxJDBYhVCwsLkpfqPBTZxPLysuuLjYyM+A43Qchms8RDCu7b19fnSqFcyZcq5PDwcKRCAjTL27dv201I9LqwQQ01qpDoFEZHRyMVEvT399Ply5cl2yCuiiTm1NRUjhuLpg2D4wCCCEE56XQ6p7Mt37vGYpsQFDFZgNAibBM4YqIJ8RfQI0YRI72AoDdu3JBGKwgBiOG8s4HgcQopQFzmiMGBwLEaIxthMDqAa9euxW4sQCpz9epVJyel/FBPAK9Uv1Rc4GEPDg5KzZ17pyMmN76zszOU9CIoaML4o45aROgpp21dXV1SKOLeaYsJdXk86unpKYedEkNDQ65riFNxhx4d3d3d2uGpLSZXF6pjZFNu0Ny5dx54ZarsdgFkN3iwlG/qiOn4t7W2tua0eRjc1tZWRjNlBgYGbKMRgg5mcc5XhF140OigBZiGBNXIKzlR55TFAKPHxsbslgMxo84ni6GlpdXJyZF9wCmrv3//7vTi+KnmeeUGAlZC2FFpamqUriCFs/CXAApX0tOvZDCdJ4ATYprR4ikR5v0S/IEQxAcSv3//loeTXO2EwvCR2o8fP9wTHQnBwCgtETNEJDHVJYoE/6DJS2KK5DPBH9z50N9YYlgEkHMm+AOLb3x8jt7d4jMwUBpvSigMem8BRMVSssWHj7jI35Rg5vPnHek1OKXF110ovwSbUJjt7S0naUeL7urqqrI6OjqcFTa8qE58JLhBQQUqVAQoSiORGvHJDVSNJXHTm0+fPkkrEy0tLfZPW0zMYfJJ2PfvNyruC1QSKJ9RlsPt1m2L2d/fLzX15eU3x10vI2i1Hz58cF7mqaWTtPOmDhdGSUiCG3ilAF554cIFt5goRuJLmChaSpCBV/KqEsBLZKThJHdZeCeKqhL+Z3FxURJSrXaRxESFLC9IRXVa0rMfgPybhz7e8QhcU3C8nga8ePEickMrHeSVqNJTq+BUXGKqdYdITlGUepyBQ/EZIoRD3Y4M7eQwSqF5Z4Sge1x7d9Rm8lEhdDFtGDDOtKOIlAv68uVLO/M/TqytrbmKXFGnacIoJpq7uob+/PnzY9MhocOBA6lVynyAo+K5BqQWwiNuPH782A7IRxnUEiBOqjWhhXbXFVxQ4/FTCPr06dMjKyiETKfT0jWs73htWXHe5+cGKNTngqL25ygKCiGfPHniuu53h5rvpV4uKNxfCHpUQF8AIdUqZb+bvKjYjaikKdRHad2tW7cOdY0ShERfoApZaHOXSqAt0qqgCM7YKXEYBRVNu1QhqZhmzjE1+cMWQ8MUkoJ6poB7KLHNUYfBQzEAmZubk66VIiSVKiaYnJzMSbPNlkX3798vajdt3CAhf/bsWdEbYAtRspik8VA6SPjLusXEBOYYsLlUtbeYXttEKGKSxkPpYEhaUSXUmOx+/XoxEiEpTDFJ46FiI2tc+y+9wDQiJi3UkFTqkRacUMUkw6b/qPaq+0W3ZzyMs0FUQheTDILm92eHfi8vkKphwkLd9l3oeIigRCImaQ4iYScIRHI/FTGqMdgQydlKkYlJmpNn4hotmXJIPyfAlEKkYpLhcBIE/jt37kSSOuFemNTleJ35ESaRi0maszUoop5ePUuDQkrG/RKLmAI1dYLHDA4OhdLTo8fGmUlqrhtWDumHWMUkQy5aynkb6LFnZ2dJPRUs7BzSD7GLSYZzk4J0TKZZnygO7fNDWcQkzflJlPcmHHjiZwiqG2PH0WN7UTYxKd/T6+IcDhXBWRgmMDRUO7S4emwvyiqmQNcxYbFfHTHpRjSCODsaExUhJnnEUZSInz171p7NVw9CjXJoGISKEZMMZ2HyJWb1epRDwyBUlJh0UIJjj5jUqTLVa3UH25WbihNTgLOW1OPB4JnYVleOtKcgRPQfn5/xbRcbuwsAAAAASUVORK5CYII="},62:function(e,t,a){e.exports=a(117)},67:function(e,t,a){},91:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.af12924d.chunk.js.map