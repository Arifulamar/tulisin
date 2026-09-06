const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
function initFilters(){
  const input=$("#searchInput");
  const buttons=$$(".filter-btn");
  const apply=()=>{
    const q=(input?.value||"").toLowerCase().trim();
    const active=$(".filter-btn.active")?.dataset.category||"all";
    $$(".service-card").forEach(card=>{
      const okText=!q||card.dataset.title.includes(q);
      const okCat=active==="all"||card.dataset.category===active;
      card.classList.toggle("hide",!(okText&&okCat));
    });
  };
  input?.addEventListener("input",apply);
  buttons.forEach(btn=>btn.addEventListener("click",()=>{
    buttons.forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    apply();
  }));
}
document.addEventListener("DOMContentLoaded",initFilters);
