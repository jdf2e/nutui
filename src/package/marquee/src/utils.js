function insertKeyFrame (rule) {
    if (document.styleSheets && document.styleSheets.length) {
      try {
        document.styleSheets[0].insertRule(rule, 0)
      } catch (ex) {
      }
    } else {
      var style = document.createElement('style')
      style.innerHTML = rule
      document.head.appendChild(style)
    }
  }
  
  function deleteKeyFrame (ruleName) {
    var cssrules = (document.all) ? 'rules' : 'cssRules'
    var i
    if (document.styleSheets && document.styleSheets.length && document.styleSheets[0][cssrules]) {
      for (i = 0; i < document.styleSheets[0][cssrules].length; i += 1) {
        var rule = document.styleSheets[0][cssrules][i]
        if (rule.name === ruleName || rule.selectorText === '.' + ruleName) {
          document.styleSheets[0].deleteRule(i)
          break
        }
      }
    }
  }
  
  function getWidthHeight () {
    var w = window
    var d = document
    var e = d.documentElement
    var g = d.getElementsByTagName('body')[0]
    return {
      width: w.innerWidth || e.clientWidth || g.clientWidth, height: w.innerHeight || e.clientHeight || g.clientHeight
    }
  }
  
  function getTextWidth (text, font) {
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'))
    var context = canvas.getContext('2d')
    context.font = font
    var metrics = context.measureText(text)
    return metrics.width
  }
  
  export {
    insertKeyFrame,
    deleteKeyFrame,
    getWidthHeight,
    getTextWidth
  }