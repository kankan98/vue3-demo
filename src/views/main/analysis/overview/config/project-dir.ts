export const projectDir = `
├── auto-imports.d.ts
├── babel.config.js
├── commitlint.config.js
├── components.d.ts
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── src
│   ├── api
│   │   ├── login
│   │   │   ├── index.ts
│   │   │   └── type.ts
│   │   └── main
│   │       ├── analysis
│   │       │   ├── analysis.ts
│   │       │   └── types.ts
│   │       └── system
│   │           ├── system.ts
│   │           └── types.ts
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.scss
│   │   │   ├── global.scss
│   │   │   └── index.scss
│   │   ├── font
│   │   │   └── iconfont.js
│   │   └── img
│   │       ├── 404.jpg
│   │       ├── login-bg.svg
│   │       └── logo.svg
│   ├── base-ui
│   │   ├── breadcrumb
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── breadcrumb.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── card.vue
│   │   ├── echart
│   │   │   ├── data
│   │   │   │   └── chinaMapData.json
│   │   │   ├── hooks
│   │   │   │   └── useEchart.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── base-echart.vue
│   │   ├── form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── index.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── icon
│   │   │   └── index.vue
│   │   └── table
│   │       ├── index.ts
│   │       └── src
│   │           └── table.vue
│   ├── components
│   │   ├── goods-card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── GoodsCard.vue
│   │   ├── nav-header
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── NavHeader.vue
│   │   │       └── UserInfo.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── NavMenu.vue
│   │   │   └── types.ts
│   │   ├── page-content
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── PageContent.vue
│   │   ├── page-echarts
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   ├── bar-echart.vue
│   │   │   │   ├── line-echart.vue
│   │   │   │   ├── map-echart.vue
│   │   │   │   ├── pie-echart.vue
│   │   │   │   └── rose-echart.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── convert-data.ts
│   │   │       └── geoCoordMap-data.ts
│   │   ├── page-modal
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── PageModal.vue
│   │   └── page-search
│   │       ├── index.ts
│   │       └── src
│   │           └── PageSearch.vue
│   ├── global
│   │   ├── index.ts
│   │   ├── register-element-icons.ts
│   │   └── register-properties.ts
│   ├── hooks
│   │   ├── use-page-modal.ts
│   │   ├── use-page-search.ts
│   │   └── use-permission.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   └── main
│   │       ├── analysis
│   │       │   ├── dashboard
│   │       │   │   └── dashboard.ts
│   │       │   └── overview
│   │       │       └── overview.ts
│   │       ├── product
│   │       │   ├── category
│   │       │   │   └── category.ts
│   │       │   └── goods
│   │       │       └── goods.ts
│   │       ├── story
│   │       │   ├── chat
│   │       │   │   └── chat.ts
│   │       │   └── list
│   │       │       └── list.ts
│   │       └── system
│   │           ├── department
│   │           │   └── department.ts
│   │           ├── menu
│   │           │   └── menu.ts
│   │           ├── role
│   │           │   └── role.ts
│   │           └── user
│   │               └── user.ts
│   ├── service
│   │   ├── index.ts
│   │   └── request
│   │       ├── config.ts
│   │       ├── index.ts
│   │       └── type.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── dashboard.ts
│   │   │   │   └── types.ts
│   │   │   └── system
│   │   │       ├── system.ts
│   │   │       └── types.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── date-format.ts
│   │   ├── map-menus.ts
│   │   └── number-format.ts
│   └── views
│       ├── login
│       │   ├── comps
│       │   │   ├── LoginAccount.vue
│       │   │   ├── LoginPanel.vue
│       │   │   └── LoginPhone.vue
│       │   ├── config
│       │   │   ├── account-config.ts
│       │   │   └── phone-config.ts
│       │   └── index.vue
│       ├── main
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   └── dashboard.vue
│       │   │   └── overview
│       │   │       └── overview.vue
│       │   ├── index.vue
│       │   ├── product
│       │   │   ├── category
│       │   │   │   └── category.vue
│       │   │   └── goods
│       │   │       ├── config
│       │   │       │   ├── content.config.ts
│       │   │       │   └── search.config.ts
│       │   │       └── goods.vue
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── chat.vue
│       │   │   └── list
│       │   │       └── list.vue
│       │   └── system
│       │       ├── department
│       │       │   └── department.vue
│       │       ├── menu
│       │       │   ├── config
│       │       │   │   └── content.config.ts
│       │       │   └── menu.vue
│       │       ├── role
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── role.vue
│       │       └── user
│       │           ├── config
│       │           │   ├── content.config.ts
│       │           │   ├── modal.config.ts
│       │           │   └── search.config.ts
│       │           └── user.vue
│       └── notFound
│           └── NotFound.vue
├── tsconfig.json
└── vue.config.js
`;
