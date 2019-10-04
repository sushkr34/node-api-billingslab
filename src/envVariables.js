const envVariables = {
  // DB configurations
  DB_USER: process.env.DB_USER || "upnxdymgkhwibp",
  DB_PASSWORD:process.env.DB_PASSWORD || "f071307d77e74855eca293523c4fe43f2ef94eaa91901287a364519e5cc16a7b",
  DB_HOST: process.env.DB_HOST || "ec2-174-129-218-200.compute-1.amazonaws.com",
  DB_NAME: process.env.DB_NAME || "d1dqrjqspf3rtr",
  DB_SSL: process.env.DB_SSL || true,
  DB_PORT: process.env.DB_PORT || 5432,
  DB_MAX_POOL_SIZE: process.env.DB_MAX_POOL_SIZE || "5",
  //server configurations
  SERVER_PORT: process.env.SERVER_PORT || "8080",
  PORT: 8080,
	BODY_LIMIT: "100kb",
	CROS_HEADERS: ["Link"]
};
export default envVariables;
