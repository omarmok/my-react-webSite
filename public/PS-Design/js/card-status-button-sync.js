(function () {
  const statusButtonClassMap = {
    create: "moi-btn--black",
    edit: "moi-btn--Info",
    details: "moi-btn--Primary",
  };

  const managedButtonClasses = [
    "moi-btn--black",
    "moi-btn--Info",
    "moi-btn--info",
    "moi-btn--Primary",
  ];

  const syncCardHeaderAction = (card) => {
    const button = card.querySelector(".moi-card__header-action");

    if (!button) {
      return;
    }

    button.classList.remove(...managedButtonClasses);

    const mappedClass = statusButtonClassMap[card.dataset.status];

    if (mappedClass) {
      button.classList.add(mappedClass);
    }
  };

  const observeCardStatus = (card) => {
    syncCardHeaderAction(card);

    if (typeof MutationObserver !== "function") {
      return;
    }

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.attributeName === "data-status") {
          syncCardHeaderAction(card);
          break;
        }
      }
    });

    observer.observe(card, {
      attributes: true,
      attributeFilter: ["data-status"],
    });
  };

  const init = () => {
    document.querySelectorAll(".moi-card").forEach(observeCardStatus);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
    return;
  }

  init();
})();
