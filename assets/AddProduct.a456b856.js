import{_ as u,H as i,d as p,e as m,Q as h,f as t,o as l,c as _,g as o,a as s,F as f}from"./index.85dc0df9.js";import{P as g}from"./Productform.86bd6ef9.js";import"./vee-validate.esm.e975c0e0.js";const S={data(){return{toasts:{title:"Success",msg:"Th\xEAm s\u1EA3n ph\u1EA9m th\xE0nh c\xF4ng",type:"success",duration:2e3}}},components:{HeaderShop:i,Productform:g,toastsVue:p},methods:{toastjs:m,async addproduct(e){try{await h.create(e),this.toastjs(),setTimeout(()=>{location.reload()},2e3)}catch(a){console.log(a),this.toasts.title="Warning",this.toasts.msg="T\xE0i kho\u1EA3n kh\xF4ng ph\u1EA3i ADMIN",this.toasts.type="warn",this.toasts.duration=2e3,this.toastjs()}}}},P={class:"page"},V=s("h4",null,"ADD PRODUCT",-1);function v(e,a,H,k,y,r){const c=t("HeaderShop"),n=t("toastsVue"),d=t("Productform");return l(),_(f,null,[o(c),o(n),s("div",P,[s("div",null,[V,o(d,{product:{img:[]},"onSubmit:product":r.addproduct,resetAfterSubmit:!1},null,8,["onSubmit:product"])])])],64)}var b=u(S,[["render",v]]);export{b as default};
