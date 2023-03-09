export const $ = (selector) => document.querySelector(selector);

export const dispatchCustomEvent = ($target, { eventType, data = null }) => {
  const customEvent = new CustomEvent(eventType, { detail: data });

  $target.dispatchEvent(customEvent);
};