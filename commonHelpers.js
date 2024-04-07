import{a as w,i as c,S as b}from"./assets/vendor-95dc692e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&p(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const m=async a=>{try{return(await w.get("https://pixabay.com/api/?",{params:{key:"43196353-af8080fd641e1fef708fa4d1d",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:l}})).data}catch(e){console.log(e)}},d=document.querySelector(".gallery");function h(a){if(a.length<1)c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),i(),r();else{const e=a.map(s=>`<li class="item-box">
                <a class="large-image" href="${s.largeImageURL}">
                <img class="preview" src="${s.webformatURL}" alt="${s.tags}" />
                </a>
                <ul class="stat-list">
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Likes
                </span>
                ${s.likes}</p>
                </li>
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Views
                </span>
                ${s.views}</p>
                </li>
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Comments
                </span>
                ${s.comments}</p>
                </li>
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Downloads
                </span>
                ${s.downloads}</p>
                </li>
                </ul>
                </li>`).join("");d.insertAdjacentHTML("beforeend",e),M.refresh(),S()}r()}const g=document.querySelector(".loader");function y(){g.classList.remove("is-hidden")}function r(){g.classList.add("is-hidden")}const u=document.querySelector(".load-more");function S(){u.classList.remove("visually-hidden")}function i(){u.classList.add("visually-hidden")}let l=1,L,q=15,v;const f=document.querySelector(".form"),M=new b(".gallery a",{captionsData:"alt",captionDelay:250});f.addEventListener("submit",async a=>{a.preventDefault(),i(),y(),d.innerHTML="",l=1;let e=a.target.elements.search.value.trim();if(L=e,e!=="")try{const s=await m(e);h(s.hits),v=Math.ceil(s.totalHits/q),r(),f.reset()}catch(s){console.log(s),r()}else i(),c.show({message:"Search field is empty",color:"red",position:"topRight"}),r()});u.addEventListener("click",async a=>{a.preventDefault(),y(),l+=1;try{const e=await m(L);h(e.hits),r(),$(),l===v&&(i(),c.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",color:"blue"}))}catch(e){console.log(e),r()}});function $(){const a=d.firstChild.getBoundingClientRect().height;scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
