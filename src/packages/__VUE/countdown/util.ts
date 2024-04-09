import { padZero } from '@/packages/utils/util'

// 时间戳转换 或 获取当前时间的时间戳
export const getTimeStamp = (timeStr?: string | number) => {
  if (!timeStr) return Date.now()
  let t = timeStr
  t = +t > 0 ? +t : t.toString().replace(/-/g, '/')
  return new Date(t).getTime()
}

export const parseFormat = (time: { d: number, h: number, m: number, s: number, ms: number }, format: string) => {
  let { h, m, s, ms } = time
  const { d } = time

  if (format.includes('DD')) {
    format = format.replace('DD', padZero(d))
  } else {
    h += Number(d) * 24
  }

  if (format.includes('HH')) {
    format = format.replace('HH', padZero(h))
  } else {
    m += Number(h) * 60
  }

  if (format.includes('mm')) {
    format = format.replace('mm', padZero(m))
  } else {
    s += Number(m) * 60
  }

  if (format.includes('ss')) {
    format = format.replace('ss', padZero(s))
  } else {
    ms += Number(s) * 1000
  }

  if (format.includes('S')) {
    const msC = padZero(ms, 3).toString()

    if (format.includes('SSS')) {
      format = format.replace('SSS', msC)
    } else if (format.includes('SS')) {
      format = format.replace('SS', msC.slice(0, 2))
    } else if (format.includes('S')) {
      format = format.replace('S', msC.slice(0, 1))
    }
  }
  return format
}

export const formatRemainTime = (t: number, format: string, type?: string) => {
  const ts = t
  const rest = {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
    ms: 0
  }

  const SECOND = 1000
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE
  const DAY = 24 * HOUR

  if (ts > 0) {
    rest.d = ts >= SECOND ? Math.floor(ts / DAY) : 0
    rest.h = Math.floor((ts % DAY) / HOUR)
    rest.m = Math.floor((ts % HOUR) / MINUTE)
    rest.s = Math.floor((ts % MINUTE) / SECOND)
    rest.ms = Math.floor(ts % SECOND)
  }

  return type == 'custom' ? rest : parseFormat({ ...rest }, format)
}
