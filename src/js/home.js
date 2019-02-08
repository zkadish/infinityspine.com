import { routes, onRouterEventHandler } from './router';

const treatmentRoutes = routes.slice(0, 4);
const treatmentsBtn = document.querySelectorAll('.treatments__btn');

// NOTE: these click handlers also exits in router.js
// treatments read-more buttons
treatmentsBtn.forEach((btn, i) => {
  function treatmentsBtnClickHandler() {
    window.history.pushState(null, null, treatmentRoutes[i]);
    onRouterEventHandler();
  }
  btn.addEventListener('click', treatmentsBtnClickHandler);
});
