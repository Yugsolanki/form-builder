"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Tabs } from './ui/tabs'
import { TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { MonitorSmartphone, MoonIcon, SunIcon } from 'lucide-react'

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

  if (!mounted) return null
  return (
    <Tabs defaultValue={theme}>
        <TabsList className='border border-border rounded-lg p-2 flex gap-3 bg-gray-900'>
            <TabsTrigger value='light' onClick={() => setTheme("light")}>
                <SunIcon size={24} />
            </TabsTrigger>
            <TabsTrigger value='dark' onClick={() => setTheme("dark")}>
                <MoonIcon size={24} className='rotate-90 transition-all dark:rotate-0' />
            </TabsTrigger>
            <TabsTrigger value='system' onClick={() => setTheme("system")}>
                <MonitorSmartphone size={24} />
            </TabsTrigger>
        </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher