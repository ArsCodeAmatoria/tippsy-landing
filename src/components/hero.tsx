"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t, language } = useLanguage()

  // App mockup translations
  const appTexts = {
    en: {
      discover: "Discover Tonight",
      featured: "Featured",
      cocktailBar: "Cocktail Bar",
      milesAway: "miles away",
      meetFriends: "Meet New Friends",
      likes: "Likes cocktails",
      home: "Home",
      explore: "Explore",
      friends: "Friends",
      profile: "Profile"
    },
    es: {
      discover: "Descubre Esta Noche",
      featured: "Destacado",
      cocktailBar: "Bar de Cócteles",
      milesAway: "km de distancia",
      meetFriends: "Conoce Nuevos Amigos",
      likes: "Le gustan los cócteles",
      home: "Inicio",
      explore: "Explorar",
      friends: "Amigos",
      profile: "Perfil"
    }
  }

  const app = appTexts[language]

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-6 md:max-w-lg md:pl-4 md:pr-8 md:w-1/2"
          >
            <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-5xl lg:text-6xl">
              {t("hero.title")} <br className="hidden md:inline" />
              <span className="logo-font text-6xl md:text-7xl tracking-wide">Tippsy</span>
            </h1>
            <p className="mx-auto text-center text-lg text-muted-foreground md:mx-0 md:text-left md:text-xl">
              {t("hero.subtitle")}
            </p>
            <div className="rounded-lg border border-muted bg-primary/10 p-4 text-center md:text-left">
              <p className="text-sm font-medium">
                <span className="font-bold text-primary">{t("hero.comingSoon")}</span> {t("hero.finishing")}{" "}
                <Link href="#contact" className="underline underline-offset-2 hover:text-primary">
                  {t("hero.joinWaitlist")}
                </Link>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:items-start sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="#contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6" />
                    <path d="M15 3v4" />
                    <path d="M9 3v4" />
                    <path d="M9 13h6" />
                    <path d="M9 17h6" />
                  </svg>
                  {t("hero.waitlistBtn")}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#features">{t("hero.learnMoreBtn")}</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 flex justify-center md:mt-0 md:w-1/2 md:justify-center"
          >
            <div className="relative h-[600px] w-[300px] overflow-hidden rounded-[40px] border-[14px] border-black/90 shadow-xl bg-gray-100 dark:bg-gray-900">
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black/5 dark:bg-white/5 z-10 flex justify-between items-center px-4">
                <span className="text-[10px] font-semibold">9:41</span>
                <div className="flex space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                    <path d="M18 10a6 6 0 0 0-12 0v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5Z" />
                    <path d="M5 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                    <path d="M20 6v12l-8-6z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                    <path d="M18 8V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
                    <path d="M3 12h18v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2Z" />
                  </svg>
                </div>
              </div>
              
              {/* App Interface */}
              <div className="absolute top-6 left-0 right-0 bottom-12 flex flex-col">
                {/* App Header */}
                <div className="h-14 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center">
                    <span className="logo-font text-xl">Tippsy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Main Feed */}
                <div className="flex-1 overflow-hidden p-3 space-y-3">
                  {/* Discover Section */}
                  <div className="bg-white dark:bg-black/30 rounded-xl p-3 shadow-sm">
                    <div className="text-lg font-bold mb-2">{app.discover}</div>
                    <div className="flex space-x-3 overflow-x-auto pb-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex-none w-32 h-40 rounded-lg bg-gradient-to-br from-primary/80 to-blue-400/80 flex flex-col justify-end p-2">
                          <div className="text-xs text-white/90 font-medium">{app.featured}</div>
                          <div className="text-sm text-white font-bold">{app.cocktailBar} {i}</div>
                          <div className="text-xs text-white/90">2.{i} {app.milesAway}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Match Section */}
                  <div className="bg-white dark:bg-black/30 rounded-xl p-3 shadow-sm">
                    <div className="text-lg font-bold mb-2">{app.meetFriends}</div>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="rounded-lg bg-gray-100 dark:bg-gray-800 p-2 flex items-center space-x-2">
                          <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                          <div>
                            <div className="text-sm font-medium">Alex {i}</div>
                            <div className="text-xs text-muted-foreground">{app.likes}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Tab Bar */}
                <div className="h-12 border-t border-gray-200 dark:border-gray-800 flex justify-around items-center px-4">
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-primary">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span className="text-[10px] text-primary font-medium">{app.home}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-muted-foreground">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-[10px] text-muted-foreground">{app.explore}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-muted-foreground">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span className="text-[10px] text-muted-foreground">{app.friends}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-muted-foreground">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="10" r="3" />
                      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                    </svg>
                    <span className="text-[10px] text-muted-foreground">{app.profile}</span>
                  </div>
                </div>
              </div>
              
              {/* Home Bar */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-black/80 dark:bg-white/80 rounded-full mb-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 