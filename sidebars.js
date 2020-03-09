/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  falconPlatformSidebar: {
    "Overview": [
      "platform/overview/about",
      "platform/overview/enterprise"
    ],
    "Getting Started": [
      "platform/getting-started/prerequisites",
      "platform/getting-started/npm",
      "platform/getting-started/create"
    ],
    "Falcon Client": [
      "platform/client/about",
      "platform/client/technical",
      "platform/client/files",
      "platform/client/getting-started",
      "platform/client/configuration",
      "platform/client/webpack",
      {
        type: 'category',
        label: 'Theming',
        items: [
          "platform/client/theming/overview",
          "platform/client/theming/css-mapping",
          "platform/client/theming/components",
          "platform/client/theming/icons",
          "platform/client/theming/css-sass"
        ],
      },
      "platform/client/overrides",
      "platform/client/routing",
      "platform/client/state",
      "platform/client/translations",
      "platform/client/cache",
      "platform/client/code-splitting",
      "platform/client/testing",
      "platform/client/deployment",
    ],
    "Falcon Server": ["platform/server"],
    "Integration": ["platform/integration"],
    "Cookbook": [
      {
        type: 'category',
        label: 'Falcon Client',
        items: [
          'platform/cookbook/client/change-logo',
          'platform/cookbook/client/icon',
          'platform/cookbook/client/scss-global'
        ],
      },
    ],
    "Video Guides": [
      "platform/guides/client"
    ],
    "Support": [
      "platform/support/contact",
      "platform/support/faqs"
    ]
  },
  cloudSidebar: {
    "Overview": [
      "cloud/overview/about",
      "cloud/overview/technical"
    ],
    "Getting Started": [
      "cloud/getting-started/prerequisites",
      "cloud/getting-started/account",
      "cloud/getting-started/installation",
      "cloud/getting-started/repository",
      "cloud/getting-started/dcloud"
    ],
    "Guides & Tutorials": ["cloud/guides/setup"],
    "Support": [
      "cloud/support/contact",
      "cloud/support/faqs"
    ]
  },
  falconOpenSourceSidebar: {
    "Getting Started": [
      "open-source/getting-started/intro",
      "open-source/getting-started/requirements",
      "open-source/getting-started/installation",
      "open-source/getting-started/project-overview",
      "open-source/getting-started/example"
    ],
    "Falcon Client": [
      "open-source/falcon-client/basics",
      "open-source/falcon-client/configurations",
      "open-source/falcon-client/code-splitting",
      "open-source/falcon-client/data-management",
      "open-source/falcon-client/local-state-management",
      "open-source/falcon-client/internationalization",
      "open-source/falcon-client/falcon-ui",
      "open-source/falcon-client/search-and-filtering"
    ],
    "Falcon Server": [
      "open-source/falcon-server/basics",
      "open-source/falcon-server/schema-stitching",
      "open-source/falcon-server/extensions",
      "open-source/falcon-server/api-providers",
      "open-source/falcon-server/endpoints",
      "open-source/falcon-server/caching",
      "open-source/falcon-server/falcon-server-env",
      "open-source/falcon-server/falcon-server-api",
      "open-source/falcon-server/customizing-extension-api"
    ],
    Payments: [
      "open-source/payments/intro",
      "open-source/payments/api",
      "open-source/payments/plugins"
    ],
    Backend: [
      "open-source/backend/installing-magento2",
      "open-source/backend/installing-wordpress"
    ],
    Miscellaneous: [
      "open-source/miscellaneous/falcon-logger",
      "open-source/miscellaneous/config"
    ],
    Deployment: ["open-source/deployment/intro"],
    Support: [
      "open-source/support/troubleshooting",
      "open-source/support/flowcharts"
    ]
  }
};
