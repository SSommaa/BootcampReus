"use strict";
(function(){
  const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, value));
  class Tamagochi {
    constructor(name){
      this.tickHandle = null;
      this.state = { name, fullness: 40, fun: 50, strength: 10, energy: 50, happiness: 30, health: 100, sleeping: false };
    }
    get data(){ return Object.assign({}, this.state); }
    start(){ if(this.tickHandle==null) this.tickHandle = window.setInterval(()=>this.tick(), 1000); }
    stop(){ if(this.tickHandle!=null){ window.clearInterval(this.tickHandle); this.tickHandle=null; } }
    modify(stat, delta){ if(stat==='energy' && this.state.sleeping) delta*=1.6; const next = clamp(this.state[stat] + delta); this.state[stat] = next; }
    recalcDerived(){ const primary=(this.state.fullness+this.state.fun+this.state.strength+this.state.energy)/4; const bias=(this.state.health-50)*0.2; this.state.happiness = clamp(primary + bias); }
    tick(){ this.modify('fullness', -0.6); this.modify('fun', -0.4); this.modify('strength', -0.25); this.modify('energy', this.state.sleeping ? +1.2 : -0.7); const criticals=[this.state.fullness,this.state.energy].filter(v=>v<10).length; if(criticals>0) this.modify('health', -criticals*0.8); else this.modify('health', +0.3); this.recalcDerived(); render(); }
    feedSmall(){ this.modify('fullness', +10); this.modify('energy', +3); this.recalcDerived(); render(); }
    feedBig(){ this.modify('fullness', +22); this.modify('energy', +5); this.recalcDerived(); render(); }
    clean(){ this.modify('health', +8); this.recalcDerived(); render(); }
    playLight(){ if(this.state.energy<5) return; this.modify('fun', +10); this.modify('energy', -6); this.recalcDerived(); render(); }
    playHard(){ if(this.state.energy<12) return; this.modify('fun', +18); this.modify('energy', -12); this.modify('strength', +6); this.recalcDerived(); render(); }
    train(){ if(this.state.energy<15) return; this.modify('strength', +14); this.modify('fun', -6); this.modify('energy', -10); this.recalcDerived(); render(); }
    spar(){ if(this.state.energy<20) return; this.modify('strength', +18); this.modify('fun', +5); this.modify('energy', -16); this.modify('health', -2); this.recalcDerived(); render(); }
    run(){ if(this.state.energy<10) return; this.modify('strength', +10); this.modify('energy', -12); this.modify('fun', +6); this.recalcDerived(); render(); }
    shield(){ this.modify('health', +10); this.modify('strength', +3); this.recalcDerived(); render(); }
    nap(){ this.state.sleeping=true; this.modify('energy', +15); this.recalcDerived(); render(); }
    sleepNight(){ this.state.sleeping=true; this.modify('energy', +30); this.recalcDerived(); render(); }
    wake(){ this.state.sleeping=false; render(); }
  }
  const game = new Tamagochi('Fluffy');
  const el = {
    petName: document.getElementById('petName'),
    hearts: document.getElementById('hearts'),
    fullness: document.getElementById('statFullness'),
    fun: document.getElementById('statFun'),
    strength: document.getElementById('statStrength'),
    energy: document.getElementById('statEnergy'),
    happiness: document.getElementById('statHappiness'),
    lFullness: document.getElementById('labelFullness'),
    lFun: document.getElementById('labelFun'),
    lStrength: document.getElementById('labelStrength'),
    lEnergy: document.getElementById('labelEnergy'),
    lHappiness: document.getElementById('labelHappiness'),
    pet: document.getElementById('pet')
  };
  function setMeter(element, label, value, labelText){ element.style.width = `${value}%`; label.textContent = `${labelText} ${Math.round(value)}%`; }
  function heartsFromHealth(health){ if(health>66) return '❤❤'; if(health>33) return '❤♡'; return '♡♡'; }
  function render(){ const s = game.data; el.petName.textContent = s.name + (s.sleeping ? ' (sleeping)' : ''); setMeter(el.fullness, el.lFullness, s.fullness, ''); el.lFullness.textContent = `${Math.round(s.fullness)}% Full`; setMeter(el.fun, el.lFun, s.fun, ''); el.lFun.textContent = `${Math.round(s.fun)}% Fun`; setMeter(el.strength, el.lStrength, s.strength, ''); el.lStrength.textContent = `${Math.round(s.strength)}% Strength`; setMeter(el.energy, el.lEnergy, s.energy, ''); el.lEnergy.textContent = `${Math.round(s.energy)}% Energy`; setMeter(el.happiness, el.lHappiness, s.happiness, 'Happiness'); el.hearts.textContent = heartsFromHealth(s.health); el.pet.style.opacity = s.sleeping ? '0.7' : '1'; }
  function bindActions(){
    const actionMap = {
      feedSmall: ()=>game.feedSmall(),
      feedBig: ()=>game.feedBig(),
      clean: ()=>game.clean(),
      playLight: ()=>game.playLight(),
      playHard: ()=>game.playHard(),
      train: ()=>game.train(),
      spar: ()=>game.spar(),
      run: ()=>game.run(),
      shield: ()=>game.shield(),
      nap: ()=>game.nap(),
      sleepNight: ()=>game.sleepNight(),
      wake: ()=>game.wake(),
    };
    document.querySelectorAll('button.icon').forEach(btn=>{
      const action = btn.dataset.action;
      if(!action) return;
      btn.addEventListener('click', ()=>{ const fn = actionMap[action]; if(fn) fn(); });
    });
  }
  bindActions();
  render();
  game.start();
})();


