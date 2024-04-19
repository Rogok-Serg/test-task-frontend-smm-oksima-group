"use strict";(self.webpackChunktest_task_frontend_smm_oksima_group=self.webpackChunktest_task_frontend_smm_oksima_group||[]).push([[664],{7227:function(n,e,t){var i=t(1263),r=t(4276),o=t(184);e.Z=function(){return(0,o.jsx)(i.zU,{children:(0,o.jsxs)(i.YO,{children:[(0,o.jsx)("img",{src:r,alt:"logo"}),(0,o.jsx)(i.X0,{children:"Analytix"})]})})}},6664:function(n,e,t){t.r(e);var i=t(9439),r=t(7689),o=t(1263),s=t(2791),a=t(7227),l=t(184);e.default=function(){var n=(0,s.useState)(!1),e=(0,i.Z)(n,2),t=e[0],c=e[1],f=(0,s.useState)(!0),p=(0,i.Z)(f,2),d=p[0],u=p[1],x=(0,s.useState)(""),g=(0,i.Z)(x,2),h=g[0],m=g[1],Z=(0,s.useState)(""),b=(0,i.Z)(Z,2),w=b[0],j=b[1],y=(0,s.useState)("manager"),v=(0,i.Z)(y,2),k=v[0],P=v[1],z=(0,s.useState)(["manager","brand","affiliate"]),S=(0,i.Z)(z,1)[0],M=(0,s.useState)(!0),F=(0,i.Z)(M,2),_=F[0],D=F[1],C=function(n){var e=n.target,t=e.name,i=e.value;switch(t){case"typeUser":P(i);break;case"userEmail":j(i);break;case"userPassword":m(i)}};return t&&"manager"===k?(0,l.jsx)(r.Fg,{to:"/manager"}):t&&"brand"===k?(0,l.jsx)(r.Fg,{to:"/brand"}):t&&"affiliate"===k?(0,l.jsx)(r.Fg,{to:"/affiliate"}):(0,l.jsxs)(o.PQ,{children:[(0,l.jsxs)(o.Im,{children:[(0,l.jsx)(o.GO,{children:"Logowanie do oddzia\u0142u"}),(0,l.jsx)(o.ns,{children:"Wpisz sw\xf3j adres e-mail i has\u0142o, aby si\u0119 zalogowa\u0107!"}),(0,l.jsxs)(o.Gq,{onSubmit:function(n){n.preventDefault(),c(!0),j(""),m("")},children:[(0,l.jsxs)(o.W6,{children:[(0,l.jsx)(o.Ld,{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/StyledSvg",children:(0,l.jsx)("path",{d:"M12.8333 1.5L6.99996 7.33333L1.16663 1.5",stroke:"#6F727A","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),(0,l.jsx)(o.Qr,{value:k,name:"typeUser",id:"",onChange:C,children:S.map((function(n){return(0,l.jsx)("option",{value:n,children:n.toUpperCase()})}))})]}),(0,l.jsx)(o.Fe,{children:"Email*"}),(0,l.jsx)(o.ar,{children:(0,l.jsx)(o.Fy,{value:w,onChange:C,type:"email",name:"userEmail",required:!0,pattern:"/^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$/"})}),(0,l.jsx)(o.Fe,{children:"Password*"}),(0,l.jsxs)(o.ar,{children:[(0,l.jsxs)(o.sK,{children:[(0,l.jsx)(o.Fy,{value:h,minLength:6,required:!0,onChange:C,type:_?"password":"text",name:"userPassword"}),(0,l.jsx)(o.TH,{onClick:function(){return D(!_)},children:_?(0,l.jsxs)(o.Qh,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"18",viewBox:"0 0 32 32",children:[(0,l.jsx)("title",{children:"eye"}),(0,l.jsx)("path",{d:"M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"})]}):(0,l.jsxs)(o.Qh,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"18",viewBox:"0 0 32 32",children:[(0,l.jsx)("title",{children:"eye-blocked"}),(0,l.jsx)("path",{d:"M29.561 0.439c-0.586-0.586-1.535-0.586-2.121 0l-6.318 6.318c-1.623-0.492-3.342-0.757-5.122-0.757-6.979 0-13.028 4.064-16 10 1.285 2.566 3.145 4.782 5.407 6.472l-4.968 4.968c-0.586 0.586-0.586 1.535 0 2.121 0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l27-27c0.586-0.586 0.586-1.536 0-2.121zM13 10c1.32 0 2.44 0.853 2.841 2.037l-3.804 3.804c-1.184-0.401-2.037-1.521-2.037-2.841 0-1.657 1.343-3 3-3zM3.441 16c1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 1.715 0.54 3.304 1.459 4.607l-1.904 1.904c-1.639-1.151-3.038-2.621-4.114-4.323z"}),(0,l.jsx)("path",{d:"M24 13.813c0-0.849-0.133-1.667-0.378-2.434l-10.056 10.056c0.768 0.245 1.586 0.378 2.435 0.378 4.418 0 8-3.582 8-8z"}),(0,l.jsx)("path",{d:"M25.938 9.062l-2.168 2.168c0.040 0.025 0.079 0.049 0.118 0.074 1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303-1.208 0-2.403-0.149-3.561-0.439l-2.403 2.403c1.866 0.671 3.873 1.036 5.964 1.036 6.978 0 13.027-4.064 16-10-1.407-2.81-3.504-5.2-6.062-6.938z"})]})})]}),(0,l.jsx)(o.SZ,{href:"Forget password",children:"Forget password?"})]}),(0,l.jsxs)(o.JQ,{htmlFor:"checkbox",children:[(0,l.jsx)(o.RG,{id:"checkbox",type:"checkbox",defaultChecked:d,onClick:function(){return u(!d)}}),(0,l.jsx)(o.Oo,{children:"Keep me logged in"})]})," ",(0,l.jsx)(o.Sn,{type:"submit",children:"Login"})]}),(0,l.jsx)(o.Fg,{href:"/test-task-frontend-smm-oksima-group/register",children:"Sing up"})]}),(0,l.jsx)(a.Z,{})]})}},1263:function(n,e,t){t.d(e,{Fe:function(){return R},Fg:function(){return nn},Fy:function(){return K},GO:function(){return C},Gq:function(){return G},Im:function(){return D},JQ:function(){return I},Ld:function(){return B},Oo:function(){return J},PQ:function(){return _},Qh:function(){return A},Qr:function(){return U},RG:function(){return T},SZ:function(){return H},Sn:function(){return X},TH:function(){return Y},W6:function(){return q},X0:function(){return V},YO:function(){return N},_R:function(){return Q},ar:function(){return E},ns:function(){return L},sK:function(){return W},x1:function(){return O},zU:function(){return $}});var i,r,o,s,a,l,c,f,p,d,u,x,g,h,m,Z,b,w,j,y,v,k,P,z,S,M=t(168),F=t(6444),_=F.ZP.div(i||(i=(0,M.Z)(["\n  margin: 0 auto;\n  max-width: 1728px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 100px;\n"]))),D=F.ZP.div(r||(r=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 205px 230px 15px;\n"]))),C=F.ZP.h2(o||(o=(0,M.Z)(["\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 36px;\n  line-height: 56px;\n  color: #000;\n  margin: 0;\n"]))),Q=F.ZP.h2(s||(s=(0,M.Z)(["\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 36px;\n  line-height: 56px;\n  color: #000;\n  margin: 0;\n  margin-bottom: 50px;\n"]))),L=F.ZP.span(a||(a=(0,M.Z)(["\n  position: relative;\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 100%;\n  color: #a3aed0;\n  margin-bottom: 45px;\n"]))),G=F.ZP.form(l||(l=(0,M.Z)(["\n  position: relative;\n  text-align: start;\n  width: 410px;\n  &::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    left: 0;\n    top: -30px;\n    background: #e0e5f2;\n  }\n"]))),O=F.ZP.div(c||(c=(0,M.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),U=F.ZP.select(f||(f=(0,M.Z)(["\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  width: 410px;\n  padding: 20px 40px 20px 20px;\n  border: 1px solid #e0e2e7;\n  border-radius: 16px;\n  margin-right: 5%;\n  cursor: pointer;\n  &::-ms-expand {\n    display: none;\n  }\n"]))),q=F.ZP.div(p||(p=(0,M.Z)(["\n  position: relative;\n  margin-bottom: 50px;\n"]))),B=F.ZP.svg(d||(d=(0,M.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  pointer-events: none;\n"]))),E=F.ZP.label(u||(u=(0,M.Z)(["\n  display: block;\n  text-align: end;\n  margin-bottom: 24px;\n"]))),K=F.ZP.input(x||(x=(0,M.Z)(["\n  width: 100%;\n  padding: 20px 0 20px 20px;\n  border: 1px solid #e0e2e7;\n  border-radius: 16px;\n  margin-top: 15px;\n"]))),R=F.ZP.span(g||(g=(0,M.Z)(["\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 100%;\n  color: #000;\n"]))),W=F.ZP.div(h||(h=(0,M.Z)(["\n  position: relative;\n  display: flex;\n"]))),Y=F.ZP.div(m||(m=(0,M.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  cursor: pointer;\n"]))),A=F.ZP.svg(Z||(Z=(0,M.Z)(["\n  fill: #a3aed0;\n"]))),H=F.ZP.a(b||(b=(0,M.Z)(["\n  text-decoration: none;\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #2e65f3;\n  margin-right: -15px;\n"]))),I=F.ZP.label(w||(w=(0,M.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  cursor: pointer;\n  margin-bottom: 40px;\n"]))),J=F.ZP.span(j||(j=(0,M.Z)(["\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #000;\n"]))),T=F.ZP.input(y||(y=(0,M.Z)(["\n  width: 16px;\n  height: 16px;\n  margin-right: 14px;\n"]))),X=F.ZP.button(v||(v=(0,M.Z)(["\n  padding: 20px 90px;\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 100%;\n  color: #fff;\n  border: none;\n  border-radius: 16px;\n  background-image: linear-gradient(\n    to right,\n    rgba(112, 169, 255, 1),\n    rgba(49, 110, 201, 1),\n    rgba(2, 74, 181, 1)\n  );\n  cursor: pointer;\n  transition: background-image 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  &:hover {\n    background-image: linear-gradient(\n      to right,\n      rgba(120, 150, 203, 1),\n      rgba(41, 91, 146, 1),\n      rgba(5, 62, 147, 1)\n    );\n  }\n"]))),$=F.ZP.div(k||(k=(0,M.Z)(["\n  overflow: hidden;\n"]))),N=F.ZP.div(P||(P=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 300px 178px 330px 226px;\n  margin-bottom: -30px;\n\n  background-image: linear-gradient(\n    to bottom,\n    rgba(112, 169, 255, 1),\n    rgba(49, 110, 201, 1),\n    rgba(2, 74, 181, 1)\n  );\n  border-bottom-left-radius: 200px;\n"]))),V=F.ZP.h1(z||(z=(0,M.Z)(["\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 96px;\n  line-height: 32px;\n  color: #fff;\n"]))),nn=F.ZP.a(S||(S=(0,M.Z)(["\n  text-align: start;\n  margin-top: 30px;\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #2e65f3;\n"])))},4276:function(n,e,t){n.exports=t.p+"static/media/logotype.33db7218c427fb733cfd.png"}}]);
//# sourceMappingURL=664.a3bac99c.chunk.js.map