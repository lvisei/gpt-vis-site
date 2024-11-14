import React from "react"
import {
  Streamlit,
  withStreamlitConnection,
  ComponentProps,
  Theme,
} from "streamlit-component-lib"
import {
  ConfigProvider,
  GPTVis,
  VisText,
  withDefaultChartCode,
  ChartType,
  DualAxes,
  Radar,
  Histogram,
  Treemap,
  WordCloud,
} from "@antv/gpt-vis"

const components = {
  "vis-text": VisText,
  code: withDefaultChartCode({
    components: {
      [ChartType.DualAxes]: DualAxes,
      [ChartType.Radar]: Radar,
      [ChartType.Histogram]: Histogram,
      [ChartType.Treemap]: Treemap,
      [ChartType.WordCloud]: WordCloud,
    },
    loadingTimeout: 5,
    debug: false,
  }),
}

const GPTVisRender: React.FC<ComponentProps> = (props) => {
  const { theme, args } = props
  const { config, content } = args

  const style: React.CSSProperties = {}

  if (theme) {
    // Use the theme object to style our button border. Alternatively, the
    // theme style is defined in CSS vars.
    style.color = theme.textColor
    style.font = theme.font
    style.backgroundColor = theme.backgroundColor
  }

  return (
    <div style={style}>
      <ConfigProvider {...config}>
        <GPTVis components={components}>{content}</GPTVis>
      </ConfigProvider>
    </div>
  )
}

export const GPTVisRenderWrapper = withStreamlitConnection(GPTVisRender)
