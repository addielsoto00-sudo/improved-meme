// script.js
document.addEventListener('DOMContentLoaded', ()=> {
  const toggle = document.getElementById('toggle-scan');
  const mapBtn = document.getElementById('open-map');
  const mapOverlay = createMapOverlay();
  const ambient = document.getElementById('ambient');
  const playBtn = document.getElementById('play-sound');
  const secretBtn = document.getElementById('secret-button');

  toggle.addEventListener('click', ()=> {
    flashScan();
  });

  mapBtn.addEventListener('click', ()=> {
    document.body.appendChild(mapOverlay);
    mapOverlay.classList.toggle('open');
  });

  playBtn.addEventListener('click', ()=> {
    if (ambient.paused) {
      ambient.play().catch(()=>{alert('Haz clic para permitir audio en tu navegador')});
      playBtn.textContent = '🔈';
    } else {
      ambient.pause();
      playBtn.textContent = '🔊';
    }
  });

  // secret easter egg: 7 clicks -> open secret page
  let clicks = 0;
  secretBtn.addEventListener('click', ()=> {
    clicks++;
    secretBtn.textContent = `??? (${clicks})`;
    if (clicks >= 7) {
      window.open('secret.html','_blank');
      clicks = 0;
      secretBtn.textContent = '¿Portal secreto?';
    }
  });

  // small floating particle following cursor to give mystic feel
  document.addEventListener('mousemove', (e) => {
    let blob = document.querySelector('#cursorBlob');
    if(!blob){
      blob = document.createElement('div');
      blob.id = 'cursorBlob';
      blob.style.position = 'fixed';
      blob.style.width = '28px';
      blob.style.height='28px';
      blob.style.borderRadius='50%';
      blob.style.pointerEvents='none';
      blob.style.mixBlendMode='screen';
      blob.style.zIndex=99999;
      blob.style.background='radial-gradient(circle, rgba(110,255,255,0.4), rgba(255,110,242,0.2))';
      document.body.appendChild(blob);
    }
    blob.style.left = (e.clientX - 14) + 'px';
    blob.style.top = (e.clientY - 14) + 'px';
  });

  // small helper functions
  function flashScan(){
    const overlay = document.createElement('div');
    overlay.style.position='fixed';
    overlay.style.inset=0;
    overlay.style.background='radial-gradient(circle at 50% 50%, rgba(110,255,255,0.06), transparent 40%)';
    overlay.style.backdropFilter='blur(6px)';
    overlay.style.zIndex=99998;
    document.body.appendChild(overlay);
    setTimeout(()=> overlay.remove(), 900);
  }

  function createMapOverlay(){
    const d = document.createElement('div');
    d.id = 'mapOverlay';
    d.innerHTML = `<strong>Mapa Dimensional</strong>
      <ul style="margin:8px 0;padding-left:18px">
        <li>Glitch — 3 portales</li>
        <li>8-bit — 1 minijuego</li>
        <li>Tiempo — Cuenta eterna</li>
      </ul>
      <button id="closeMap">Cerrar</button>`;
    d.querySelector('#closeMap').addEventListener('click', ()=> d.remove());
    return d;
  }

});
