(this["webpackJsonpso-app"]=this["webpackJsonpso-app"]||[]).push([[0],{17:function(n,e,t){},18:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var i,o,a,r,c,s,l,A,d,j,h,b,p,x,O,f,y,g,v,R,w,E,T,B,m,u,C,U,Y=t(1),J=t.n(Y),S=t(8),I=t.n(S),Z=(t(17),t(2)),D=t(12),N=(t(18),t(3)),H=function(){var n=function(n,e){new FontFace(n,e).load().then((function(n){document.fonts.add(n)}),(function(n){console.log(n)}))};n("GilroyQ","url(https://dl.dropbox.com/s/k35qsf8tjrau6hl/Radomir%20Tinkov%20-%20Gilroy-Regular.otf?dl=0)"),n("GilroyB","url(https://dl.dropbox.com/s/svqpzt65xp93ifq/Radomir%20Tinkov%20-%20Gilroy-ExtraBold.otf?dl=0)")},V=t(0),Q=Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("span",{children:"STARTUP OF THE WEEK"}),Object(V.jsx)("span",{children:"STARTUP OF THE MONTH"}),Object(V.jsx)("span",{children:"STARTUP OF THE DAY"}),Object(V.jsx)("span",{children:"STARTUP OF THE QUARTER"}),Object(V.jsx)("span",{children:"STARTUP OF THE YEAR"})]}),K=Object(V.jsxs)(V.Fragment,{children:[" ",Q,Q,Q,Q,Q,Q,Q,Q,Q]}),k=Object(N.b)(i||(i=Object(Z.a)(["\n  from {\n    margin-left: 0vw;\n  }\n\n  to {\n    margin-left: -200vw;\n  }\n"]))),F=Object(N.b)(o||(o=Object(Z.a)(["\n  from {\n    margin-left: -200vw;\n  }\n\n  to {\n    margin-left: 0vw;\n  }\n"]))),G=N.a.div(a||(a=Object(Z.a)(["\n  width: 100%;\n  height: 100px;\n  overflow: hidden;\n  padding-top: 6.25px;\n  padding-bottom: 6.25px;\n  font-weight: 900;\n  position: relative;\n  div {\n    width: 400%;\n    height: 25px;\n    display: flex;\n    align-items: center;\n    letter-spacing: 4px;\n    position: relative;\n    b {\n      position: absolute;\n      top: 0px;\n      left: 0px;\n      animation: "," 60s linear infinite alternate;\n      width: 1000%;\n    }\n\n    b span {\n      margin: 0px 5px;\n      font-size: 12px;\n      background: linear-gradient(\n        to left,\n        var(--primary-accent),\n        var(--tertiary-accent),\n        var(--secondary-accent),\n        var(--tertiary-accent),\n        var(--primary-accent)\n      );\n      -webkit-background-clip: text;\n      background-clip: text;\n      -webkit-text-fill-color: transparent;\n    }\n  }\n  div + div {\n    b {\n      animation: "," 60s linear infinite alternate;\n    }\n  }\n\n  div + div + div {\n    b {\n      animation: "," 80s linear infinite alternate;\n    }\n  }\n\n  div + div + div + div {\n    b {\n      animation: "," 80s linear infinite alternate;\n    }\n  }\n"])),k,F,k,F),M=Object(V.jsxs)(G,{children:[Object(V.jsx)("div",{children:Object(V.jsx)("b",{children:K})}),Object(V.jsx)("div",{style:{marginLeft:-50},children:Object(V.jsx)("b",{children:K})}),Object(V.jsx)("div",{style:{marginLeft:-80},children:Object(V.jsx)("b",{children:K})}),Object(V.jsx)("div",{children:Object(V.jsx)("b",{children:K})})]}),X=function(n){var e=function(n,e){return Math.abs((n%3*e%n+n%7*e+e%9*e-n*e%4*e)%80)+14+"%"},t=function(n,e){return Math.abs((n%4*e+n%3*e+e%4*n-n*e%4*e)%80)+14+"%"};return Object(V.jsx)(V.Fragment,{children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((function(i,o){return Object(V.jsx)(L,{style:{left:e(o+4,n.votes),top:t(o+4,n.votes)},children:n.votes})}))})},L=N.a.div(r||(r=Object(Z.a)(["\n  transition: 1s;\n  position: absolute;\n  font-family: GilroyB;\n  color: var(--secondary);\n"])));H();var P=1100,q="1px var(--line) solid",z=220,W=300;var $=N.a.div(c||(c=Object(Z.a)(["\n  position: relative;\n  width: 100%;\n  border-top: ",";\n  border-bottom: ",";\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"])),q,q),_=N.a.div(s||(s=Object(Z.a)(["\n  width: ","px;\n  height: 40px;\n  border-left: ",";\n  border-right: ",";\n  font-size: 12px;\n  letter-spacing: 4px;\n  box-sizing: border-box;\n"])),P,q,q),nn=Object(N.b)(l||(l=Object(Z.a)(["\n  from {\n    opacity:0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]))),en=Object(N.b)(A||(A=Object(Z.a)(["\n  0% {\n    opacity:1;\n    background-size: 100% 100%;\n\n  }\n\n  100% {\n    opacity: 0;\n    background-size: 200% 200%;\n  }\n"]))),tn=N.a.div(d||(d=Object(Z.a)(["\n  box-sizing: border-box;\n  overflow: hidden;\n  font-family: GilroyQ;\n  position: relative;\n  opacity: 0;\n  animation: "," 0.5s 1 forwards;\n  animation-delay: ",'s;\n  b {\n    font-family: GilroyB;\n  }\n  &::before {\n    content: " ";\n    position: absolute;\n    z-index: 5;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      40deg,\n      var(--primary-accent),\n      var(--tertiary-accent),\n      var(--secondary-accent),\n      var(--tertiary-accent),\n      var(--primary-accent)\n    );\n    background-size: 200% 200%;\n    animation: '," 1s 1 forwards;\n    animation-delay: ","s;\n    pointer-events: none;\n  }\n"])),nn,(function(n){return n.delay}),en,(function(n){return n.delay+.5})),on=Object(N.a)(tn)(j||(j=Object(Z.a)(["\n  border-right: ",";\n  height: 40px;\n  color: var(--primary);\n  float: left;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  border-right: ",";\n  box-sizing: border-box;\n  height: 40px;\n  padding-left: 14px;\n  padding-right: 14px;\n"])),q,q),an=Object(N.a)(on)(h||(h=Object(Z.a)(["\n  width: 100%;\n  justify-content: left;\n  font-family: GilroyB;\n  color:black;\n"]))),rn=Object(N.a)(on)(b||(b=Object(Z.a)(["\n  width: ","px;\n  justify-content: left;\n  font-family: GilroyB;\n"])),z),cn=Object(N.a)(on)(p||(p=Object(Z.a)(["\n  width: ","px;\n  justify-content: left;\n  a {\n    text-decoration: none;\n    color: black;\n  }\n"])),W),sn=Object(N.a)(on)(x||(x=Object(Z.a)(["\n  width: ",";\n  justify-content: left;\n  color: black;\n  border-right: none;\n"])),"calc(100% - 220px - 300px)"),ln=N.a.div(O||(O=Object(Z.a)(["\n  position: relative;\n  width: 100%;\n  height: ","px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"])),z),An=N.a.div(f||(f=Object(Z.a)(["\n  width: ","px;\n  height: ","px;\n  border-left: ",";\n  border-right: ",";\n  font-size: 12px;\n  letter-spacing: 4px;\n  box-sizing: border-box;\n  border-bottom: ",";\n"])),P,z,q,q,q),dn=Object(N.a)(tn)(y||(y=Object(Z.a)(["\n  width: ","px;\n  box-sizing: border-box;\n  border-right: ",";\n  height: ","px;\n  float: left;\n  position: relative;\n  img {\n    position: absolute;\n    width: ","px;\n    top: ","px;\n    left: ","px;\n  }\n"])),z,q,z,88,66,66),jn=N.a.div(g||(g=Object(Z.a)(["\n  width: 100%;\n  position: relative;\n  height: 40px;\n  align-items: center;\n  justify-content: left;\n  display: flex;\n  box-sizing: border-box;\n  padding-left: 14px;\n  color: var(--primary);\n  font-family: GilroyB;\n"]))),hn=N.a.div(v||(v=Object(Z.a)(["\n  width: 100%;\n  position: relative;\n  font-family: GilroyQ;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 14px;\n  letter-spacing: normal;\n  margin-top: -10px;\n"]))),bn=Object(N.a)(tn)(R||(R=Object(Z.a)(["\n  width: ","px;\n  height: ","px;\n  border-right: ",";\n  float: left;\n"])),W,z,q),pn=N.a.div(w||(w=Object(Z.a)(["\n  height: 40px;\n  width: 100%;\n  padding-left: 14px;\n  display: flex;\n  align-items: center;\n  img {\n    float: left;\n    width: 25px;\n    height: 25px;\n    margin-right: 10px;\n  }\n"]))),xn=Object(N.a)(tn)(E||(E=Object(Z.a)(["\n  width: ","px;\n  box-sizing: border-box;\n  border-right: ",";\n  height: ","px;\n  float: left;\n  position: relative;\n  cursor: pointer;\n"])),z,q,z),On=Object(N.a)(tn)(T||(T=Object(Z.a)(["\n  width: ","px;\n  height: ","px;\n  justify-content: left;\n  color: black;\n  border-right: none;\n  float: left;\n"])),356.5,z),fn=Object(N.a)(tn)(B||(B=Object(Z.a)(["\n  float: left;\n  width: 100%;\n  height: ","px;\n  & + & {\n    border-top: ",";\n  }\n"])),110,q),yn=N.a.div(m||(m=Object(Z.a)(["\n  position: relative;\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),gn=N.a.div(u||(u=Object(Z.a)(["\n  width: ","px;\n  height: 40px;\n  border-left: ",";\n  border-right: ",";\n  border-bottom: ",";\n  font-size: 12px;\n  letter-spacing: 4px;\n  box-sizing: border-box;\n"])),P,q,q,q),vn=Object(N.a)(on)(C||(C=Object(Z.a)(["\n  width: ","px;\n  justify-content: left;\n  color: var(--secondary);\n  font-weight: 600;\n  font-family: GilroyB;\n"])),130),Rn=Object(N.a)(on)(U||(U=Object(Z.a)(["\n  width: ","px;\n  justify-content: left;\n  color: black;\n  border: none;\n  float: left;\n"])),441.5),wn=function(){var n=Object(Y.useState)(42),e=Object(D.a)(n,2),t=e[0],i=e[1];return Object(V.jsxs)(V.Fragment,{children:[M,Object(V.jsx)($,{children:Object(V.jsxs)(_,{children:[Object(V.jsx)(rn,{delay:0,children:"STARTUP OF THE DAY"}),Object(V.jsx)(cn,{delay:.2,children:Object(V.jsx)("a",{href:"https://brevy.com",children:"BREVY.COM"})}),Object(V.jsx)(sn,{delay:.5,children:"HATE SCREENSHOTS FOR ENG ISSUES? BREVY IS 4 YOU."})]})}),Object(V.jsx)(ln,{children:Object(V.jsxs)(An,{children:[Object(V.jsxs)(dn,{delay:.1,children:[Object(V.jsx)(jn,{children:"LOGO"}),Object(V.jsx)("img",{src:"data:image/png;base64,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"})]}),Object(V.jsxs)(bn,{delay:.4,children:[Object(V.jsx)(jn,{children:"FOUNDERS"}),Object(V.jsxs)(pn,{children:[Object(V.jsx)("img",{src:"data:image/png;base64,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"}),"CONDER SHOU"]}),Object(V.jsxs)(pn,{children:[Object(V.jsx)("img",{src:"data:image/png;base64,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"}),"ANIKA ZAMAN"]}),Object(V.jsxs)(pn,{children:[Object(V.jsx)("img",{src:"data:image/png;base64,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"}),"MOHAMED ABEDELMALIK"]})]}),Object(V.jsxs)(xn,{delay:.8,onClick:function(){i((function(n){return n+1}))},children:[Object(V.jsx)(jn,{children:"CLICK TO UPVOTE"}),Object(V.jsx)(X,{votes:t})]}),Object(V.jsxs)(On,{delay:.9,children:[Object(V.jsxs)(fn,{children:[Object(V.jsx)(jn,{children:"WHY?"}),Object(V.jsx)(hn,{children:"\"Can't Repro\" is annoying, let's be honest. Screenshots are cumbersome and poor evidence. Brevy is sick cause it helps you report issues with auto-captured context"})]}),Object(V.jsxs)(fn,{children:[Object(V.jsx)(jn,{children:"RANDOM THOUGHTS"}),Object(V.jsx)(hn,{children:"Nightmode homepage? Now that's what we're talking about!"})]})]})]})}),Object(V.jsx)(yn,{children:Object(V.jsxs)(gn,{children:[Object(V.jsx)(rn,{delay:.3,children:"STARTUP OF THE WK"}),Object(V.jsx)(cn,{delay:.7,children:Object(V.jsx)("a",{href:"https://commandbar.com",children:"COMMANDBAR.COM"})}),Object(V.jsx)(vn,{delay:1.2,children:"58 VOTES"}),Object(V.jsx)(Rn,{delay:1.6,children:"SUPERHUMAN IN EVERY APP??? HELL YES."})]})}),Object(V.jsx)(yn,{children:Object(V.jsxs)(gn,{children:[Object(V.jsx)(rn,{delay:.6,children:"STARTUP OF THE MO"}),Object(V.jsx)(cn,{delay:1.1,children:Object(V.jsx)("a",{href:"https://safebase.co",children:"SAFEBASE.CO"})}),Object(V.jsx)(vn,{delay:1.5,children:"72 VOTES"}),Object(V.jsx)(Rn,{delay:1.8,children:"SOFTWARE FOR BRAGGING \u2018BOUT SECURITY"})]})}),Object(V.jsx)(yn,{children:Object(V.jsxs)(gn,{children:[Object(V.jsx)(rn,{delay:1,children:"STARTUP OF THE QTR"}),Object(V.jsx)(cn,{delay:1.4,children:Object(V.jsx)("a",{href:"https://backbone.com",children:"BACKBONE.COM"})}),Object(V.jsx)(vn,{delay:1.7,children:"109 VOTES"}),Object(V.jsx)(Rn,{delay:1.95,children:"TURN YOUR IPHONE INTO A SWITCH"})]})}),Object(V.jsx)(yn,{children:Object(V.jsxs)(gn,{children:[" ",Object(V.jsx)(rn,{delay:1.3,children:"STARTUP OF THE YR"}),Object(V.jsx)(cn,{delay:1.6,children:Object(V.jsx)("a",{href:"https://lendtable.com",children:"LENDTABLE.COM"})}),Object(V.jsx)(vn,{delay:1.9,children:"282 VOTES"}),Object(V.jsx)(Rn,{delay:2,children:"FREE MONEY? YOU CAN'T MAKE THIS UP."})]})}),Object(V.jsx)(yn,{children:Object(V.jsxs)(gn,{children:[" ",Object(V.jsx)(an,{delay:2.2,children:"NOMINATE@STARTOF.COM TO NOMINATE OR SPONSOR. VOTE MANIPULATION = INSTANT COMPANY BAN."})]})})]})},En=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),o(n),a(n),r(n)}))};I.a.render(Object(V.jsx)(J.a.StrictMode,{children:Object(V.jsx)(wn,{})}),document.getElementById("root")),En()}},[[22,1,2]]]);
//# sourceMappingURL=main.3a3ff4ab.chunk.js.map