"use strict";(self.webpackChunkpactap_admin=self.webpackChunkpactap_admin||[]).push([[125],{45125:(W,m,r)=>{r.r(m),r.d(m,{DashboardModule:()=>z});var d=r(96814),t=r(99468),_=r(20553),h=r(69862);let x=(()=>{class e{constructor(n){this.http=n}getOrderList(n){return this.http.get(`${_.N.apiUrl}order/list?status=${n}`)}getPendingOrderList(n){return this.http.get(`${_.N.apiUrl}order/list?status=${n}&actionRequired=true`)}getShipmentList(){return this.http.get(`${_.N.apiUrl}shipment/list-all`)}static#t=this.\u0275fac=function(i){return new(i||e)(t.LFG(h.eN))};static#n=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var A=r(29917),l=r(6627);function f(e,o){if(1&e&&(t.TgZ(0,"a",54),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.Q6J("ngClass","MASS_ACCEPTED"===n.v_state||"PENDING"!==n.c_state&&"ACCEPTED"!==n.c_state||"PENDING"!==n.a_state&&"PPS_ACCEPTED"!==n.a_state?"btn-darkblue":"btn-warning"),t.xp6(1),t.hij(" ",n.newStatus," ")}}function U(e,o){if(1&e&&(t.TgZ(0,"a",54),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.Q6J("ngClass","ACCEPTED"!==n.v_state&&"MASS_ACCEPTED"!==n.v_state&&"PPS_ACCEPTED"!==n.v_state||"ACCEPTED"!==n.c_state&&"PPS_ACCEPTED"!==n.c_state&&"MASS_ACCEPTED"!==n.c_state||"PENDING"!==n.a_state&&"PPS_ACCEPTED"!==n.a_state?"btn-warning":"btn-darkblue"),t.xp6(1),t.hij(" ",n.newStatus," ")}}const p=function(e){return["/customers",e,"edit-profile"]};function D(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"p",47)(2,"span"),t._uU(3),t.TgZ(4,"a",55),t._uU(5),t.qZA(),t._uU(6),t.ALo(7,"date"),t.qZA()(),t.TgZ(8,"p",47)(9,"span",56),t._uU(10),t.qZA()(),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(3),t.hij("",null==n||null==n.customer?null:n.customer.companyName," "),t.xp6(1),t.Q6J("routerLink",t.VKq(7,p,null==n?null:n.customer._id)),t.xp6(1),t.hij("(ID:",null==n||null==n.customer||null==n.customer.customerLogin?null:n.customer.customerLogin.customerId,")"),t.xp6(1),t.hij(" approved mass production on ",t.lcZ(7,5,null==n?null:n.customerMassApproveDate)," "),t.xp6(4),t.hij(" ",null==n||null==n.vendor?null:n.vendor.companyName," need to give final approval for Mass Production. ")}}const Z=function(e){return["/vendors/detail",e,"basic-details"]};function C(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"p",47)(2,"span"),t._uU(3),t.TgZ(4,"a",55),t._uU(5),t.qZA(),t._uU(6),t.ALo(7,"date"),t.qZA()(),t.TgZ(8,"p",47)(9,"span",56),t._uU(10),t.qZA()(),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(3),t.hij("",null==n||null==n.vendor?null:n.vendor.companyName," "),t.xp6(1),t.Q6J("routerLink",t.VKq(7,Z,null==n?null:n.vendor._id)),t.xp6(1),t.hij("(ID:",null==n||null==n.vendor?null:n.vendor.vendorId,")"),t.xp6(1),t.hij(" approved mass production on ",t.lcZ(7,5,null==n?null:n.vendorMassApproveDate)," "),t.xp6(4),t.hij(" ",null==n||null==n.customer?null:n.customer.companyName," need to give final approval for Mass Production. ")}}function P(e,o){if(1&e&&(t.TgZ(0,"p",50)(1,"span"),t._uU(2),t.TgZ(3,"a",55),t._uU(4),t.qZA(),t._uU(5," requested change in Lead Time in one or more products in the order. "),t._UZ(6,"br"),t._uU(7),t.TgZ(8,"a",55),t._uU(9),t.qZA(),t._uU(10," has to accept the change in lead time to accept this order. "),t.qZA()()),2&e){const n=t.oxw(2).$implicit;t.xp6(2),t.hij(" ",null==n||null==n.vendor?null:n.vendor.companyName," "),t.xp6(1),t.Q6J("routerLink",t.VKq(6,Z,null==n?null:n.vendor._id)),t.xp6(1),t.hij(" (ID: ",null==n||null==n.vendor?null:n.vendor.vendorId,") "),t.xp6(3),t.hij(" ",null==n||null==n.customer?null:n.customer.companyName," "),t.xp6(1),t.Q6J("routerLink",t.VKq(8,p,null==n?null:n.customer._id)),t.xp6(1),t.hij(" (ID: ",null==n||null==n.customer||null==n.customer.customerLogin?null:n.customer.customerLogin.customerId,") ")}}function b(e,o){if(1&e&&(t.TgZ(0,"div",21),t.YNc(1,P,11,10,"p",57),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",n.isProductionLeadTimeChanged&&"PENDING"===n.c_state)}}function q(e,o){if(1&e&&(t.TgZ(0,"div",21)(1,"p",50)(2,"span"),t._uU(3),t.TgZ(4,"a",55),t._uU(5),t.qZA(),t._uU(6,"approval is require for PPS, to proceed with mass production."),t.qZA()()()),2&e){const n=t.oxw().$implicit;t.xp6(3),t.hij("",null==n||null==n.customer?null:n.customer.companyName," "),t.xp6(1),t.Q6J("routerLink",t.VKq(3,p,null==n?null:n.customer._id)),t.xp6(1),t.hij("(ID: ",null==n||null==n.customer||null==n.customer.customerLogin?null:n.customer.customerLogin.customerId,")")}}const E=function(e){return["/orders/pending-detail",e]};function N(e,o){if(1&e&&(t.TgZ(0,"div",45)(1,"div",46)(2,"h6",47),t._uU(3,"Order ID: "),t.TgZ(4,"strong",48)(5,"a",49),t._uU(6),t.qZA()()(),t.TgZ(7,"p",50),t._uU(8,"Status: "),t.YNc(9,f,2,2,"a",51),t.YNc(10,U,2,2,"a",51),t.qZA(),t.TgZ(11,"p",47),t._uU(12,"No of Products: "),t.TgZ(13,"strong",52),t._uU(14),t.qZA()(),t.YNc(15,D,11,9,"ng-container",5),t.YNc(16,C,11,9,"ng-container",5),t.YNc(17,b,2,1,"div",53),t.YNc(18,q,7,5,"div",53),t.qZA()()),2&e){const n=o.$implicit;t.xp6(5),t.Q6J("routerLink",t.VKq(9,E,n._id)),t.xp6(1),t.Oqu(n.orderId),t.xp6(3),t.Q6J("ngIf",n.isPpsProducts),t.xp6(1),t.Q6J("ngIf",!n.isPpsProducts),t.xp6(4),t.Oqu(n.totalProducts),t.xp6(1),t.Q6J("ngIf",!("MASS_ACCEPTED"!==n.c_state||"PPS_ACCEPTED"!==n.a_state&&"PENDING"!==n.a_state||"PPS_ACCEPTED"!==n.v_state&&"ACCEPTED"!==n.v_state)),t.xp6(1),t.Q6J("ngIf",!("PPS_ACCEPTED"!==n.c_state&&"ACCEPTED"!==n.c_state||"PPS_ACCEPTED"!==n.a_state&&"PENDING"!==n.a_state||"MASS_ACCEPTED"!==n.v_state)),t.xp6(1),t.Q6J("ngIf",!("PENDING"!==n.c_state&&"ACCEPTED"!==n.c_state||"PENDING"!==n.a_state&&"PPS_ACCEPTED"!==n.a_state||"MASS_ACCEPTED"===n.v_state)),t.xp6(1),t.Q6J("ngIf",!("PENDING"!==n.c_state&&"ACCEPTED"!==n.c_state||"PENDING"!==n.a_state&&"PPS_ACCEPTED"!==n.a_state||"PPS_ACCEPTED"!==n.v_state))}}function S(e,o){if(1&e&&(t.ynx(0),t.YNc(1,N,19,11,"div",44),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.pendingOrders)}}function y(e,o){1&e&&(t.TgZ(0,"div",58),t._uU(1,"No Data Found."),t.qZA())}function I(e,o){1&e&&(t.ynx(0),t._uU(1," PRODUCTION NOT STARTED "),t.BQk())}function O(e,o){1&e&&(t.ynx(0),t._uU(1," IN PRODUCTION "),t.BQk())}function Q(e,o){1&e&&(t.ynx(0),t._uU(1," PRODUCTION ENDED "),t.BQk())}function L(e,o){1&e&&(t.ynx(0),t._uU(1," ON TIME"),t.BQk())}function j(e,o){1&e&&(t.ynx(0),t._uU(1,"DELAYED"),t.BQk())}function w(e,o){if(1&e&&(t.TgZ(0,"div",62)(1,"p",50)(2,"span"),t._uU(3),t._UZ(4,"br"),t._uU(5),t.qZA(),t.TgZ(6,"span",38),t.YNc(7,I,2,0,"ng-container",5),t.YNc(8,O,2,0,"ng-container",5),t.YNc(9,Q,2,0,"ng-container",5),t.TgZ(10,"span",63),t.YNc(11,L,2,0,"ng-container",5),t.YNc(12,j,2,0,"ng-container",5),t.qZA()()()()),2&e){const n=t.oxw().$implicit;t.xp6(3),t.hij(" ",null==n||null==n.product?null:n.product.productName,""),t.xp6(2),t.hij("ID: ",null==n||null==n.product?null:n.product.productId,""),t.xp6(2),t.Q6J("ngIf",!n.productionStartActualDate&&!n.productionEndActualDate),t.xp6(1),t.Q6J("ngIf",n.productionStartActualDate&&!n.productionEndActualDate),t.xp6(1),t.Q6J("ngIf",n.productionStartActualDate&&n.productionEndActualDate),t.xp6(1),t.Q6J("ngClass",n.productionDelayDays<=0?"bg-success":"bg-warning"),t.xp6(1),t.Q6J("ngIf",n.productionDelayDays<=0),t.xp6(1),t.Q6J("ngIf",n.productionDelayDays>0)}}function J(e,o){if(1&e&&(t.ynx(0),t.YNc(1,w,13,8,"div",61),t.BQk()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("ngIf",!n.isPps)}}const v=function(e){return["/orders/ongoing-detail",e]};function B(e,o){if(1&e&&(t.TgZ(0,"div",45)(1,"div",46)(2,"h6",47),t._uU(3,"Order ID: "),t.TgZ(4,"strong",48)(5,"a",49),t._uU(6),t.qZA()()(),t.TgZ(7,"p",50),t._uU(8,"Status: "),t.TgZ(9,"span")(10,"a",59),t._uU(11,"Production Ongoing"),t.qZA()()(),t.TgZ(12,"p",47),t._uU(13,"No of Products: "),t.TgZ(14,"strong",52),t._uU(15),t.qZA()(),t.YNc(16,J,2,1,"ng-container",60),t.qZA()()),2&e){const n=o.$implicit;t.xp6(5),t.Q6J("routerLink",t.VKq(4,v,n._id)),t.xp6(1),t.Oqu(n.orderId),t.xp6(9),t.Oqu(n.totalProducts),t.xp6(1),t.Q6J("ngForOf",n.adminProducts)}}function Y(e,o){if(1&e&&(t.ynx(0),t.YNc(1,B,17,6,"div",44),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.ongoingOrders)}}function k(e,o){1&e&&(t.TgZ(0,"div",58),t._uU(1,"No Data Found."),t.qZA())}function F(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",62)(1,"p",50)(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"strong",52),t._uU(5," Quantity "),t._UZ(6,"br"),t.TgZ(7,"a",59),t._uU(8),t.qZA(),t.TgZ(9,"span",65),t.NdJ("mouseenter",function(){const a=t.CHM(n),s=a.index,u=a.$implicit,c=t.oxw(),g=c.index,T=c.$implicit,H=t.oxw(2);return t.KtG(H.mouseEnter("myChart",g,s,u,T.shipmentNumber))})("mouseleave",function(){const s=t.CHM(n).index,u=t.oxw().index,c=t.oxw(2);return t.KtG(c.mouseLeave("myChart",u,s))}),t.TgZ(10,"div",66)(11,"h6",67),t._uU(12),t.qZA(),t._UZ(13,"canvas",68),t.qZA()()()()()}if(2&e){const n=o.$implicit,i=o.index,a=t.oxw().index;t.xp6(3),t.hij(" ",n.productName," "),t.xp6(5),t.Oqu(n.dispatchQuantity),t.xp6(2),t.hYB("id","infodrop2",a,"",i,""),t.xp6(2),t.hij("Total Quantity Order: ",n.totalQuantity," "),t.xp6(1),t.hYB("id","myChart",a,"",i,"")}}function M(e,o){if(1&e&&(t.TgZ(0,"div",45)(1,"div",46)(2,"h6",47),t._uU(3,"Order ID: "),t.TgZ(4,"strong",48)(5,"a",49),t._uU(6),t.qZA()()(),t.TgZ(7,"p",47),t._uU(8,"Status: "),t.TgZ(9,"span",38),t._uU(10),t.qZA()(),t.TgZ(11,"p",47),t._uU(12,"No of Products in shipment: "),t.TgZ(13,"strong",52),t._uU(14),t.qZA()(),t.TgZ(15,"p",47),t._uU(16,"Shipment Number: "),t.TgZ(17,"strong",52),t._uU(18),t.qZA()(),t.TgZ(19,"p",47),t._uU(20,"Dispatched On: "),t.TgZ(21,"strong",52),t._uU(22),t.ALo(23,"date"),t.qZA()(),t.TgZ(24,"p",47),t._uU(25,"Logistics Lead Time: "),t.TgZ(26,"strong",52),t._uU(27),t.qZA()(),t.TgZ(28,"p",47),t._uU(29,"Total CBM: "),t.TgZ(30,"strong",52),t._uU(31),t.qZA()(),t.YNc(32,F,14,7,"div",64),t.qZA()()),2&e){const n=o.$implicit;t.xp6(5),t.Q6J("routerLink",t.VKq(11,v,n.orderId)),t.xp6(1),t.Oqu(n.order.orderId),t.xp6(4),t.hij(" ","DELIVERED"===n.a_state&&"RECEIVED"===n.c_state?"DELIVERED":n.status," "),t.xp6(4),t.Oqu(n.products.length),t.xp6(4),t.Oqu(n.shipmentNumber),t.xp6(4),t.hij(" ",t.lcZ(23,9,n.dispatchDate)," "),t.xp6(5),t.hij("",n.logisticLeadTime," Days"),t.xp6(4),t.hij(" ",n.totalCbm.toFixed(7)," CBM"),t.xp6(1),t.Q6J("ngForOf",n.products)}}function G(e,o){if(1&e&&(t.ynx(0),t.YNc(1,M,33,13,"div",44),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.shipmentsOrders)}}function V(e,o){1&e&&(t.TgZ(0,"div",58),t._uU(1,"No Data Found."),t.qZA())}const K=[{path:"",component:(()=>{class e{constructor(n,i){this._DS=n,this.ngxService=i,this.pendingOrders=[],this.ongoingOrders=[],this.shipmentsOrders=[]}ngOnInit(){this.getPendingOrderList(),this.getOngoingOrderList(),this.getShipmentList()}getPendingOrderList(){this.ngxService.start(),this._DS.getPendingOrderList("PENDING").subscribe(n=>{this.ngxService.stop(),n.meta.status&&(this.pendingOrders=n.data.filter(i=>"PPS_ACCEPTED"!==i.a_state),this.pendingOrders.map(i=>{i.newStatus="",i.newStatus="PENDING"===i.v_state&&"PENDING"===i.c_state?"PENDING":"PENDING"===i.v_state?"Vendor Acceptance Pending":"PENDING"===i.c_state?"Customer Confirmation Pending":"ACCEPTED"!==i.v_state&&"PPS_ACCEPTED"!==i.v_state||"ACCEPTED"!==i.c_state&&"PPS_ACCEPTED"!==i.c_state||"PENDING"!==i.a_state||!i.isPpsProducts?"Mass Approval Pending":"PPS Pending"}))},n=>{this.ngxService.stop()})}getOngoingOrderList(){this.ngxService.start(),this._DS.getOrderList("ONGOING").subscribe(n=>{if(this.ngxService.stop(),n.meta.status){let i=JSON.parse(JSON.stringify(n.data));this.ongoingOrders=i}},n=>{this.ngxService.stop()})}getShipmentList(){this.ngxService.start(),this._DS.getShipmentList().subscribe(n=>{this.ngxService.stop(),n.meta.status&&(this.shipmentsOrders=n.data)},n=>{this.ngxService.stop()})}mouseEnter(n,i,a,s,u){$(`#infodrop2${i}${a}`).show(),setTimeout(()=>{var g=document.getElementById(`myChart${i}${a}`).getContext("2d");new Chart(g,{type:"pie",data:{labels:[`Shipment ${u} ${s.dispatchQuantity}`,`To be Shipped ${s.remainingQuantity}`],datasets:[{backgroundColor:["#3E916C","#F6F6F6"],data:[s.dispatchQuantity,s.remainingQuantity]}]},options:{legend:{position:"bottom"}}})},100)}mouseLeave(n,i,a){$(`#infodrop2${i}${a}`).hide()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(x),t.Y36(A.LA))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:223,vars:9,consts:[[1,"dashboardMain","text-center"],[1,"row","mb-3"],[1,"col-12","col-sm-12","col-md-4","col-lg-4"],[1,"dashboardTitleBox","blueBg"],[1,"userWhiteBox"],[4,"ngIf"],["style","text-align: center; padding: 50px;",4,"ngIf"],[1,"dashboardTitleBox","darkgreenBg"],[1,"dashboardTitleBox","lighteGreenSemiBg"],["id","updateProductionModal",1,"modal","fade"],[1,"modal-dialog","sample-popup-form"],[1,"modal-content"],[1,"modal-body","productionUpdateMain"],[1,"form-box"],[1,"d-flex","justify-content-between","mb-3"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"productionUpdate"],[1,"list-group","list-group-flush","mb-3"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"text-primary","text-underline"],["href","#",1,""],[1,"greyBox2"],[1,"table-responsive","fix-headertbl"],[1,"table"],[1,"theader"],[1,"table_header"],[1,"table_header","width30"],[1,"table_row"],[1,"table_small"],[1,"table_cell"],[1,"form-control","form-ctrl"],[1,"calendarInput"],["type","text","placeholder","05/07/2023",1,"form-control","form-ctrl","datePicker"],[1,"formIconsinner"],[1,"bi","bi-calendar-week"],[1,"text-center","main_btn","mt-3"],["href","#",1,"btn","btn-success"],["id","updateDeliveryModal",1,"modal","fade"],[1,"alert-warning","alert-warning-small","text-center"],[1,"bg-success","text-white"],["selected",""],[1,"row","justify-content-center"],[1,"col-md-7","col-sm-6","col-7","mt-3"],["href","#",1,"btn","btn-success","btn-block"],["class","media-dashboard",4,"ngFor","ngForOf"],[1,"media-dashboard"],[1,"pendingBox"],[1,"d-flex","justify-content-between"],[1,"fw600","text-primary","text-underline"],["href","javascript:void(0)",3,"routerLink"],[1,"d-flex","justify-content-between","align-items-center"],["class","btn btn-sm radius-none","href","javascript:void(0)",3,"ngClass",4,"ngIf"],[1,"fw400"],["class","greyBox2",4,"ngIf"],["href","javascript:void(0)",1,"btn","btn-sm","radius-none",3,"ngClass"],["href","javascript:void(0)",1,"text-primary","text-underline",3,"routerLink"],[1,"fw600"],["class","d-flex justify-content-between align-items-center",4,"ngIf"],[2,"text-align","center","padding","50px"],["href","javascript:void(0)",1,"btn","btn-primary","btn-sm","radius-none"],[4,"ngFor","ngForOf"],["class","greyBox2 mb-2",4,"ngIf"],[1,"greyBox2","mb-2"],[1,"text-white",3,"ngClass"],["class","greyBox2 mb-2",4,"ngFor","ngForOf"],[1,"bi","bi-info","inventoryBadgeWhite","mt-1",3,"mouseenter","mouseleave"],[1,"infodrop2",2,"display","none",3,"id"],[1,"text-center"],[3,"id"]],template:function(i,a){1&i&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),t._uU(5),t.qZA(),t.TgZ(6,"div",4),t.YNc(7,S,2,1,"ng-container",5),t.YNc(8,y,2,0,"div",6),t.qZA()(),t.TgZ(9,"div",2)(10,"h1",7),t._uU(11),t.qZA(),t.TgZ(12,"div",4),t.YNc(13,Y,2,1,"ng-container",5),t.YNc(14,k,2,0,"div",6),t.qZA()(),t.TgZ(15,"div",2)(16,"h1",8),t._uU(17),t.qZA(),t.TgZ(18,"div",4),t.YNc(19,G,2,1,"ng-container",5),t.YNc(20,V,2,0,"div",6),t.qZA()()()()(),t.TgZ(21,"div",9)(22,"div",10)(23,"div",11)(24,"div",12)(25,"div",13)(26,"div",14)(27,"h1"),t._uU(28,"Update Production Status"),t.qZA(),t._UZ(29,"button",15),t.qZA(),t._UZ(30,"hr"),t.TgZ(31,"div",16)(32,"ul",17)(33,"li",18)(34,"div"),t._uU(35,"Order ID:"),t.qZA(),t.TgZ(36,"span",19)(37,"a",20),t._uU(38,"354546"),t.qZA()()(),t.TgZ(39,"li",18)(40,"div"),t._uU(41,"Production Started:"),t.qZA(),t.TgZ(42,"span"),t._uU(43,"23/07/2023"),t.qZA()(),t.TgZ(44,"li",18)(45,"div"),t._uU(46,"Lead Time:"),t.qZA(),t.TgZ(47,"span"),t._uU(48,"30 Days"),t.qZA()()()(),t.TgZ(49,"div",21)(50,"div",22)(51,"div",23)(52,"div",24)(53,"div",25),t._uU(54,"Product"),t.qZA(),t.TgZ(55,"div",26),t._uU(56,"Status"),t.qZA(),t.TgZ(57,"div",26),t._uU(58,"Expected by"),t.qZA()(),t.TgZ(59,"div",27)(60,"div",28)(61,"div",29),t._uU(62,"Product"),t.qZA(),t.TgZ(63,"div",29),t._uU(64," Sample Product Title 1 "),t.TgZ(65,"span",19),t._uU(66,"126733"),t.qZA()()(),t.TgZ(67,"div",28)(68,"div",29),t._uU(69,"Status"),t.qZA(),t.TgZ(70,"div",29)(71,"select",30)(72,"option"),t._uU(73,"On Time"),t.qZA()()()(),t.TgZ(74,"div",28)(75,"div",29),t._uU(76,"Expected by"),t.qZA(),t.TgZ(77,"div",29)(78,"div",31),t._UZ(79,"input",32),t.TgZ(80,"span",33),t._UZ(81,"i",34),t.qZA()()()()(),t.TgZ(82,"div",27)(83,"div",28)(84,"div",29),t._uU(85,"Product"),t.qZA(),t.TgZ(86,"div",29),t._uU(87," Sample Product Title 2 "),t.TgZ(88,"span",19),t._uU(89,"126733"),t.qZA()()(),t.TgZ(90,"div",28)(91,"div",29),t._uU(92,"Status"),t.qZA(),t.TgZ(93,"div",29)(94,"select",30)(95,"option"),t._uU(96,"On Time"),t.qZA()()()(),t.TgZ(97,"div",28)(98,"div",29),t._uU(99,"Expected by"),t.qZA(),t.TgZ(100,"div",29)(101,"div",31),t._UZ(102,"input",32),t.TgZ(103,"span",33),t._UZ(104,"i",34),t.qZA()()()()(),t.TgZ(105,"div",27)(106,"div",28)(107,"div",29),t._uU(108,"Product"),t.qZA(),t.TgZ(109,"div",29),t._uU(110," Sample Product Title 3 "),t.TgZ(111,"span",19),t._uU(112,"126733"),t.qZA()()(),t.TgZ(113,"div",28)(114,"div",29),t._uU(115,"Status"),t.qZA(),t.TgZ(116,"div",29)(117,"select",30)(118,"option"),t._uU(119,"On Time"),t.qZA()()()(),t.TgZ(120,"div",28)(121,"div",29),t._uU(122,"Expected by"),t.qZA(),t.TgZ(123,"div",29)(124,"div",31),t._UZ(125,"input",32),t.TgZ(126,"span",33),t._UZ(127,"i",34),t.qZA()()()()()()()(),t.TgZ(128,"div",35)(129,"a",36),t._uU(130,"Update Status"),t.qZA()()()()()()(),t.TgZ(131,"div",37)(132,"div",10)(133,"div",11)(134,"div",12)(135,"div",13)(136,"div",14)(137,"h1"),t._uU(138,"Update Delivery Status"),t.qZA(),t._UZ(139,"button",15),t.qZA(),t._UZ(140,"hr"),t.TgZ(141,"div",16)(142,"ul",17)(143,"li",18)(144,"div"),t._uU(145,"Order ID:"),t.qZA(),t.TgZ(146,"span",19)(147,"a",20),t._uU(148,"988734"),t.qZA()()(),t.TgZ(149,"li",18)(150,"div"),t._uU(151,"Dispatched On:"),t.qZA(),t.TgZ(152,"span"),t._uU(153,"30/07/2023"),t.qZA()(),t.TgZ(154,"li",18)(155,"div"),t._uU(156,"Shipment Number:"),t.qZA(),t.TgZ(157,"span"),t._uU(158,"01"),t.qZA()(),t.TgZ(159,"li",18)(160,"div"),t._uU(161,"Logistics Lead Time:"),t.qZA(),t.TgZ(162,"span"),t._uU(163,"25 Days"),t.qZA()(),t.TgZ(164,"li",18)(165,"div"),t._uU(166,"Current Status:"),t.qZA(),t.TgZ(167,"span",38),t._uU(168," IN TRANSIT "),t.TgZ(169,"span",39),t._uU(170,"ON TIME"),t.qZA()()()()(),t.TgZ(171,"div",21)(172,"div",22)(173,"div",23)(174,"div",24)(175,"div",26),t._uU(176,"Status"),t.qZA(),t.TgZ(177,"div",26),t._uU(178,"Expected by"),t.qZA()(),t.TgZ(179,"div",27)(180,"div",28)(181,"div",29),t._uU(182,"Status"),t.qZA(),t.TgZ(183,"div",29)(184,"select",30)(185,"option",40),t._uU(186,"Select Status"),t.qZA(),t.TgZ(187,"option"),t._uU(188,"On Time"),t.qZA(),t.TgZ(189,"option"),t._uU(190,"Delayed"),t.qZA()()()(),t.TgZ(191,"div",28)(192,"div",29),t._uU(193,"Expected by"),t.qZA(),t.TgZ(194,"div",29)(195,"div",31),t._UZ(196,"input",32),t.TgZ(197,"span",33),t._UZ(198,"i",34),t.qZA()()()()(),t.TgZ(199,"div",27)(200,"div",28)(201,"div",29),t._uU(202,"Status"),t.qZA(),t.TgZ(203,"div",29)(204,"select",30)(205,"option",40),t._uU(206,"Select Status"),t.qZA(),t.TgZ(207,"option"),t._uU(208,"On Time"),t.qZA(),t.TgZ(209,"option"),t._uU(210,"Delayed"),t.qZA()()()(),t.TgZ(211,"div",28)(212,"div",29),t._uU(213,"Expected by"),t.qZA(),t.TgZ(214,"div",29)(215,"div",31),t._UZ(216,"input",32),t.TgZ(217,"span",33),t._UZ(218,"i",34),t.qZA()()()()()()()(),t.TgZ(219,"div",41)(220,"div",42)(221,"a",43),t._uU(222,"Update Delivery Status"),t.qZA()()()()()()()()),2&i&&(t.xp6(5),t.hij("Pending Orders(",a.pendingOrders.length,")"),t.xp6(2),t.Q6J("ngIf",a.pendingOrders.length),t.xp6(1),t.Q6J("ngIf",!a.pendingOrders.length),t.xp6(3),t.hij("Ongoing Orders (",a.ongoingOrders.length,")"),t.xp6(2),t.Q6J("ngIf",a.ongoingOrders.length),t.xp6(1),t.Q6J("ngIf",!a.ongoingOrders.length),t.xp6(3),t.hij("Shipments (",a.shipmentsOrders.length,")"),t.xp6(2),t.Q6J("ngIf",a.shipmentsOrders.length),t.xp6(1),t.Q6J("ngIf",!a.shipmentsOrders.length))},dependencies:[d.mk,d.sg,d.O5,l.rH,d.uU]})}return e})()}];let R=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(K),l.Bz]})}return e})(),z=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[d.ez,R]})}return e})()}}]);