(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bc4860c"],{"06cc":function(t,e,r){},"21d8":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[t._m(0),r("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[this.enable?r("el-collapse-item",{attrs:{title:"防沉迷状态",name:"status"}},[r("el-form",{ref:"form2",attrs:{"label-width":"20%",size:"small"}},[r("el-form-item",{attrs:{label:"防沉迷终端数:"}},[t._v(" "+t._s(this.status.client_num)+"个 "),r("el-link",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",href:"#/group/macgroup"}},[t._v("去添加")])],1),r("el-form-item",{attrs:{label:"当前联网状态:"}},[1==this.status.mac_filter?r("span",{staticStyle:{color:"red"}},[t._v(" 已断网(明天恢复) ")]):r("span",{staticStyle:{color:"green"}},[t._v(" 联网中 ")]),1==this.status.mac_filter?r("el-button",{staticStyle:{"margin-left":"30px"},attrs:{plain:"",type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdateChildGuard(0)}}},[t._v("立即恢复")]):r("el-button",{staticStyle:{"margin-left":"30px"},attrs:{plain:"",type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdateChildGuard(1)}}},[t._v("立即断网")])],1)],1)],1):t._e(),r("el-collapse-item",{attrs:{title:"防沉迷配置(超过后断网)",name:"base"}},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"20%",size:"small"}},[r("el-form-item",{attrs:{label:"开启防沉迷:"}},[r("el-switch",{staticStyle:{width:"400px"},attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.enable,callback:function(e){t.$set(t.form,"enable",e)},expression:"form.enable"}})],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"light",placement:"top"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("span",[t._v("请在用户分组中新建儿童分组，并将儿童的终端加入分组中，防沉迷只对该分组生效。")]),r("br")]),r("el-form-item",{attrs:{label:"防沉迷(儿童)分组:"}},[r("el-select",{staticStyle:{width:"300px"},model:{value:t.form.mac_group_id,callback:function(e){t.$set(t.form,"mac_group_id",e)},expression:"form.mac_group_id"}},t._l(t.mac_group_list,(function(t){return r("el-option",{key:t.id,ref:"user_select",refInFor:!0,attrs:{label:t.name,value:t.id,width:"139px"}})})),1),r("el-link",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",href:"#/group/macgroup"}},[t._v("新建分组")])],1)],1),r("el-form-item",{attrs:{label:"每天上网时长:"}},[r("el-select",{staticStyle:{width:"300px"},model:{value:t.form.total_time,callback:function(e){t.$set(t.form,"total_time",e)},expression:"form.total_time"}},[r("el-option",{attrs:{label:"不限制",value:0}}),r("el-option",{attrs:{label:"30分钟",value:30}}),r("el-option",{attrs:{label:"60分钟",value:60}}),r("el-option",{attrs:{label:"2小时",value:120}}),r("el-option",{attrs:{label:"3小时",value:180}}),r("el-option",{attrs:{label:"4小时",value:240}}),r("el-option",{attrs:{label:"5小时",value:300}}),r("el-option",{attrs:{label:"6小时",value:360}}),r("el-option",{attrs:{label:"7小时",value:420}}),r("el-option",{attrs:{label:"8小时",value:480}}),r("el-option",{attrs:{label:"12小时",value:720}})],1)],1),r("el-form-item",{attrs:{label:"每天上网流量:"}},[r("el-select",{staticStyle:{width:"300px"},model:{value:t.form.total_flow,callback:function(e){t.$set(t.form,"total_flow",e)},expression:"form.total_flow"}},[r("el-option",{attrs:{label:"不限制",value:0}}),r("el-option",{attrs:{label:"100MB",value:100}}),r("el-option",{attrs:{label:"200MB",value:200}}),r("el-option",{attrs:{label:"500MB",value:500}}),r("el-option",{attrs:{label:"1GB",value:1024}}),r("el-option",{attrs:{label:"2GB",value:2048}}),r("el-option",{attrs:{label:"3GB",value:3072}}),r("el-option",{attrs:{label:"4GB",value:4096}}),r("el-option",{attrs:{label:"5GB",value:5120}}),r("el-option",{attrs:{label:"10GB",value:10240}}),r("el-option",{attrs:{label:"15GB",value:15360}}),r("el-option",{attrs:{label:"20GB",value:20480}}),r("el-option",{attrs:{label:"30GB",value:30720}}),r("el-option",{attrs:{label:"50GB",value:51200}})],1)],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"light",placement:"top"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("span",[t._v("游戏和视频时间依赖特征库，部分app会存在偏差，可根据小孩实际游戏视频时长进行调节，游戏和视频时长依赖上网审计，需要先开启上网审计。")]),r("br")]),r("el-form-item",{attrs:{label:"每天游戏时长:"}},[r("el-select",{staticStyle:{width:"300px"},model:{value:t.form.game_total_time,callback:function(e){t.$set(t.form,"game_total_time",e)},expression:"form.game_total_time"}},[r("el-option",{attrs:{label:"不限制",value:0}}),r("el-option",{attrs:{label:"30分钟",value:30}}),r("el-option",{attrs:{label:"60分钟",value:60}}),r("el-option",{attrs:{label:"2小时",value:120}}),r("el-option",{attrs:{label:"3小时",value:180}}),r("el-option",{attrs:{label:"4小时",value:240}}),r("el-option",{attrs:{label:"5小时",value:300}}),r("el-option",{attrs:{label:"6小时",value:360}}),r("el-option",{attrs:{label:"7小时",value:420}}),r("el-option",{attrs:{label:"8小时",value:480}})],1)],1)],1),r("el-form-item",{attrs:{label:"每天视频时长:"}},[r("el-select",{staticStyle:{width:"300px"},model:{value:t.form.video_total_time,callback:function(e){t.$set(t.form,"video_total_time",e)},expression:"form.video_total_time"}},[r("el-option",{attrs:{label:"不限制",value:0}}),r("el-option",{attrs:{label:"30分钟",value:30}}),r("el-option",{attrs:{label:"60分钟",value:60}}),r("el-option",{attrs:{label:"2小时",value:120}}),r("el-option",{attrs:{label:"3小时",value:180}}),r("el-option",{attrs:{label:"4小时",value:240}}),r("el-option",{attrs:{label:"5小时",value:300}}),r("el-option",{attrs:{label:"6小时",value:360}}),r("el-option",{attrs:{label:"7小时",value:420}}),r("el-option",{attrs:{label:"8小时",value:480}}),r("el-option",{attrs:{label:"12小时",value:720}})],1)],1),r("el-form-item",[r("el-button",{staticStyle:{width:"300px"},attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")])],1)],1)],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"margin-left":"20px","font-size":"14px"}},[r("span",[t._v("防沉迷用于控制指定用户上网，可设置每天允许上网时长、上网流量等，合理安排上网时间，防止沉迷游戏、视频。")]),r("br")])}],u=(r("b0c0"),r("2435")),o=r("f9b6"),l=r("ab10"),i=r("e5f8"),c={data:function(){return{work_mode:0,mac_group_list:[],connect_status:{},activeNames:["base","status"],form:{},status:{client_num:3,mac_filter:1,video_filter:1,game_filter:1},mac_group_id:0,enable:0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this,e={no_def:0};Object(o["z"])(e).then((function(e){if(t.mac_group_list=e.data.group_list,t.mac_group_list.length>0)for(var r in t.def_mac_group=t.mac_group_list[0].id,t.mac_group_list)0==t.mac_group_list[r].id&&(t.mac_group_list[r].name="默认分组")})),Object(o["v"])().then((function(e){t.form=e.data,t.mac_group_id=t.form.mac_group_id,t.enable=t.form.enable})),Object(l["b"])().then((function(e){t.work_mode=e.data.work_mode})),Object(i["d"])().then((function(e){t.status=e.data.status}))},handleUpdateChildGuard:function(t){var e=this,r={data:{mac_filter:t}};Object(o["H"])(r).then((function(t){e.$message({message:"设置成功",type:"success"}),e.fetchData()})),0==t&&(r={data:{}},Object(o["i"])(r).then((function(t){})))},onSubmit:function(){var t=this,e={data:{}};e.data=this.form,Object(o["G"])(e).then((function(e){t.$message({message:u["c"],type:"success"}),t.fetchData()}))}}},s=c,d=(r("e254"),r("2877")),f=Object(d["a"])(s,a,n,!1,null,"71a8aa1e",null);e["default"]=f.exports},ab10:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"g",(function(){return u})),r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return l})),r.d(e,"e",(function(){return i})),r.d(e,"f",(function(){return c})),r.d(e,"h",(function(){return s})),r.d(e,"d",(function(){return d})),r.d(e,"i",(function(){return f}));var a=r("b775");function n(t){return Object(a["a"])({url:"/get_network_base",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/set_network_base",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/get_lan_info",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/get_wan_info",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/set_lan_info",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/set_lan_mac",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/set_wan_info",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/get_wireless_info",method:"get",params:t})}function f(t){return Object(a["a"])({url:"/set_wireless_ssid1",method:"post",data:t})}},e254:function(t,e,r){"use strict";r("06cc")},e5f8:function(t,e,r){"use strict";r.d(e,"n",(function(){return n})),r.d(e,"m",(function(){return u})),r.d(e,"f",(function(){return o})),r.d(e,"e",(function(){return l})),r.d(e,"b",(function(){return i})),r.d(e,"j",(function(){return c})),r.d(e,"h",(function(){return s})),r.d(e,"p",(function(){return d})),r.d(e,"o",(function(){return f})),r.d(e,"a",(function(){return m})),r.d(e,"i",(function(){return _})),r.d(e,"g",(function(){return p})),r.d(e,"l",(function(){return b})),r.d(e,"k",(function(){return h})),r.d(e,"d",(function(){return g})),r.d(e,"c",(function(){return v}));var a=r("b775");function n(t){return Object(a["a"])({url:"/get_system_status",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/get_oaf_run_status",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/get_connect_status",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/get_client_list",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/get_all_client_list",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/get_dev_visit_time",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/get_dev_url_visit_list",method:"get",params:t})}function d(t){return Object(a["a"])({url:"/get_url_visit_list",method:"get",params:t})}function f(t){return Object(a["a"])({url:"/get_url_history_data",method:"get",params:t})}function m(t){return Object(a["a"])({url:"/del_url_history_data",method:"post",data:t})}function _(t){return Object(a["a"])({url:"/get_dev_visit_list",method:"get",params:t})}function p(t){return Object(a["a"])({url:"/get_day_flow",method:"get",params:t})}function b(t){return Object(a["a"])({url:"/get_hour_flow",method:"get",params:t})}function h(t){return Object(a["a"])({url:"/get_global_app_stats",method:"get",params:t})}function g(t){return Object(a["a"])({url:"/get_child_dev_summary",method:"get",params:t})}function v(t){return Object(a["a"])({url:"/get_child_app_week_time",method:"get",params:t})}},f9b6:function(t,e,r){"use strict";r.d(e,"v",(function(){return n})),r.d(e,"G",(function(){return u})),r.d(e,"j",(function(){return o})),r.d(e,"i",(function(){return l})),r.d(e,"H",(function(){return i})),r.d(e,"t",(function(){return c})),r.d(e,"A",(function(){return s})),r.d(e,"Q",(function(){return d})),r.d(e,"s",(function(){return f})),r.d(e,"C",(function(){return m})),r.d(e,"g",(function(){return _})),r.d(e,"q",(function(){return p})),r.d(e,"S",(function(){return b})),r.d(e,"u",(function(){return h})),r.d(e,"z",(function(){return g})),r.d(e,"w",(function(){return v})),r.d(e,"x",(function(){return j})),r.d(e,"e",(function(){return O})),r.d(e,"o",(function(){return w})),r.d(e,"b",(function(){return y})),r.d(e,"l",(function(){return k})),r.d(e,"N",(function(){return x})),r.d(e,"k",(function(){return S})),r.d(e,"a",(function(){return G})),r.d(e,"E",(function(){return B})),r.d(e,"n",(function(){return $})),r.d(e,"d",(function(){return z})),r.d(e,"K",(function(){return C})),r.d(e,"p",(function(){return q})),r.d(e,"f",(function(){return D})),r.d(e,"L",(function(){return N})),r.d(e,"B",(function(){return M})),r.d(e,"R",(function(){return E})),r.d(e,"F",(function(){return J})),r.d(e,"I",(function(){return U})),r.d(e,"O",(function(){return F})),r.d(e,"r",(function(){return H})),r.d(e,"h",(function(){return I})),r.d(e,"M",(function(){return A})),r.d(e,"D",(function(){return K})),r.d(e,"T",(function(){return L})),r.d(e,"y",(function(){return P})),r.d(e,"P",(function(){return Q})),r.d(e,"m",(function(){return R})),r.d(e,"c",(function(){return T})),r.d(e,"J",(function(){return V}));var a=r("b775");function n(t){return Object(a["a"])({url:"/get_child_guard",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/set_child_guard",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/clear_child_guard_week_stats",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/clear_child_guard_day_stats",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/set_child_guard_status",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/get_app_filter",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/get_mac_filter",method:"get",params:t})}function d(t){return Object(a["a"])({url:"/update_mac_filter_rule",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/get_app_class_list",method:"get",params:t})}function m(t){return Object(a["a"])({url:"/get_time_group",method:"get",params:t})}function _(t){return Object(a["a"])({url:"/add_time_group",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/del_time_group",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/update_time_group",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/get_audit",method:"get",params:t})}function g(t){return Object(a["a"])({url:"/get_mac_group",method:"get",params:t})}function v(t){return Object(a["a"])({url:"/get_feature_config",method:"get",params:t})}function j(t){return Object(a["a"])({url:"/get_feature_info",method:"get",params:t})}function O(t){return Object(a["a"])({url:"/add_mac_group",method:"post",data:t})}function w(t){return Object(a["a"])({url:"/del_mac_group",method:"post",data:t})}function y(t){return Object(a["a"])({url:"/add_group_mac",method:"post",data:t})}function k(t){return Object(a["a"])({url:"/del_group_mac",method:"post",data:t})}function x(t){return Object(a["a"])({url:"/update_app_filter_rule",method:"post",data:t})}function S(t){return Object(a["a"])({url:"/del_app_filter_rule",method:"post",data:t})}function G(t){return Object(a["a"])({url:"/add_app_filter_rule",method:"post",data:t})}function B(t){return Object(a["a"])({url:"/set_app_filter",method:"post",data:t})}function $(t){return Object(a["a"])({url:"/del_mac_filter_rule",method:"post",data:t})}function z(t){return Object(a["a"])({url:"/add_mac_filter_rule",method:"post",data:t})}function C(t){return Object(a["a"])({url:"/set_mac_filter",method:"post",data:t})}function q(t){return Object(a["a"])({url:"/del_port_filter_rule",method:"post",data:t})}function D(t){return Object(a["a"])({url:"/add_port_filter_rule",method:"post",data:t})}function N(t){return Object(a["a"])({url:"/set_port_filter",method:"post",data:t})}function M(t){return Object(a["a"])({url:"/get_port_filter",method:"get",params:t})}function E(t){return Object(a["a"])({url:"/update_port_filter_rule",method:"post",data:t})}function J(t){return Object(a["a"])({url:"/set_audit",method:"post",data:t})}function U(t){return Object(a["a"])({url:"/set_feature_config",method:"post",data:t})}function F(t){return Object(a["a"])({url:"/update_feature",method:"post",data:t})}function H(t){return Object(a["a"])({url:"/del_url_filter_rule",method:"post",data:t})}function I(t){return Object(a["a"])({url:"/add_url_filter_rule",method:"post",data:t})}function A(t){return Object(a["a"])({url:"/set_url_filter",method:"post",data:t})}function K(t){return Object(a["a"])({url:"/get_url_filter",method:"get",params:t})}function L(t){return Object(a["a"])({url:"/update_url_filter_rule",method:"post",data:t})}function P(t){return Object(a["a"])({url:"/get_ip_qos",method:"get",params:t})}function Q(t){return Object(a["a"])({url:"/update_ip_qos_rule",method:"post",data:t})}function R(t){return Object(a["a"])({url:"/del_ip_qos_rule",method:"post",data:t})}function T(t){return Object(a["a"])({url:"/add_ip_qos_rule",method:"post",data:t})}function V(t){return Object(a["a"])({url:"/set_ip_qos",method:"post",data:t})}}}]);