import "dotenv/config";

interface Config {
  port: number;
  databaseUrl: string;
}

const environmentCheck = (): Config => {
  if (process.env.NODE_ENV === "production") {
    return {
      port: parseInt(process.env.PORT!),
      databaseUrl: process.env.DATABASE_URL,
    };
  } else {
    return {
      port: 3000,
      databaseUrl: "mongodb://127.0.0.1:27017/tokopakediPlay",
    };
  }
};

export const config = environmentCheck();
