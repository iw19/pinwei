import React from "react"
import { useRouter } from "next/router"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"

//import * as Icons from "./components/Icons"

const config: DocsThemeConfig = {
  logo: (
    <>
      {/*<Icons.VSCode />*/}
      <span style={{ marginLeft: ".4em", flexDirection: "column" }}>
        知食分子·品味
      </span>
    </>
  ),
  head: function Head() {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const vscDoc = "知食分子·品味"
    const url =
      "https://pinwei.iw17.cc" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || vscDoc} />
        <meta
          property="og:description"
          content={frontMatter.description || vscDoc}
        />
        {/*<link rel="icon" type="image/png" href="/favicons/vscode.png" />*/}
        <meta name="theme-color" content="#000" />
      </>
    )
  },
  project: {
    link: "https://github.com/iw19/pinwei",
  },
  chat: {
    link: "https://github.com/iw19/pinwei/issues",
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    const vscDoc = "知食分子·品味"
    const sep = " | "
    const title_map = new Map([
      ["/about", "关于"],
      ["/faq", "常见问题"],
    ])
    if (asPath === "/") {
      return {
        titleTemplate: vscDoc,
      }
    } else if (title_map.has(asPath)) {
      return {
        titleTemplate: title_map.get(asPath) + sep + vscDoc,
      }
    } else {
      return {
        titleTemplate: "%s" + sep + vscDoc,
      }
    }
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "system",
  },

  docsRepositoryBase: "https://github.com/iw19/pinwei/tree/main",
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} (c){" "}
        <a href="/" target="_blank">
          iw17
        </a>
        . Powered by{" "}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    ),
  },
}

export default config
