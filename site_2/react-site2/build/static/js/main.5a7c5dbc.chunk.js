(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),s=t(7),c=t.n(s),m=(t(13),t(1)),i=t(2),o=t(4),u=t(3),E=t(5),d=function(e){return l.a.createElement("div",{className:e.className},l.a.createElement("a",{href:e.link},e.name))},N=function(e){for(var a=0;a<e.menusArr.length;a++)e.itemArr.push(l.a.createElement(d,{className:"".concat(e.menusArr[a]," menu-item"),name:e.menusArr[a],link:e.menusArr[a].replace(/ /g,""),key:a}));return l.a.createElement("div",{className:"menus ".concat(e.className)},e.itemArr)},h=function(e){var a=e.className.replace(/ .*/,"");return l.a.createElement("div",{className:"head_ head_"+e.className},l.a.createElement(a,{className:e.className},e.textContent))},p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-"+e.className}))},v=function(e){var a=e.className.replace(/ .*/,"");return l.a.createElement("div",{className:e.className},l.a.createElement(a,{className:e.className},e.textContent))},g=function(e){return l.a.createElement("li",{className:e.className},l.a.createElement(p,{className:"dot-circle"}))},f=[],w=function(e){for(var a=0;a<4;a++)f.push(l.a.createElement(g,{className:"dot-circle",key:a}));return l.a.createElement("ul",{className:"head_ head_dots"},f)},b=function(){return l.a.createElement("div",{className:"slider_wrapper"},l.a.createElement("div",{className:" head_ head_slider"},l.a.createElement(h,{className:"h1",textContent:"Creative Design & advertising"}),l.a.createElement("div",{className:" head_ head_2"},l.a.createElement("div",{className:"icon icon_chart-bar"},l.a.createElement(p,{className:"chart-bar"})),l.a.createElement(h,{className:"h3",textContent:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature"})),l.a.createElement(v,{className:"button learn_more",textContent:"LEARN MORE"}),l.a.createElement(w,null)))},x=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("h3",null,"log in"),l.a.createElement("div",{className:"user-wrapper"},l.a.createElement("div",{className:"icon_user"},l.a.createElement(p,{className:"user"}))))},_=["home","products","awards","contact us"],y=[],C=function(){return l.a.createElement("div",{className:"header-wrapper"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"logo"},l.a.createElement("h1",null,"Dopos")),l.a.createElement(N,{menusArr:_,itemArr:y,className:"menus-header-part"}),l.a.createElement(x,null)),l.a.createElement(b,null))},A=function(e){var a=e.className.replace(/ .*/,"");return l.a.createElement("div",{className:"small_text "+e.className},l.a.createElement(a,{className:e.className},e.textContent))},k=function(e){return l.a.createElement("div",{className:e.className},l.a.createElement("img",{src:e.src,alt:"section two"}))},I=function(e){for(var a=0;a<e.ImagesArr.length;a++)e.newImagesArr.push(l.a.createElement(k,{className:"image_text",src:"../build/imgs/SectionTwo_images/".concat(e.ImagesArr[a],".jpg"),key:a}));return l.a.createElement(l.a.Fragment,null,e.newImagesArr)},O=["01","02","03","04"],T=[],j=function(){return l.a.createElement("div",{className:"SectionTwo-wrapper"},l.a.createElement("div",{className:"sectionTwo-heading"},l.a.createElement("div",{className:"sectionTwo-heading-wrapper"},l.a.createElement(A,{className:"p small_text",textContent:"studio"}),l.a.createElement(h,{className:"h2",textContent:"Design Solutions for Any Media"}),l.a.createElement("hr",null),l.a.createElement(h,{className:"h3 larger_text",textContent:"Lorem Ipsum is dummy text of the printing Ipsum is simply"}),l.a.createElement(v,{className:"button learn_more",textContent:"LEARN MORE"}))),l.a.createElement("div",{className:"sectionTwo-images"},l.a.createElement(I,{ImagesArr:O,newImagesArr:T})))},D=(t(15),new Date),L=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(o.a)(this,Object(u.a)(a).call(this))).state={day:D.getDate(),month:D.getMonth()+1},e}return Object(E.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"datetime"},l.a.createElement("div",{className:"daytime",ref:"day"},this.state.day),l.a.createElement("div",{className:"monthtime",ref:"month"},this.state.month))}}]),a}(r.Component),S=function(e){return l.a.createElement("div",{className:e.className},l.a.createElement("div",{className:"small-box-heading"},e.heading),l.a.createElement("span",null,e.content),l.a.createElement("hr",null))},q=function(){return l.a.createElement("div",{className:"SectionThree-wrapper"},l.a.createElement("div",{className:"SectionThree-heading"},l.a.createElement(A,{className:"p small_text",textContent:"featured"}),l.a.createElement("div",{className:"wrapHeading"},l.a.createElement("div",{className:"SectionThree-heading-wrapper"},l.a.createElement(h,{className:"h2",textContent:"Making Ideas Come to Life"})),l.a.createElement(L,null))),l.a.createElement("div",{className:"section_three_banner"},l.a.createElement(p,{className:"angle-left"}),l.a.createElement("img",{src:"imgs/section_three_banner.png",alt:"section three banner"}),l.a.createElement(p,{className:"angle-right"})),l.a.createElement("div",{className:"sectionThreeBottom"},l.a.createElement("div",{className:"sectionThree-left"},l.a.createElement("div",{className:"sectionThreeText"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis mollitia temporibus repellat iste quia itaque sapiente qui minus hic voluptate, harum illo facilis, eligendi eaque deleniti. Iste maxime perspiciatis tenetur!Deleniti laborum repellat."),l.a.createElement(v,{className:"button case_study",textContent:"CASE STUDY"})),l.a.createElement("div",{className:"small-box-wrapper"},l.a.createElement(S,{className:"small-box",heading:"category",content:"Design & Branding"}),l.a.createElement(S,{className:"small-box",heading:"client",content:"Cusco Barista"}))))},F=function(){return l.a.createElement("div",{className:"SectionFour-wrapper"},l.a.createElement("div",{className:"sectionFour-content"},l.a.createElement(h,{className:"h2",textContent:"Our Clients"}),l.a.createElement("div",{className:"sectionFour-icons"},l.a.createElement(p,{className:"rainbow"}),l.a.createElement(p,{className:"rainbow"}),l.a.createElement(p,{className:"rainbow"})),l.a.createElement(v,{className:"button view-all",textContent:"VIEW ALL"})))},B=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fab fa-"+e.className,style:{color:e.style}}))},M=["facebook-square","twitter-square","instagram","vimeo-square"],R=[],W=["blue","light-blue","pink","darkred"];console.log(R);var J=function(){for(var e=0;e<M.length;e++)n=W[e],R.push(l.a.createElement(B,{key:[e],className:M[e],style:n})),console.log(n);return l.a.createElement("div",{className:"socialsWrapper"},R)},V=["home","products","awards","contact us"],H=[],U=function(){return l.a.createElement("div",{className:"footer-wrapper"},l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"logo-footer"},l.a.createElement("h1",null,"Dopos")),l.a.createElement(N,{menusArr:V,itemArr:H,className:"menus-footer-part"}),l.a.createElement(J,null)))},Y=function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"all"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(C,null),l.a.createElement(j,null),l.a.createElement(q,null),l.a.createElement(F,null),l.a.createElement(U,null)))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.5a7c5dbc.chunk.js.map