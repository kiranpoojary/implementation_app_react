const configurations = {
  development: {
    SERVER_HOST: "192.168.0.101:3001", //"http://localhost:3200", // "192.168.0.105:3001", //
    APP_HOST: "192.168.0.101:3002", //"192.168.0.102:3001",
  },
  production: {
    SERVER_HOST: "http://api.hutech.com",
    APP_HOST: "http://hutech.com",
  },
};

function getConfig() {
  let domain = document.domain;
  let env = "development";
  switch (domain) {
    case "localhost":
      env = "development";
      break;
    case "hutech":
      env = "production";
      break;
    default:
      env = "development";
  }
  return configurations?.[env] || null;
}

export default getConfig();
