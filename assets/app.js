
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];

function waLink(service){
  const msg = `Halo Kak ${service.name}, saya menemukan jasa Anda di Tulisin.\n\nSaya tertarik dengan:\n${service.title}\n\nBoleh minta info harga dan estimasi pengerjaan?`;
  return `https://wa.me/${service.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function serviceCard(s){
  const categoryLabel = {
    "tulis-tangan":"Tulis Manual","jasa-ketik":"Jasa Ketik","transkripsi":"Transkripsi"
  }[s.category] || s.category;
  return `
  <article class="card service-card" data-title="${(s.title+" "+s.name+" "+s.city).toLowerCase()}" data-category="${s.category}">
    <div class="thumb" aria-hidden="true">${s.category==="tulis-tangan"?"✍️":s.category==="jasa-ketik"?"⌨️":"🎙️"}</div>
    <div class="card-body">
      <div class="small muted">${categoryLabel} · ${s.city}</div>
      <h3>${s.title}</h3>
      <div class="tags"><span class="tag">⭐ ${s.rating}</span><span class="tag">${s.orders} order</span></div>
      <div class="price">${s.price}</div>
      <div class="small muted">oleh ${s.name}</div>
      <div class="card-actions">
        <a class="btn btn-soft" href="jasa/${s.id}.html">Lihat Jasa</a>
        <a class="btn btn-wa" href="${waLink(s)}" target="_blank" rel="noopener sponsored">WhatsApp</a>
      </div>
    </div>
  </article>`;
}

function renderServices(){
  const wrap = $("#serviceGrid");
  if(!wrap || !window.SERVICES) return;
  wrap.innerHTML = window.SERVICES.map(serviceCard).join("");
}

function initFilters(){
  const search = $("#searchInput");
  const buttons = $$(".filter-btn");
  const apply = ()=>{
    const q=(search?.value||"").toLowerCase().trim();
    const active=$(".filter-btn.active")?.dataset.category||"all";
    $$(".service-card").forEach(c=>{
      const okQ=!q||c.dataset.title.includes(q);
      const okC=active==="all"||c.dataset.category===active;
      c.classList.toggle("hide",!(okQ&&okC));
    });
  };
  search?.addEventListener("input",apply);
  buttons.forEach(b=>b.addEventListener("click",()=>{
    buttons.forEach(x=>x.classList.remove("active"));
    b.classList.add("active"); apply();
  }));
}
document.addEventListener("DOMContentLoaded",()=>{renderServices();initFilters();});
