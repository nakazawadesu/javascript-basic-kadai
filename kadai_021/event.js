const btn = document.getElementById('text');
const text = document.getElementById('btn');

text.addEventListener('click', () => {
    setTimeout(
    btn.textContent = 'ボタンをクリックしました', 2000);
});