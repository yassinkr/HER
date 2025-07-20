'use client'

import { useState, useEffect } from 'react'

export function HeroSection() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [secondLineText, setSecondLineText] = useState('')
  const [secondLineIndex, setSecondLineIndex] = useState(0)

  const firstLine = 'Achetez et vendez en'
  const secondLine = 'toute simplicité'

  useEffect(() => {
    if (currentIndex < firstLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + firstLine[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else if (!showSecondLine) {
      const timeout = setTimeout(() => {
        setShowSecondLine(true)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, firstLine.length, showSecondLine])

  useEffect(() => {
    if (showSecondLine && secondLineIndex < secondLine.length) {
      const timeout = setTimeout(() => {
        setSecondLineText(prev => prev + secondLine[secondLineIndex])
        setSecondLineIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [showSecondLine, secondLineIndex, secondLine.length])

  return (
    <div className="w-full bg-herPurple flex justify-center items-center py-16">
      <div className="w-[90%] max-w-4xl">
        <div className="mb-8">
          <svg width="258" height="112" viewBox="0 0 258 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
            <path d="M97.456 -7.62939e-06V0.255997H85.872V95.744H97.456V96H54.576V95.744H66.032V48.768H31.472V95.744H43.056V96H0.112V95.744H11.632V0.255997H0.112V-7.62939e-06H43.056V0.255997H31.472V48.512H66.032V0.255997H54.576V-7.62939e-06H97.456ZM135.596 97.28C129.537 97.28 124.14 96.1067 119.404 93.76C114.668 91.3707 110.935 87.8933 108.204 83.328C105.473 78.7627 104.108 73.1733 104.108 66.56C104.108 59.9467 105.431 54.3573 108.076 49.792C110.764 45.2267 114.433 41.7707 119.084 39.424C123.777 37.0347 129.153 35.84 135.212 35.84C141.569 35.84 146.817 37.12 150.956 39.68C155.095 42.1973 158.188 45.504 160.236 49.6C162.284 53.696 163.308 58.0693 163.308 62.72H112.684V62.464H144.236C144.236 59.6053 144.129 56.6613 143.916 53.632C143.745 50.56 143.361 47.7013 142.764 45.056C142.167 42.368 141.249 40.2133 140.012 38.592C138.817 36.928 137.217 36.096 135.212 36.096C132.993 36.096 131.159 36.928 129.708 38.592C128.257 40.2133 127.105 42.432 126.252 45.248C125.441 48.0213 124.865 51.136 124.524 54.592C124.183 58.048 124.012 61.6107 124.012 65.28C124.012 69.376 124.204 73.3013 124.588 77.056C125.015 80.8107 125.761 84.1387 126.828 87.04C127.895 89.9413 129.388 92.2453 131.308 93.952C133.228 95.616 135.681 96.448 138.668 96.448C144.812 96.448 150.039 94.6773 154.348 91.136C158.657 87.552 161.601 83.072 163.18 77.696H163.436C161.772 83.2427 158.657 87.8933 154.092 91.648C149.527 95.4027 143.361 97.28 135.596 97.28ZM196.297 67.776C196.297 63.3387 196.553 59.2 197.065 55.36C197.62 51.52 198.537 48.1493 199.817 45.248C201.14 42.304 202.932 40 205.193 38.336C207.454 36.672 210.334 35.84 213.833 35.84C216.734 35.84 219.209 36.5013 221.257 37.824C223.305 39.1467 224.862 40.8533 225.929 42.944C227.038 44.992 227.593 47.168 227.593 49.472C227.593 52.416 226.612 54.976 224.649 57.152C222.729 59.328 220.169 60.416 216.969 60.416C213.769 60.416 211.166 59.4347 209.161 57.472C207.198 55.5093 206.217 53.1627 206.217 50.432C206.217 47.2747 207.22 44.7147 209.225 42.752C211.273 40.7467 213.812 39.744 216.841 39.744C218.889 39.744 220.724 40.2133 222.345 41.152C223.966 42.048 225.225 43.2427 226.121 44.736C227.06 46.1867 227.529 47.7653 227.529 49.472H227.337C227.337 47.2107 226.804 45.0773 225.737 43.072C224.67 41.024 223.134 39.36 221.129 38.08C219.124 36.7573 216.692 36.096 213.833 36.096C210.377 36.096 207.518 36.928 205.257 38.592C203.038 40.256 201.289 42.56 200.009 45.504C198.729 48.448 197.833 51.84 197.321 55.68C196.809 59.4773 196.553 63.5093 196.553 67.776H196.297ZM196.553 37.12V95.744H205.961V96H170.313V95.744H178.633V37.376H170.313V37.12H196.553ZM257.523 95.232C257.523 101.461 255.134 105.984 250.355 108.8C246.942 110.848 244.126 111.872 241.907 111.872C241.224 111.872 240.883 111.616 240.883 111.104C240.883 110.592 241.31 110.251 242.163 110.08C249.331 108.373 252.915 104.704 252.915 99.072C252.915 95.5733 251.976 93.2267 250.099 92.032C250.099 95.1893 248.52 96.768 245.363 96.768C243.742 96.768 242.334 96.2133 241.139 95.104C240.03 93.9093 239.475 92.4587 239.475 90.752C239.475 88.5333 240.2 86.7413 241.651 85.376C243.102 83.9253 244.936 83.2 247.155 83.2C250.227 83.2 252.702 84.352 254.579 86.656C256.542 88.8747 257.523 91.7333 257.523 95.232Z" fill="black"/>
          </svg>
        </div>
        
        <div className="text-4xl md:text-6xl font-bold text-herBlack">
          <div className="mb-2">
            {currentText}
            {currentIndex < firstLine.length && (
              <span className="animate-pulse">|</span>
            )}
          </div>
          {showSecondLine && (
            <div>
              {secondLineText}
              {secondLineIndex < secondLine.length && (
                <span className="animate-pulse">|</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}