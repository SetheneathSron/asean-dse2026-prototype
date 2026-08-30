const A = {
  flag: "./assets/cambodia-flag.png",
  google: "./assets/google-logo.png",
  apple: "./assets/apple-logo.png",
  chevronDown: "./assets/chevron-down.svg",
  chevronRight: "./assets/chevron-right.svg",
  notificationWhite: "./assets/notification-white.png",
  question: "./assets/question-mark.png",
  locationPin: "./assets/location-pin.png",
  checkDone: "./assets/check-done.svg",
  homeLocation: "./assets/home-location.svg",
  bell: "./assets/bell-outline.svg",

  aeon: "./assets/aeon-logo.png",
  lucky: "./assets/lucky-logo.png",
  umall: "./assets/umall-logo.png",

  homeNav: "./assets/home-nav.svg",
  mapNav: "./assets/map-nav.svg",
  riskNav: "./assets/risk-nav.svg",
  historyNav: "./assets/history-nav.svg",
  profileNav: "./assets/profile-nav.svg",

  mapNavActive: "./assets/map-nav-active.svg",
  riskNavActive: "./assets/risk-nav-active.svg",
  historyNavActive: "./assets/history-nav-active.svg",
  profileNavActive: "./assets/profile-nav-active.svg",

  temp: "./assets/temp-icon.svg",
  heatIndex: "./assets/heat-index-icon.svg",
  aqi: "./assets/aqi-icon.svg",
  pm25: "./assets/pm25-icon.svg",
  humidity: "./assets/humidity-icon.svg",
  uv: "./assets/uv-icon.svg",
  fire: "./assets/fire-icon.svg",

  mapBg: "./assets/map-bg.png",
  layers: "./assets/layers.svg",
  compass: "./assets/compass.svg",
  target: "./assets/target.svg",
  search: "./assets/search.svg",
  filterIcon: "./assets/filter-icon.png",

  backCompare: "./assets/back-compare.svg",
  compareChevron: "./assets/compare-chevron.svg",
  settingsChevron: "./assets/settings-chevron.svg",
  profileLocation: "./assets/profile-location.svg",
  editBack: "./assets/edit-back.svg",
  editChevron: "./assets/edit-chevron.svg",
  editPencil: "./assets/edit-pencil.png",
};

/* =========================================================
   STATE
========================================================= */

const state = {
  authMode: "signup",

  profile: {
    name: "Pisey",
    phone: "12345678",
    email: "Piseysok@gmail.com",
    password: "pisey123456",
    country: "Cambodia",
    city: "Phnom Penh",
    age: "27",
    height: "160",
    weight: "55",
    homeLocation: "Optional",
    occupation: "Optional",
    activity: "Moderate - High",
    daily: "Mostly outdoors",
    condition: "Pregnancy",
    heatEffect: "Slightly affected",
  },

  notifications: {
    heat: true,
    wildfire: false,
    haze: true,
    health: true,
  },

  historyChip: "My Risk",
  historyPeriod: "1W",

  map: {
    layers: false,
    compass: false,
    centered: true,
    route: false,

    activeLayer: "heat",

    // layers | detail | route | spot | ""
    openSheet: "",

    selectedSpot: "",
  },

  compare: {
    country1: "Cambodia",
    city1: "Phnom Penh",

    country2: "Thailand",
    city2: "Bangkok",

    filterOpen: false,
  },
};

/* =========================================================
   OPTIONS
========================================================= */

const notificationRows = [
  ["Heat Alerts", "heat"],
  ["Wildfire Alerts", "wildfire"],
  ["Haze/Air Quality Alerts", "haze"],
  ["Health Reminders", "health"],
];

const locationOptions = {
  "Brunei Darussalam": [
    "Bandar Seri Begawan",
    "Kuala Belait",
    "Seria",
    "Tutong",
  ],

  Cambodia: [
    "Phnom Penh",
    "Siem Reap",
    "Battambang",
    "Kampong Cham",
    "Kampot",
    "Preah Sihanouk",
  ],

  Indonesia: [
    "Jakarta",
    "Surabaya",
    "Bandung",
    "Medan",
    "Semarang",
    "Makassar",
    "Denpasar",
  ],

  Laos: ["Vientiane", "Luang Prabang", "Pakse", "Savannakhet", "Thakhek"],

  Malaysia: [
    "Kuala Lumpur",
    "George Town",
    "Johor Bahru",
    "Kota Kinabalu",
    "Kuching",
    "Malacca City",
  ],

  Myanmar: ["Yangon", "Mandalay", "Naypyidaw", "Mawlamyine", "Taunggyi"],

  Philippines: [
    "Manila",
    "Quezon City",
    "Cebu City",
    "Davao City",
    "Baguio",
    "Iloilo City",
  ],

  Singapore: [
    "Downtown Core",
    "Orchard",
    "Bukit Timah",
    "Jurong East",
    "Tampines",
    "Woodlands",
    "Bedok",
    "Ang Mo Kio",
    "Queenstown",
    "Punggol",
  ],

  Thailand: [
    "Bangkok",
    "Chiang Mai",
    "Phuket",
    "Khon Kaen",
    "Pattaya",
    "Hat Yai",
  ],

  "Timor-Leste": ["Dili", "Baucau", "Maliana", "Suai", "Lospalos"],

  Vietnam: [
    "Ho Chi Minh City",
    "Hanoi",
    "Da Nang",
    "Can Tho",
    "Hue",
    "Hai Phong",
  ],
};

const countryOptions = [
  "Brunei Darussalam",
  "Cambodia",
  "Indonesia",
  "Laos",
  "Malaysia",
  "Myanmar",
  "Philippines",
  "Singapore",
  "Thailand",
  "Timor-Leste",
  "Vietnam",
];

const activityOptions = ["Low", "Moderate", "Moderate - High", "High"];

const dailyOptions = [
  "Mostly indoors",
  "Mixed indoor/outdoor",
  "Mostly outdoors",
];

const occupationOptions = [
  "Optional",
  "Student",
  "Office worker",
  "Outdoor worker",
  "Driver",
  "Healthcare worker",
];

const homeLocationOptions = [
  "Optional",
  "Current location",
  "Home",
  "Work",
  "School",
];

const conditionOptions = [
  "None",
  "Heart / cardiovascular condition",
  "Respiratory condition",
  "Diabetes",
  "Neurological condition",
  "Kidney condition",
  "Pregnancy",
  "Taking medication that may affect heat tolerance",
  "Other",
];

const heatEffectOptions = [
  "Not affected",
  "Slightly affected",
  "Moderately affected",
  "Significantly affected",
  "I'm not sure",
];

/* =========================================================
   SCREEN SETTINGS
========================================================= */

const lightStatusScreens = new Set([
  "welcome",
  "signup",
  "notifications",
  "location",
  "profile-setup",
  "all-done",
  "edit-profile",
  "settings",
]);

const screens = [
  {
    id: "welcome",
    label: "Welcome",
    node: "73:32",
    render: renderWelcome,
  },

  {
    id: "signup",
    label: "Sign Up",
    node: "90:341",
    render: renderSignup,
  },

  {
    id: "notifications",
    label: "Notifications",
    node: "101:623",
    render: renderNotifications,
  },

  {
    id: "location",
    label: "Location Access",
    node: "74:248",
    render: renderLocationAccess,
  },

  {
    id: "profile-setup",
    label: "Profile Setup",
    node: "76:298",
    render: renderProfileSetup,
  },

  {
    id: "all-done",
    label: "All Done",
    node: "76:279",
    render: renderAllDone,
  },

  {
    id: "home",
    label: "Home",
    node: "4:4",
    render: renderHome,
  },

  {
    id: "map",
    label: "Map",
    node: "45:693",
    render: renderMap,
  },

  {
    id: "my-risk",
    label: "My Risk",
    node: "45:808",
    render: renderMyRisk,
  },

  {
    id: "history",
    label: "History",
    node: "45:923",
    render: renderHistory,
  },

  {
    id: "compare",
    label: "Compare Cities",
    node: "149:565",
    render: renderCompare,
  },

  {
    id: "personalized-advice",
    label: "Advice",
    node: "extra:advice",
    render: renderPersonalizedAdvice,
  },

  {
    id: "risk-forecast",
    label: "Risk Forecast",
    node: "extra:risk",
    render: renderRiskForecast,
  },

  {
    id: "wildfire-forecast",
    label: "Wildfire",
    node: "extra:wildfire",
    render: renderWildfireForecast,
  },

  {
    id: "haze-detail",
    label: "Haze Detail",
    node: "extra:haze",
    render: renderHazeDetail,
  },

  {
    id: "cool-spots",
    label: "Cool Spots",
    node: "extra:cool",
    render: renderCoolSpotsList,
  },

  {
    id: "edit-profile",
    label: "Edit Profile",
    node: "157:183",
    render: renderEditProfile,
  },

  {
    id: "settings",
    label: "Profile Settings",
    node: "45:1038",
    render: renderSettings,
  },
];

/* =========================================================
   DOM
========================================================= */

let currentId = getRequestedScreen() || "welcome";
let toastTimer = 0;

const phone = document.getElementById("phone");
const phoneDevice = document.getElementById("phoneDevice");
const picker = document.getElementById("screenPicker");
const toast = document.getElementById("toast");
const statusTime = document.getElementById("statusTime");

const handsetQuery = window.matchMedia(
  "(max-width: 700px), (hover: none) and (pointer: coarse) and (max-height: 520px)",
);

/* =========================================================
   HELPERS
========================================================= */

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function image(name, className = "icon-img", alt = "") {
  return `
    <img
      src="${A[name]}"
      class="${className}"
      alt="${escapeAttr(alt)}"
    >
  `;
}

function go(id) {
  const screen = screens.find((item) => item.id === id) || screens[0];

  currentId = screen.id;

  phone.innerHTML = screen.render();

  if (phoneDevice) {
    phoneDevice.classList.toggle(
      "status-light",
      lightStatusScreens.has(screen.id),
    );
  }

  renderPicker();

  if (location.hash.slice(1) !== screen.id) {
    history.replaceState(null, "", `${location.pathname}#${screen.id}`);
  }
}

function getRequestedScreen() {
  const params = new URLSearchParams(location.search);

  const id = params.get("screen") || location.hash.slice(1);

  return screens.some((screen) => screen.id === id) ? id : "";
}

function renderPicker() {
  if (!picker) return;

  picker.innerHTML = screens
    .map((screen, index) => {
      const active = screen.id === currentId ? "is-active" : "";

      return `
        <button
          type="button"
          class="${active}"
          data-index="${index + 1}"
          data-go="${screen.id}"
        >
          ${screen.label}
        </button>
      `;
    })
    .join("");
}

function dots(active) {
  return `
    <div class="dots" aria-hidden="true">
      ${Array.from(
        { length: 6 },
        (_, index) =>
          `<span class="${index === active ? "is-active" : ""}"></span>`,
      ).join("")}
    </div>
  `;
}

function cta(label, target, className = "") {
  return `
    <button
      type="button"
      class="primary-button ${className}"
      data-go="${target}"
    >
      ${label}
    </button>
  `;
}

function actionButton(label, action, className = "") {
  return `
    <button
      type="button"
      class="${className}"
      data-action="${escapeAttr(action)}"
    >
      ${label}
    </button>
  `;
}

/* =========================================================
   ONBOARDING
========================================================= */

function renderWelcome() {
  return `
    <section
      class="screen onboarding"
      data-node-id="73:32"
    >
      <h1
        class="onboard-title"
        style="top:339px;"
      >
        Welcome To
        <span class="large">[Name]!</span>
      </h1>

      <p
        class="onboard-copy copy-large"
        style="top:588px;"
      >
        Know the heat.<br>
        Stay ahead of the risk.
      </p>

      <div class="onboard-footer">
        ${dots(0)}

        ${cta('Next <span aria-hidden="true">&rsaquo;</span>', "signup")}
      </div>
    </section>
  `;
}

function renderLocationAccess() {
  return `
    <section
      class="screen onboarding"
      data-node-id="74:248"
    >
      <button
        type="button"
        class="why-link"
        data-action="Location is used for your personal risk score only."
      >
        ${image("question")}
        <span>Why location is needed?</span>
      </button>

      <div class="onboard-icon location">
        ${image("locationPin")}
      </div>

      <h1
        class="onboard-title"
        style="top:336px;"
      >
        Location Access
      </h1>

      <p
        class="onboard-copy"
        style="top:546px;"
      >
        Your location is used only to calculate
        your personal risk. It is never shared
        or sold to third parties.
      </p>

      <div class="onboard-footer">
        ${dots(3)}

        ${cta("Allow Location", "profile-setup")}

        ${actionButton(
          "Deny location access",
          "Location access skipped.",
          "secondary-link",
        )}
      </div>
    </section>
  `;
}

function renderNotifications() {
  return `
    <section
      class="screen onboarding"
      data-node-id="101:623"
    >
      <div class="onboard-icon">
        ${image("notificationWhite")}
      </div>

      <h1
        class="onboard-title"
        style="top:147px;"
      >
        Stay Inform
      </h1>

      <p
        class="onboard-copy"
        style="top:250px;"
      >
        Choose what matters to you.
      </p>

      <div class="alert-list">
        ${notificationRows
          .map(
            ([label, key]) => `
              <div class="alert-row">
                <span>${label}</span>
                ${toggleButton(key, "toggle")}
              </div>
            `,
          )
          .join("")}
      </div>

      <div class="onboard-footer">
        ${dots(2)}

        ${cta("Continue &rarr;", "location")}

        <button
          type="button"
          class="secondary-link"
          data-go="location"
        >
          Skip for now
        </button>
      </div>
    </section>
  `;
}

function renderAllDone() {
  return `
    <section
      class="screen onboarding"
      data-node-id="76:279"
    >
      <div class="done-icon">
        ${image("checkDone")}
      </div>

      <h1
        class="onboard-title"
        style="top:438px;"
      >
        All Done!
      </h1>

      <div class="onboard-footer">
        ${dots(5)}

        ${cta("Get Started", "home")}
      </div>
    </section>
  `;
}

/* =========================================================
   SIGN UP / LOGIN
========================================================= */

function renderSignup() {
  const submitLabel = state.authMode === "login" ? "Log in" : "Create account";

  return `
    <section
      class="screen"
      data-node-id="90:341"
    >
      <div class="auth-header">
        <div>
          <h1>
            ${
              state.authMode === "login"
                ? "Welcome back"
                : "Create your Account"
            }
          </h1>

          <p>
            Personalized advice starts here
          </p>
        </div>
      </div>

      <div class="auth-card">
        <div class="segmented-login">
          <button
            type="button"
            class="${state.authMode === "login" ? "active" : ""}"
            data-auth-mode="login"
          >
            Log in
          </button>

          <button
            type="button"
            class="${state.authMode === "signup" ? "active" : ""}"
            data-auth-mode="signup"
          >
            Sign up
          </button>
        </div>

        <div class="form-stack">
          ${field("Name", "name")}

          <div class="field">
            <label for="signup-phone">
              Phone number
            </label>

            <div class="control phone-control">
              <span class="country-code">
                ${image("chevronDown", "chevron")}

                ${image("flag", "flag")}
              </span>

              <input
                id="signup-phone"
                class="control-input phone-input"
                data-bind="phone"
                inputmode="tel"
                value="${escapeAttr(state.profile.phone)}"
                aria-label="Phone number"
              >
            </div>
          </div>

          ${field("Email", "email", "email")}

          <div class="two-col">
            ${selectField("Country", "country", countryOptions)}

            ${selectField("City", "city", cityOptions)}
          </div>

          ${field("Password", "password", "password")}

          ${cta(submitLabel, "notifications", "auth-submit")}
        </div>

        <div class="continue-frame">
          <div class="divider">
            or continue with
          </div>

          <div class="social-row">
            <button
              type="button"
              class="social-button"
              data-action="Google sign in connected."
            >
              ${image("google")}
              <span>Google</span>
            </button>

            <button
              type="button"
              class="social-button"
              data-action="Apple sign in connected."
            >
              ${image("apple")}
              <span>Apple</span>
            </button>
          </div>

          <p class="already">
            Already have an account?

            <button
              type="button"
              data-auth-mode="login"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </section>
  `;
}

function field(label, key, type = "text") {
  const id = `field-${key}`;

  return `
    <div class="field">
      <label for="${id}">
        ${label}
      </label>

      <input
        id="${id}"
        class="control control-input"
        data-bind="${key}"
        type="${type}"
        value="${escapeAttr(state.profile[key])}"
        autocomplete="off"
      >
    </div>
  `;
}

function selectField(label, key, options) {
  const id = `select-${key}`;

  return `
    <div class="field">
      <label for="${id}">
        ${label}
      </label>

      <div class="control select-control">
        <select
          id="${id}"
          data-bind="${key}"
        >
          ${optionList(options, state.profile[key])}
        </select>

        ${image("chevronDown", "chevron")}
      </div>
    </div>
  `;
}

function optionList(options, selected) {
  return options
    .map(
      (option) => `
        <option
          value="${escapeAttr(option)}"
          ${option === selected ? "selected" : ""}
        >
          ${escapeHtml(option)}
        </option>
      `,
    )
    .join("");
}

/* =========================================================
   PROFILE SETUP
========================================================= */

function renderProfileSetup() {
  return `
    <section
      class="screen"
      data-node-id="76:298"
    >
      <div class="setup-header">
        <h1>
          Complete your profile
        </h1>

        <p>
          Personalized advice starts here
        </p>
      </div>

      <div class="form-scroll">
        ${profileFormSections(false)}

        <div class="profile-save">
          ${cta("Finish", "all-done")}
        </div>
      </div>
    </section>
  `;
}

function renderEditProfile() {
  return `
    <section
      class="screen"
      data-node-id="157:183"
    >
      <div class="setup-header edit">
        <div class="header-line">
          <button
            type="button"
            class="round-back"
            data-go="settings"
            aria-label="Back to settings"
          >
            ${image("editBack")}
          </button>

          <h1>
            Edit your profile
          </h1>

          <span></span>
        </div>

        <p>
          Personalized advice starts here
        </p>
      </div>

      <div class="form-scroll edit-profile">
        ${profileFormSections(true)}

        <div class="profile-save">
          ${cta("Save", "settings")}
        </div>
      </div>
    </section>
  `;
}

function profileFormSections(withHomeLocation) {
  return `
    <section class="form-section">
      <h2 class="gradient-text">
        ---- Personal ----
      </h2>

      <div class="mini-grid">
        ${miniField("Select age", "age", "")}

        ${miniField("Enter height", "height", "cm")}

        ${miniField("Enter weight", "weight", "kg")}
      </div>

      ${
        withHomeLocation
          ? `
            <div
              class="field-wide"
              style="margin-top:18px;"
            >
              ${wideSelect(
                "Home location",
                "homeLocation",
                homeLocationOptions,
                true,
              )}
            </div>
          `
          : ""
      }
    </section>

    <section class="form-section">
      <h2 class="gradient-text">
        ---- Lifestyle ----
      </h2>

      <div class="field-wide">
        ${wideSelect(
          "Select occupation",
          "occupation",
          occupationOptions,
          true,
        )}
      </div>

      <div class="split-fields">
        ${wideSelect("Activity level", "activity", activityOptions, false)}

        ${wideSelect("Daily activity", "daily", dailyOptions, false)}
      </div>
    </section>

    <section class="form-section">
      <h2 class="gradient-text">
        ---- Health ----
      </h2>

      <div
        class="radio-stack"
        data-radio-scope
      >
        <span class="field-label">
          Health condition
        </span>

        ${radioOptions(conditionOptions, "condition", state.profile.condition)}

        <span
          class="field-label"
          style="margin-top:8px;"
        >
          How does this condition usually
          affect you during extreme heat?
        </span>

        ${radioOptions(
          heatEffectOptions,
          "heatEffect",
          state.profile.heatEffect,
        )}
      </div>
    </section>
  `;
}

function miniField(label, key, unit) {
  if (unit) {
    return `
      <div class="mini-field">
        <label
          class="field-label"
          for="mini-${key}"
        >
          ${label}
        </label>

        <div
          class="control mini-control unit-control"
        >
          <input
            id="mini-${key}"
            class="control-input mini-input"
            data-bind="${key}"
            inputmode="numeric"
            value="${escapeAttr(state.profile[key])}"
          >

          <span class="unit">
            ${unit}
            ${image("editChevron", "chevron")}
          </span>
        </div>
      </div>
    `;
  }

  return `
    <div class="mini-field">
      <label
        class="field-label"
        for="mini-${key}"
      >
        ${label}
      </label>

      <div class="control mini-control">
        <input
          id="mini-${key}"
          class="control-input mini-input"
          data-bind="${key}"
          inputmode="numeric"
          value="${escapeAttr(state.profile[key])}"
        >

        ${image("editChevron", "chevron")}
      </div>
    </div>
  `;
}

function wideSelect(label, key, options, muted) {
  const id = `wide-${key}`;

  const placeholderClass =
    muted && state.profile[key] === "Optional" ? "placeholder" : "";

  return `
    <div class="field">
      <label for="${id}">
        ${label}
      </label>

      <div
        class="control select-control ${placeholderClass}"
      >
        <select
          id="${id}"
          data-bind="${key}"
        >
          ${optionList(options, state.profile[key])}
        </select>

        ${image("editChevron", "chevron")}
      </div>
    </div>
  `;
}

function radioOptions(options, group, selected) {
  return options
    .map(
      (label) => `
        <button
          type="button"
          class="radio-option ${label === selected ? "is-selected" : ""}"
          data-radio-group="${group}"
          data-radio-value="${escapeAttr(label)}"
          aria-pressed="${label === selected ? "true" : "false"}"
        >
          <span
            class="radio-dot ${label === selected ? "is-selected" : ""}"
          ></span>

          <span>
            ${escapeHtml(label)}
          </span>
        </button>
      `,
    )
    .join("");
}

/* =========================================================
   SHARED APP HEADER + NAV
========================================================= */

function appLocationHeader({ back = false } = {}) {
  return `
    <header
      class="app-header ${back ? "back-location" : "location"}"
    >
      <div class="header-main">
        ${
          back
            ? `
              <button
                type="button"
                class="plain-icon-btn back-text"
                data-go="home"
                aria-label="Back"
              >
                &#8592;
              </button>
            `
            : ""
        }

        <div class="location-meta">
          <span class="location-small">
            ${image("homeLocation")}

            ${escapeHtml(state.profile.city)},

            ${escapeHtml(state.profile.country)}
          </span>

          <span class="location-address">
            St 21, Sangkat Tonle Bassac...
          </span>
        </div>

        ${notificationButton()}

        <button
          type="button"
          class="profile-bubble"
          data-go="settings"
          aria-label="Open profile"
        >
          ${profileInitial()}
        </button>
      </div>
    </header>
  `;
}

function notificationButton() {
  return `
    <button
      type="button"
      class="icon-button"
      aria-label="Notifications"
      data-action="Notifications opened."
    >
      ${image("bell")}

      <span class="badge">
        3
      </span>
    </button>
  `;
}

function bottomNav(active) {
  const items = [
    ["home", "Home", "homeNav"],

    ["map", "Map", active === "map" ? "mapNavActive" : "mapNav"],

    ["my-risk", "My Risk", active === "my-risk" ? "riskNavActive" : "riskNav"],

    [
      "history",
      "History",
      active === "history" ? "historyNavActive" : "historyNav",
    ],

    [
      "settings",
      "Profile",
      active === "settings" ? "profileNavActive" : "profileNav",
    ],
  ];

  return `
    <nav
      class="bottom-nav"
      aria-label="Main navigation"
    >
      <div class="bottom-nav__items">
        ${items
          .map(
            ([id, label, icon]) => `
              <button
                type="button"
                class="nav-item ${active === id ? "is-active" : ""}"
                data-go="${id}"
                aria-label="${label}"
              >
                <span class="nav-icon">
                  ${image(icon)}
                </span>

                <span>
                  ${label}
                </span>
              </button>
            `,
          )
          .join("")}
      </div>
    </nav>
  `;
}

/* =========================================================
   HOME
========================================================= */

function renderHome() {
  return `
    <section
      class="screen"
      data-node-id="4:4"
    >
      ${appLocationHeader()}

      <main class="content-scroll">
        <section
          class="card heat-risk-card"
        >
          <div class="card-heading-row">
            <div>
              <h2>
                Your Heat Risk Today
              </h2>

              <span class="risk-badge">
                HIGH
              </span>
            </div>

            <div>
              <div class="temperature">
                39&deg;C
              </div>

              <div class="feels">
                Feels like

                <span class="gradient-text">
                  44&deg;C
                </span>
              </div>
            </div>
          </div>

          ${gauge()}

          <div class="alert-copy">
            <strong>
              High heat today!
            </strong>

            <span>
              high risk in your area,
              expected from 11AM - 3PM
            </span>
          </div>
        </section>

        ${currentConditions()}

        ${riskChain()}

        ${adviceCard()}

        ${coolSpots()}

        ${wildfireAlert()}
      </main>

      ${bottomNav("home")}
    </section>
  `;
}

function gauge() {
  return `
    <div class="gauge-wrap">
      <div class="gauge">
        <div class="gauge-value">
          <strong>
            72
          </strong>

          <span>
            out of 100
          </span>
        </div>
      </div>
    </div>
  `;
}

/* =========================================================
   CURRENT CONDITIONS
========================================================= */

function currentConditions() {
  const metrics = [
    [
      "temp",
      "rgba(255, 109, 51, 0.09)",
      "39&deg;C",
      "TEMP",
      "High",
      "#ff6d33",
      "&uarr;2&deg;",
    ],

    [
      "heatIndex",
      "rgba(248, 16, 20, 0.09)",
      "44&deg;C",
      "HEAT IDX",
      "Very High",
      "#f81014",
      "&uarr;3&deg;",
    ],

    [
      "aqi",
      "rgba(228, 154, 6, 0.09)",
      "82",
      "AQI",
      "Moderate",
      "#e49a06",
      "&uarr;12",
    ],

    [
      "pm25",
      "rgba(228, 154, 6, 0.09)",
      "28",
      "PM2.5",
      "Moderate",
      "#e49a06",
      "&uarr;5",
    ],

    [
      "humidity",
      "rgba(255, 109, 51, 0.09)",
      "68%",
      "HUMIDITY",
      "High",
      "#ff6d33",
      "+4",
    ],

    [
      "uv",
      "rgba(255, 109, 51, 0.09)",
      "8",
      "UV IDX",
      "High",
      "#ff6d33",
      "&rarr;",
    ],
  ];

  return `
    <section>
      <h2 class="section-title">
        Current Conditions
      </h2>

      <div class="condition-grid">
        ${metrics
          .map(
            ([icon, bg, value, label, metricState, color, delta]) => `
              <button
                type="button"
                class="condition-card"
                data-metric="${escapeAttr(label)}"
              >
                <div class="metric-top">
                  <span
                    class="metric-icon"
                    style="background:${bg};"
                  >
                    ${image(icon)}
                  </span>

                  <span class="metric-delta">
                    ${delta}
                  </span>
                </div>

                <div class="metric-value">
                  ${value}
                </div>

                <div class="metric-label">
                  ${label}
                </div>

                <div
                  class="metric-state"
                  style="color:${color};"
                >
                  ${metricState}
                </div>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

/* =========================================================
   CLIMATE RISK CHAIN
========================================================= */

function riskChain() {
  const nodes = [
    ["temp", "rgba(255,109,51,0.12)", "TEMP", "HIGH", "#ff6d33"],

    ["fire", "rgba(228,154,6,0.12)", "FIRE", "MOD", "#e49a06"],

    ["pm25", "rgba(37,99,235,0.1)", "HAZE", "LOW", "#2563eb"],
  ];

  return `
    <section class="card risk-chain">
      <div class="card-heading-row">
        <h2>
          Climate Risk Chain
        </h2>

        <span
          class="risk-badge"
          style="
            background:rgba(34,197,94,0.15);
            color:#16a34a;
            letter-spacing:0;
          "
        >
          LIVE
        </span>
      </div>

      <div class="risk-chain-grid">
        ${nodes
          .map(
            ([icon, bg, label, status, color]) => `
              <button
                type="button"
                class="chain-node"
                data-risk-node="${escapeAttr(label)}"
              >
                <span
                  class="chain-icon"
                  style="background:${bg};"
                >
                  ${image(icon)}
                </span>

                <span class="chain-label">
                  ${label}
                </span>

                <span
                  class="chain-status"
                  style="color:${color};"
                >
                  ${status}
                </span>
              </button>
            `,
          )
          .join("")}
      </div>

      <p class="info-strip">
        Dry conditions are elevating fire risk.
        If wind shifts NE, haze may reach Phnom
        Penh by tomorrow.
      </p>
    </section>
  `;
}

/* =========================================================
   ADVICE
========================================================= */

function adviceCard() {
  return `
    <section class="card advice-card">
      <div class="card-heading-row">
        <h2>
          Today's Advice
        </h2>

        <button
          type="button"
          class="subtle text-link"
          data-go="personalized-advice"
        >
          See all &rarr;
        </button>
      </div>

      <div class="advice-list">
        <button
          type="button"
          class="advice-item"
          data-advice-detail="Hydration"
        >
          Drink at least 8 glasses of water today
        </button>

        <button
          type="button"
          class="advice-item"
          data-advice-detail="Outdoor activity"
        >
          Avoid outdoor activity between
          11AM - 3PM
        </button>

        <button
          type="button"
          class="advice-item"
          data-advice-detail="Sun protection"
        >
          Wear a hat and sunscreen if going outside
        </button>
      </div>
    </section>
  `;
}

/* =========================================================
   COOL SPOTS
========================================================= */

function coolSpots() {
  const spots = [
    ["AEON MALL Phnom Penh", "aeon"],

    ["Lucky Supermarket", "lucky"],

    ["U Mall Phnom Penh", "umall"],
  ];

  const cards = spots
    .map(
      ([spot, logo], index) => `
        <button
          type="button"
          class="cool-card"
          data-cool-spot="${escapeAttr(spot)}"
        >
          ${image(logo, `icon-img cool-logo cool-logo-${logo}`, spot)}

          <strong>
            ${spot}
          </strong>

          <small>
            ${(0.6 + index * 0.4).toFixed(1)} km
          </small>

          <span class="tag-blue">
            &#10052;&#65039;
            Air-conditioned
          </span>
        </button>
      `,
    )
    .join("");

  return `
    <section style="margin-bottom:20px;">
      <div class="card-heading-row">
        <h2
          style="
            font-size:14px;
            color:#364153;
            margin:0;
          "
        >
          Cool Spots Nearby
        </h2>

        <button
          type="button"
          class="subtle text-link"
          data-go="cool-spots"
        >
          View all &rarr;
        </button>
      </div>

      <div class="cool-spot-row">
        ${cards}
      </div>
    </section>
  `;
}

/* =========================================================
   WILDFIRE HOME ALERT
========================================================= */

function wildfireAlert() {
  return `
    <button
      type="button"
      class="wildfire-alert"
      data-go="wildfire-forecast"
    >
      <span class="metric-icon">
        ${image("fire")}
      </span>

      <span style="flex:1;">
        <strong>
          Wildfire Detected

          <span
            style="
              background:#fb2c36;
              color:#fff;
              border-radius:999px;
              font-family:'JetBrains Mono',monospace;
              font-size:9px;
              padding:2px 8px;
            "
          >
            28 KM NE
          </span>
        </strong>

        <span class="wildfire-copy">
          Moderate risk. Haze possible tomorrow
          if wind continues south.
        </span>
      </span>

      ${image("chevronRight", "chevron")}
    </button>
  `;
}

/* =========================================================
   MAP
========================================================= */

function renderMap() {
  return `
    <section
      class="screen"
      data-node-id="45:693"
    >
      <div class="map-canvas">
        <img
          src="${A.mapBg}"
          class="map-image"
          alt="Map of Tonle Bassac"
        >

        ${renderMapOverlay()}

        <button
          type="button"
          class="user-dot ${state.map.centered ? "is-active" : ""}"
          data-map-toggle="centered"
          aria-label="Current location"
        ></button>

        <div class="map-controls">
          <button
            type="button"
            class="${state.map.openSheet === "layers" ? "is-active" : ""}"
            data-map-action="layers"
            aria-label="Choose map layer"
          >
            ${image("layers")}
          </button>

          <button
            type="button"
            class="${state.map.compass ? "is-active" : ""}"
            data-map-toggle="compass"
            aria-label="Rotate compass"
          >
            ${image("compass")}
          </button>

          <button
            type="button"
            class="dark ${state.map.centered ? "is-active" : ""}"
            data-map-toggle="centered"
            aria-label="Center map"
          >
            ${image("target")}
          </button>
        </div>

        ${mapLegend()}
      </div>

      <header class="map-header">
        <button
          type="button"
          class="plain-icon-btn back-text"
          data-go="home"
          aria-label="Back"
        >
          &#8592;
        </button>

        <label class="search-pill">
          ${image("search")}

          <input
            type="search"
            data-action-input="Search"
            placeholder="Search city or location..."
            aria-label="Search city or location"
          >
        </label>

        <button
          type="button"
          class="profile-bubble"
          data-go="settings"
          aria-label="Open profile"
        >
          ${profileInitial()}
        </button>
      </header>

      ${renderMapSheet()}

      ${bottomNav("map")}
    </section>
  `;
}

/* =========================================================
   MAP VISUAL LAYERS
========================================================= */

function renderMapOverlay() {
  if (state.map.activeLayer === "fire") {
    return `
      <div
        class="heat-blob"
        style="
          --blur:55px;
          background:rgba(220,38,38,0.28);
          height:230px;
          left:220px;
          top:100px;
          width:210px;
        "
      ></div>

      <div
        class="heat-blob"
        style="
          --blur:20px;
          background:rgba(239,68,68,0.55);
          height:80px;
          left:300px;
          top:180px;
          width:100px;
        "
      ></div>

      <div
        class="heat-blob"
        style="
          --blur:30px;
          background:rgba(245,158,11,0.35);
          height:120px;
          left:60px;
          top:600px;
          width:130px;
        "
      ></div>
    `;
  }

  if (state.map.activeLayer === "haze") {
    return `
      <div
        class="heat-blob"
        style="
          --blur:90px;
          background:rgba(234,179,8,0.23);
          height:520px;
          left:0;
          top:180px;
          width:440px;
        "
      ></div>

      <div
        class="heat-blob"
        style="
          --blur:65px;
          background:rgba(37,99,235,0.16);
          height:260px;
          left:150px;
          top:400px;
          width:280px;
        "
      ></div>
    `;
  }

  if (state.map.activeLayer === "cool") {
    return `
      <button
        type="button"
        class="map-cool-marker"
        style="
          left:75px;
          top:280px;
        "
        data-cool-spot="AEON MALL Phnom Penh"
        aria-label="AEON MALL Phnom Penh"
      >
        &#10052;&#65039;
      </button>

      <button
        type="button"
        class="map-cool-marker"
        style="
          left:270px;
          top:430px;
        "
        data-cool-spot="Lucky Supermarket"
        aria-label="Lucky Supermarket"
      >
        &#10052;&#65039;
      </button>

      <button
        type="button"
        class="map-cool-marker"
        style="
          left:145px;
          top:650px;
        "
        data-cool-spot="U Mall Phnom Penh"
        aria-label="U Mall Phnom Penh"
      >
        &#10052;&#65039;
      </button>
    `;
  }

  return `
    <div
      class="heat-blob"
      style="
        --blur:100px;
        background:rgba(234,71,12,0.35);
        height:745px;
        left:0;
        top:106px;
        width:437px;
      "
    ></div>

    <div
      class="heat-blob"
      style="
        --blur:16px;
        background:rgba(0,201,80,0.3);
        height:48px;
        left:54px;
        top:120px;
        width:64px;
      "
    ></div>

    <div
      class="heat-blob"
      style="
        --blur:16px;
        background:rgba(0,201,80,0.2);
        height:250px;
        left:197px;
        top:452px;
        width:256px;
      "
    ></div>

    <div
      class="heat-blob"
      style="
        --blur:24px;
        background:rgba(217,119,6,0.8);
        height:64px;
        left:311px;
        top:144px;
        width:96px;
      "
    ></div>

    <div
      class="heat-blob"
      style="
        --blur:24px;
        background:#d97706;
        height:56px;
        left:127px;
        top:803px;
        width:80px;
      "
    ></div>
  `;
}

function mapLegend() {
  const layerNames = {
    heat: "Heat",
    fire: "Fire",
    haze: "Haze / AQI",
    cool: "Cool Spots",
  };

  const title = layerNames[state.map.activeLayer] || "Heat";

  if (state.map.activeLayer === "cool") {
    return `
      <aside class="map-legend">
        <div class="legend-title">
          Cool Spots
        </div>

        <p
          style="
            font-size:11px;
            color:#64748b;
            margin:8px 0 12px;
          "
        >
          Tap a snowflake marker to view
          cooling location details.
        </p>

        <div class="legend-actions">
          <button
            type="button"
            style="
              background:#f9fafb;
              color:#0f2440;
            "
            data-go="cool-spots"
          >
            View all
          </button>

          <button
            type="button"
            style="
              background:#0f2440;
              color:#fff;
            "
            data-map-action="route"
          >
            Plan Route
            &#10052;&#65039;
          </button>
        </div>
      </aside>
    `;
  }

  return `
    <aside class="map-legend">
      <div class="legend-title">
        ${title} Risk Level
      </div>

      <div class="legend-scale">
        <div>
          <b
            style="background:#16a34a;"
          ></b>

          <span>Low</span>
        </div>

        <div>
          <b
            style="background:#e49a06;"
          ></b>

          <span>Mod</span>
        </div>

        <div>
          <b
            style="background:#ea580c;"
          ></b>

          <span>High</span>
        </div>

        <div>
          <b
            style="background:#dc2626;"
          ></b>

          <span>V.High</span>
        </div>
      </div>

      <div class="legend-actions">
        <button
          type="button"
          style="
            background:#f9fafb;
            color:#0f2440;
          "
          data-map-action="detail"
        >
          Tap map for details
        </button>

        <button
          type="button"
          style="
            background:#0f2440;
            color:#fff;
          "
          data-map-action="route"
        >
          Plan Route
          &#10052;&#65039;
        </button>
      </div>
    </aside>
  `;
}

/* =========================================================
   MAP SHEETS
========================================================= */

function renderMapSheet() {
  if (!state.map.openSheet) {
    return "";
  }

  if (state.map.openSheet === "layers") {
    const layers = [
      ["heat", "Heat", "Heat intensity zones"],

      ["fire", "Fire", "Wildfire activity"],

      ["haze", "Haze / AQI", "Air-quality zones"],

      ["cool", "Cool Spots", "Cooling locations"],
    ];

    return `
      <div class="sheet-overlay">
        <button
          type="button"
          class="sheet-backdrop"
          data-close-sheet
          aria-label="Close"
        ></button>

        <section class="bottom-sheet">
          <div class="sheet-handle"></div>

          <div class="sheet-header">
            <div>
              <h2>
                Map Layers
              </h2>

              <p>
                Choose what you want to see
              </p>
            </div>

            <button
              type="button"
              data-close-sheet
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          <div class="layer-grid">
            ${layers
              .map(
                ([id, title, description]) => `
                  <button
                    type="button"
                    class="layer-option ${
                      state.map.activeLayer === id ? "is-active" : ""
                    }"
                    data-map-layer="${id}"
                  >
                    <strong>
                      ${title}
                    </strong>

                    <span>
                      ${description}
                    </span>
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>
      </div>
    `;
  }

  if (state.map.openSheet === "route") {
    return `
      <div class="sheet-overlay">
        <button
          type="button"
          class="sheet-backdrop"
          data-close-sheet
          aria-label="Close"
        ></button>

        <section class="bottom-sheet">
          <div class="sheet-handle"></div>

          <div class="sheet-header">
            <div>
              <h2>
                Cool Route
              </h2>

              <p>
                Lower-heat route suggestion
              </p>
            </div>

            <button
              type="button"
              data-close-sheet
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          <div class="route-card">
            <strong>
              12 min &middot; 0.9 km
            </strong>

            <span>
              Uses shaded streets and passes a
              nearby cooling spot.
            </span>
          </div>

          <div class="route-steps">
            <div>
              <b>1</b>
              <span>
                Walk toward the shaded side
                of Street 21.
              </span>
            </div>

            <div>
              <b>2</b>
              <span>
                Continue for approximately
                400 meters.
              </span>
            </div>

            <div>
              <b>3</b>
              <span>
                Pass through a nearby
                air-conditioned cool spot.
              </span>
            </div>
          </div>

          <button
            type="button"
            class="primary-button"
            data-action="Cool route started."
          >
            Start Route
          </button>
        </section>
      </div>
    `;
  }

  if (state.map.openSheet === "spot") {
    return `
      <div class="sheet-overlay">
        <button
          type="button"
          class="sheet-backdrop"
          data-close-sheet
          aria-label="Close"
        ></button>

        <section class="bottom-sheet">
          <div class="sheet-handle"></div>

          <div class="sheet-header">
            <div>
              <h2>
                ${escapeHtml(state.map.selectedSpot || "Cool Spot")}
              </h2>

              <p>
                Cooling location
              </p>
            </div>

            <button
              type="button"
              data-close-sheet
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          <div class="route-card">
            <strong>
              &#10052;&#65039;
              Air-conditioned
            </strong>

            <span>
              Open to the public and suitable
              for cooling down during peak heat.
            </span>
          </div>

          <div class="map-detail-grid">
            <div>
              <strong>0.6</strong>
              <span>km away</span>
            </div>

            <div>
              <strong>12</strong>
              <span>min walk</span>
            </div>

            <div>
              <strong>Cool</strong>
              <span>Indoor</span>
            </div>

            <div>
              <strong>Public</strong>
              <span>Access</span>
            </div>
          </div>

          <button
            type="button"
            class="primary-button"
            data-map-action="route"
          >
            Get Directions
          </button>
        </section>
      </div>
    `;
  }

  return `
    <div class="sheet-overlay">
      <button
        type="button"
        class="sheet-backdrop"
        data-close-sheet
        aria-label="Close"
      ></button>

      <section class="bottom-sheet">
        <div class="sheet-handle"></div>

        <div class="sheet-header">
          <div>
            <h2>
              Tonle Bassac
            </h2>

            <p>
              Phnom Penh, Cambodia
            </p>
          </div>

          <button
            type="button"
            data-close-sheet
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <div class="map-detail-grid">
          <div>
            <strong>
              39&deg;C
            </strong>

            <span>
              Temp
            </span>
          </div>

          <div>
            <strong>
              44&deg;C
            </strong>

            <span>
              Feels
            </span>
          </div>

          <div>
            <strong>
              82
            </strong>

            <span>
              AQI
            </span>
          </div>

          <div>
            <strong>
              28
            </strong>

            <span>
              PM2.5
            </span>
          </div>
        </div>

        <div class="risk-strip">
          <span>
            <b>HIGH</b>
            Heat
          </span>

          <span>
            <b>MOD</b>
            Fire
          </span>

          <span>
            <b>LOW</b>
            Haze
          </span>
        </div>

        <div class="button-pair">
          <button
            type="button"
            class="pill-action navy"
            data-map-action="route"
          >
            Get Directions
          </button>

          <button
            type="button"
            class="pill-action orange"
            data-go="cool-spots"
          >
            Cool Spots
          </button>
        </div>
      </section>
    </div>
  `;
}

/* =========================================================
   MY RISK
========================================================= */

function renderMyRisk() {
  return `
    <section
      class="screen"
      data-node-id="45:808"
    >
      ${appLocationHeader({
        back: true,
      })}

      <main class="content-scroll tight">
        <section
          class="card heat-risk-card"
        >
          ${gauge()}

          <div style="text-align:center;">
            <span class="risk-badge">
              HIGH
            </span>
          </div>

          <div
            class="alert-copy"
            style="margin-top:18px;"
          >
            <strong>
              High heat today!
            </strong>

            <span>
              Your risk is higher today because
              temperatures are high and you are
              likely to spend time outdoors.
            </span>
          </div>

          <div class="button-pair">
            <button
              type="button"
              class="pill-action orange"
              data-go="personalized-advice"
            >
              What to do?
            </button>

            <button
              type="button"
              class="pill-action navy"
              data-go="risk-forecast"
            >
              Forecast &rarr;
            </button>
          </div>
        </section>

        <section
          class="card compact timeline-card"
        >
          <div class="card-heading-row">
            <h2>
              Today's Risk Timeline
            </h2>

            <span class="peak">
              PEAK 1PM-3PM
            </span>
          </div>

          ${areaChart(["6A", "9A", "12P", "3P", "6P", "9P"], "#ff5b18")}
        </section>

        <section class="card breakdown">
          <h2>
            Risk Breakdown
          </h2>

          ${breakdownGroup("Environmental", [
            ["Temperature (38&deg;C)", "76%", 76, "#dc2626"],

            ["Heat Index (44&deg;C)", "88%", 88, "#7c3aed"],

            ["Humidity (68%)", "62%", 62, "#2563eb"],

            ["Daily exposure: Moderate", "55%", 55, "#d97706"],
          ])}

          ${breakdownGroup("Air Quality", [
            ["AQI: 82 (Moderate)", "45%", 45, "#d97706"],

            ["PM2.5: 28 &micro;g/m&sup3;", "42%", 42, "#d97706"],

            ["Nearby fires: 1 active", "30%", 30, "#dc2626"],
          ])}
        </section>

        <div class="link-list">
          ${linkRow("Personalized Advice", "personalized-advice")}

          ${linkRow("Risk Forecast (5 days)", "risk-forecast")}

          ${linkRow("Wildfire Risk Forecast", "wildfire-forecast")}

          ${linkRow("Haze & Air Quality Detail", "haze-detail")}
        </div>
      </main>

      ${bottomNav("my-risk")}
    </section>
  `;
}

function breakdownGroup(title, rows) {
  return `
    <div class="breakdown-group">
      <h4>
        ${title}
      </h4>

      ${rows
        .map(
          ([label, value, pct, color]) => `
            <div class="bar-row">
              <div class="bar-labels">
                <span>
                  ${label}
                </span>

                <strong
                  style="color:${color};"
                >
                  ${value}
                </strong>
              </div>

              <div class="progress-track">
                <div
                  class="progress-fill"
                  style="
                    width:${pct}%;
                    background:
                      linear-gradient(
                        90deg,
                        ${color}99,
                        ${color}
                      );
                  "
                ></div>
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function linkRow(label, target) {
  return `
    <button
      type="button"
      class="link-row"
      data-go="${escapeAttr(target)}"
    >
      <span>
        ${label}
      </span>

      ${image("chevronRight")}
    </button>
  `;
}

/* =========================================================
   HISTORY
========================================================= */

function renderHistory() {
  const chips = ["My Risk", "Heat Memory", "Fire", "Haze"];

  return `
    <section
      class="screen"
      data-node-id="45:923"
    >
      <header class="app-header history">
        <div class="history-title">
          <div>
            <h1>
              My History
            </h1>

            <p>
              ${escapeHtml(state.profile.city)}
              &middot; 2026
            </p>
          </div>

          <div
            style="
              display:flex;
              gap:10px;
            "
          >
            ${notificationButton()}

            <button
              type="button"
              class="profile-bubble"
              data-go="settings"
              aria-label="Open profile"
            >
              ${profileInitial()}
            </button>
          </div>
        </div>

        <div class="chip-scroll">
          ${chips
            .map(
              (chip) => `
                <button
                  type="button"
                  class="chip ${state.historyChip === chip ? "is-active" : ""}"
                  data-chip="${escapeAttr(chip)}"
                >
                  ${chip}
                </button>
              `,
            )
            .join("")}

          <button
            type="button"
            class="chip"
            data-go="compare"
          >
            Compare Cities
          </button>
        </div>
      </header>

      <main
        class="content-scroll history-content"
      >
        ${historyContent()}
      </main>

      ${bottomNav("history")}
    </section>
  `;
}

function historyContent() {
  if (state.historyChip === "Heat Memory") {
    return renderHeatMemoryHistory();
  }

  if (state.historyChip === "Fire") {
    return renderFireHistory();
  }

  if (state.historyChip === "Haze") {
    return renderHazeHistory();
  }

  return renderRiskHistory();
}

function historyPeriodPicker() {
  const periods = ["1W", "1M", "1Y"];

  return `
    <div class="interactive-segment">
      ${periods
        .map(
          (period) => `
            <button
              type="button"
              class="${state.historyPeriod === period ? "is-active" : ""}"
              data-history-period="${period}"
            >
              ${period}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderRiskHistory() {
  return `
    <section class="card">
      <div class="card-heading-row">
        <h2>
          This Week's Risk Score
        </h2>

        ${historyPeriodPicker()}
      </div>

      <span class="subtle">
        Your daily personal risk score
        (0-100)
      </span>

      ${areaChart(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], "#ff5b18")}

      <p class="chart-note">
        Risk elevated all week.
        Peak Friday at 72/100.
        Conditions may ease next week.
      </p>
    </section>

    <section class="card compact">
      <h2>
        Weekly Summary
      </h2>

      <div class="summary-grid">
        ${summaryTile("58", "/100", "Avg Risk", "#e49a06")}

        ${summaryTile("41", "&deg;C", "Peak Temp", "#ea580c")}

        ${summaryTile("76", "", "Avg AQI", "#e49a06")}
      </div>
    </section>
  `;
}

function renderHeatMemoryHistory() {
  return `
    <section class="card">
      <div class="card-heading-row">
        <h2>
          Heat Memory
        </h2>

        ${historyPeriodPicker()}
      </div>

      <span class="subtle">
        How heat exposure has changed
        over time
      </span>

      ${areaChart(["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Dec"], "#f97316")}

      <div class="insight-panel">
        <strong>
          +4.8&deg;C warmer
        </strong>

        <span>
          Your hottest recorded days are
          becoming more frequent.
        </span>
      </div>
    </section>

    <section class="card compact">
      <h2>
        Heat Exposure Summary
      </h2>

      <div class="summary-grid">
        ${summaryTile("18", "", "High-risk days", "#ea580c")}

        ${summaryTile("43", "&deg;C", "Highest", "#dc2626")}

        ${summaryTile("6", "h", "Avg exposure", "#e49a06")}
      </div>
    </section>
  `;
}

function renderFireHistory() {
  return `
    <section class="card">
      <div class="card-heading-row">
        <h2>
          Fire History
        </h2>

        ${historyPeriodPicker()}
      </div>

      <span class="subtle">
        Nearby wildfire activity
        and smoke risk
      </span>

      ${areaChart(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], "#dc2626")}

      <div class="insight-panel red">
        <strong>
          1 active fire nearby
        </strong>

        <span>
          Closest detected fire was
          28 km northeast of your location.
        </span>
      </div>
    </section>

    <section class="card compact">
      <div class="card-heading-row">
        <h2>
          Fire Summary
        </h2>

        <button
          type="button"
          class="subtle text-link"
          data-go="wildfire-forecast"
        >
          Forecast &rarr;
        </button>
      </div>

      <div class="summary-grid">
        ${summaryTile("3", "", "Alerts", "#dc2626")}

        ${summaryTile("28", " km", "Closest", "#ea580c")}

        ${summaryTile("MOD", "", "Current", "#e49a06")}
      </div>
    </section>
  `;
}

function renderHazeHistory() {
  return `
    <section class="card">
      <div class="card-heading-row">
        <h2>
          Haze & Air Quality
        </h2>

        ${historyPeriodPicker()}
      </div>

      <span class="subtle">
        Daily AQI and PM2.5 exposure
      </span>

      ${areaChart(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], "#2563eb")}

      <div class="insight-panel blue">
        <strong>
          AQI improved today
        </strong>

        <span>
          Current AQI is 82, but haze may
          increase if wind shifts tomorrow.
        </span>
      </div>
    </section>

    <section class="card compact">
      <div class="card-heading-row">
        <h2>
          Air Quality Summary
        </h2>

        <button
          type="button"
          class="subtle text-link"
          data-go="haze-detail"
        >
          Details &rarr;
        </button>
      </div>

      <div class="summary-grid">
        ${summaryTile("82", "", "Avg AQI", "#e49a06")}

        ${summaryTile("28", "", "PM2.5", "#e49a06")}

        ${summaryTile("3", "", "Haze alerts", "#2563eb")}
      </div>
    </section>
  `;
}

/* =========================================================
   CHART
========================================================= */

function areaChart(labels, color) {
  const gradientId = `area-${labels.join("-").replace(/[^a-zA-Z0-9]/g, "")}`;

  return `
    <div
      class="chart"
      aria-label="Risk chart"
    >
      <svg
        viewBox="0 0 328 122"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="${gradientId}"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop
              offset="0%"
              stop-color="${color}"
              stop-opacity="0.2"
            ></stop>

            <stop
              offset="100%"
              stop-color="${color}"
              stop-opacity="0.02"
            ></stop>
          </linearGradient>
        </defs>

        <line
          x1="28"
          y1="14"
          x2="326"
          y2="14"
          stroke="#edf0f5"
          stroke-dasharray="3 4"
        ></line>

        <line
          x1="28"
          y1="52"
          x2="326"
          y2="52"
          stroke="#edf0f5"
          stroke-dasharray="3 4"
        ></line>

        <line
          x1="28"
          y1="90"
          x2="326"
          y2="90"
          stroke="#edf0f5"
          stroke-dasharray="3 4"
        ></line>

        <text
          x="3"
          y="18"
          fill="#9ca3af"
          font-size="9"
        >
          100
        </text>

        <text
          x="10"
          y="55"
          fill="#9ca3af"
          font-size="9"
        >
          50
        </text>

        <text
          x="16"
          y="94"
          fill="#9ca3af"
          font-size="9"
        >
          0
        </text>

        <path
          d="
            M28 76
            C70 63, 82 57, 118 57
            C150 56, 170 39, 205 37
            C244 35, 263 36, 296 47
            C310 51, 319 55, 326 58
            L326 90
            L28 90
            Z
          "
          fill="url(#${gradientId})"
        ></path>

        <path
          d="
            M28 76
            C70 63, 82 57, 118 57
            C150 56, 170 39, 205 37
            C244 35, 263 36, 296 47
            C310 51, 319 55, 326 58
          "
          fill="none"
          stroke="${color}"
          stroke-width="3"
          stroke-linecap="round"
        ></path>
      </svg>

      <div class="chart-labels">
        ${labels
          .map(
            (label) => `
              <span>
                ${label}
              </span>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function summaryTile(main, suffix, label, color) {
  return `
    <button
      type="button"
      class="summary-tile"
      data-action="${escapeAttr(label)} detail opened."
    >
      <strong
        style="color:${color};"
      >
        ${main}

        <small
          style="font-size:14px;"
        >
          ${suffix}
        </small>
      </strong>

      <span>
        ${label}
      </span>
    </button>
  `;
}

/* =========================================================
   FEATURE SCREEN HEADER
========================================================= */

function renderFeatureHeader(title, backTarget = "my-risk") {
  return `
    <header class="app-header back-location">
      <div class="header-main">
        <button
          type="button"
          class="plain-icon-btn back-text"
          data-go="${backTarget}"
          aria-label="Back"
        >
          &#8592;
        </button>

        <div class="location-meta">
          <strong
            style="
              font-size:18px;
              color:#0f2440;
            "
          >
            ${title}
          </strong>

          <span class="location-address">
            ${escapeHtml(state.profile.city)},

            ${escapeHtml(state.profile.country)}
          </span>
        </div>

        ${notificationButton()}
      </div>
    </header>
  `;
}

/* =========================================================
   PERSONALIZED ADVICE
========================================================= */

function renderPersonalizedAdvice() {
  const rows = [
    [
      "Hydration",
      "Drink water regularly, even before you feel thirsty.",
      "#2563eb",
    ],

    [
      "Avoid peak heat",
      "Limit outdoor activity between 11AM and 3PM.",
      "#f97316",
    ],

    [
      "Sun protection",
      "Use shade, sunscreen and lightweight clothing.",
      "#e49a06",
    ],

    [
      "Check symptoms",
      "Rest in a cool place if you feel dizzy, weak or unusually tired.",
      "#dc2626",
    ],
  ];

  return `
    <section class="screen">
      ${renderFeatureHeader("Personalized Advice")}

      <main class="content-scroll tight">
        <section class="card">
          <h2>
            What to do today
          </h2>

          <p class="subtle">
            Advice based on today's conditions
            and your profile.
          </p>

          <div class="feature-list">
            ${rows
              .map(
                ([title, description, color]) => `
                  <button
                    type="button"
                    class="feature-row"
                    data-advice-detail="${escapeAttr(title)}"
                  >
                    <i
                      style="
                        background:${color};
                      "
                    ></i>

                    <span>
                      <strong>
                        ${title}
                      </strong>

                      <small>
                        ${description}
                      </small>
                    </span>

                    ${image("chevronRight", "chevron")}
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="card compact">
          <h2>
            Best time to go outside
          </h2>

          <div class="time-window">
            <strong>
              Before 10 AM
            </strong>

            <span>
              Lower heat stress and UV exposure
            </span>
          </div>

          <div class="time-window">
            <strong>
              After 5 PM
            </strong>

            <span>
              Conditions begin to cool
            </span>
          </div>
        </section>
      </main>

      ${bottomNav("my-risk")}
    </section>
  `;
}

/* =========================================================
   RISK FORECAST
========================================================= */

function renderRiskForecast() {
  const days = [
    ["Today", 72, "HIGH"],

    ["Mon", 66, "HIGH"],

    ["Tue", 58, "MOD"],

    ["Wed", 49, "MOD"],

    ["Thu", 42, "MOD"],
  ];

  return `
    <section class="screen">
      ${renderFeatureHeader("5-Day Risk Forecast")}

      <main class="content-scroll tight">
        <section class="card">
          <h2>
            Your Forecast
          </h2>

          <p class="subtle">
            Personal heat risk for the
            next five days
          </p>

          <div class="forecast-list">
            ${days
              .map(
                ([day, score, level]) => `
                  <button
                    type="button"
                    class="forecast-row"
                    data-forecast-day="${day}"
                  >
                    <span>
                      <strong>
                        ${day}
                      </strong>

                      <small>
                        Tap for breakdown
                      </small>
                    </span>

                    <div class="forecast-score">
                      <b>
                        ${score}
                      </b>

                      <em>
                        ${level}
                      </em>
                    </div>
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="card compact">
          <h2>
            Trend
          </h2>

          ${areaChart(["Now", "Mon", "Tue", "Wed", "Thu"], "#ff5b18")}

          <p class="chart-note">
            Risk gradually decreases as
            temperatures cool later in the week.
          </p>
        </section>
      </main>

      ${bottomNav("my-risk")}
    </section>
  `;
}

/* =========================================================
   WILDFIRE FORECAST
========================================================= */

function renderWildfireForecast() {
  return `
    <section class="screen">
      ${renderFeatureHeader("Wildfire Risk Forecast")}

      <main class="content-scroll tight">
        <div class="notice-red">
          <strong>
            Wildfire detected 28 km NE
          </strong>

          <span>
            Moderate risk. Smoke may move toward
            Phnom Penh if wind shifts.
          </span>
        </div>

        <section class="card">
          <h2>
            Wildfire Risk
          </h2>

          ${areaChart(["Now", "6H", "12H", "1D", "2D", "3D"], "#dc2626")}

          <div class="summary-grid">
            ${summaryTile("MOD", "", "Risk", "#e49a06")}

            ${summaryTile("28", " km", "Distance", "#dc2626")}

            ${summaryTile("NE", "", "Direction", "#2563eb")}
          </div>
        </section>

        <section class="card compact">
          <h2>
            What this means
          </h2>

          <p class="chart-note">
            Dry conditions are increasing
            fire risk. Keep haze alerts enabled
            and reduce outdoor activity if air
            quality worsens.
          </p>

          <button
            type="button"
            class="primary-button"
            data-go="haze-detail"
          >
            View Haze & Air Quality
          </button>
        </section>
      </main>

      ${bottomNav("my-risk")}
    </section>
  `;
}

/* =========================================================
   HAZE
========================================================= */

function renderHazeDetail() {
  return `
    <section class="screen">
      ${renderFeatureHeader("Haze & Air Quality")}

      <main class="content-scroll tight">
        <section class="card">
          <div class="card-heading-row">
            <div>
              <h2>
                Current Air Quality
              </h2>

              <span
                class="risk-badge"
                style="
                  background:rgba(228,154,6,.15);
                  color:#b77900;
                "
              >
                MODERATE
              </span>
            </div>

            <div class="temperature">
              82
            </div>
          </div>

          <div class="summary-grid">
            ${summaryTile("82", "", "AQI", "#e49a06")}

            ${summaryTile("28", "", "PM2.5", "#e49a06")}

            ${summaryTile("68", "%", "Humidity", "#2563eb")}
          </div>
        </section>

        <section class="card compact">
          <h2>
            24-hour AQI
          </h2>

          ${areaChart(["6A", "9A", "12P", "3P", "6P", "9P"], "#2563eb")}
        </section>

        <section class="card compact">
          <h2>
            Health Guidance
          </h2>

          <div class="feature-list">
            <button
              type="button"
              class="feature-row"
              data-action="Guidance saved."
            >
              <span>
                <strong>
                  Sensitive groups
                </strong>

                <small>
                  Reduce long or intense
                  outdoor activity.
                </small>
              </span>
            </button>

            <button
              type="button"
              class="feature-row"
              data-action="Reminder saved."
            >
              <span>
                <strong>
                  Everyone
                </strong>

                <small>
                  Take breaks if you notice
                  coughing or irritation.
                </small>
              </span>
            </button>
          </div>
        </section>
      </main>

      ${bottomNav("my-risk")}
    </section>
  `;
}

/* =========================================================
   COOL SPOTS LIST
========================================================= */

function renderCoolSpotsList() {
  const spots = [
    ["AEON MALL Phnom Penh", "aeon", "0.6 km"],

    ["Lucky Supermarket", "lucky", "1.0 km"],

    ["U Mall Phnom Penh", "umall", "1.4 km"],
  ];

  return `
    <section class="screen">
      ${renderFeatureHeader("Cool Spots Nearby", "home")}

      <main class="content-scroll tight">
        <section class="card">
          <h2>
            Nearby cooling locations
          </h2>

          <p class="subtle">
            Air-conditioned places you can use
            during peak heat.
          </p>

          <div class="cool-list">
            ${spots
              .map(
                ([name, logo, distance]) => `
                  <button
                    type="button"
                    class="cool-list-row"
                    data-cool-spot="${escapeAttr(name)}"
                  >
                    ${image(logo, "cool-list-logo", name)}

                    <span>
                      <strong>
                        ${name}
                      </strong>

                      <small>
                        ${distance}
                        &middot;
                        Air-conditioned
                      </small>
                    </span>

                    ${image("chevronRight", "chevron")}
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>
      </main>

      ${bottomNav("home")}
    </section>
  `;
}

/* =========================================================
   COMPARE CITIES
========================================================= */

function renderCompare() {
  return `
    <section
      class="screen"
      data-node-id="149:565"
    >
      <header class="compare-header">
        <div class="compare-title">
          <button
            type="button"
            class="round-back"
            data-go="history"
            aria-label="Back to history"
          >
            ${image("backCompare")}
          </button>

          <h1>
            Compare Cities
          </h1>

          <button
            type="button"
            class="compare-filter-btn"
            data-compare-filter
            aria-label="Change comparison"
          >
            ${image("filterIcon")}
          </button>
        </div>

        <div class="city-selects">
          ${areaBox("AREA 1", "city1")}

          <strong class="city-vs">
            vs
          </strong>

          ${areaBox("AREA 2", "city2")}
        </div>
      </header>

      <main
        class="content-scroll compare-content"
      >
        <div class="notice-red">
          <strong>
            ${escapeHtml(state.compare.city2)}
            is currently hotter than
            ${escapeHtml(state.compare.city1)}
          </strong>

          <span>
            +2&deg;C higher temp
            &middot;
            +3&deg;C higher heat index
            &middot;
            Lower AQI
          </span>
        </div>

        <section class="card compact">
          <h2>
            Current Conditions
          </h2>

          <div class="legend-inline">
            <span>
              <i
                style="background:#f97316;"
              ></i>

              ${escapeHtml(state.compare.city1)}
            </span>

            <span>
              <i
                style="background:#1e3a5f;"
              ></i>

              ${escapeHtml(state.compare.city2)}
            </span>
          </div>

          ${comparisonBarChart()}
        </section>

        <section class="card compact">
          <h2>
            Risk Comparison
          </h2>

          <div class="comparison-list">
            ${comparisonMetric("Heat Risk", [
              [state.compare.city1, 65, "#eab308"],

              [state.compare.city2, 72, "#f97316"],
            ])}

            ${comparisonMetric("Fire Risk", [
              [state.compare.city1, 30, "#22c55e"],

              [state.compare.city2, 48, "#ef4444"],
            ])}

            ${comparisonMetric("Haze Risk", [
              [state.compare.city1, 60, "#f97316"],

              [state.compare.city2, 45, "#eab308"],
            ])}
          </div>
        </section>
      </main>

      ${bottomNav("history")}

      ${renderCompareFilter()}
    </section>
  `;
}

function renderCompareFilter() {
  if (!state.compare.filterOpen) {
    return "";
  }

  return `
    <div class="compare-filter-overlay">

      <button
        type="button"
        class="compare-filter-backdrop"
        data-close-compare-filter
        aria-label="Close"
      ></button>

      <section class="compare-filter-sheet">

        <div class="sheet-handle"></div>

        <div class="sheet-header">
          <div>
            <h2>
              Change comparison
            </h2>

            <p>
              Select a country and area
            </p>
          </div>

          <button
            type="button"
            data-close-compare-filter
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <div class="compare-filter-section">
          <h3>LOCATION 1</h3>

          ${compareCountrySelect("Country", "country1")}

          ${compareAreaSelect("Area", "city1", "country1")}
        </div>

        <div class="compare-filter-divider"></div>

        <div class="compare-filter-section">
          <h3>LOCATION 2</h3>

          ${compareCountrySelect("Country", "country2")}

          ${compareAreaSelect("Area", "city2", "country2")}
        </div>

        <button
          type="button"
          class="primary-button compare-apply-btn"
          data-close-compare-filter
        >
          Apply
        </button>

      </section>
    </div>
  `;
}

function compareCountrySelect(label, key) {
  const country = state.compare[key];

  return `
    <label class="compare-filter-field">

      <span>
        ${label}
      </span>

      <div class="control select-control">
        <select
          data-compare-country="${key}"
        >
          ${countryOptions
            .map(
              (option) => `
                <option
                  value="${escapeAttr(option)}"
                  ${option === country ? "selected" : ""}
                >
                  ${escapeHtml(option)}
                </option>
              `,
            )
            .join("")}
        </select>

        ${image("compareChevron", "chevron")}
      </div>

    </label>
  `;
}

function compareAreaSelect(label, cityKey, countryKey) {
  const country = state.compare[countryKey];

  const areas = locationOptions[country] || [];

  const area = state.compare[cityKey];

  return `
    <label class="compare-filter-field">

      <span>
        ${label}
      </span>

      <div class="control select-control">
        <select
          data-compare-city="${cityKey}"
        >
          ${areas
            .map(
              (option) => `
                <option
                  value="${escapeAttr(option)}"
                  ${option === area ? "selected" : ""}
                >
                  ${escapeHtml(option)}
                </option>
              `,
            )
            .join("")}
        </select>

        ${image("compareChevron", "chevron")}
      </div>

    </label>
  `;
}

function areaBox(label, key) {
  const area = state.compare[key];

  return `
    <button
      type="button"
      class="city-box"
      data-compare-filter
      aria-label="Change ${label}"
    >
      <span>
        <small>
          ${label}
        </small>

        <strong>
          ${escapeHtml(area)}
        </strong>
      </span>

      ${image("compareChevron")}
    </button>
  `;
}

function comparisonBarChart() {
  const groups = [
    [35, 38],
    [41, 44],
    [95, 82],
    [34, 28],
  ];

  return `
    <div class="bar-chart">
      <div class="compare-bars">
        ${groups
          .map(
            ([a, b]) => `
              <div class="bar-pair">
                <span
                  class="bar"
                  style="
                    height:${a}px;
                    background:#f97316;
                  "
                ></span>

                <span
                  class="bar"
                  style="
                    height:${b}px;
                    background:#1e3a5f;
                  "
                ></span>
              </div>
            `,
          )
          .join("")}
      </div>

      <div class="bar-axis">
        <span>
          Temp&deg;C
        </span>

        <span>
          Heat Idx
        </span>

        <span>
          AQI
        </span>

        <span>
          PM2.5
        </span>
      </div>
    </div>
  `;
}

function comparisonMetric(label, rows) {
  return `
    <div class="comparison-metric">
      <h4>
        ${label}
      </h4>

      ${rows
        .map(
          ([city, score, color]) => `
            <div class="comparison-row">
              <span
                style="
                  color:${city === state.compare.city2 ? "#ff6900" : "#1e3a5f"};
                "
              >
                ${escapeHtml(city)}
              </span>

              <div class="progress-track">
                <div
                  class="progress-fill"
                  style="
                    width:${score}%;
                    background:${color};
                  "
                ></div>
              </div>

              <span>
                ${score}
              </span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

/* =========================================================
   SETTINGS / PROFILE
========================================================= */

function renderSettings() {
  return `
    <section
      class="screen"
      data-node-id="45:1038"
    >
      <header
        class="settings-profile-header"
      >
        <div class="profile-id">
          <div class="profile-avatar">
            ${profileInitial()}
          </div>

          <div>
            <h1>
              ${escapeHtml(state.profile.name || "Pisey")}
            </h1>

            <p>
              ${image("profileLocation")}

              ${escapeHtml(state.profile.city)},

              ${escapeHtml(state.profile.country)}
            </p>

            <div class="profile-tags">
              <span>
                ADULT
              </span>

              <span>
                ${escapeHtml(state.profile.activity).toUpperCase()}
                ACTIVITY
              </span>
            </div>
          </div>
        </div>
      </header>

      <main class="settings-content">
        <section class="settings-card">
          <div class="settings-card__head">
            <h2>
              Personal Information
            </h2>

            <button
              type="button"
              class="plain-icon-btn edit-pencil"
              data-go="edit-profile"
              aria-label="Edit profile"
            >
            ${image("editPencil")}
            </button>
          </div>

          ${settingsRow("Age Group", "Adult")}

          ${settingsRow("Activity Level", state.profile.activity)}

          ${settingsRow(
            "Occupation",
            state.profile.occupation === "Optional"
              ? "-"
              : state.profile.occupation,
          )}

          ${settingsRow(
            "Home Location",
            state.profile.homeLocation === "Optional"
              ? "-"
              : state.profile.homeLocation,
          )}
        </section>

        <section class="settings-card">
          <h2>
            Notifications
          </h2>

          ${toggleRow("Heat Alerts", "heat")}

          ${toggleRow("Wildfire Alerts", "wildfire")}

          ${toggleRow("Haze Alerts", "haze")}

          ${toggleRow("Health Reminders", "health")}
        </section>

        <section class="settings-card">
          <h2>
            App Settings
          </h2>

          ${settingsRow("Language", "English", "&#127760;", true)}

          ${settingsRow(
            "Temperature Unit",
            "&deg;C",
            "&#127777;&#65039;",
            true,
          )}

          ${settingsRow("Saved Locations", "3", "&#128205;", true)}

          ${settingsRow("Privacy Settings", "", "&#128274;", true)}

          ${settingsRow("Alert Center", "", "&#128276;", true)}
        </section>

        <section class="settings-card">
          <h2>
            Community
          </h2>

          ${settingsRow("My Cool Spots", "2 added", "&#10052;&#65039;", true)}

          ${settingsRow("Community Reports", "5 submitted", "&#128221;", true)}

          ${settingsRow("AI Heat Diary", "14 entries", "&#128210;", true)}
        </section>

        <p class="copyright">
          v2.1.0
          &middot;
          ASEAN Climate Risk Platform
        </p>
      </main>

      ${bottomNav("settings")}
    </section>
  `;
}

function settingsRow(label, value, icon = "", big = false) {
  return `
    <button
      type="button"
      class="settings-row"
      data-action="${escapeAttr(label)} opened."
    >
      ${
        icon
          ? `
            <span class="setting-emoji">
              ${icon}
            </span>
          `
          : ""
      }

      <strong
        class="${big ? "big" : ""}"
      >
        ${label}
      </strong>

      ${
        value !== ""
          ? `
            <small>
              ${value}
            </small>
          `
          : ""
      }

      ${image("settingsChevron", "chevron")}
    </button>
  `;
}

function toggleRow(label, key) {
  return `
    <div class="settings-row">
      <strong class="big">
        ${label}
      </strong>

      ${toggleButton(key, "settings-toggle")}
    </div>
  `;
}

function toggleButton(key, className) {
  const on = state.notifications[key];

  return `
    <button
      type="button"
      class="${className} ${on ? "is-on" : ""}"
      data-toggle="${key}"
      aria-label="Toggle ${toggleLabel(key)}"
      aria-pressed="${on ? "true" : "false"}"
    ></button>
  `;
}

function toggleLabel(key) {
  const found = notificationRows.find(([, rowKey]) => rowKey === key);

  return found ? found[0] : key;
}

function profileInitial() {
  return escapeHtml(
    (state.profile.name || "P").trim().slice(0, 1).toUpperCase() || "P",
  );
}

/* =========================================================
   TOAST
========================================================= */

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;

  toast.classList.add("is-visible");

  clearTimeout(toastTimer);

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

/* =========================================================
   EXTRA INTERACTION STYLES
   This lets you keep your current CSS.
========================================================= */

function injectInteractionStyles() {
  if (document.getElementById("interaction-styles")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "interaction-styles";

  style.textContent = `
    .sheet-overlay {
      position: absolute;
      inset: 0;
      z-index: 80;
      display: flex;
      align-items: flex-end;
    }

    .sheet-backdrop {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0;
      background: rgba(15,36,64,.28);
      backdrop-filter: blur(2px);
      cursor: pointer;
    }

    .bottom-sheet {
      position: relative;
      z-index: 1;
      width: 100%;
      max-height: 72%;
      overflow-y: auto;
      background: #fff;
      border-radius: 24px 24px 0 0;
      padding: 10px 20px 28px;
      box-sizing: border-box;
      box-shadow:
        0 -12px 40px
        rgba(15,36,64,.18);
      animation:
        sheetUp .24s ease;
    }

    .sheet-handle {
      width: 42px;
      height: 5px;
      border-radius: 999px;
      background: #d7dde7;
      margin: 0 auto 16px;
    }

    .sheet-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 16px;
    }

    .sheet-header h2 {
      margin: 0;
      color: #0f2440;
      font-size: 20px;
    }

    .sheet-header p {
      margin: 4px 0 0;
      color: #7a8798;
      font-size: 12px;
    }

    .sheet-header > button {
      border: 0;
      background: #f2f5f9;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      font-size: 22px;
      color: #0f2440;
      cursor: pointer;
    }

    .layer-grid {
      display: grid;
      grid-template-columns:
        1fr 1fr;
      gap: 10px;
    }

    .layer-option {
      border:
        1px solid #e7ebf0;
      background: #fff;
      border-radius: 16px;
      padding: 14px;
      text-align: left;
      color: #0f2440;
      min-height: 76px;
      cursor: pointer;
      transition:
        transform .18s ease,
        border-color .18s ease,
        background .18s ease;
    }

    .layer-option:active {
      transform:
        scale(.97);
    }

    .layer-option strong,
    .layer-option span {
      display: block;
    }

    .layer-option span {
      margin-top: 4px;
      font-size: 11px;
      color: #7a8798;
    }

    .layer-option.is-active {
      border-color: #ff6900;
      background:
        rgba(255,105,0,.07);
      box-shadow:
        inset 0 0 0 1px
        #ff6900;
    }

    .map-detail-grid {
      display: grid;
      grid-template-columns:
        repeat(4,1fr);
      gap: 8px;
    }

    .map-detail-grid div {
      padding: 12px 6px;
      border-radius: 14px;
      background: #f7f9fc;
      text-align: center;
    }

    .map-detail-grid strong,
    .map-detail-grid span {
      display: block;
    }

    .map-detail-grid strong {
      font-size: 18px;
      color: #0f2440;
    }

    .map-detail-grid span {
      font-size: 10px;
      color: #7a8798;
      margin-top: 3px;
    }

    .risk-strip {
      display: grid;
      grid-template-columns:
        repeat(3,1fr);
      gap: 8px;
      margin: 12px 0 16px;
    }

    .risk-strip span {
      border-radius: 12px;
      background: #f7f9fc;
      padding: 10px;
      text-align: center;
      font-size: 10px;
      color: #657184;
    }

    .risk-strip b {
      display: block;
      color: #0f2440;
      font-size: 12px;
      margin-bottom: 2px;
    }

    .route-card,
    .insight-panel {
      border-radius: 16px;
      background: #fff7ed;
      padding: 14px;
      margin: 12px 0;
    }

    .route-card strong,
    .route-card span,
    .insight-panel strong,
    .insight-panel span {
      display: block;
    }

    .route-card strong,
    .insight-panel strong {
      color: #0f2440;
      font-size: 14px;
    }

    .route-card span,
    .insight-panel span {
      color: #6b7280;
      font-size: 11px;
      margin-top: 5px;
      line-height: 1.45;
    }

    .insight-panel.red {
      background: #fef2f2;
    }

    .insight-panel.blue {
      background: #eff6ff;
    }

    .interactive-segment {
      display: flex;
      background: #f2f5f9;
      border-radius: 999px;
      padding: 3px;
      gap: 2px;
    }

    .interactive-segment button {
      border: 0;
      background: transparent;
      color: #7a8798;
      font-size: 10px;
      font-weight: 700;
      padding: 6px 9px;
      border-radius: 999px;
      cursor: pointer;
    }

    .interactive-segment button.is-active {
      background: #0f2440;
      color: #fff;
    }

    .feature-list,
    .forecast-list,
    .cool-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 14px;
    }

    .feature-row,
    .forecast-row,
    .cool-list-row {
      width: 100%;
      border:
        1px solid #edf0f4;
      background: #fff;
      border-radius: 14px;
      padding: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
      text-align: left;
      color: #0f2440;
      cursor: pointer;
      box-sizing: border-box;
      transition:
        background .18s ease,
        transform .18s ease;
    }

    .feature-row:active,
    .forecast-row:active,
    .cool-list-row:active {
      transform:
        scale(.98);
      background: #f8fafc;
    }

    .feature-row i {
      width: 8px;
      height: 38px;
      border-radius: 999px;
      flex: none;
    }

    .feature-row span,
    .forecast-row span,
    .cool-list-row span {
      flex: 1;
      min-width: 0;
    }

    .feature-row strong,
    .feature-row small,
    .forecast-row strong,
    .forecast-row small,
    .cool-list-row strong,
    .cool-list-row small {
      display: block;
    }

    .feature-row small,
    .forecast-row small,
    .cool-list-row small {
      color: #7a8798;
      font-size: 10px;
      margin-top: 3px;
      line-height: 1.4;
    }

    .forecast-row {
      justify-content:
        space-between;
    }

    .forecast-score {
      text-align: right;
    }

    .forecast-score b,
    .forecast-score em {
      display: block;
    }

    .forecast-score b {
      font-size: 20px;
    }

    .forecast-score em {
      font-size: 9px;
      font-style: normal;
      color: #ff6900;
      font-weight: 800;
    }

    .time-window {
      padding: 12px 0;
      border-bottom:
        1px solid #edf0f4;
    }

    .time-window:last-child {
      border-bottom: 0;
    }

    .time-window strong,
    .time-window span {
      display: block;
    }

    .time-window strong {
      color: #0f2440;
    }

    .time-window span {
      font-size: 11px;
      color: #7a8798;
      margin-top: 4px;
    }

    .cool-list-logo {
      width: 44px;
      height: 44px;
      object-fit: contain;
      border-radius: 10px;
      background: #f7f9fc;
      padding: 4px;
      box-sizing: border-box;
    }

    .map-cool-marker {
      position: absolute;
      z-index: 12;
      width: 44px;
      height: 44px;
      border: 3px solid #fff;
      border-radius: 50%;
      background: #0f2440;
      box-shadow:
        0 4px 14px
        rgba(15,36,64,.25);
      display: grid;
      place-items: center;
      font-size: 19px;
      cursor: pointer;
      animation:
        mapMarkerIn .25s ease;
    }

    .route-steps {
      display: flex;
      flex-direction: column;
      margin: 4px 0 18px;
    }

    .route-steps > div {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0;
      border-bottom:
        1px solid #edf0f4;
    }

    .route-steps > div:last-child {
      border-bottom: 0;
    }

    .route-steps b {
      width: 26px;
      height: 26px;
      flex: none;
      display: grid;
      place-items: center;
      border-radius: 50%;
      color: #fff;
      background: #0f2440;
      font-size: 11px;
    }

    .route-steps span {
      color: #64748b;
      font-size: 11px;
      line-height: 1.4;
    }

    @keyframes sheetUp {
      from {
        transform:
          translateY(22px);
        opacity: .5;
      }

      to {
        transform:
          translateY(0);
        opacity: 1;
      }
    }

    @keyframes mapMarkerIn {
      from {
        transform:
          scale(.5);
        opacity: 0;
      }

      to {
        transform:
          scale(1);
        opacity: 1;
      }
    }
  `;

  document.head.appendChild(style);
}

/* =========================================================
   RESPONSIVE IPHONE SCALE
========================================================= */

function updateResponsiveScale() {
  const vw = window.innerWidth || 440;

  const vh = window.innerHeight || 956;

  const isPhone = handsetQuery.matches;

  document.body.classList.toggle("is-phone", isPhone);

  if (isPhone) {
    const isLandscapePhone = vw > vh && vh <= 520;

    const scale = isLandscapePhone ? Math.min(vh / 760, vw / 440) : vw / 440;

    const screenHeight = isLandscapePhone ? 760 : Math.max(760, vh / scale);

    const screenX = isLandscapePhone ? Math.max(0, (vw - 440 * scale) / 2) : 0;

    document.documentElement.style.setProperty("--app-scale", scale.toFixed(4));

    document.documentElement.style.setProperty(
      "--screen-h",
      `${screenHeight.toFixed(2)}px`,
    );

    document.documentElement.style.setProperty("--device-scale", "1");

    document.documentElement.style.setProperty(
      "--screen-x",
      `${screenX.toFixed(2)}px`,
    );

    return;
  }

  const maxWidth = Math.max(320, vw - 56);

  const maxHeight = Math.max(520, vh - 56);

  const scale = Math.min(maxWidth / 476, maxHeight / 1000, 1);

  document.documentElement.style.setProperty(
    "--device-scale",
    scale.toFixed(4),
  );

  document.documentElement.style.setProperty("--screen-h", "956px");

  document.documentElement.style.setProperty("--app-scale", "1");

  document.documentElement.style.setProperty("--screen-x", "0px");
}

/* =========================================================
   STATUS CLOCK
========================================================= */

function updateStatusClock() {
  if (!statusTime) {
    return;
  }

  const now = new Date();

  let hours = now.getHours();

  const minutes = String(now.getMinutes()).padStart(2, "0");

  hours = hours % 12 || 12;

  statusTime.textContent = `${hours}:${minutes}`;
}

/* =========================================================
   CLICK HANDLER
========================================================= */

function handleClick(event) {
  /* ---------- navigation ---------- */

  const goButton = event.target.closest("[data-go]");

  if (goButton) {
    event.preventDefault();

    state.map.openSheet = "";

    go(goButton.dataset.go);

    return;
  }

  /* ---------- notification toggles ---------- */

  const toggle = event.target.closest("[data-toggle]");

  if (toggle) {
    event.preventDefault();

    const key = toggle.dataset.toggle;

    state.notifications[key] = !state.notifications[key];

    toggle.classList.toggle("is-on", state.notifications[key]);

    toggle.setAttribute(
      "aria-pressed",
      state.notifications[key] ? "true" : "false",
    );

    showToast(
      `${toggleLabel(key)} ${
        state.notifications[key] ? "enabled" : "disabled"
      }.`,
    );

    return;
  }

  /* ---------- profile radios ---------- */

  const radio = event.target.closest("[data-radio-group]");

  if (radio) {
    event.preventDefault();

    const group = radio.dataset.radioGroup;

    const value = radio.dataset.radioValue;

    state.profile[group] = value;

    const scope = radio.closest("[data-radio-scope]") || phone;

    scope.querySelectorAll("[data-radio-group]").forEach((button) => {
      if (button.dataset.radioGroup !== group) {
        return;
      }

      const selected = button.dataset.radioValue === value;

      button.classList.toggle("is-selected", selected);

      button.setAttribute("aria-pressed", selected ? "true" : "false");

      const dot = button.querySelector(".radio-dot");

      if (dot) {
        dot.classList.toggle("is-selected", selected);
      }
    });

    showToast(`${value} selected.`);

    return;
  }

  /* ---------- login / signup ---------- */

  const authMode = event.target.closest("[data-auth-mode]");

  if (authMode) {
    event.preventDefault();

    state.authMode = authMode.dataset.authMode;

    go("signup");

    showToast(
      state.authMode === "login"
        ? "Login mode selected."
        : "Sign up mode selected.",
    );

    return;
  }

  /* ---------- HISTORY TABS ---------- */

  const chip = event.target.closest("[data-chip]");

  if (chip) {
    event.preventDefault();

    state.historyChip = chip.dataset.chip;

    go("history");

    return;
  }

  /* ---------- HISTORY PERIOD ---------- */

  const historyPeriod = event.target.closest("[data-history-period]");

  if (historyPeriod) {
    event.preventDefault();

    state.historyPeriod = historyPeriod.dataset.historyPeriod;

    go("history");

    showToast(`${state.historyPeriod} view selected.`);

    return;
  }

  /* ---------- MAP ACTIONS ---------- */

  const mapAction = event.target.closest("[data-map-action]");

  if (mapAction) {
    event.preventDefault();

    const action = mapAction.dataset.mapAction;

    if (action === "layers") {
      state.map.openSheet = "layers";
    }

    if (action === "detail") {
      state.map.openSheet = "detail";
    }

    if (action === "route") {
      state.map.openSheet = "route";
    }

    go("map");

    return;
  }

  /* ---------- MAP LAYER ---------- */

  const mapLayer = event.target.closest("[data-map-layer]");

  if (mapLayer) {
    event.preventDefault();

    state.map.activeLayer = mapLayer.dataset.mapLayer;

    state.map.openSheet = "";

    const layerNames = {
      heat: "Heat",
      fire: "Fire",
      haze: "Haze / AQI",
      cool: "Cool Spots",
    };

    go("map");

    showToast(`${layerNames[state.map.activeLayer] || "Map"} layer selected.`);

    return;
  }

  /* ---------- CLOSE MAP SHEET ---------- */

  const closeSheet = event.target.closest("[data-close-sheet]");

  if (closeSheet) {
    event.preventDefault();

    state.map.openSheet = "";

    go("map");

    return;
  }

  /* ---------- COOL SPOT ---------- */

  const coolSpot = event.target.closest("[data-cool-spot]");

  if (coolSpot) {
    event.preventDefault();

    state.map.selectedSpot = coolSpot.dataset.coolSpot;

    state.map.activeLayer = "cool";

    state.map.openSheet = "spot";

    go("map");

    return;
  }

  /* ---------- RISK CHAIN ---------- */

  const riskNode = event.target.closest("[data-risk-node]");

  if (riskNode) {
    event.preventDefault();

    const node = riskNode.dataset.riskNode;

    if (node === "FIRE") {
      go("wildfire-forecast");
    } else if (node === "HAZE") {
      go("haze-detail");
    } else {
      go("my-risk");
    }

    return;
  }

  /* ---------- CURRENT CONDITIONS ---------- */

  const metric = event.target.closest("[data-metric]");

  if (metric) {
    event.preventDefault();

    const name = metric.dataset.metric;

    if (name === "AQI" || name === "PM2.5") {
      go("haze-detail");
    } else {
      go("my-risk");
    }

    return;
  }

  /* ---------- ADVICE ITEM ---------- */

  const adviceDetail = event.target.closest("[data-advice-detail]");

  if (adviceDetail) {
    event.preventDefault();

    showToast(`${adviceDetail.dataset.adviceDetail}: recommendation opened.`);

    return;
  }

  /* ---------- FORECAST DAY ---------- */

  const forecastDay = event.target.closest("[data-forecast-day]");

  if (forecastDay) {
    event.preventDefault();

    const day = forecastDay.dataset.forecastDay;

    showToast(`${day} forecast selected.`);

    return;
  }

  /* ---------- OPEN COMPARE FILTER ---------- */

  const compareFilter = event.target.closest("[data-compare-filter]");

  if (compareFilter) {
    event.preventDefault();

    state.compare.filterOpen = true;

    go("compare");

    return;
  }

  /* ---------- CLOSE COMPARE FILTER ---------- */

  const closeCompareFilter = event.target.closest(
    "[data-close-compare-filter]",
  );

  if (closeCompareFilter) {
    event.preventDefault();

    state.compare.filterOpen = false;

    go("compare");

    return;
  }

  /* ---------- BASIC MAP CONTROLS ---------- */

  const mapToggle = event.target.closest("[data-map-toggle]");

  if (mapToggle) {
    event.preventDefault();

    const key = mapToggle.dataset.mapToggle;

    state.map[key] = !state.map[key];

    phone.querySelectorAll(`[data-map-toggle="${key}"]`).forEach((button) => {
      button.classList.toggle("is-active", state.map[key]);
    });

    const labels = {
      layers: "Layer overlay",

      compass: "Compass",

      centered: "Location center",

      route: "Cool route",
    };

    showToast(
      `${labels[key] || "Map option"} ${
        state.map[key] ? "enabled" : "disabled"
      }.`,
    );

    return;
  }

  /* ---------- SIMPLE ACTION ---------- */

  const action = event.target.closest("[data-action]");

  if (action) {
    event.preventDefault();

    showToast(action.dataset.action);
  }
}

/* =========================================================
   INPUT HANDLERS
========================================================= */

function handleInput(event) {
  const target = event.target;

  /* PROFILE */

  const key = target.dataset.bind;

  if (key) {
    state.profile[key] = target.value;

    return;
  }

  /* COMPARE COUNTRY */

  const countryKey = target.dataset.compareCountry;

  if (countryKey) {
    state.compare[countryKey] = target.value;

    const cityKey = countryKey === "country1" ? "city1" : "city2";

    const areas = locationOptions[target.value] || [];

    state.compare[cityKey] = areas[0] || "";

    go("compare");

    return;
  }

  /* COMPARE AREA */

  const cityKey = target.dataset.compareCity;

  if (cityKey) {
    state.compare[cityKey] = target.value;

    go("compare");

    return;
  }
}

function handleSearchInput(event) {
  const target = event.target;

  if (!target.dataset.actionInput || !target.value.trim()) {
    return;
  }

  showToast(`Searching for ${target.value.trim()}...`);
}

/* =========================================================
   EVENTS
========================================================= */

document.addEventListener("click", handleClick);

document.addEventListener("input", handleInput);

document.addEventListener("change", handleInput);

document.addEventListener("change", handleSearchInput);

window.addEventListener("resize", updateResponsiveScale);

window.addEventListener("orientationchange", updateResponsiveScale);

window.addEventListener("hashchange", () => {
  go(getRequestedScreen() || "welcome");
});

/* =========================================================
   START APP
========================================================= */

window.go = go;

injectInteractionStyles();

updateResponsiveScale();

updateStatusClock();

window.setInterval(updateStatusClock, 30000);

go(currentId);
