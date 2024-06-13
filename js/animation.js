const objects = document.querySelectorAll('.a-flip');

const cb = function(entries, observer) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
          entry.target.classList.add('a-flipLeft');
          observer.unobserve(entry.target);
      } else {
          entry.target.classList.remove('a-flipLeft'); // ビューポート外に出た時にクラスを削除
      }
  });
}

const options = {
    root: null,
    rootMargin: "10px 20px",
    threshold: 0,
}

const io = new IntersectionObserver(cb, options);

objects.forEach(object => {
    io.observe(object);
});
