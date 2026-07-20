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

/** GSAP ScrollTrigger reveal for all .reveal elements (staggered per batch) */
export function useGsapReveal(deps = []) {
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = gsap.utils.toArray('.reveal')
    if (!els.length) return
    if (rm) { gsap.set(els, { opacity: 1, y: 0 }); return }
    gsap.set(els, { opacity: 0, y: 30 })
    ScrollTrigger.batch(els, {
      start: 'top 88%',
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.1, overwrite: true }),
    })
    ScrollTrigger.refresh()
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)
    return () => { window.removeEventListener('load', onLoad); ScrollTrigger.getAll().forEach((t) => t.kill()) }
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
