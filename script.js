const params = new URLSearchParams(window.location.search);
const to = params.get('to');
if (to) {
  document.getElementById('target').textContent = '@' + to;
}
