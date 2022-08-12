import {palettes} from "./palettes.js";
!(function(){console.log(palettes.length);
	for (let n=0; n<1000; n++) {
    let palette = palettes[n];
    let f = new DocumentFragment();
    let v = document.createElement("div");
    v.classList.add("wrap");
    let num = document.createElement("div");
    num.classList.add("num");
    num.innerText = n;
    v.appendChild(num);
    f.appendChild(v);
    for (let i=0; i<5; i++) {
      let h = document.createElement("div");
      h.classList.add("hex");
      let c = palette[i];
      h.style.backgroundColor = c;
      h.innerText = c;
      v.appendChild(h);
    }
    document.body.appendChild(f);
  }
})();