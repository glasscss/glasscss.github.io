//COLORIS COLOR PICKER CONFIGS
Coloris(
   {
      el: '.coloris',
      theme: 'polaroid',
      themeMode: 'dark',
      format: 'mixed',
   });

window.cssConfigs = {
   blur: 10,
   borderRadius: 13,
   borderWidth: 2.4,
   opacity: 1,
   borderColor: "rgba(255, 255, 255, .3)",
   gradient: "linear-gradient(135deg, rgba(255, 255, 255, .4) ,rgba(255, 255, 255, .1));"
};

function renderCSSCode() {
   return `background-image: ${window.cssConfigs.gradient}\nbackdrop-filter: blur(${window.cssConfigs.blur}px);\n-webkit-backdrop-filter: blur(${window.cssConfigs.blur}px);\nborder: ${window.cssConfigs.borderWidth}px solid ${window.cssConfigs.borderColor};\nborder-radius: ${window.cssConfigs.borderRadius}px;\nopacity: ${window.cssConfigs.opacity};`;
}

const inputFields = document.querySelectorAll('.input-control');
const card = document.querySelector('.card');
const btn = document.querySelector("#btnCopy");
const cssTextArea = document.querySelector('#cssCode');
cssTextArea.value = renderCSSCode();

btn.addEventListener("click", e=> {
   e.preventDefault();
   try {
      navigator.clipboard.writeText(cssTextArea.value)
      .then(() => {
         alert("Code copied!");
      });
   }catch {
      alert("Copy failed. Please select and copy code manually!");
   }
});

inputFields.forEach(item=> {
   const input = item.querySelector('input');
   const label = item.querySelector('span');

   input.addEventListener("input", e => {
      let value = e.target.valueAsNumber || e.target.value;
      switch (e.target.name) {
         case 'blur':
            card.style.backdropFilter = 'blur(' + value + 'px)';
            label.textContent = value + 'px';
            window.cssConfigs.blur = value;
            break;
         case 'opacity':
            card.style.opacity = value;
            label.textContent = value;
            window.cssConfigs.opacity = value;
            break;
         case 'border-radius':
            card.style.borderRadius = value + 'px';
            label.textContent = value + 'px';
            window.cssConfigs.borderRadius = value;
            break;
         case 'border-color':
            card.style.borderColor = value;
            label.textContent = value;
            window.cssConfigs.borderColor = value;
            break;
         case 'border-width':
            card.style.borderWidth = value + 'px';
            label.textContent = value + 'px';
            window.cssConfigs.borderWidth = value;
            break;
         default: return;
         }

         cssTextArea.value = renderCSSCode();

      });
   });
