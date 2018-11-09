export default class Scroller {
  constructor(callback, options) {
    let _options = {
      top : 0,
      pullH : 0,
      loadH: 0,
      outerH : 0,
      prevTop : 0,
      startY : 0,
      offset : 100,
      fetching : false,
      hasMore: true
    }
    this.__animate = callback
    for (let key in _options) {
			this[key] = _options[key];
    }
    for (let key in options) {
			this[key] = options[key];
    }
    this.innerH = this.innerContent.clientHeight
    this.moveY = 0
  }

  initPullToRefresh(startPullCallback, arrivalFreedCallback, freedCallback) {
    this.pullStart = startPullCallback
    this.arrivalFreed = arrivalFreedCallback
    this.freed = freedCallback
  }

  initPullToInfinite(infiniteCallback) {
    this.onInfinite = infiniteCallback
  }

  doTouchStart(touches) {
    this.prevTop = this.top
    this.startY = touches[0].pageY
    this.innerH = this.innerContent.clientHeight
    this.moveY = 0
  }

  doTouchMove(touches) {
    if (this.fetching) return

    let _moveY = touches[0].pageY - this.startY
    this.moveY = _moveY
   
    let _top = this.moveY + this.prevTop
    this.__animate(_top)
    this.top = _top
    this.moveY = _moveY
    if (this.fetching) return

    let isBottom = Math.abs(_top) + this.outerH > this.innerH ? true : false
    if (_moveY > 0) {
      if (!this.enableRefresh) return
      _top >= this.offset ? this.arrivalFreed() : this.pullStart()
    } else {
      if (!isBottom || !this.hasMore || !this.enableInfinite) return
      this.fetching = true
      this.onInfinite()
    }
  }

  doTouchEnd(e) {
    this.innerH = this.innerContent.clientHeight
    let _normalEndTop = this.outerH - this.innerH
    let isBottom = Math.abs(this.top) + this.outerH >= this.innerH ? true : false
    if (this.top >= this.offset) {
      if (!this.enableRefresh) {
        this.__animate(0, this.top) 
        this.top = 0
        return
      }
      this.__animate(this.pullH, this.top)
      this.top = this.pullH
      this.freed()
      return
    }
    if (this.top < 0 && !isBottom) {
      this.__animate(this.top, this.top - this.moveY)
      return
    }
    if (this.top < 0 && isBottom) {
      if (this.outerH >= this.innerH) {
        this.__animate(0, this.top)
        this.top = 0
        return
      }
      let _h = _normalEndTop
      if (this.fetching) {
        _h = _normalEndTop - this.loadH
      }
      this.__animate(_h, this.top)
      this.top = _h
      return
    }
    this.__animate(0, this.top)
    this.top = 0
  }

  startRefresh() {
    this.fetching = true
  }

  finishedRefesh() {
    this.fetching = false
    this.__animate(0, this.top)
    this.top = 0
  }

  finishedInfinite(hasMore) {
    this.fetching = false
    this.hasMore = hasMore
  }
}
