const scs = `
const DIV_1 = styled.div.attrs({
  className: 'w-100 sans-serif',
})\`\`

const HEADER_1 = styled.header.attrs({
  className: 'w-100 pa3 ph5-ns bg-white',
})\`\`

const DIV_2 = styled.div.attrs({
  className: 'db dt-ns mw9 center w-100',
})\`\`

const DIV_3 = styled.div.attrs({
  className: 'db dtc-ns v-mid tl w-50',
})\`\`

const A_1 = styled.a.attrs({
  className: 'dib f5 f4-ns fw6 mt0 mb1 link black-70',
})\`\`

const DIV_4 = styled.div.attrs({
  className: 'dib',
})\`\`

const SMALL_1 = styled.small.attrs({
  className: 'nowrap f6 mt2 mt3-ns pr2 black-70 fw2',
})\`\`

const NAV_1 = styled.nav.attrs({
  className: 'db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns',
})\`\`

const A_2 = styled.a.attrs({
  className: 'f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib',
})\`\`

const A_3 = styled.a.attrs({
  className: 'f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dn dib-l',
})\`\`

const MAIN_1 = styled.main.attrs({
  className: 'w-100 bt b--black-10 bg-white',
})\`\`

const SECTION_1 = styled.section.attrs({
  className: 'bg-black-0125 w-100',
})\`\`

const ARTICLE_1 = styled.article.attrs({
  className: 'pb4',
})\`\`

const HEADER_2 = styled.header.attrs({
  className: 'ph3 ph5-ns w-100 bg-transparent pv3 mb4 mb5-ns bb b--black-10 overflow-auto',
})\`\`

const DIV_5 = styled.div.attrs({
  className: 'nowrap mw9 center',
})\`\`

const A_4 = styled.a.attrs({
  className: 'pv1-ns f6 fw6 dim link black-70 mr2 mr3-m mr4-l dib',
})\`\`

const A_5 = styled.a.attrs({
  className: 'pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib',
})\`\`

const DIV_6 = styled.div.attrs({
  className: 'ph3 ph5-ns',
})\`\`

const DIV_7 = styled.div.attrs({
  className: 'cf mw9 center tc-m',
})\`\`

const DIV_8 = styled.div.attrs({
  className: 'fl w-100 overflow-auto v-top',
})\`\`

const A_6 = styled.a.attrs({
  className: 'twitter bg-white-50 dim link dib mb2 br2 ph2 pb1 lh-solid v-top',
})\`\`

const SPAN_1 = styled.span.attrs({
  className: 'dib v-mid white fw6',
})\`\`

const DIV_9 = styled.div.attrs({
  className: 'pb3 pb4-ns pt4 pt5-ns mt4 black-70 fl-l w-50-l',
})\`\`

const H1_1 = styled.h1.attrs({
  className: 'f4 fw6 f1-ns lh-title measure mt0',
})\`\`

const P_1 = styled.p.attrs({
  className: 'f5 f4-ns fw4 b measure dib-m lh-copy',
})\`\`

const P_2 = styled.p.attrs({
  className: 'measure f5 f4-ns lh-copy dn',
})\`\`

const DIV_10 = styled.div.attrs({
  className: 'fl-l w-50-l tl tc-ns pt3 pt4-m pt6-l',
})\`\`

const A_7 = styled.a.attrs({
  className: 'f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline',
})\`\`

const CODE_1 = styled.code.attrs({
  className: 'f6 fw4 di',
})\`\`

const ARTICLE_2 = styled.article.attrs({
  className: 'bt b--black-10 bg-washed-blue black-70 ph3 ph5-ns pv4 pv5-ns',
})\`\`

const DIV_11 = styled.div.attrs({
  className: 'mw9 center',
})\`\`

const H1_2 = styled.h1.attrs({
  className: 'mt0 f5 f3-ns',
})\`\`

const P_3 = styled.p.attrs({
  className: 'f5 measure lh-copy',
})\`\`

const PRE_1 = styled.pre.attrs({
  className: 'pre black-70',
})\`\`

const CODE_2 = styled.code.attrs({
  className: 'code f6 dib pa2 bg-black-70 washed-green',
})\`\`

const P_4 = styled.p.attrs({
  className: 'mt4',
})\`\`

const PRE_2 = styled.pre.attrs({
  className: 'pre',
})\`\`

const H3_1 = styled.h3.attrs({
  className: 'f5 f3-ns mt4 fw6',
})\`\`

const P_5 = styled.p.attrs({
  className: 'lh-copy measure f6',
})\`\`

const DIV_12 = styled.div.attrs({
  className: 'overflow-auto',
})\`\`

const CODE_3 = styled.code.attrs({
  className: 'pre f6',
})\`\`

const SECTION_2 = styled.section.attrs({
  className: 'bt b--black-10 pv5 mt5 cf',
})\`\`

const DIV_13 = styled.div.attrs({
  className: 'fl-l w-100 w-50-l pr4-ns',
})\`\`

const H3_2 = styled.h3.attrs({
  className: 'f5 f3-ns mt0',
})\`\`

const P_6 = styled.p.attrs({
  className: 'f6 f5-ns measure lh-copy mb4 mt0',
})\`\`

const DIV_14 = styled.div.attrs({
  className: 'fl-l w-100 w-50-l',
})\`\`

const DIV_15 = styled.div.attrs({
  className: 'aspect-ratio aspect-ratio--8x5',
})\`\`

const DIV_16 = styled.div.attrs({
  className: 'aspect-ratio--object',
})\`\`

const DIV_17 = styled.div.attrs({
  className: 'tl bt b--black-10 pa3 pa5-ns bg-lightest-blue navy',
})\`\`

const H1_3 = styled.h1.attrs({
  className: 'f5 ttu tracked fw6',
})\`\`

const SECTION_3 = styled.section.attrs({
  className: 'lh-copy',
})\`\`

const DIV_18 = styled.div.attrs({
  className: 'cf',
})\`\`

const ARTICLE_3 = styled.article.attrs({
  className: 'fl pv2 w-100 w-third-l pr4-l',
})\`\`

const H2_1 = styled.h2.attrs({
  className: 'f5 f4-ns fw6 mb0',
})\`\`

const P_7 = styled.p.attrs({
  className: 'f6 f5-ns measure lh-copy mt0',
})\`\`

const ARTICLE_4 = styled.article.attrs({
  className: 'pv2 fl w-100 w-third-l ph3-l',
})\`\`

const ARTICLE_5 = styled.article.attrs({
  className: 'pv2 fl w-100 w-third-l pl4-l',
})\`\`

const H2_2 = styled.h2.attrs({
  className: 'f5 f4-ns  fw6 mb0',
})\`\`

const DIV_19 = styled.div.attrs({
  className: 'cf w-100',
})\`\`

const ARTICLE_6 = styled.article.attrs({
  className: 'pv2 fl w-100 w-third-l pl0 pr4-l',
})\`\`

const SECTION_4 = styled.section.attrs({
  className: 'cf ph3 ph5-ns pb5 bg-yellow black-70',
})\`\`

const H1_4 = styled.h1.attrs({
  className: 'fl w-100 mt5 f5 ttu tracked fw6',
})\`\`

const ARTICLE_7 = styled.article.attrs({
  className: 'pv2 fl w-100',
})\`\`

const H2_3 = styled.h2.attrs({
  className: 'f4 f1-ns fw6 mb2',
})\`\`

const P_8 = styled.p.attrs({
  className: 'f5 f4-ns measure lh-copy mt0',
})\`\`

const A_8 = styled.a.attrs({
  className: 'black dim',
})\`\`

const ARTICLE_8 = styled.article.attrs({
  className: 'pv2 fl w-100 w-50-l pr0 pr2-l',
})\`\`

const H2_4 = styled.h2.attrs({
  className: 'f4 f2-ns fw6 mb2',
})\`\`

const P_9 = styled.p.attrs({
  className: 'f5 measure lh-copy mt0',
})\`\`

const ARTICLE_9 = styled.article.attrs({
  className: 'pv2 fl w-100 w-50-l pl0 pl2-l',
})\`\`

const ARTICLE_10 = styled.article.attrs({
  className: 'pv2 fl w-100 w-50-l pr0 prl-ns',
})\`\`

const A_9 = styled.a.attrs({
  className: 'link dim near-black',
})\`\`

const P_10 = styled.p.attrs({
  className: 'mv0 f5 lh-copy measure',
})\`\`

const A_10 = styled.a.attrs({
  className: 'dim f6 db black',
})\`\`

const SECTION_5 = styled.section.attrs({
  className: 'tc pv5 bb bt b--black-10 bg-washed-blue',
})\`\`

const H3_3 = styled.h3.attrs({
  className: 'f5 fw6 ttu tracked black-70 mb4',
})\`\`

const A_11 = styled.a.attrs({
  className: 'no-underline grow pa3 br2 bg-blue white mr3 mb3 dib',
})\`\`

const A_12 = styled.a.attrs({
  className: 'no-underline grow pa3 br2 bg-blue white mr3 dib',
})\`\`

const DIV_20 = styled.div.attrs({
  className: 'ph3 ph5-ns pt5',
})\`\`

const DIV_21 = styled.div.attrs({
  className: 'mw9 center overflow-auto',
})\`\`

const H3_4 = styled.h3.attrs({
  className: 'f5 fw6 ttu tracked',
})\`\`

const P_11 = styled.p.attrs({
  className: 'lh-copy measure',
})\`\`

const A_13 = styled.a.attrs({
  className: 'link blue underline hover-navy',
})\`\`

const H3_5 = styled.h3.attrs({
  className: 'f6 ttu fw6 mb0 mt5 bb pb2',
})\`\`

const ARTICLE_11 = styled.article.attrs({
  className: 'dt-ns dt--fixed-ns',
})\`\`

const DIV_22 = styled.div.attrs({
  className: 'dtc-ns v-mid overflow-auto',
})\`\`

const H1_5 = styled.h1.attrs({
  className: 'f1 lh-title',
})\`\`

const H2_5 = styled.h2.attrs({
  className: 'f2 lh-title',
})\`\`

const H3_6 = styled.h3.attrs({
  className: 'f3 lh-title',
})\`\`

const H4_1 = styled.h4.attrs({
  className: 'f4 lh-title',
})\`\`

const H5_1 = styled.h5.attrs({
  className: 'f5 lh-title',
})\`\`

const H6_1 = styled.h6.attrs({
  className: 'f6 lh-title',
})\`\`

const DIV_23 = styled.div.attrs({
  className: 'dtc-ns v-mid',
})\`\`

const PRE_3 = styled.pre.attrs({
  className: 'ba b--black-05  pa2 overflow-auto',
})\`\`

const CODE_4 = styled.code.attrs({
  className: 'db f6 pa3 lh-copy',
})\`\`

const ARTICLE_12 = styled.article.attrs({
  className: 'mt5',
})\`\`

const H3_7 = styled.h3.attrs({
  className: 'f6 ttu fw6 mt0 mb3 bb pb2',
})\`\`

const DIV_24 = styled.div.attrs({
  className: 'dt-ns dt--fixed-ns',
})\`\`

const DIV_25 = styled.div.attrs({
  className: 'dtc v-mid',
})\`\`

const P_12 = styled.p.attrs({
  className: 'i',
})\`\`

const P_13 = styled.p.attrs({
  className: 'b',
})\`\`

const P_14 = styled.p.attrs({
  className: 'underline',
})\`\`

const P_15 = styled.p.attrs({
  className: 'strike',
})\`\`

const P_16 = styled.p.attrs({
  className: 'ttc',
})\`\`

const P_17 = styled.p.attrs({
  className: 'ttu',
})\`\`

const H4_2 = styled.h4.attrs({
  className: 'f6 mb0 mt3',
})\`\`

const P_18 = styled.p.attrs({
  className: 'serif',
})\`\`

const P_19 = styled.p.attrs({
  className: 'athelas',
})\`\`

const P_20 = styled.p.attrs({
  className: 'athelas ttu',
})\`\`

const P_21 = styled.p.attrs({
  className: 'georgia',
})\`\`

const P_22 = styled.p.attrs({
  className: 'georgia ttu',
})\`\`

const P_23 = styled.p.attrs({
  className: 'garamond',
})\`\`

const P_24 = styled.p.attrs({
  className: 'garamond ttu',
})\`\`

const P_25 = styled.p.attrs({
  className: 'baskerville',
})\`\`

const P_26 = styled.p.attrs({
  className: 'baskerville ttu',
})\`\`

const P_27 = styled.p.attrs({
  className: 'calisto',
})\`\`

const P_28 = styled.p.attrs({
  className: 'calisto ttu',
})\`\`

const P_29 = styled.p.attrs({
  className: 'sans-serif',
})\`\`

const P_30 = styled.p.attrs({
  className: 'sans-serif ttu',
})\`\`

const P_31 = styled.p.attrs({
  className: 'helvetica',
})\`\`

const P_32 = styled.p.attrs({
  className: 'helvetica ttu',
})\`\`

const P_33 = styled.p.attrs({
  className: 'avenir',
})\`\`

const P_34 = styled.p.attrs({
  className: 'avenir ttu',
})\`\`

const P_35 = styled.p.attrs({
  className: 'code',
})\`\`

const P_36 = styled.p.attrs({
  className: 'code ttu',
})\`\`

const DIV_26 = styled.div.attrs({
  className: 'dtc v-mid f6',
})\`\`

const H4_3 = styled.h4.attrs({
  className: 'mt4 fw6 f6',
})\`\`

const P_37 = styled.p.attrs({
  className: 'measure-wide lh-copy',
})\`\`

const P_38 = styled.p.attrs({
  className: 'measure lh-copy',
})\`\`

const P_39 = styled.p.attrs({
  className: 'measure-narrow lh-copy',
})\`\`

const H3_8 = styled.h3.attrs({
  className: 'f6 ttu fw6 mt0 bb pb2',
})\`\`

const SECTION_6 = styled.section.attrs({
  className: 'cf w-100 pv3 f6 ph3 ph4-ns',
})\`\`

const DIV_27 = styled.div.attrs({
  className: 'mw9 center ph3-ns',
})\`\`

const DIV_28 = styled.div.attrs({
  className: 'ph2-ns',
})\`\`

const DIV_29 = styled.div.attrs({
  className: 'fl w-100 pa2',
})\`\`

const DIV_30 = styled.div.attrs({
  className: 'outline bg-white tc pv4',
})\`\`

const DIV_31 = styled.div.attrs({
  className: 'fl w-90 pa2',
})\`\`

const DIV_32 = styled.div.attrs({
  className: 'fl w-10 pa2',
})\`\`

const DIV_33 = styled.div.attrs({
  className: 'outline bg-white tc pv4 truncate no-wrap',
})\`\`

const DIV_34 = styled.div.attrs({
  className: 'fl w-80 pa2',
})\`\`

const DIV_35 = styled.div.attrs({
  className: 'fl w-20 pa2',
})\`\`

const DIV_36 = styled.div.attrs({
  className: 'fl w-75 pa2',
})\`\`

const DIV_37 = styled.div.attrs({
  className: 'fl w-25 pa2',
})\`\`

const DIV_38 = styled.div.attrs({
  className: 'fl w-70 pa2',
})\`\`

const DIV_39 = styled.div.attrs({
  className: 'fl w-30 pa2',
})\`\`

const DIV_40 = styled.div.attrs({
  className: 'fl w-60 pa2',
})\`\`

const DIV_41 = styled.div.attrs({
  className: 'fl w-40 pa2',
})\`\`

const DIV_42 = styled.div.attrs({
  className: 'fl w-50 pa2',
})\`\`

const DIV_43 = styled.div.attrs({
  className: 'fl w-third pa2',
})\`\`

const DIV_44 = styled.div.attrs({
  className: 'outline bg-white tc pv4 truncate w-100 no-wrap',
})\`\`

const DIV_45 = styled.div.attrs({
  className: 'fl w-two-thirds pa2',
})\`\`

const DIV_46 = styled.div.attrs({
  className: 'dtc-ns v-mid pr4-ns',
})\`\`

const TABLE_1 = styled.table.attrs({
  className: 'border-collapse w-100',
})\`\`

const TBODY_1 = styled.tbody.attrs({
  className: 'black-60 f6',
})\`\`

const TD_1 = styled.td.attrs({
  className: 'bb b--black-05 bg-dark-red pa4',
})\`\`

const TD_2 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b dark-red',
})\`\`

const TD_3 = styled.td.attrs({
  className: 'bb b--black-05',
})\`\`

const TD_4 = styled.td.attrs({
  className: 'bb b--black-05 bg-red pa4',
})\`\`

const TD_5 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b red',
})\`\`

const TD_6 = styled.td.attrs({
  className: 'bb b--black-05 bg-light-red pa4',
})\`\`

const TD_7 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b light-red',
})\`\`

const TD_8 = styled.td.attrs({
  className: 'bb b--black-05 bg-orange pa4',
})\`\`

const TD_9 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b orange',
})\`\`

const TD_10 = styled.td.attrs({
  className: 'bb b--black-05 bg-gold pa4',
})\`\`

const TD_11 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b gold',
})\`\`

const TD_12 = styled.td.attrs({
  className: 'bb b--black-05 bg-yellow pa4',
})\`\`

const TD_13 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b yellow',
})\`\`

const TD_14 = styled.td.attrs({
  className: 'bb b--black-05 bg-light-yellow pa4',
})\`\`

const TD_15 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b light-yellow',
})\`\`

const TD_16 = styled.td.attrs({
  className: 'bb b--black-05 bg-purple pa4',
})\`\`

const TD_17 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b purple',
})\`\`

const TD_18 = styled.td.attrs({
  className: 'bb b--black-05 bg-light-purple pa4',
})\`\`

const TD_19 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b light-purple',
})\`\`

const TD_20 = styled.td.attrs({
  className: 'bb b--black-05 bg-dark-pink pa4',
})\`\`

const TD_21 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b dark-pink',
})\`\`

const TD_22 = styled.td.attrs({
  className: 'bb b--black-05 bg-hot-pink pa4',
})\`\`

const TD_23 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b hot-pink',
})\`\`

const TD_24 = styled.td.attrs({
  className: 'bb b--black-05 bg-pink pa4',
})\`\`

const TD_25 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b pink',
})\`\`

const TD_26 = styled.td.attrs({
  className: 'bb b--black-05 bg-light-pink pa4',
})\`\`

const TD_27 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b light-pink',
})\`\`

const TD_28 = styled.td.attrs({
  className: 'bb b--black-05 bg-dark-green pa4',
})\`\`

const TD_29 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b dark-green',
})\`\`

const TD_30 = styled.td.attrs({
  className: 'bb b--black-05 bg-green pa4',
})\`\`

const TD_31 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b green',
})\`\`

const TD_32 = styled.td.attrs({
  className: 'bb b--black-05 bg-light-green pa4',
})\`\`

const TD_33 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b light-green',
})\`\`

const TD_34 = styled.td.attrs({
  className: 'bb b--black-05 bg-navy pa4',
})\`\`

const TD_35 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b navy',
})\`\`

const TD_36 = styled.td.attrs({
  className: 'bb b--black-05 bg-dark-blue pa4',
})\`\`

const TD_37 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b dark-blue',
})\`\`

const TD_38 = styled.td.attrs({
  className: 'bb b--black-05 bg-blue pa4',
})\`\`

const TD_39 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b blue',
})\`\`

const TD_40 = styled.td.attrs({
  className: 'bb b--black-05 bg-light-blue pa4',
})\`\`

const TD_41 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b light-blue',
})\`\`

const TD_42 = styled.td.attrs({
  className: 'bb b--black-05 bg-lightest-blue pa4',
})\`\`

const TD_43 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b lightest-blue',
})\`\`

const TD_44 = styled.td.attrs({
  className: 'bb b--black-05 bg-washed-blue pa4',
})\`\`

const TD_45 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b washed-blue',
})\`\`

const TD_46 = styled.td.attrs({
  className: 'bb b--black-05 bg-washed-green pa4',
})\`\`

const TD_47 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b washed-green',
})\`\`

const TD_48 = styled.td.attrs({
  className: 'bb b--black-05 bg-washed-yellow pa4',
})\`\`

const TD_49 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b washed-yellow',
})\`\`

const TD_50 = styled.td.attrs({
  className: 'bb b--black-05 bg-washed-red pa4',
})\`\`

const TD_51 = styled.td.attrs({
  className: 'bb b--black-05 ph4 f4 b washed-red',
})\`\`

const PRE_4 = styled.pre.attrs({
  className: 'ba b--black-05 pa2 overflow-auto',
})\`\`

const CODE_5 = styled.code.attrs({
  className: 'db f6 ph3 lh-copy',
})\`\`

const DIV_47 = styled.div.attrs({
  className: 'ba db mw5 pa3 bg-black-025 mb3 bg-near-white',
})\`\`

const DIV_48 = styled.div.attrs({
  className: 'bt db mw5 pa3 bg-black-025 mb3 bg-near-white',
})\`\`

const DIV_49 = styled.div.attrs({
  className: 'br db mw5 pa3 bg-black-025 mb3 bg-near-white',
})\`\`

const DIV_50 = styled.div.attrs({
  className: 'bb db mw5 pa3 bg-black-025 mb3 bg-near-white',
})\`\`

const DIV_51 = styled.div.attrs({
  className: 'bl db mw5 pa3 bg-black-025 mb3 bg-near-white',
})\`\`

const DIV_52 = styled.div.attrs({
  className: 'bn db mw5 pa3 bg-black-025 mb3 bg-near-white',
})\`\`

const DIV_53 = styled.div.attrs({
  className: 'ba b--dotted db mw5 pa3 mb3',
})\`\`

const DIV_54 = styled.div.attrs({
  className: 'ba b--dashed db mw5 pa3 mb3',
})\`\`

const DIV_55 = styled.div.attrs({
  className: 'ba b--solid db mw5 pa3 mb3',
})\`\`

const DIV_56 = styled.div.attrs({
  className: 'ba b--none db mw5 pa3 mb3',
})\`\`

const DIV_57 = styled.div.attrs({
  className: 'bt db mw5 mb4 bg-near-white',
})\`\`

const DIV_58 = styled.div.attrs({
  className: 'bt bw1 db mw5 mb4 bg-near-white',
})\`\`

const DIV_59 = styled.div.attrs({
  className: 'bt bw2 db mw5 mb4 bg-near-white',
})\`\`

const DIV_60 = styled.div.attrs({
  className: 'bt bw3 db mw5 mb4 bg-near-white',
})\`\`

const DIV_61 = styled.div.attrs({
  className: 'bt bw4 db mw5 mb4 bg-near-white',
})\`\`

const DIV_62 = styled.div.attrs({
  className: 'bt bw5 db mw5 mb4 bg-near-white',
})\`\`

const DIV_63 = styled.div.attrs({
  className: 'dtc-ns v-mid pr4',
})\`\`

const DIV_64 = styled.div.attrs({
  className: 'bt black b--black db pt2 pb2 mb3',
})\`\`

const DIV_65 = styled.div.attrs({
  className: 'bt black-90 b--black-90 db pt2 pb2 mb3',
})\`\`

const DIV_66 = styled.div.attrs({
  className: 'bt black-80 b--black-80 db pt2 pb2 mb3',
})\`\`

const DIV_67 = styled.div.attrs({
  className: 'bt black-70 b--black-70 db pt2 pb2 mb3',
})\`\`

const DIV_68 = styled.div.attrs({
  className: 'bt black-60 b--black-60 db pt2 pb2 mb3',
})\`\`

const DIV_69 = styled.div.attrs({
  className: 'bt black-50 b--black-50 db pt2 pb2 mb3',
})\`\`

const DIV_70 = styled.div.attrs({
  className: 'bt black-40 b--black-40 db pt2 pb2 mb3',
})\`\`

const DIV_71 = styled.div.attrs({
  className: 'bt black-30 b--black-30 db pt2 pb2 mb3',
})\`\`

const DIV_72 = styled.div.attrs({
  className: 'bt black-20 b--black-20 db pt2 pb2 mb3',
})\`\`

const DIV_73 = styled.div.attrs({
  className: 'bt black-10 b--black-10 db pt2 pb2 mb3',
})\`\`

const DIV_74 = styled.div.attrs({
  className: 'bt black-05 b--black-05 db pt2 pb2 mb3',
})\`\`

const DIV_75 = styled.div.attrs({
  className: 'bt black-025 b--black-025 db pt2 pb2 mb3',
})\`\`

const DIV_76 = styled.div.attrs({
  className: 'bt black-0125 b--black-0125 db pt2 pb2 mb3',
})\`\`

const DIV_77 = styled.div.attrs({
  className: 'bt near-black b--near-black db pt2 pb2 mb3',
})\`\`

const DIV_78 = styled.div.attrs({
  className: 'bt dark-gray b--dark-gray db pt2 pb2 mb3',
})\`\`

const DIV_79 = styled.div.attrs({
  className: 'bt mid-gray b--mid-gray db pt2 pb2 mb3',
})\`\`

const DIV_80 = styled.div.attrs({
  className: 'bt gray b--gray db pt2 pb2 mb3',
})\`\`

const DIV_81 = styled.div.attrs({
  className: 'bg-black pa2 db',
})\`\`

const DIV_82 = styled.div.attrs({
  className: 'bt silver silver b--silver db pt2 pb2 mb3',
})\`\`

const DIV_83 = styled.div.attrs({
  className: 'bt light-silver b--light-silver db pt2 pb2 mb3',
})\`\`

const DIV_84 = styled.div.attrs({
  className: 'bt light-gray b--light-gray db pt2 pb2 mb3',
})\`\`

const DIV_85 = styled.div.attrs({
  className: 'bt near-white b--near-white db pt2 pb2 mb3',
})\`\`

const DIV_86 = styled.div.attrs({
  className: 'bt white b--white db pt2 pb2 mb3',
})\`\`

const DIV_87 = styled.div.attrs({
  className: 'bt white-90 b--white-90 db pt2 pb2 mb3',
})\`\`

const DIV_88 = styled.div.attrs({
  className: 'bt white-80 b--white-80 db pt2 pb2 mb3',
})\`\`

const DIV_89 = styled.div.attrs({
  className: 'bt white-70 b--white-70 db pt2 pb2 mb3',
})\`\`

const DIV_90 = styled.div.attrs({
  className: 'bt white-60 b--white-60 db pt2 pb2 mb3',
})\`\`

const DIV_91 = styled.div.attrs({
  className: 'bt white-50 b--white-50 db pt2 pb2 mb3',
})\`\`

const DIV_92 = styled.div.attrs({
  className: 'bt white-40 b--white-40 db pt2 pb2 mb3',
})\`\`

const DIV_93 = styled.div.attrs({
  className: 'bt white-30 b--white-30 db pt2 pb2 mb3',
})\`\`

const DIV_94 = styled.div.attrs({
  className: 'bt white-20 b--white-20 db pt2 pb2 mb3',
})\`\`

const DIV_95 = styled.div.attrs({
  className: 'bt white-10 b--white-10 db pt2 pb2 mb3',
})\`\`

const DIV_96 = styled.div.attrs({
  className: 'bt white-05 b--white-05 db pt2 pb2 mb3',
})\`\`

const DIV_97 = styled.div.attrs({
  className: 'bt white-025 b--white-025 db pt2 pb2 mb3',
})\`\`

const DIV_98 = styled.div.attrs({
  className: 'bt white-0125 b--white-0125 db pt2 pb2 mb3',
})\`\`

const DIV_99 = styled.div.attrs({
  className: 'bt dark-red b--dark-red db pt2 pb2 mb3',
})\`\`

const DIV_100 = styled.div.attrs({
  className: 'bt red b--red db pt2 pb2 mb3',
})\`\`

const DIV_101 = styled.div.attrs({
  className: 'bt orange b--orange db pt2 pb2 mb3',
})\`\`

const DIV_102 = styled.div.attrs({
  className: 'bt gold b--gold db pt2 pb2 mb3',
})\`\`

const DIV_103 = styled.div.attrs({
  className: 'bt yellow b--yellow db pt2 pb2 mb3',
})\`\`

const DIV_104 = styled.div.attrs({
  className: 'bt purple b--purple db pt2 pb2 mb3',
})\`\`

const DIV_105 = styled.div.attrs({
  className: 'bt light-purple b--light-purple db pt2 pb2 mb3',
})\`\`

const DIV_106 = styled.div.attrs({
  className: 'bt hot-pink b--hot-pink db pt2 pb2 mb3',
})\`\`

const DIV_107 = styled.div.attrs({
  className: 'bt dark-pink b--dark-pink db pt2 pb2 mb3',
})\`\`

const DIV_108 = styled.div.attrs({
  className: 'bt pink b--pink db pt2 pb2 mb3',
})\`\`

const DIV_109 = styled.div.attrs({
  className: 'bt dark-green b--dark-green db pt2 pb2 mb3',
})\`\`

const DIV_110 = styled.div.attrs({
  className: 'bt green b--green db pt2 pb2 mb3',
})\`\`

const DIV_111 = styled.div.attrs({
  className: 'bt navy b--navy db pt2 pb2 mb3',
})\`\`

const DIV_112 = styled.div.attrs({
  className: 'bt dark-blue b--dark-blue db pt2 pb2 mb3',
})\`\`

const DIV_113 = styled.div.attrs({
  className: 'bt blue b--blue db pt2 pb2 mb3',
})\`\`

const DIV_114 = styled.div.attrs({
  className: 'bt light-blue b--light-blue db pt2 pb2 mb3',
})\`\`

const DIV_115 = styled.div.attrs({
  className: 'bt lightest-blue b--lightest-blue db pt2 pb2 mb3',
})\`\`

const DIV_116 = styled.div.attrs({
  className: 'bt washed-blue b--washed-blue db pt2 pb2 mb3',
})\`\`

const DIV_117 = styled.div.attrs({
  className: 'bt washed-green b--washed-green db pt2 pb2 mb3',
})\`\`

const DIV_118 = styled.div.attrs({
  className: 'bt washed-yellow b--washed-yellow db pt2 pb2 mb3',
})\`\`

const DIV_119 = styled.div.attrs({
  className: 'bt light-pink b--light-pink db pt2 pb2 mb3',
})\`\`

const DIV_120 = styled.div.attrs({
  className: 'bt light-yellow b--light-yellow db pt2 pb2 mb3',
})\`\`

const DIV_121 = styled.div.attrs({
  className: 'bt light-red b--light-red db pt2 pb2 mb3',
})\`\`

const DIV_122 = styled.div.attrs({
  className: 'bt transparent b--transparent db pt2 pb2 mb3',
})\`\`

const DIV_123 = styled.div.attrs({
  className: 'ba dib ph4 pv3 mb4  br1',
})\`\`

const DIV_124 = styled.div.attrs({
  className: 'ba dib ph4 pv3 mb4  br2',
})\`\`

const DIV_125 = styled.div.attrs({
  className: 'ba dib ph4 pv3 mb4  br3',
})\`\`

const DIV_126 = styled.div.attrs({
  className: 'ba dib ph4 pv3 mb4  br4',
})\`\`

const DIV_127 = styled.div.attrs({
  className: 'dt dt--fixed',
})\`\`

const DIV_128 = styled.div.attrs({
  className: 'ba dib mb4 br-100 h3 w3 pa4 tc',
})\`\`

const DIV_129 = styled.div.attrs({
  className: 'ba dib mb4 ph4 pv3  br-pill',
})\`\`

const DIV_130 = styled.div.attrs({
  className: 'ba br--bottom dib ph4 pv3 mb4 br3',
})\`\`

const DIV_131 = styled.div.attrs({
  className: 'ba br--top dib ph4 pv3 mb4 br3',
})\`\`

const DIV_132 = styled.div.attrs({
  className: 'ba br--left dib ph4 pv3 mb4 br3',
})\`\`

const DIV_133 = styled.div.attrs({
  className: 'ba br--right dib ph4 pv3 mb4 br3',
})\`\`

const DIV_134 = styled.div.attrs({
  className: 'pa3 bg-black mb3 white grow pointer',
})\`\`

const DIV_135 = styled.div.attrs({
  className: 'pa3 bg-black mb3 white dim pointer',
})\`\`

const SECTION_7 = styled.section.attrs({
  className: 'bg-white black-70 bt b--black-10',
})\`\`

const DIV_136 = styled.div.attrs({
  className: 'ph3 ph5-ns pt6 mb6',
})\`\`

const H3_9 = styled.h3.attrs({
  className: 'f6 fw6 mt0 mb4 tc ttu tracked',
})\`\`

const DIV_137 = styled.div.attrs({
  className: 'dt dt--fixed mw6 mw7-l center',
})\`\`

const DIV_138 = styled.div.attrs({
  className: 'dtc pa2 pa3-l',
})\`\`

const IMG_1 = styled.img.attrs({
  className: 'br2 db w-100',
})\`\`

const SECTION_8 = styled.section.attrs({
  className: 'bg-green black-80 pv5 pv6-ns bb bt b--black-10',
})\`\`

const DIV_139 = styled.div.attrs({
  className: 'center mw9',
})\`\`

const H3_10 = styled.h3.attrs({
  className: 'f5 fw6 ttu tracke',
})\`\`

const DIV_140 = styled.div.attrs({
  className: 'cf w-100 center mw9',
})\`\`

const BLOCKQUOTE_1 = styled.blockquote.attrs({
  className: 'fl w-100 mh0 mb4 mb5-ns border-box pb5 bb b--black-50',
})\`\`

const P_40 = styled.p.attrs({
  className: 'f4 f2-m mt0 db fl w-100 f-subheadline-l lh-copy lh-title-l measure mb4 fw6',
})\`\`

const P_41 = styled.p.attrs({
  className: 'fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l',
})\`\`

const P_42 = styled.p.attrs({
  className: 'fl w-100 w-50-l mh0 mt0 pl0 pl3-l measure lh-copy f5 f4-l',
})\`\`

const CITE_1 = styled.cite.attrs({
  className: 'fl w-100 mt2 f5 f4-m f3-l fs-normal',
})\`\`

const SPAN_2 = styled.span.attrs({
  className: 'fw6',
})\`\`

const SPAN_3 = styled.span.attrs({
  className: 'db f5',
})\`\`

const BLOCKQUOTE_2 = styled.blockquote.attrs({
  className: 'fl w-100 ph0 border-box mh0 mb4 mb5-ns pb5 bb b--black-50',
})\`\`

const P_43 = styled.p.attrs({
  className: 'f3 f1-ns measure fw7 lh-title mt0',
})\`\`

const CITE_2 = styled.cite.attrs({
  className: 'mtw f5 f4-m f3-l fs-normal',
})\`\`

const A_14 = styled.a.attrs({
  className: 'link black-70 dim',
})\`\`

const A_15 = styled.a.attrs({
  className: 'link dim black-80 underline',
})\`\`

const BLOCKQUOTE_3 = styled.blockquote.attrs({
  className: 'fl w-100 ph0 border-box mh0 pb5',
})\`\`

const FOOTER_1 = styled.footer.attrs({
  className: 'bg-white black-70 ph3 ph5-ns pv5 pv6-ns bt b--black-10',
})\`\`

const DIV_141 = styled.div.attrs({
  className: 'mb5 lh-copy',
})\`\`

const A_16 = styled.a.attrs({
  className: 'black-70 link hover-blue b dib mr3 mb3',
})\`\`

const ARTICLE_13 = styled.article.attrs({
  className: 'v-top',
})\`\`

const A_17 = styled.a.attrs({
  className: 'twitter bg-white-50 link dib dim br2 ph2 pb1 lh-solid v-top',
})\`\`

const DIV_142 = styled.div.attrs({
  className: 'mt4',
})\`\`

const A_18 = styled.a.attrs({
  className: 'ba black-70 no-underline grow br2 b inline-flex items-center mr3 mb3 pv2 ph3',
})\`\`

const DIV_143 = styled.div.attrs({
  className: 'w2 pv1 pr2',
})\`\`

const DIV_144 = styled.div.attrs({
  className: 'dib w2 pv1 pr2',
})\`\`

const A_19 = styled.a.attrs({
  className: 'ba br2 black-70 no-underline grow b inline-flex items-center mb3 pv2 ph3',
})\`\`

const P_44 = styled.p.attrs({
  className: 'f6 measure copy lh-copy',
})\`\`

const DIV_145 = styled.div.attrs({
  className: 'pt4 cf mw5',
})\`\`

const SMALL_2 = styled.small.attrs({
  className: 'f6 measure db lh-copy mt5',
})\`\`
`

let all_rules = Array.from(document.styleSheets)
  .reduce((a, sheet) => [...a, ...Array.from(sheet.cssRules)], [])
  .reduce((a, rule) => [...a, ...rule.cssRules ? Array.from(rule.cssRules) : [rule]], [])


let last_name, last_tag
let sc_classes = {}
let classes_to_rules = {}
let classes_to_css = {}
scs.replace(/const ([\w\d_]+)|styled.(\w+).attrs|className: '([^']+)/g, (_, name, tag, classes) => {
  if (name) return last_name = name
  if (tag) return last_tag = tag
  const split_classes = classes.split(/\s+/)

  sc_classes[last_name] = { split_classes, tag: last_tag }
  split_classes.forEach(cls => {
    if (classes_to_rules[cls]) return

    classes_to_rules[cls] = all_rules.filter(rule =>
      rule.selectorText.match(new RegExp(`\\.${cls}[ ,:]|\\.${cls}$`))
    )
  })
})

Object.keys(classes_to_rules).forEach(cls => {
  const rules = classes_to_rules[cls]
  if (!rules) return // Classnames that don't match anything

  Array.from(rules).forEach(rule => {
    const match = rule.cssText.match(new RegExp(`${cls}[^\{]+\{ +(.*) +\}`))
    if (!match) {
      console.log(cls, rule)
      return
    } else {
      const [_, chunk] = match
      const selectors = rule.selectorText.trim().split(/\s*,\s+/)
        .filter(s => s.match(new RegExp('\\.' + cls)))
        .map(s => s.replace(new RegExp('\\.' + cls, 'g'), '&'))
        .join(', ')
      const existing = classes_to_css[cls] || ''
      const css = selectors === '&' ? chunk : `${selectors} { ${ chunk } }`
      classes_to_css[cls] = `${existing ? existing + ' ' : ''}${
        rule.parentRule ? `@media ${ rule.parentRule.conditionText } { ${css} }` : css
      }`
    }
  })
})


console.log(Object.keys(classes_to_css)
  .map(cls => `const ${cls.replace(/-/g,'_')} = \`${classes_to_css[cls]}\``)
  .join('\n'))

console.log(Object.keys(sc_classes).map(name => {
  const { split_classes, tag } = sc_classes[name]
  return `const ${name} = styled.${tag}\`\n${
    split_classes
      .filter(cls => classes_to_css[cls] )
      .map(cls => `  \${ ${cls.replace(/-/g,'_') } }`)
      .join('\n')
  }\n\`\n`
}).join('\n'))

/* For sc-inline */
Object.keys(sc_classes).map(name => {
  const { split_classes, tag } = sc_classes[name]
  return `const ${name} = styled.${tag}\`\n${
    split_classes
      .filter(cls => classes_to_css[cls])
      .map(cls => classes_to_css[cls])
      .join('\n')
  }\n\`\n`
}).join('\n')
