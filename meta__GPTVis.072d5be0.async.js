"use strict";(self.webpackChunk_antv_gpt_vis=self.webpackChunk_antv_gpt_vis||[]).push([[5755],{63901:function(m,t,n){var o;n.r(t),n.d(t,{demos:function(){return h}});var y=n(90228),s=n.n(y),f=n(87999),p=n.n(f),a=n(75271),c=n(18158),h={"gptvis-demo-default":{component:a.memo(a.lazy(function(){return n.e(9639).then(n.bind(n,29417))})),asset:{type:"BLOCK",id:"gptvis-demo-default",refAtomIds:["GPTVis"],dependencies:{"index.tsx":{type:"FILE",value:n(82883).Z},"@antv/gpt-vis":{type:"NPM",value:"0.2.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@antv/gpt-vis":c,react:o||(o=n.t(a,2))},renderOpts:{compile:function(){var i=p()(s()().mark(function l(){var r,u=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(1390).then(n.bind(n,81390));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,u));case 3:case"end":return e.stop()}},l)}));function d(){return i.apply(this,arguments)}return d}()}},"gptvis-demo-tag":{component:a.memo(a.lazy(function(){return n.e(9639).then(n.bind(n,22365))})),asset:{type:"BLOCK",id:"gptvis-demo-tag",refAtomIds:["GPTVis"],dependencies:{"index.tsx":{type:"FILE",value:n(22318).Z},"@antv/gpt-vis":{type:"NPM",value:"0.2.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@antv/gpt-vis":c,react:o||(o=n.t(a,2))},renderOpts:{compile:function(){var i=p()(s()().mark(function l(){var r,u=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(1390).then(n.bind(n,81390));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,u));case 3:case"end":return e.stop()}},l)}));function d(){return i.apply(this,arguments)}return d}()}},"gptvis-demo-code":{component:a.memo(a.lazy(function(){return n.e(9639).then(n.bind(n,87447))})),asset:{type:"BLOCK",id:"gptvis-demo-code",refAtomIds:["GPTVis"],dependencies:{"index.tsx":{type:"FILE",value:n(1097).Z},"@antv/gpt-vis":{type:"NPM",value:"0.2.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@antv/gpt-vis":c,react:o||(o=n.t(a,2))},renderOpts:{compile:function(){var i=p()(s()().mark(function l(){var r,u=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(1390).then(n.bind(n,81390));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,u));case 3:case"end":return e.stop()}},l)}));function d(){return i.apply(this,arguments)}return d}()}}}},23499:function(m,t,n){n.r(t),n.d(t,{texts:function(){return o}});const o=[{value:"GPTVis \u534F\u8BAE\u7684 Markdown \u6E32\u67D3\u5668\uFF0C\u57FA\u4E8E Markdown \u8BED\u6CD5\u6269\u5C55 ",paraId:0,tocIndex:0},{value:"vis-chart",paraId:0,tocIndex:0},{value:" \u8BED\u6CD5\u5757\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6E32\u67D3\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"GPTVis",paraId:1,tocIndex:1},{value:" \u7EC4\u4EF6\u5185\u7F6E\u4E86",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u7684\u56FE\u8868",paraId:1,tocIndex:1},{value:"\uFF0C\u63A5\u5165\u7B80\u5355",paraId:1,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u4EE3\u7801\u5757\u6E32\u67D3\uFF0C",paraId:2,tocIndex:3},{value:"GPTVisLite",paraId:2,tocIndex:3},{value:" \u4E0D\u5185\u7F6E\u56FE\u8868\u7EC4\u4EF6\uFF0C\u4F7F\u7528\u56FE\u8868\u7EC4\u4EF6\u9700\u8981\u6CE8\u518C\u3002",paraId:2,tocIndex:3},{value:"\u7EE7\u627F ",paraId:3,tocIndex:4},{value:"react-markdown",paraId:3,tocIndex:4},{value:" \u7EC4\u4EF6\u5168\u90E8\u5C5E\u6027\u3002",paraId:3,tocIndex:4}]},1097:function(m,t){t.Z=`import type { CodeBlockComponent } from '@antv/gpt-vis';
import { ChartType, GPTVisLite, Pie, withChartCode } from '@antv/gpt-vis';
import React from 'react';

/**
 * \u81EA\u5B9A\u4E49\u4EE3\u7801\u5757\u6E32\u67D3\u5668
 */
const MyUIRenderer: CodeBlockComponent = ({ children }) => {
  return <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>{children}</div>;
};
const customRenderers = { 'my-ui': MyUIRenderer };
const components = {
  code: withChartCode({
    languageRenderers: customRenderers, // register custom block renderer
    components: { [ChartType.Pie]: Pie }, // register a pie chart
  }),
};

const content = \`
\\\`\\\`\\\`my-ui
my data ...
\\\`\\\`\\\`

\\\`\\\`\\\`vis-chart
{
  "type": "pie",
  "data": [
    { "category": "\u5206\u7C7B\u4E00", "value": 27 },
    { "category": "\u5206\u7C7B\u4E8C", "value": 25 },
    { "category": "\u5206\u7C7B\u4E09", "value": 18 },
    { "category": "\u5206\u7C7B\u56DB", "value": 15 },
    { "category": "\u5206\u7C7B\u4E94", "value": 10 },
    { "category": "\u5176\u4ED6", "value": 5 }
  ]
}
\\\`\\\`\\\`
\`;
export default () => <GPTVisLite components={components}>{content}</GPTVisLite>;
`},82883:function(m,t){t.Z=`import { GPTVis } from '@antv/gpt-vis';
import React from 'react';

const content = \`# GPT-VIS \\n\\nComponents for GPTs, generative AI, and LLM projects. Not only UI Components.

\\\`\\\`\\\`vis-chart
{
  "type": "pie",
  "data": [
    { "category": "\u5206\u7C7B\u4E00", "value": 27 },
    { "category": "\u5206\u7C7B\u4E8C", "value": 25 },
    { "category": "\u5206\u7C7B\u4E09", "value": 18 },
    { "category": "\u5176\u4ED6", "value": 5 }
  ]
}
\\\`\\\`\\\`
\`;

export default () => {
  return <GPTVis>{content}</GPTVis>;
};
`},22318:function(m,t){t.Z=`import { GPTVisLite, withDefaultChartCode } from '@antv/gpt-vis';
import React from 'react';

const components = {
  // Rewrite \`a\` style
  a(props: any) {
    const { href, children } = props;
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: '#2b8afe wavy underline' }}
      >
        {children}
      </a>
    );
  },
  // Rewrite \`em\`s (\`*like so*\`) to \`i\` with a color.
  em(props: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { node, ...rest } = props;
    return (
      <b
        style={{
          background: '#f0f489',
          fontWeight: 'bold',
        }}
        {...rest}
      />
    );
  },
  code: withDefaultChartCode(),
};

const content = \`
# Haidilao's Food Delivery Revenue (2013-2022)

Here\u2019s a visualization of [Haidilao](/)'s food delivery revenue from 2013 to 2022. You can see a steady increase over the years, with notable *growth* particularly in recent years.

\\\`\\\`\\\`vis-chart
{
  "type": "line",
  "data": [{"time":2013,"value":59.3},{"time":2014,"value":64.4},{"time":2015,"value":68.9},{"time":2016,"value":74.4},{"time":2017,"value":82.7},{"time":2018,"value":91.9},{"time":2019,"value":99.1},{"time":2020,"value":101.6},{"time":2021,"value":114.4},{"time":2022,"value":121}]
}
\\\`\\\`\\\`
\`;
export default () => <GPTVisLite components={components}>{content}</GPTVisLite>;
`}}]);
