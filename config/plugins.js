module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
      sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
    },
  },
  documentation: {
    config: {
      "x-strapi-config": {
        plugins: ["menus", "upload", "users-permissions"],
      },
    },
  },

  "location-field": {
    enabled: true,
    config: {
      fields: ["photo", "rating"], // optional
      googleMapsApiKey: "your google api key", //You need to enable "Autocomplete API" and "Places API" in your Google Cloud Console
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "10.100.56.56",
        port: 25,
        ignoreTLS: true,
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
});
