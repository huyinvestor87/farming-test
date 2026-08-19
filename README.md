# Willowbrook Farm

Willowbrook Farm is an original, offline-first, single-player cozy farming game for desktop browsers and iPad Safari. It is a static HTML/CSS/Canvas 2D application: there is no account, backend, tracking, build step, or network game service.

## Language

The game defaults to **Vietnamese (Tiếng Việt)**. English is also available — switch languages anytime from **Settings → Language**; the choice is remembered in `localStorage` (`wb-lang`) and applied immediately across the HUD, panels, toasts, and the tutorial. All translation strings live in `src/i18n.js`, and crop/animal/item/recipe/building/decoration/quest/achievement names carry both `name` (English) and `name_vi` (Vietnamese) fields in `src/data/content.js`.

## Play locally

ES modules require an HTTP origin. From this directory run `python3 -m http.server 8000`, then open `http://localhost:8000`. This helper is only for local file serving; the deployed game has no server runtime or build command.

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy-pages.yml` deploys the site automatically on every push to `main` (or `work`) using `actions/upload-pages-artifact` and `actions/deploy-pages` — it can also be run manually from the Actions tab. To enable it, open **Settings → Pages** and set **Source** to **GitHub Actions** (one-time setup). Every URL in the game is relative, so it works at `username.github.io/repository-name/` without further configuration or secrets. The included `.nojekyll` file ensures GitHub serves the static files directly instead of running them through Jekyll.

### Cache busting

`index.html`'s stylesheet/script tags and every relative `import` between `src/*.js` modules carry a shared `?v=YYYYMMDD` query string (currently `20260819`), so browsers and GitHub Pages' CDN always fetch the latest file after a deploy instead of serving a stale cached copy. There is no build step to generate this automatically, so **bump that version string in every file whenever you ship a JS/CSS change** — a project-wide find-and-replace of the old value for a new one (e.g. today's date) across `index.html`, `src/main.js`, and `src/rendering/Renderer.js` is enough.

Alternatively, without the workflow, open **Settings → Pages**, select **Deploy from a branch**, choose the repository's main branch and `/ (root)`, and save.

## Controls

### Desktop

* Click a farm tile or object to interact; drag the world to pan.
* Use the mouse wheel or the `+`/`−` buttons to zoom.
* Use the bottom dock to plant, care for animals, craft, fish, sell, inspect storage, and build.
* Press the `?` button at any time for the illustrated eight-step **How to Play** guide.

### iPad and touch

* Tap objects and tiles to interact. Drag with one finger to pan and pinch with two fingers to zoom.
* All primary controls are touch-sized. Browser scrolling, text selection, and accidental page zoom are disabled over the game.
* Both landscape and portrait orientations account for Safari safe areas.

## Saving, export, import, and reset

`SaveManager` stores the complete versioned state in IndexedDB and falls back to localStorage if IndexedDB is unavailable. The game auto-saves every 15 seconds and when hidden. Crop, animal, and production timers store absolute timestamps, so progress is calculated after refresh or time away rather than saved every frame. Sound preference uses localStorage.

Open **Settings** to save immediately, export a portable JSON file, import a validated version-1 JSON save, upgrade storage, or reset. Reset permanently deletes local progress. Browser private modes and clearing website data can erase saves, so export a backup when desired.

## Architecture

* `src/main.js` coordinates gameplay and HTML UI.
* `src/i18n.js` holds the Vietnamese/English UI string dictionaries, the current-language state (persisted to `localStorage`), and the `t()`/`nameOf()` helpers used throughout the UI and renderer.
* `src/core/` owns IndexedDB persistence and generated Web Audio effects.
* `src/rendering/` owns the bounded camera, high-DPI isometric Canvas renderer, animation, depth sorting, weather, and pooled particles.
* `src/data/content.js` contains data-driven crops, animals, items, recipes, buildings, decorations, quests, and achievements.
* `styles/main.css` contains the responsive HUD, dock, panels, feedback, and safe-area styling.

Rendering uses `requestAnimationFrame`; elapsed real time drives gameplay timers. The Canvas pixel ratio is capped at 2 for iPad performance. UI stays in accessible HTML while world content is depth-sorted in Canvas.

## Add content

All content is defined in `src/data/content.js`:

* **Crop:** add an entry to `CROPS` with `name`, icon mark, seed `cost`, `sell`, growth `time` in milliseconds, `xp`, unlock `level`, and `color`.
* **Animal:** add an `ANIMALS` entry with a product item ID, crop `feed`, production `time`, unlock `level`, and `cost`; add its product to `ITEMS`.
* **Building:** add a definition to `BUILDINGS` (or replace the generated mapping with an explicit object) with a unique ID, name, cost, level, and color. Recipe building names must match exactly.
* **Decoration:** append a name to `dn`, or define another object with a unique ID, name, cost, beauty value, unlock level, and color.
* **Recipe:** add a `RECIPES` entry whose key is an output item ID. Include `name`, exact `building` name, an `inputs` quantity map, `time`, and unlock `level`. Add the output to `ITEMS`.
* **Sprinkler:** add a `SPRINKLERS` entry with `cost`, growth `boost` (0–1), unlock `level`, and a `description`.
* **Pet:** add a `PETS` entry with `cost`, unlock `level`, `color`, and a `boost` type (`value`, `mutation`, or `growth`) with its `amount`.
* **Mutation:** add a `MUTATIONS` entry with a `multiplier` and particle `color`; wire the roll odds into `canvasTap` in `src/main.js`.

Refresh after editing; no compilation is required.

## Advanced garden systems

The Plant screen is a rotating seed shop. Buying a pack adds three seeds and equips that variety; limited Watermelon and Chili Pepper stock alternates every five minutes. Purchased seeds are consumed when planted, while harvested produce is stored separately for crafting or sale.

Rare harvest rolls can produce **Giant**, **Colorful**, **Shiny**, or **Godly** mutations, awarding increasingly valuable coin and XP bonuses. The Build screen also sells three permanent sprinkler tiers and three farm pets. Sprinklers accelerate newly planted crops, while pets improve growth, crop value, or mutation luck. These systems are stored in the versioned local save and continue to work with offline crop timers.

## Privacy and credits

The game makes no backend requests and implements no multiplayer or authentication. Visuals are original procedural Canvas/vector artwork; UI and game code were created specifically for Willowbrook Farm. Typography uses the device system font, so the complete experience remains available offline.
