const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];

function initFilters(){
  const input=$("#searchInput");
  const buttons=$$(".filter-btn");
  const apply=()=>{
    const q=(input?.value||"").toLowerCase().trim();
    const active=$(".filter-btn.active")?.dataset.category||"all";
    $$(".service-card").forEach(card=>{
      const matchText=!q||card.dataset.title.includes(q);
      const matchCategory=active==="all"||card.dataset.category===active;
      card.classList.toggle("hide",!(matchText&&matchCategory));
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
