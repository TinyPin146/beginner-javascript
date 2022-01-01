const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
  // hide all tab panels
  tabPanels.forEach((tabPanel) => (tabPanel.hidden = true));
  //   mark all tabs as unselected
  tabButtons.forEach((tab) => tab.setAttribute('aria-selected', false));
  // mark clicked tab selected
  e.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabPanel and show it
  const { id } = e.currentTarget;

  //   const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  //   tabPanel.hidden = false;

  const tabPanel = tabPanels.find((panel) => {
    if (panel.getAttribute('aria-labelledby') === id) return true;
  });
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
