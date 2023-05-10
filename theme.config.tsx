import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

import Image from "next/image";

import { DocsThemeConfig } from "nextra-theme-docs";

import Comment from "@/components/Comment";
import ScrollToTop from "@/components/ScrollToTop";
import Sponsor from "@/components/Sponsor";
import Twitter from "@/components/Social/Twitter";
import DarkmodeToggle from "./components/DarkmodeToggle";

import Favicon from "@/public/favicon/favicon.ico";
import AppleTouchIcon from "@/public/favicon/apple-touch-icon.png";
import ShortcutIcon from "@/public/favicon/favicon-16x16.png";
import Logo from "@/public/logo.png";
import TransparentLogo from "@/public/logo-transparent.png";
import Manifest from "@/public/favicon/manifest.json";

import { SiteMetadata } from "@/data";

const site_url = SiteMetadata.site_url;
const site_title = SiteMetadata.title;
const site_description = SiteMetadata.description;

const config: DocsThemeConfig = {
  // Banner
  banner: {
    dismissible: true,
    key: "welcome",
    text: "Welcome to What is Wiki 📑",
  },

  // Navbar
  navbar: {
    extraContent: (
      <>
        <Twitter />
        <DarkmodeToggle />
      </>
    ),
  },
  logo: (
    <>
      <Image
        src={TransparentLogo}
        alt="What is Wiki"
        width={50}
        height={50}
        style={{
          paddingBottom: "7px",
        }}
      />
      <span>
        <b>What is Wiki</b>
      </span>
      <span
        style={{
          color: "blue",
          marginLeft: "7px",
          paddingLeft: "3px",
          paddingRight: "3px",
          backgroundColor: "lightgreen",
          borderRadius: "5px",
        }}
      >
        <b>Beta</b>
      </span>
    </>
  ),
  logoLink: "/",
  project: {
    link: "https://github.com/codinasion/whatiswiki",
  },
  chat: {
    link: SiteMetadata.discord_url,
  },
  search: {
    placeholder: "What is ...",
  },

  // Footer
  footer: {
    component: <></>,
  },

  // TOC
  docsRepositoryBase: "https://github.com/codinasion/whatiswiki/blob/master",

  // SEO
  useNextSeoProps() {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    const defaultTitle = frontMatter.overrideTitle || site_title;
    const defaultDescription =
      frontMatter.overrideDescription || site_description;

    if (asPath !== "/") {
      return {
        titleTemplate: "What is %s",
        defaultTitle,
        description: defaultDescription,
      };
    }

    return {
      titleTemplate: "%s",
      defaultTitle,
      description: defaultDescription,
    };
  },
  head: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();
    const fullUrl =
      router.asPath === "/" ? site_url : `${site_url}${router.asPath}`;

    return (
      <>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href={`${Favicon.src}`} />
        <link rel="apple-touch-icon" href={`${AppleTouchIcon.src}`} />
        <link rel="shortcut icon" href={`${ShortcutIcon.src}`} />
        <link rel="manifest" href={`${Manifest}`} />

        <link rel="canonical" href={fullUrl} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@codinasion" />
        <meta name="twitter:creator" content="@codinasion" />
        <meta name="twitter:title" content={frontMatter.title || site_title} />
        <meta
          name="twitter:description"
          content={frontMatter.description || site_description}
        />
        <meta name="twitter:image" content={`${Logo.src}`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:site_name" content="What is Wiki" />
        <meta property="og:image" content={`${Logo.src}`} />
        <meta property="og:title" content={frontMatter.title || site_title} />
        <meta
          property="og:description"
          content={frontMatter.description || site_description}
        />
      </>
    );
  },

  // Dark Mode
  darkMode: true,
  primaryHue: 120,

  // Sidebar
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 10000,
  },

  // TOC
  toc: {
    float: true,
    extraContent: (
      <>
        <Sponsor />
      </>
    ),
  },

  // Navigation
  navigation: true,

  editLink: {
    text: "Edit this page on GitHub",
  },

  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath } = useRouter();

    if (asPath === "/") {
      return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString());

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        setDateString(
          timestamp.toLocaleDateString(navigator.language, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        );
      } catch (e) {
        // Ignore errors here; they get the ISO string.
        // At least one person out there has manually misconfigured navigator.language.
      }
    }, [timestamp]);

    return <>Last updated on {dateString}</>;
  },

  nextThemes: {
    defaultTheme: "dark",
  },

  main: function Main({ children }) {
    const { asPath } = useRouter();

    return (
      <>
        {children}
        {
          // Comment
          // Don't show comments on the homepage
          asPath !== "/" && <Comment key={asPath} />
        }
        {/* Scroll to top */}
        <ScrollToTop />
      </>
    );
  },

  components: {},
};

export default config;
