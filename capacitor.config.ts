import type { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
  appId: "com.dherediat97.foddie",
  appName: "Foddie",
  webDir: "www",
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
}

export default config
