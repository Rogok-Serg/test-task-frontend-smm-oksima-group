"use strict";(self.webpackChunktest_task_frontend_smm_oksima_group=self.webpackChunktest_task_frontend_smm_oksima_group||[]).push([[589],{7227:function(n,e,t){var r=t(1263),i=t(4276),o=t(184);e.Z=function(){return(0,o.jsx)(r.zU,{children:(0,o.jsxs)(r.YO,{children:[(0,o.jsx)("img",{src:i,alt:"logo"}),(0,o.jsx)(r.X0,{children:"Analytix"})]})})}},9589:function(n,e,t){t.r(e);var r=t(9439),i=t(7689),o=t(2791),s=t(1263),a=t(7227),l=t(184);e.default=function(){var n=(0,o.useState)(!1),e=(0,r.Z)(n,2),t=e[0],c=e[1],p=(0,o.useState)(!0),f=(0,r.Z)(p,2),u=f[0],d=f[1],x=(0,o.useState)(!0),h=(0,r.Z)(x,2),g=h[0],m=h[1],Z=(0,o.useState)(""),b=(0,r.Z)(Z,2),w=b[0],y=b[1],j=(0,o.useState)(""),v=(0,r.Z)(j,2),P=v[0],k=v[1],z=(0,o.useState)(""),S=(0,r.Z)(z,2),M=S[0],F=S[1],_=(0,o.useState)(""),C=(0,r.Z)(_,2),D=C[0],Q=C[1],q=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"userName":y(r);break;case"userEmail":k(r);break;case"userPassword":F(r);break;case"repeatPassword":Q(r)}};return t&&M===D?(0,l.jsx)(i.Fg,{to:"/manager"}):(0,l.jsxs)(s.PQ,{children:[(0,l.jsxs)(s.Im,{children:[(0,l.jsx)(s._R,{children:"Rejestracja"}),(0,l.jsxs)(s.Gq,{onSubmit:function(n){c(!0)},children:[(0,l.jsxs)(s.x1,{children:[(0,l.jsx)(s.ar,{children:(0,l.jsx)(s.Fy,{value:w,onChange:q,type:"name",name:"userName",required:!0,pattern:"/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/",placeholder:"Nazwa"})}),(0,l.jsx)(s.ar,{children:(0,l.jsx)(s.Fy,{value:P,onChange:q,type:"email",name:"userEmail",required:!0,pattern:"/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/",placeholder:"E-mail"})})]}),(0,l.jsx)(s.Fe,{children:"Has\u0142o"}),(0,l.jsx)(s.ar,{children:(0,l.jsx)(s.Fy,{value:M,onChange:q,type:"password",name:"userPassword",required:!0,minLength:6,placeholder:"Has\u0142o"})}),(0,l.jsx)(s.Fe,{children:"Password*"}),(0,l.jsxs)(s.ar,{children:[(0,l.jsxs)(s.sK,{children:[(0,l.jsx)(s.Fy,{value:D,minLength:6,required:!0,onChange:q,type:u?"password":"text",name:"repeatPassword"}),(0,l.jsx)(s.TH,{onClick:function(){return d(!u)},children:u?(0,l.jsxs)(s.Qh,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"18",viewBox:"0 0 32 32",children:[(0,l.jsx)("title",{children:"eye"}),(0,l.jsx)("path",{d:"M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"})]}):(0,l.jsxs)(s.Qh,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"18",viewBox:"0 0 32 32",children:[(0,l.jsx)("title",{children:"eye-blocked"}),(0,l.jsx)("path",{d:"M29.561 0.439c-0.586-0.586-1.535-0.586-2.121 0l-6.318 6.318c-1.623-0.492-3.342-0.757-5.122-0.757-6.979 0-13.028 4.064-16 10 1.285 2.566 3.145 4.782 5.407 6.472l-4.968 4.968c-0.586 0.586-0.586 1.535 0 2.121 0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l27-27c0.586-0.586 0.586-1.536 0-2.121zM13 10c1.32 0 2.44 0.853 2.841 2.037l-3.804 3.804c-1.184-0.401-2.037-1.521-2.037-2.841 0-1.657 1.343-3 3-3zM3.441 16c1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 1.715 0.54 3.304 1.459 4.607l-1.904 1.904c-1.639-1.151-3.038-2.621-4.114-4.323z"}),(0,l.jsx)("path",{d:"M24 13.813c0-0.849-0.133-1.667-0.378-2.434l-10.056 10.056c0.768 0.245 1.586 0.378 2.435 0.378 4.418 0 8-3.582 8-8z"}),(0,l.jsx)("path",{d:"M25.938 9.062l-2.168 2.168c0.040 0.025 0.079 0.049 0.118 0.074 1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303-1.208 0-2.403-0.149-3.561-0.439l-2.403 2.403c1.866 0.671 3.873 1.036 5.964 1.036 6.978 0 13.027-4.064 16-10-1.407-2.81-3.504-5.2-6.062-6.938z"})]})})]}),(0,l.jsx)(s.SZ,{href:"Forget password",children:"Forget password?"})]}),(0,l.jsxs)(s.JQ,{htmlFor:"checkbox",children:[(0,l.jsx)(s.RG,{id:"checkbox",type:"checkbox",defaultChecked:g,onClick:function(){return m(!g)}}),(0,l.jsx)(s.Oo,{children:"Keep me logged in"})]})," ",(0,l.jsx)(s.Sn,{type:"submit",children:"Login"})]}),(0,l.jsx)(s.Fg,{href:"/test-task-frontend-smm-oksima-group/login",children:"Sing in"})]}),(0,l.jsx)(a.Z,{})]})}},1263:function(n,e,t){t.d(e,{Fe:function(){return N},Fg:function(){return nn},Fy:function(){return K},GO:function(){return D},Gq:function(){return G},Im:function(){return C},JQ:function(){return T},Ld:function(){return L},Oo:function(){return U},PQ:function(){return _},Qh:function(){return I},Qr:function(){return R},RG:function(){return X},SZ:function(){return J},Sn:function(){return $},TH:function(){return B},W6:function(){return H},X0:function(){return V},YO:function(){return W},_R:function(){return Q},ar:function(){return E},ns:function(){return q},sK:function(){return Y},x1:function(){return O},zU:function(){return A}});var r,i,o,s,a,l,c,p,f,u,d,x,h,g,m,Z,b,w,y,j,v,P,k,z,S,M=t(168),F=t(6444),_=F.ZP.div(r||(r=(0,M.Z)(["\n  margin: 0 auto;\n  max-width: 1728px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 100px;\n"]))),C=F.ZP.div(i||(i=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 205px 230px 15px;\n"]))),D=F.ZP.h2(o||(o=(0,M.Z)(["\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 36px;\n  line-height: 56px;\n  color: #000;\n  margin: 0;\n"]))),Q=F.ZP.h2(s||(s=(0,M.Z)(["\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 36px;\n  line-height: 56px;\n  color: #000;\n  margin: 0;\n  margin-bottom: 50px;\n"]))),q=F.ZP.span(a||(a=(0,M.Z)(["\n  position: relative;\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 100%;\n  color: #a3aed0;\n  margin-bottom: 45px;\n"]))),G=F.ZP.form(l||(l=(0,M.Z)(["\n  position: relative;\n  text-align: start;\n  width: 410px;\n  &::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    left: 0;\n    top: -30px;\n    background: #e0e5f2;\n  }\n"]))),O=F.ZP.div(c||(c=(0,M.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),R=F.ZP.select(p||(p=(0,M.Z)(["\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  width: 410px;\n  padding: 20px 40px 20px 20px;\n  border: 1px solid #e0e2e7;\n  border-radius: 16px;\n  margin-right: 5%;\n  cursor: pointer;\n  &::-ms-expand {\n    display: none;\n  }\n"]))),H=F.ZP.div(f||(f=(0,M.Z)(["\n  position: relative;\n  margin-bottom: 50px;\n"]))),L=F.ZP.svg(u||(u=(0,M.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  pointer-events: none;\n"]))),E=F.ZP.label(d||(d=(0,M.Z)(["\n  display: block;\n  text-align: end;\n  margin-bottom: 24px;\n"]))),K=F.ZP.input(x||(x=(0,M.Z)(["\n  width: 100%;\n  padding: 20px 0 20px 20px;\n  border: 1px solid #e0e2e7;\n  border-radius: 16px;\n  margin-top: 15px;\n"]))),N=F.ZP.span(h||(h=(0,M.Z)(["\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 100%;\n  color: #000;\n"]))),Y=F.ZP.div(g||(g=(0,M.Z)(["\n  position: relative;\n  display: flex;\n"]))),B=F.ZP.div(m||(m=(0,M.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  cursor: pointer;\n"]))),I=F.ZP.svg(Z||(Z=(0,M.Z)(["\n  fill: #a3aed0;\n"]))),J=F.ZP.a(b||(b=(0,M.Z)(["\n  text-decoration: none;\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #2e65f3;\n  margin-right: -15px;\n"]))),T=F.ZP.label(w||(w=(0,M.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  cursor: pointer;\n  margin-bottom: 40px;\n"]))),U=F.ZP.span(y||(y=(0,M.Z)(["\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #000;\n"]))),X=F.ZP.input(j||(j=(0,M.Z)(["\n  width: 16px;\n  height: 16px;\n  margin-right: 14px;\n"]))),$=F.ZP.button(v||(v=(0,M.Z)(["\n  padding: 20px 90px;\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 100%;\n  color: #fff;\n  border: none;\n  border-radius: 16px;\n  background-image: linear-gradient(\n    to right,\n    rgba(112, 169, 255, 1),\n    rgba(49, 110, 201, 1),\n    rgba(2, 74, 181, 1)\n  );\n  cursor: pointer;\n  transition: background-image 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  &:hover {\n    background-image: linear-gradient(\n      to right,\n      rgba(120, 150, 203, 1),\n      rgba(41, 91, 146, 1),\n      rgba(5, 62, 147, 1)\n    );\n  }\n"]))),A=F.ZP.div(P||(P=(0,M.Z)(["\n  overflow: hidden;\n"]))),W=F.ZP.div(k||(k=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 300px 178px 330px 226px;\n  margin-bottom: -30px;\n\n  background-image: linear-gradient(\n    to bottom,\n    rgba(112, 169, 255, 1),\n    rgba(49, 110, 201, 1),\n    rgba(2, 74, 181, 1)\n  );\n  border-bottom-left-radius: 200px;\n"]))),V=F.ZP.h1(z||(z=(0,M.Z)(["\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 96px;\n  line-height: 32px;\n  color: #fff;\n"]))),nn=F.ZP.a(S||(S=(0,M.Z)(["\n  text-align: start;\n  margin-top: 30px;\n  font-family: 'DM Sans' sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #2e65f3;\n"])))},4276:function(n,e,t){n.exports=t.p+"static/media/logotype.33db7218c427fb733cfd.png"}}]);
//# sourceMappingURL=589.efd0fb59.chunk.js.map