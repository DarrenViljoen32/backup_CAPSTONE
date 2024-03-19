(()=>{"use strict";var e={1483:(e,t,n)=>{n(3792),n(3362),n(9085),n(9391);var r=n(5130),o=n(6768),s=(0,o.Lk)("br",null,null,-1),a=(0,o.Lk)("br",null,null,-1),i=(0,o.Lk)("br",null,null,-1),l=(0,o.Lk)("br",null,null,-1);function c(e,t,n,r,c,u){var d=(0,o.g2)("Navbar"),f=(0,o.g2)("router-view"),p=(0,o.g2)("Footer");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(d),s,a,i,l,(0,o.bF)(f),(0,o.bF)(p)],64)}var u={key:0,class:"navbar fixed-top navbar-expand-lg bg-light",ref:"navbar"},d={class:"container-fluid"},f=(0,o.Lk)("a",{href:"/",class:"navbar-brand"},"UNBOUND",-1),p=(0,o.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.Lk)("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarNav"},h={class:"navbar-nav"},m=(0,o.Lk)("span",{class:""},null,-1),g=(0,o.Lk)("span",{class:""},null,-1),k=(0,o.Lk)("span",{class:"bi bi-house"},null,-1),b=(0,o.Lk)("span",{class:"bi bi-person"},null,-1),w=(0,o.Lk)("span",{class:"bi bi-envelope-at"},null,-1),A=(0,o.Lk)("span",{class:"bi bi-file"},null,-1),L=(0,o.Lk)("span",{class:"bi bi-file-person"},null,-1);function y(e,t,n,r,s,a){var i=(0,o.g2)("router-link");return e.$route.meta.hideNavbar?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("nav",u,[(0,o.Lk)("div",d,[f,p,(0,o.Lk)("div",v,[(0,o.Lk)("div",h,[e.$cookies.get("jwt")?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(i,{key:0,to:"/signin",class:"nav-link"},{default:(0,o.k6)((function(){return[m,(0,o.eW)(" | Sign Up")]})),_:1})),e.$cookies.get("jwt")?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(i,{key:1,to:"/login",class:"nav-link"},{default:(0,o.k6)((function(){return[g,(0,o.eW)(" | Log In")]})),_:1})),(0,o.bF)(i,{onClick:a.closeNavbar,to:"/home",class:"nav-link"},{default:(0,o.k6)((function(){return[k,(0,o.eW)(" | Home")]})),_:1},8,["onClick"]),(0,o.bF)(i,{onClick:a.closeNavbar,to:"/about",class:"nav-link"},{default:(0,o.k6)((function(){return[b,(0,o.eW)(" | About")]})),_:1},8,["onClick"]),(0,o.bF)(i,{onClick:a.closeNavbar,to:"/contact",class:"nav-link"},{default:(0,o.k6)((function(){return[w,(0,o.eW)(" | Contact Us")]})),_:1},8,["onClick"]),(0,o.bF)(i,{onClick:a.closeNavbar,to:"/admin",class:"nav-link"},{default:(0,o.k6)((function(){return[A,(0,o.eW)(" | Admin")]})),_:1},8,["onClick"]),(0,o.bF)(i,{onClick:a.closeNavbar,to:"/profile",class:"nav-link"},{default:(0,o.k6)((function(){return[L,(0,o.eW)(" | Profile")]})),_:1},8,["onClick"])])])])],512))}const _={methods:{closeNavbar:function(){var e=document.querySelector(".navbar-toggler"),t=document.querySelector(".navbar-collapse");e.classList.add("collapsed"),t.classList.remove("show")},handleClickOutside:function(e){var t=this.$refs.navbar;t&&!t.contains(e.target)&&this.closeNavbar()}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},beforeDestroy:function(){document.removeEventListener("click",this.handleClickOutside)}};var x=n(1241);const C=(0,x.A)(_,[["render",y]]),E=C;n(3288);var P=n(4232),D={class:"footer"},N={key:0},U={class:"rainbow_text animated"},F={id:"year"};function S(e,t,n,r,s,a){return(0,o.uX)(),(0,o.CE)("div",D,[e.$route.meta.hideFooter?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("footer",N,[(0,o.Lk)("p",U,[(0,o.eW)("© Copyright "),(0,o.Lk)("span",F,(0,P.v_)((new Date).getFullYear()),1),(0,o.eW)(" Made By Darren Viljoen. All Rights Reserved.")])]))])}const O={},j=(0,x.A)(O,[["render",S]]),I=j;var $=n(7758);const T={components:{Navbar:E,Footer:I,Spinner:$.A},data:function(){return{}},computed:{logout:function(){this.$store.dispatch("logout")}}},W=(0,x.A)(T,[["render",c]]),X=W;var B=n(4458);(0,B.k)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n(6099),n(7764),n(2953);var M=n(1387),Q=(n(4669),[{path:"/",name:"landing",component:function(){return n.e(426).then(n.bind(n,1426))},meta:{hideNavbar:!0,hideFooter:!0}},{path:"/signin",name:"signin",component:function(){return n.e(503).then(n.bind(n,7503))},meta:{hideNavbar:!0,hideFooter:!0}},{path:"/login",name:"login",component:function(){return n.e(876).then(n.bind(n,6876))},meta:{hideNavbar:!0,hideFooter:!0}},{path:"/home",name:"home",component:function(){return Promise.resolve().then(n.bind(n,4669))}},{path:"/about",name:"about",component:function(){return n.e(762).then(n.bind(n,381))}},{path:"/contact",name:"contact",component:function(){return n.e(56).then(n.bind(n,2056))}},{path:"/admin",name:"admin",component:function(){return n.e(948).then(n.bind(n,5948))}},{path:"/profile",name:"profile",component:function(){return n.e(495).then(n.bind(n,495))}}]),q=(0,M.aE)({history:(0,M.LA)("/"),routes:Q});const H=q;var K=n(4048),V=n(388),R=(n(4114),n(782)),J=n(4509),Y=n(4874),z=n.n(Y);J.A.defaults.withCredentials=!0;var G="https://capstone-project-4.onrender.com";const Z=(0,R.y$)({state:{users:null,admins:null,posts:null,loggedin:!1,loginMessage:null},getters:{},mutations:{setUsers:function(e,t){e.users=t},setAdmins:function(e,t){e.admins=t},setPosts:function(e,t){e.posts=t},setLogged:function(e,t){e.loggedin=t},setLoginMessage:function(e,t){e.loginMessage=t},setAdmin:function(e,t){e.admins=t}},actions:{getUsers:function(e){return(0,V.A)((0,K.A)().mark((function t(){var n,r;return(0,K.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,J.A.get(G+"/users");case 4:r=t.sent,console.log(r),n("setUsers",r.data),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),console.error("Error fetching users: ",t.t0),z().fire("Error fetching users ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},getOneUser:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,J.A.get(G+"/users",t);case 4:window.location.reload(),n.next=11;break;case 7:n.prev=7,n.t0=n["catch"](1),console.error(n.t0),z().fire("Error fetching a user ",n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,7]])})))()},deleteUser:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){var r,o;return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,J.A["delete"](G+"/users/"+t);case 4:r=n.sent,o=r.data,o.msg?z().fire(o.msg):z().fire("Deleted successfully."),window.location.reload(),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](1),console.error(n.t0),z().fire("Error deleting a user ",n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},editUser:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){var r,o;return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,J.A.patch(G+"/users/"+t.user_ID,t);case 4:r=n.sent,o=r.data,o.msg?z().fire(o.msg):z().fire("Updated successfully."),window.location.reload(),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](1),console.error(n.t0),z().fire("Error updating the user ",n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},addUser:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){var r,o;return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,console.log(t),n.next=5,J.A.post(G+"/users",t);case 5:r=n.sent,o=r.data,z().fire(o.msg),window.location.reload(),n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](1),console.error("Error adding user ",n.t0),z().fire("Error adding user ",n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()},getAdmins:function(e){return(0,V.A)((0,K.A)().mark((function t(){var n,r;return(0,K.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,J.A.get(G+"/admins");case 4:r=t.sent,console.log(r),n("setAdmins",r.data),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),console.error(t.t0),z().fire("Error fetching admins ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},getOneAdmin:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,J.A.get(G+"/admins",t);case 4:window.location.reload(),n.next=11;break;case 7:n.prev=7,n.t0=n["catch"](1),console.error(n.t0),z().fire("Error fetching one admin ",n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,7]])})))()},deleteAdmin:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){var r,o;return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,console.log(t),n.next=5,J.A["delete"](G+"/admins/"+t);case 5:r=n.sent,o=r.data,o.msg?z().fire(o.msg):z().fire("Successfully Deleted Account."),window.location.reload(),n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](1),console.error(n.t0),z().fire("Error deleting admin ",n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()},editAdmins:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){var r,o;return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,J.A.patch(G+"/admins/"+t.admin_ID,t);case 4:r=n.sent,o=r.data,o.msg?z().fire(o.msg):z().fire("Successfully Updated Account."),window.location.reload(),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](1),console.error(n.t0),z().fire("Error updating admin ",n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},addAdmin:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){var r,o;return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,console.log(t),n.next=5,J.A.post(G+"/admins",t);case 5:r=n.sent,o=r.data,z().fire(o.msg),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](1),console.error("Error adding admin ",n.t0),z().fire("Error adding admin ",n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},loginAdmin:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){var r,o,s,a;return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,console.log(t),n.next=4,J.A.post(G+"/login",t);case 4:return o=n.sent,s=o.data,a=s.admins,r("setAdmin",a),$cookies.set("jwt",s.token),r("setLoginMessage",s.msg),z().fire(s.msg),n.next=13,H.push("/home");case 13:case"end":return n.stop()}}),n)})))()},logout:function(){return(0,V.A)((0,K.A)().mark((function e(){var t;return(0,K.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=$cookies.keys(),console.log(t),$cookies.remove("jwt");case 3:case"end":return e.stop()}}),e)})))()},getPosts:function(e){return(0,V.A)((0,K.A)().mark((function t(){var n,r;return(0,K.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,J.A.get(G+"/posts");case 4:r=t.sent,console.log(r),n("setPosts",r.data),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),console.error("Error fetching users ",t.t0),z().fire("Error fetching users ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},getOnePost:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,J.A.get(G+"/posts/",t);case 4:window.location.reload(),n.next=11;break;case 7:n.prev=7,n.t0=n["catch"](1),console.error("Error fetching a user ",n.t0),z().fire("Error fetching a user ",n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,7]])})))()},deletePost:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){var r,o;return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,console.log(t),n.next=5,J.A["delete"](G+"/posts/"+t);case 5:r=n.sent,o=r.data,o.msg?z().fire(o.msg):z().fire("Successfully Deleted Post."),window.location.reload(),n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](1),console.error("Error deleting post ",n.t0),z().fire("Error deleting post ",n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()},editPost:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){var r,o;return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,J.A.patch(G+"/posts/"+t.post_ID,t);case 4:r=n.sent,o=r.data,o.msg?z().fire(o.msg):z().fire("Successfully Updated Post."),window.location.reload(),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](1),console.error("Error updating post ",n.t0),z().fire("Error updating post ",n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},addPost:function(e,t){return(0,V.A)((0,K.A)().mark((function n(){var r,o;return(0,K.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,console.log(t),n.next=5,J.A.post(G+"/posts",t);case 5:r=n.sent,o=r.data,o.msg?z().fire(o.msg):z().fire("Successfully Added a Post."),window.location.reload(),n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](1),console.error("Error adding post ",n.t0),z().fire("Error adding post ",n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()}},modules:{}});var ee=n(4570),te=n.n(ee),ne=(n(5707),n(9787)),re=n.n(ne);(0,r.Ef)(X).use(Z).use(H).use(te()).use(re()).mount("#app")},7758:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(6768),o=function(e){return(0,r.Qi)("data-v-89ac8164"),e=e(),(0,r.jt)(),e},s={class:"d-flex justify-content-center"},a=o((function(){return(0,r.Lk)("div",{class:"spinner-border",role:"status"},[(0,r.Lk)("span",{class:"visually-hidden"},"Loading...")],-1)})),i=[a];function l(e,t,n,o,a,l){return(0,r.uX)(),(0,r.CE)("div",s,i)}const c={};var u=n(1241);const d=(0,u.A)(c,[["render",l],["__scopeId","data-v-89ac8164"]]),f=d},4669:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(6768),o=n(5130),s=n(4232),a=function(e){return(0,r.Qi)("data-v-3b82d4a2"),e=e(),(0,r.jt)(),e},i={class:"home"},l=a((function(){return(0,r.Lk)("br",null,null,-1)})),c=a((function(){return(0,r.Lk)("br",null,null,-1)})),u=a((function(){return(0,r.Lk)("h1",null,"Home",-1)})),d=a((function(){return(0,r.Lk)("br",null,null,-1)})),f=a((function(){return(0,r.Lk)("hr",null,null,-1)})),p=a((function(){return(0,r.Lk)("br",null,null,-1)})),v=a((function(){return(0,r.Lk)("br",null,null,-1)})),h={key:0},m={class:"row"},g={class:"col-lg-3",id:"divider"},k=a((function(){return(0,r.Lk)("h3",{id:"sortfilter"},"Make A Post",-1)})),b=a((function(){return(0,r.Lk)("br",null,null,-1)})),w=a((function(){return(0,r.Lk)("br",null,null,-1)})),A=a((function(){return(0,r.Lk)("br",null,null,-1)})),L=a((function(){return(0,r.Lk)("br",null,null,-1)})),y=a((function(){return(0,r.Lk)("br",null,null,-1)})),_=a((function(){return(0,r.Lk)("h3",{id:"sortfilter"},"Sort & Filter",-1)})),x=a((function(){return(0,r.Lk)("br",null,null,-1)})),C=a((function(){return(0,r.Lk)("form",null,[(0,r.Lk)("input",{type:"text",id:"filterUsers",class:"form-control",placeholder:"Filter By Name"}),(0,r.Lk)("br")],-1)})),E=a((function(){return(0,r.Lk)("button",null,[(0,r.eW)("Sort By Date "),(0,r.Lk)("span",{class:"bi bi-filter"})],-1)})),P=a((function(){return(0,r.Lk)("br",null,null,-1)})),D=a((function(){return(0,r.Lk)("br",null,null,-1)})),N=a((function(){return(0,r.Lk)("button",null,[(0,r.eW)("Sort By Name "),(0,r.Lk)("span",{class:"bi bi-filter"})],-1)})),U=a((function(){return(0,r.Lk)("br",null,null,-1)})),F=a((function(){return(0,r.Lk)("br",null,null,-1)})),S={class:"col-lg-9"},O=a((function(){return(0,r.Lk)("h3",null,"Posts",-1)})),j=a((function(){return(0,r.Lk)("br",null,null,-1)})),I=a((function(){return(0,r.Lk)("br",null,null,-1)})),$={class:"row"},T={id:"postDetails"},W={id:"postEmail"},X={class:"postContent"},B={id:"postDetails"},M=a((function(){return(0,r.Lk)("hr",null,null,-1)})),Q=a((function(){return(0,r.Lk)("br",null,null,-1)})),q={key:1};function H(e,t,n,a,H,K){var V=(0,r.g2)("router-link"),R=(0,r.g2)("Spinner");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(V,{to:"/"},{default:(0,r.k6)((function(){return[e.$cookies.get("jwt")?((0,r.uX)(),(0,r.CE)("button",{key:0,onClick:t[0]||(t[0]=function(){return K.logout&&K.logout.apply(K,arguments)})},"Log Out")):(0,r.Q3)("",!0)]})),_:1}),l,c,u,d,f,p,v,H.loadingPosts?((0,r.uX)(),(0,r.CE)("div",h,[(0,r.Lk)("div",m,[(0,r.Lk)("div",g,[k,b,(0,r.Lk)("form",null,[(0,r.bo)((0,r.Lk)("textarea",{type:"text",name:"post_Content",id:"postInput",class:"form-control",placeholder:"Type your post here!","onUpdate:modelValue":t[1]||(t[1]=function(e){return H.post_Content=e})},null,512),[[o.Jo,H.post_Content]]),w,(0,r.Lk)("button",{type:"button",onClick:t[2]||(t[2]=function(){return K.addPost&&K.addPost.apply(K,arguments)})},"Post")]),A,L,y,_,x,C,E,P,D,N,U,F]),(0,r.Lk)("div",S,[O,j,I,(0,r.Lk)("div",null,[(0,r.Lk)("div",$,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(H.posts,(function(e){return(0,r.uX)(),(0,r.CE)("div",{class:"col-lg-12",id:"postBlock",key:e.post_ID},[(0,r.Lk)("h5",T,(0,s.v_)(K.getUsername(e.user_ID))+" "+(0,s.v_)(K.getUsersurname(e.user_ID)),1),(0,r.Lk)("p",W,(0,s.v_)(K.getUserEmail(e.user_ID)),1),(0,r.Lk)("div",X,[(0,r.Lk)("p",null,(0,s.v_)(e.post_Content),1),(0,r.Lk)("p",B,(0,s.v_)(e.post_Date),1),M,Q])])})),128))])])])])])):((0,r.uX)(),(0,r.CE)("div",q,[(0,r.bF)(R)]))])}var K=n(8653),V=n(4048),R=n(388),J=(n(113),n(6099),n(2762),n(7758));const Y={components:{Spinner:J.A},data:function(){return{posts:[],users:[],loadingPosts:!0,loadingUsers:!0,post_ID:null,post_Title:null,post_Content:null,post_Date:null,user_ID:null,editedPosts:{post_ID:null,post_Title:null,post_Content:null,post_Date:null,user_ID:null},user_Name:null,user_Surname:null,user_Email:null,searchQuery:"",sortBy:"",sortOrder:"",modalVisable:!1}},methods:{logout:function(){this.$store.dispatch("logout")},displayPosts:function(){var e=this;return(0,R.A)((0,V.A)().mark((function t(){return(0,V.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loadingPosts=!1,t.next=4,e.$store.dispatch("getPosts");case 4:e.posts=e.$store.state.posts,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:return t.prev=10,e.loadingPosts=!0,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))()},deletePost:function(e){try{this.$store.dispatch("deletePost",e)}catch(t){console.error(t)}},addPost:function(){var e=this;try{var t=this.post_Content.trim();t?this.$store.dispatch("addPost",{post_Content:t}).then((function(){e.post_Content=""}))["catch"]((function(e){console.error("Error adding post:",e)})):console.error("Post Content cannot be empty.")}catch(n){console.error("Error adding post:",n)}},populatePostFields:function(e){this.post_Title=e.post_Title,this.post_Content=e.post_Content,this.post_Date=e.post_Date,this.editedPosts=(0,K.A)({},e)},clearPostInput:function(){this.post_Title="",this.post_Content="",this.post_Date=""},postEdit:function(){try{this.$store.dispatch("editPost",this.editedPosts),this.editedPosts={post_ID:null,post_Title:null,post_Content:null,post_Date:null,user_ID:null}}catch(e){console.error(e)}},displayUsers:function(){var e=this;return(0,R.A)((0,V.A)().mark((function t(){return(0,V.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loadingUsers=!1,t.next=4,e.$store.dispatch("getUsers");case 4:e.users=e.$store.state.users,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:return t.prev=10,e.loadingUsers=!0,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))()},getUsername:function(e){var t=this.users.find((function(t){return t.user_ID===e}));return t?t.user_Name:"Unknown"},getUsersurname:function(e){var t=this.users.find((function(t){return t.user_ID===e}));return t?t.user_Surname:"Unknown"},getUserEmail:function(e){var t=this.users.find((function(t){return t.user_ID===e}));return t?t.user_Email:"Unknown"}},mounted:function(){this.displayPosts(),this.displayUsers()}};var z=n(1241);const G=(0,z.A)(Y,[["render",H],["__scopeId","data-v-3b82d4a2"]]),Z=G}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,s)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,o,s]=e[u],i=!0,l=0;l<r.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,o,s]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{56:"cabe79bd",426:"838b9a25",495:"7858882d",503:"1404c8d8",762:"dac261bf",876:"383e3f04",948:"f530be70"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{426:"f35f53c2",503:"cd55f620",762:"3fc9d777",876:"cd55f620",948:"8bc00e92"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="frontend:";n.l=(r,o,s,a)=>{if(e[r])e[r].push(o);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=r),e[r]=[o];var f=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,o,s)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var i=n=>{if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&n.type,i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+i+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=i,a.parentNode&&a.parentNode.removeChild(a),s(l)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],s=o.getAttribute("data-href");if(s===e||s===t)return o}},r=r=>new Promise(((o,s)=>{var a=n.miniCssF(r),i=n.p+a;if(t(a,i))return o();e(r,i,null,o,s)})),o={524:0};n.f.miniCss=(e,t)=>{var n={426:1,503:1,762:1,876:1,948:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={524:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=s);var a=n.p+n.u(t),i=new Error,l=r=>{if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,o[1](i)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,s,[a,i,l]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var u=l(n)}for(t&&t(r);c<a.length;c++)s=a[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[504],(()=>n(1483)));r=n.O(r)})();
//# sourceMappingURL=app.d7103b27.js.map