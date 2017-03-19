webpackJsonp([1,2],[,,,,,,,function(t,e,n){"use strict";var o=n(1),s=n(131),a=n(116),c=n.n(a),i=n(119),r=n.n(i),u=n(121),l=n.n(u),p=n(120),f=n.n(p);o.default.use(s.a),e.a=new s.a({routes:[{path:"/",component:c.a},{path:"/sign_in",name:"Users.sign_in",component:c.a},{path:"/posts",name:"Posts.index",component:r.a},{path:"/posts/new",name:"Posts.new",component:f.a},{path:"/posts/:id",name:"Posts.show",component:l.a}]})},,,function(t,e,n){"use strict";var o=n(1),s=n(20);e.a={login:function(t,e,n){console.log(s.a);var a={user:{email:t,password:e}};o.default.$http.post("/users/api_sign_in.json",a).then(function(t){s.a.dispatch("login"),n(t.data)}).catch(function(t){s.a.dispatch("logout")})},logout:function(t){console.log(s.a),o.default.$http.delete("/users/api_sign_out.json").then(function(e){s.a.dispatch("logout"),t(e.data)}).catch(function(t){s.a.dispatch("logout")})},checkLoggedIn:function(){o.default.$http.get("/users/check_signed_in.json").then(function(t){s.a.dispatch("login")}).catch(function(t){s.a.dispatch("logout")})}}},,,function(t,e,n){"use strict";var o=n(1);e.a={getPosts:function(t,e){o.default.$http.get("/posts.json").then(function(e){t(e.data)}).catch(function(t){e(t)})},getPost:function(t,e,n){o.default.$http.get("/posts/"+t+".json").then(function(t){e(t.data)}).catch(function(t){n(t)})},createPost:function(t,e,n){var s={post:t};o.default.$http.post("/posts.json",s).then(function(t){e(t.data)}).catch(function(t){n(t)})}}},,,,,,,function(t,e,n){"use strict";var o=n(1),s=n(133),a=n(7);o.default.use(s.a);var c={auth:!1},i={login:function(t){console.log("mutations login"),t.auth=!0,a.a.push({name:"Posts.index"})},logout:function(t){console.log("mutations logout"),t.auth=!1,a.a.push({name:"Users.sign_in"})}},r={login:function(t){return(0,t.commit)("login")},logout:function(t){return(0,t.commit)("logout")}},u={loggedIn:function(t){return t.auth}};e.a=new s.a.Store({state:c,getters:u,actions:r,mutations:i})},,,,,,,function(t,e,n){"use strict";var o=n(1);e.a={getComments:function(t,e,n){o.default.$http.get("/posts/"+t+"/comments.json").then(function(t){e(t.data)}).catch(function(t){console.log(t)})},createComment:function(t,e,n,s){var a={comment:{content:e}};o.default.$http.post("/posts/"+t+"/comments.json",a).then(function(t){n(t.data)}).catch(function(t){console.log(t)})}}},,,,,,,,function(t,e,n){n(105);var o=n(4)(n(86),n(122),"data-v-0a2fa57f",null);t.exports=o.exports},,,function(t,e){},function(t,e,n){n(110);var o=n(4)(n(79),n(127),null,null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",components:{Iccs340LeftSidenav:n(115)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10);e.default={methods:{handleSelect:function(t,e){console.log(t,e)},logout:function(){console.log("methods.logout"),o.a.logout()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),s=n(7);e.default={name:"sign-in",data:function(){return{email:"",pass:""}},methods:{login:function(){console.log("methods.login"),o.a.login(this.email,this.pass,function(t){s.a.push({name:"Posts.index"})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comment",props:{comment:{type:Object,required:!1,default:{}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(27),s=n(7);e.default={name:"new-comment",data:function(){return{comment:{content:""}}},props:{post:{type:Object,required:!1,default:{}}},methods:{createComment:function(){var t=this.post.id,e=this.comment.content;this.comment.content="",o.a.createComment(t,e,function(e){console.log(e),s.a.push({name:"Posts.show",params:{post_id:t},query:{t:new Date}})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(13);e.default={name:"posts",components:{Iccs340Post:n(35)},data:function(){return{posts:null,error:null}},beforeRouteEnter:function(t,e,n){o.a.getPosts(function(t){n(function(e){e.posts=t})})},watch:{$route:function(){var t=this;o.a.getPosts(function(e){t.posts=e})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(13),s=n(7);e.default={name:"new-post",data:function(){return{post:{name:"",content:""}}},methods:{createPost:function(){o.a.createPost(this.post,function(t){s.a.push({name:"Posts.index"})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"posts",props:{post:{type:Object,required:!1,default:{}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(13),s=n(27);e.default={name:"post",components:{Iccs340Post:n(35),Iccs340Comment:n(117),Iccs340NewComment:n(118)},data:function(){return{post:{},comments:[],error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;o.a.getPost(this.$route.params.id,function(e){t.post=e,s.a.getComments(e.id,function(e){t.comments=e})})}}}},,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){n(109);var o=n(4)(n(80),n(126),null,null);t.exports=o.exports},function(t,e,n){n(106);var o=n(4)(n(81),n(123),"data-v-5cb97a65",null);t.exports=o.exports},function(t,e,n){n(113);var o=n(4)(n(82),n(130),"data-v-f2859632",null);t.exports=o.exports},function(t,e,n){n(108);var o=n(4)(n(83),n(125),"data-v-7122c0b0",null);t.exports=o.exports},function(t,e,n){n(112);var o=n(4)(n(84),n(129),null,null);t.exports=o.exports},function(t,e,n){n(111);var o=n(4)(n(85),n(128),"data-v-c35205de",null);t.exports=o.exports},function(t,e,n){n(107);var o=n(4)(n(87),n(124),"data-v-6e431d48",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("div",{staticClass:"text item"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"number"},[n("p",[t._v("# "+t._s(t.post.id))])]),t._v(" "),n("div",{staticClass:"title"},[n("span",[t._v("Title: "+t._s(t.post.name))])]),t._v(" "),n("div",{staticClass:"content"},[n("p",[t._v("Content: "+t._s(t.post.content))])])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sign-in"},[n("h1",[t._v("Willkommen auf der Loginseite")]),t._v(" "),n("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"Email"}},[n("el-input",{model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.login(e)}}},[t._v("Login")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("el-form",{attrs:{"label-width":"120px"}},[n("div",[n("el-form-item",{attrs:{label:"Post"}},[n("iccs340-post",{attrs:{post:t.post}})],1)],1),t._v(" "),t._l(t.comments,function(t){return n("div",{key:t.id},[n("el-form-item",{attrs:{label:"Comment"}},[n("iccs340-comment",{attrs:{comment:t}})],1)],1)}),t._v(" "),n("div",[n("iccs340-new-comment",{attrs:{post:t.post}})],1)],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-post"},[n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"Add Comment"}},[n("el-input",{attrs:{placeholder:""},model:{value:t.comment.content,callback:function(e){t.comment.content=e},expression:"comment.content"}}),t._v(" "),n("br"),n("br"),t._v(" "),n("div",{staticClass:"subtn"},[n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.createComment(e)}}},[t._v("Save")])],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-menu",{staticClass:"el-menu-demo",attrs:{theme:"dark",mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{attrs:{to:{name:"Posts.new"}}},[n("el-button",{attrs:{type:"success"}},[t._v("Add new")])],1)],1),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("router-link",{attrs:{to:{name:"Posts.index"}}},[n("el-button",{attrs:{type:"warning"}},[t._v("View Post")])],1)],1),t._v(" "),n("el-menu-item",{attrs:{index:"3"}},[n("el-button",{attrs:{type:"danger"},nativeOn:{click:function(e){t.logout(e)}}},[t._v("Logout")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.$store.getters.loggedIn?n("div",[n("iccs340-left-sidenav")],1):t._e(),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-post"},[n("h1",[t._v("Add new post")]),t._v(" "),n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"Name"}},[n("el-input",{attrs:{placeholder:""},model:{value:t.post.name,callback:function(e){t.post.name=e},expression:"post.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Content"}},[n("el-input",{attrs:{type:"textarea",placeholder:""},model:{value:t.post.content,callback:function(e){t.post.content=e},expression:"post.content"}})],1),t._v(" "),n("el-form-item",[n("span",{staticStyle:{flex:"1"}}),t._v(" "),n("div",{staticClass:"subtn"},[n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.createPost(e)}}},[t._v("Save")])],1),t._v(" "),n("span",{staticStyle:{flex:"1"}})])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("h1",[t._v("View post")]),t._v(" "),n("el-card",{staticClass:"box-card"},t._l(t.posts,function(t){return n("div",{key:t.id,staticClass:"text item"},[n("el-card",{staticClass:"inner-card"},[n("router-link",{attrs:{to:{name:"Posts.show",params:{id:t.id}}}},[n("iccs340-post",{attrs:{post:t}})],1)],1)],1)}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",[n("div",{staticClass:"el-form-list-text-container"},[n("span",[t._v(t._s(t.comment.user.email))]),t._v(" "),n("span",[t._v(t._s(t.comment.content))])])])],1)],1)},staticRenderFns:[]}},,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),s=n(37),a=n.n(s),c=n(38),i=(n.n(c),n(39)),r=n.n(i),u=n(7),l=n(20),p=n(36),f=n.n(p),d=n(10);o.default.use(a.a),o.default.$http=f.a,f.a.defaults.baseURL="https://loginwebapp.herokuapp.com/",f.a.defaults.headers.common.Accept="application/json",f.a.defaults.withCredentials=!0,o.default.config.productionTip=!1,d.a.checkLoggedIn(),new o.default({el:"#app",router:u.a,store:l.a,template:"<App/>",components:{App:r.a}})}],[135]);
//# sourceMappingURL=app.7388093822b3e1a4324c.js.map