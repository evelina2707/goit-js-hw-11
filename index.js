import{a as f,S as d,i as a}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="55146791-665630d79c22972c7e4b14b80",y="https://pixabay.com/api/";async function h(s){try{return(await f.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw new Error(t)}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:i,comments:u,downloads:p})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${r}</p>
            <p><b>Views:</b> ${i}</p>
            <p><b>Comments:</b> ${u}</p>
            <p><b>Downloads:</b> ${p}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",t),g.refresh()}function L(){c.innerHTML=""}function w(){l.classList.add("is-visible")}function v(){l.classList.remove("is-visible")}const S=document.querySelector(".form");S.addEventListener("submit",q);async function q(s){s.preventDefault();const t=s.currentTarget.elements.searchQuery.value.trim();if(!t){a.warning({message:"Введи запит для пошуку",position:"topRight"});return}L(),w();try{const o=await h(t);if(!o.hits||o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}catch(o){a.error({message:"Помилка при запиті. Спробуйте пізніше.",position:"topRight"}),console.error(o)}finally{v()}}
//# sourceMappingURL=index.js.map
