// check of de game al dan niet in een iframe leeft
/* eslint-disable no-unused-vars */
function isInIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
