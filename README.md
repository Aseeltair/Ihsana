# Ihsana redesign: code handoff

Two static pages. Each is a single HTML file with its CSS and JS inline. No build step is needed.

```
site/index.html        Homepage (ihsana.org)
site/world.js          Country shapes for the homepage globe preview
dashboard/index.html   Priorities Dashboard (dashboard.ihsana.org)
dashboard/world.js     Country shapes for the dashboard globe
```

To preview, open either `index.html` in a browser. The "Open the full dashboard" button on the homepage links to `../dashboard/index.html`. Change it to the real dashboard URL when you deploy.

## External dependencies
- Google Fonts: **Lora** (headings, serif) and **Mulish** (body, sans).
- d3 `7.8.5` and topojson-client `3.1.0`, both from jsDelivr. These draw the globes.
- `world.js` sets `window.WORLD`, a TopoJSON world map (110m) used by the globes.

## Design tokens (light theme)
These are the CSS custom properties in `:root`. A dark theme is defined under `prefers-color-scheme: dark`.

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F9F5EF` | Page background (cream) |
| `--paper-2` | `#F1EAE0` | Alternate section background |
| `--ink` | `#14294A` | Main text (navy) |
| `--olive` (site) / `--blue` (dashboard) | `#1E4F8C` | Accent blue: italic highlights, links |
| `--maroon` | `#A8152E` | Primary buttons |
| `--deep` | `#0F2638` | Dark sections (dashboard, globe hero, dashboard header) |
| Newsletter band | `#1B3A55` | One shade lighter than `--deep` |
| Hero chart card | `#F3EDE4` | Card on the homepage hero |

On the dashboard globe and in the brief, these colours mark each status:

| Status | Colour |
|---|---|
| Fund | `#E0566B` |
| Monitor | `#E9B04A` |
| Maintain | `#8EA3BA` |
| Diaspora | `#9CBDE8` |

## Layout notes
- **Homepage:** On desktop, each section fills one screen, and scroll-snap is on above 900px. The `/* ===== mobile & tablet (keep last) ===== */` block at the end of the CSS holds the phone and tablet layout. Keep it last, because it overrides the desktop rules above it.
- **Dashboard:** On desktop the globe section fills one screen. Clicking a country, on the globe or through search, opens a side panel (`#drawer`) with that country's brief. Esc, the × button, or a click outside the panel closes it.
- **Dashboard data:** The country data is the `DATA` array inside the dashboard script. It comes from the current dashboard.ihsana.org (Ihsana OIC Priority Investment Model 2026). The figures are unchanged.

## Not wired yet
- **Newsletter forms:** Both pages only show a confirmation message. They do not send the email anywhere, so connect them to the mailing-list provider.
- **Insights article cards:** On the homepage they are placeholders, and their links are `#`. Add real articles to the `INS` array, newest first.
