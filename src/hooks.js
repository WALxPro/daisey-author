import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReducedMotion() {
  const [rm, setRm] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setRm(mq.matches)
    const fn = (e) => setRm(e.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])
  return rm
}

/**
 * Scroll-triggered entrance animations shared by page text and cards.
 * Each hook owns only its own triggers, so route changes do not interrupt
 * component-specific GSAP animations such as galleries and sliders.
 */
export function useGsapReveal(deps = []) {
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const text = gsap.utils.toArray('.reveal, .reveal-text')
    const cards = gsap.utils.toArray('.reveal-card')
    const targets = [...new Set([...text, ...cards])]
    if (!targets.length) return

    if (rm) {
      gsap.set(targets, { opacity: 1, x: 0, y: 0, scale: 1, filter: 'none' })
      return
    }

    const context = gsap.context(() => {
      const textOnly = text.filter((element) => !cards.includes(element))

      gsap.set(textOnly, { autoAlpha: 0, y: 28, filter: 'blur(5px)' })
      gsap.set(cards, { autoAlpha: 0, y: 36, scale: 0.96 })

      if (textOnly.length) {
        ScrollTrigger.batch(textOnly, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) => gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.09,
            overwrite: true,
          }),
        })
      }

      if (cards.length) {
        ScrollTrigger.batch(cards, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) => gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'back.out(1.25)',
            stagger: 0.1,
            overwrite: true,
          }),
        })
      }
    })

    ScrollTrigger.refresh()
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)
    return () => {
      window.removeEventListener('load', onLoad)
      context.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/** Animated counter (gsap-driven) that starts when visible */
export function useCountUp(target, dur = 1.4) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obj = { v: 0 }
    const st = ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () =>
        gsap.to(obj, { v: target, duration: dur, ease: 'power3.out', onUpdate: () => setVal(Math.floor(obj.v)) }),
    })
    return () => st.kill()
  }, [target, dur])
  return [ref, val]
}
