# CV — Lê Thanh Tùng

Personal resume website (Vietnamese / English) with PDF download.

🌐 **Live:** https://tunglt09.github.io/cv-le-thanh-tung/

## Pages

| File | Description |
|---|---|
| `index.html` | Main web CV with EN/VI language switcher + **Download PDF** button |
| `cv-en.html` | Standalone English CV (print-optimized, A4) |
| `cv-vi.html` | Standalone Vietnamese CV (print-optimized, A4) |
| `CV_LeThanhTung_EN.pdf` | Downloadable English PDF |
| `CV_LeThanhTung_VI.pdf` | Downloadable Vietnamese PDF |

## Notes

- The PDFs are generated from `cv-en.html` / `cv-vi.html` (headless Chromium, print CSS, A4).
- `cv-en.html` and `cv-vi.html` also have a built-in **Print / Save PDF** button (`window.print()`) with `@media print` styles.
