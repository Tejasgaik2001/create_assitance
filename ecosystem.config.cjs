module.exports = {

  apps: [

    {

      name: "createassistant-website",

      script: "./server.cjs",

      env: {

        NODE_ENV: "production",

        PORT: 8080,

      }

    }

  ]

}