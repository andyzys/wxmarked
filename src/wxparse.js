const marked = require('./wxmarked.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    markdownText: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) { 
        this.setData({
          nodes: marked(newVal)
        })
      }
    }
  },
  data: {
    nodes: []
  },
})
