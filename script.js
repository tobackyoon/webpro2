$(function () {
  const snowContainer = $(".snow-container");
  const SNOW_COUNT = 90; // ⬅ 120 → 90

  for (let i = 0; i < SNOW_COUNT; i++) {
    const size = Math.random() * 3 + 2.5; // 살짝만 작게

    $("<div class='snowflake' />")
      .css({
        width: size,
        height: size,
        left: Math.random() * 100 + "%",
        opacity: Math.random() * 0.25 + 0.6, // ✅ 핵심: 진함 ↓
        animationDuration: Math.random() * 7 + 4 + "s", // 더 느리게
        animationDelay: Math.random() * 3 + "s",
        boxShadow: "0 0 4px rgba(255,255,255,0.55)",
      })
      .appendTo(snowContainer);
  }
});
