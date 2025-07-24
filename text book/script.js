<script>
  const lockedChapters = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const isLoggedIn = localStorage.getItem("loggedIn");

  for (let i = 1; i <= 23; i++) {
    const isLocked = lockedChapters.includes(i) && !isLoggedIn;
    const className = isLocked ? 'locked' : '';
    document.write(<a href="chapter${i}.html" class="${className}" id="chapter${i}">Chapter ${i}</a>);
  }
</script>