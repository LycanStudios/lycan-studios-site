// Paste VERIFIED Payhip product checkout URLs below after publishing each product.
// Leave blank until each link has been tested. No payment is collected by this website.
const checkoutUrls = {
  JOB_SEARCH: "",
  CONTENT_PLANNER: "",
  MONEY_PLANNER: ""
};
for (const link of document.querySelectorAll("a[data-product]")) {
  const url = checkoutUrls[link.dataset.product];
  if (url && /^https:\/\//.test(url)) {
    link.href = url;
    link.textContent = "Buy securely on Payhip";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
}
