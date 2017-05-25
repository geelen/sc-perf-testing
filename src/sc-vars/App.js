import React from 'react'
import styled from 'styled-components'

const w_100 = `width: 100%;`
const sans_serif = `font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif;`
const pa3 = `padding: 1rem;`
const ph5_ns = `@media screen and (min-width: 30em) { padding-left: 4rem; padding-right: 4rem; }`
const bg_white = `background-color: rgb(255, 255, 255);`
const db = `display: block;`
const dt_ns = `@media screen and (min-width: 30em) { display: table; }`
const mw9 = `max-width: 96rem;`
const center = `margin-right: auto; margin-left: auto;`
const dtc_ns = `@media screen and (min-width: 30em) { display: table-cell; }`
const v_mid = `vertical-align: middle;`
const tl = `text-align: left;`
const w_50 = `width: 50%;`
const dib = `display: inline-block;`
const f5 = `font-size: 1rem;`
const f4_ns = `@media screen and (min-width: 30em) { font-size: 1.25rem; }`
const fw6 = `font-weight: 600;`
const mt0 = `margin-top: 0px;`
const mb1 = `margin-bottom: 0.25rem;`
const link = `text-decoration: none; &, &:active, &:focus, &:hover, &:link, &:visited { transition: color 0.15s ease-in; } &:focus { outline: currentcolor dotted 1px; }`
const black_70 = `color: rgba(0, 0, 0, 0.7);`
const nowrap = `white-space: nowrap;`
const f6 = `font-size: 0.875rem;`
const mt2 = `margin-top: 0.5rem;`
const mt3_ns = `@media screen and (min-width: 30em) { margin-top: 1rem; }`
const pr2 = `padding-right: 0.5rem;`
const fw2 = `font-weight: 200;`
const tr_ns = `@media screen and (min-width: 30em) { text-align: right; }`
const mt0_ns = `@media screen and (min-width: 30em) { margin-top: 0px; }`
const hover_blue = `&:focus, &:hover { color: rgb(53, 126, 221); }`
const mr2 = `margin-right: 0.5rem;`
const mr3_m = `@media screen and (max-width: 60em) and (min-width: 30em) { margin-right: 1rem; }`
const mr4_l = `@media screen and (min-width: 60em) { margin-right: 2rem; }`
const dn = `display: none;`
const dib_l = `@media screen and (min-width: 60em) { display: inline-block; }`
const bt = `border-top-style: solid; border-top-width: 1px;`
const b__black_10 = `border-color: rgba(0, 0, 0, 0.1);`
const pb4 = `padding-bottom: 2rem;`
const ph3 = `padding-left: 1rem; padding-right: 1rem;`
const bg_transparent = `background-color: transparent;`
const pv3 = `padding-top: 1rem; padding-bottom: 1rem;`
const mb4 = `margin-bottom: 2rem;`
const mb5_ns = `@media screen and (min-width: 30em) { margin-bottom: 4rem; }`
const bb = `border-bottom-style: solid; border-bottom-width: 1px;`
const overflow_auto = `overflow: auto;`
const pv1_ns = `@media screen and (min-width: 30em) { padding-top: 0.25rem; padding-bottom: 0.25rem; }`
const dim = `opacity: 1; &, &:focus, &:hover { transition: opacity 0.15s ease-in; } &:focus, &:hover { opacity: 0.5; } &:active { opacity: 0.8; transition: opacity 0.15s ease-out; }`
const mr1 = `margin-right: 0.25rem;`
const cf = `&::after, &::before { content: " "; display: table; } &::after { clear: both; }`
const tc_m = `@media screen and (max-width: 60em) and (min-width: 30em) { text-align: center; }`
const fl = `float: left;`
const v_top = `vertical-align: top;`
const bg_white_50 = `background-color: rgba(255, 255, 255, 0.498);`
const mb2 = `margin-bottom: 0.5rem;`
const br2 = `border-radius: 0.25rem;`
const ph2 = `padding-left: 0.5rem; padding-right: 0.5rem;`
const pb1 = `padding-bottom: 0.25rem;`
const lh_solid = `line-height: 1;`
const white = `color: rgb(255, 255, 255);`
const pb3 = `padding-bottom: 1rem;`
const pb4_ns = `@media screen and (min-width: 30em) { padding-bottom: 2rem; }`
const pt4 = `padding-top: 2rem;`
const pt5_ns = `@media screen and (min-width: 30em) { padding-top: 4rem; }`
const mt4 = `margin-top: 2rem;`
const fl_l = `@media screen and (min-width: 60em) { float: left; } @media screen and (min-width: 60em) { display: inline; }`
const w_50_l = `@media screen and (min-width: 60em) { width: 50%; }`
const f4 = `font-size: 1.25rem;`
const f1_ns = `@media screen and (min-width: 30em) { font-size: 3rem; }`
const lh_title = `line-height: 1.25;`
const measure = `max-width: 30em;`
const fw4 = `font-weight: 400;`
const b = `font-weight: 700;`
const dib_m = `@media screen and (max-width: 60em) and (min-width: 30em) { display: inline-block; }`
const lh_copy = `line-height: 1.5;`
const tc_ns = `@media screen and (min-width: 30em) { text-align: center; }`
const pt3 = `padding-top: 1rem;`
const pt4_m = `@media screen and (max-width: 60em) and (min-width: 30em) { padding-top: 2rem; }`
const pt6_l = `@media screen and (min-width: 60em) { padding-top: 8rem; }`
const f5_ns = `@media screen and (min-width: 30em) { font-size: 1rem; }`
const ba = `border-style: solid; border-width: 1px;`
const b__black_20 = `border-color: rgba(0, 0, 0, 0.2);`
const bg_blue = `background-color: rgb(53, 126, 221); background-color: rgb(0, 116, 217);`
const ph4_ns = `@media screen and (min-width: 30em) { padding-left: 2rem; padding-right: 2rem; }`
const pv2 = `padding-top: 0.5rem; padding-bottom: 0.5rem;`
const pv3_ns = `@media screen and (min-width: 30em) { padding-top: 1rem; padding-bottom: 1rem; }`
const grow = `backface-visibility: hidden; transform: translateZ(0px); transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out; &:focus, &:hover { transform: scale(1.05); } &:active { transform: scale(0.9); }`
const no_underline = `text-decoration: none;`
const di = `display: inline;`
const bg_washed_blue = `background-color: rgb(246, 255, 254);`
const pv4 = `padding-top: 2rem; padding-bottom: 2rem;`
const pv5_ns = `@media screen and (min-width: 30em) { padding-top: 4rem; padding-bottom: 4rem; }`
const f3_ns = `@media screen and (min-width: 30em) { font-size: 1.5rem; }`
const pre = `overflow: scroll; white-space: pre;`
const code = `font-family: Consolas, monaco, monospace;`
const pa2 = `padding: 0.5rem;`
const bg_black_70 = `background-color: rgba(0, 0, 0, 0.7);`
const washed_green = `color: rgb(232, 253, 245);`
const pv5 = `padding-top: 4rem; padding-bottom: 4rem;`
const mt5 = `margin-top: 4rem;`
const pr4_ns = `@media screen and (min-width: 30em) { padding-right: 2rem; }`
const aspect_ratio = `height: 0px; position: relative;`
const aspect_ratio__8x5 = `padding-bottom: 62.5%;`
const aspect_ratio__object = `position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 100%; z-index: 100;`
const pa5_ns = `@media screen and (min-width: 30em) { padding: 4rem; }`
const bg_lightest_blue = `background-color: rgb(205, 236, 255);`
const navy = `color: rgb(0, 27, 68);`
const ttu = `text-transform: uppercase;`
const tracked = `letter-spacing: 0.1em;`
const w_third_l = `@media screen and (min-width: 60em) { width: 33.3333%; }`
const pr4_l = `@media screen and (min-width: 60em) { padding-right: 2rem; }`
const mb0 = `margin-bottom: 0px;`
const ph3_l = `@media screen and (min-width: 60em) { padding-left: 1rem; padding-right: 1rem; }`
const pl4_l = `@media screen and (min-width: 60em) { padding-left: 2rem; }`
const pl0 = `padding-left: 0px;`
const pb5 = `padding-bottom: 4rem;`
const bg_yellow = `background-color: gold;`
const black = `color: rgb(0, 0, 0);`
const pr0 = `padding-right: 0px;`
const pr2_l = `@media screen and (min-width: 60em) { padding-right: 0.5rem; }`
const f2_ns = `@media screen and (min-width: 30em) { font-size: 2.25rem; }`
const pl2_l = `@media screen and (min-width: 60em) { padding-left: 0.5rem; }`
const near_black = `color: rgb(17, 17, 17);`
const mv0 = `margin-top: 0px; margin-bottom: 0px;`
const tc = `text-align: center;`
const mr3 = `margin-right: 1rem;`
const mb3 = `margin-bottom: 1rem;`
const pt5 = `padding-top: 4rem;`
const blue = `color: rgb(53, 126, 221); color: rgb(0, 116, 217);`
const underline = `text-decoration: underline;`
const hover_navy = `&:focus, &:hover { color: rgb(0, 27, 68); }`
const pb2 = `padding-bottom: 0.5rem;`
const dt__fixed_ns = `@media screen and (min-width: 30em) { table-layout: fixed; width: 100%; }`
const f1 = `font-size: 3rem;`
const f2 = `font-size: 2.25rem;`
const f3 = `font-size: 1.5rem;`
const b__black_05 = `border-color: rgba(0, 0, 0, 0.05);`
const dtc = `display: table-cell;`
const i = `font-style: italic;`
const strike = `text-decoration: line-through;`
const ttc = `text-transform: capitalize;`
const mt3 = `margin-top: 1rem;`
const serif = `font-family: georgia, times, serif;`
const athelas = `font-family: athelas, georgia, serif;`
const georgia = `font-family: georgia, serif;`
const garamond = `font-family: garamond, serif;`
const baskerville = `font-family: baskerville, serif;`
const calisto = `font-family: "Calisto MT", serif;`
const helvetica = `font-family: "helvetica neue", helvetica, sans-serif;`
const avenir = `font-family: "avenir next", avenir, sans-serif;`
const measure_wide = `max-width: 34em;`
const measure_narrow = `max-width: 20em;`
const ph3_ns = `@media screen and (min-width: 30em) { padding-left: 1rem; padding-right: 1rem; }`
const ph2_ns = `@media screen and (min-width: 30em) { padding-left: 0.5rem; padding-right: 0.5rem; }`
const outline = `outline: solid 1px;`
const w_90 = `width: 90%;`
const w_10 = `width: 10%;`
const truncate = `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`
const w_80 = `width: 80%;`
const w_20 = `width: 20%;`
const w_75 = `width: 75%;`
const w_25 = `width: 25%;`
const w_70 = `width: 70%;`
const w_30 = `width: 30%;`
const w_60 = `width: 60%;`
const w_40 = `width: 40%;`
const w_third = `width: 33.3333%;`
const w_two_thirds = `width: 66.6667%;`
const black_60 = `color: rgba(0, 0, 0, 0.6);`
const bg_dark_red = `background-color: rgb(231, 4, 15);`
const pa4 = `padding: 2rem;`
const ph4 = `padding-left: 2rem; padding-right: 2rem;`
const dark_red = `color: rgb(231, 4, 15);`
const bg_red = `background-color: rgb(255, 65, 54);`
const red = `color: rgb(255, 65, 54);`
const bg_light_red = `background-color: rgb(255, 114, 92);`
const light_red = `color: rgb(255, 114, 92);`
const bg_orange = `background-color: rgb(255, 99, 0);`
const orange = `color: rgb(255, 99, 0);`
const bg_gold = `background-color: rgb(255, 183, 0);`
const gold = `color: rgb(255, 183, 0);`
const yellow = `color: gold;`
const bg_light_yellow = `background-color: rgb(251, 241, 169);`
const light_yellow = `color: rgb(251, 241, 169);`
const bg_purple = `background-color: rgb(94, 44, 165);`
const purple = `color: rgb(94, 44, 165);`
const bg_light_purple = `background-color: rgb(164, 99, 242);`
const light_purple = `color: rgb(164, 99, 242);`
const bg_dark_pink = `background-color: rgb(213, 0, 143);`
const dark_pink = `color: rgb(213, 0, 143);`
const bg_hot_pink = `background-color: rgb(255, 65, 180);`
const hot_pink = `color: rgb(255, 65, 180);`
const bg_pink = `background-color: rgb(255, 128, 204);`
const pink = `color: rgb(255, 128, 204);`
const bg_light_pink = `background-color: rgb(255, 163, 215);`
const light_pink = `color: rgb(255, 163, 215);`
const bg_dark_green = `background-color: rgb(19, 119, 82);`
const dark_green = `color: rgb(19, 119, 82);`
const bg_green = `background-color: rgb(25, 169, 116);`
const green = `color: rgb(25, 169, 116);`
const bg_light_green = `background-color: rgb(158, 235, 207);`
const light_green = `color: rgb(158, 235, 207);`
const bg_navy = `background-color: rgb(0, 27, 68);`
const bg_dark_blue = `background-color: rgb(0, 68, 158);`
const dark_blue = `color: rgb(0, 68, 158);`
const bg_light_blue = `background-color: rgb(150, 204, 255);`
const light_blue = `color: rgb(150, 204, 255);`
const lightest_blue = `color: rgb(205, 236, 255);`
const washed_blue = `color: rgb(246, 255, 254);`
const bg_washed_green = `background-color: rgb(232, 253, 245);`
const bg_washed_yellow = `background-color: rgb(255, 252, 235);`
const washed_yellow = `color: rgb(255, 252, 235);`
const bg_washed_red = `background-color: rgb(255, 223, 223);`
const washed_red = `color: rgb(255, 223, 223);`
const mw5 = `max-width: 16rem;`
const bg_near_white = `background-color: rgb(244, 244, 244);`
const br = `border-right-style: solid; border-right-width: 1px;`
const bl = `border-left-style: solid; border-left-width: 1px;`
const bn = `border-style: none; border-width: 0px;`
const b__dotted = `border-style: dotted;`
const b__dashed = `border-style: dashed;`
const b__solid = `border-style: solid;`
const b__none = `border-style: none;`
const bw1 = `border-width: 0.125rem;`
const bw2 = `border-width: 0.25rem;`
const bw3 = `border-width: 0.5rem;`
const bw4 = `border-width: 1rem;`
const bw5 = `border-width: 2rem;`
const pr4 = `padding-right: 2rem;`
const b__black = `border-color: rgb(0, 0, 0);`
const pt2 = `padding-top: 0.5rem;`
const black_90 = `color: rgba(0, 0, 0, 0.9);`
const b__black_90 = `border-color: rgba(0, 0, 0, 0.9);`
const black_80 = `color: rgba(0, 0, 0, 0.8);`
const b__black_80 = `border-color: rgba(0, 0, 0, 0.8);`
const b__black_70 = `border-color: rgba(0, 0, 0, 0.7);`
const b__black_60 = `border-color: rgba(0, 0, 0, 0.6);`
const black_50 = `color: rgba(0, 0, 0, 0.5);`
const b__black_50 = `border-color: rgba(0, 0, 0, 0.5);`
const black_40 = `color: rgba(0, 0, 0, 0.4);`
const b__black_40 = `border-color: rgba(0, 0, 0, 0.4);`
const black_30 = `color: rgba(0, 0, 0, 0.3);`
const b__black_30 = `border-color: rgba(0, 0, 0, 0.3);`
const black_20 = `color: rgba(0, 0, 0, 0.2);`
const black_10 = `color: rgba(0, 0, 0, 0.1);`
const black_05 = `color: rgba(0, 0, 0, 0.05);`
const b__black_025 = `border-color: rgba(0, 0, 0, 0.024);`
const b__black_0125 = `border-color: rgba(0, 0, 0, 0.01);`
const b__near_black = `border-color: rgb(17, 17, 17);`
const dark_gray = `color: rgb(51, 51, 51);`
const b__dark_gray = `border-color: rgb(51, 51, 51);`
const mid_gray = `color: rgb(85, 85, 85);`
const b__mid_gray = `border-color: rgb(85, 85, 85);`
const gray = `color: rgb(119, 119, 119);`
const b__gray = `border-color: rgb(119, 119, 119);`
const bg_black = `background-color: rgb(0, 0, 0);`
const silver = `color: rgb(153, 153, 153);`
const b__silver = `border-color: rgb(153, 153, 153);`
const light_silver = `color: rgb(170, 170, 170);`
const b__light_silver = `border-color: rgb(170, 170, 170);`
const light_gray = `color: rgb(238, 238, 238);`
const b__light_gray = `border-color: rgb(238, 238, 238);`
const near_white = `color: rgb(244, 244, 244);`
const b__near_white = `border-color: rgb(244, 244, 244);`
const b__white = `border-color: rgb(255, 255, 255);`
const white_90 = `color: rgba(255, 255, 255, 0.9);`
const b__white_90 = `border-color: rgba(255, 255, 255, 0.9);`
const white_80 = `color: rgba(255, 255, 255, 0.8);`
const b__white_80 = `border-color: rgba(255, 255, 255, 0.8);`
const white_70 = `color: rgba(255, 255, 255, 0.7);`
const b__white_70 = `border-color: rgba(255, 255, 255, 0.7);`
const white_60 = `color: rgba(255, 255, 255, 0.6);`
const b__white_60 = `border-color: rgba(255, 255, 255, 0.6);`
const white_50 = `color: rgba(255, 255, 255, 0.498);`
const b__white_50 = `border-color: rgba(255, 255, 255, 0.498);`
const white_40 = `color: rgba(255, 255, 255, 0.4);`
const b__white_40 = `border-color: rgba(255, 255, 255, 0.4);`
const white_30 = `color: rgba(255, 255, 255, 0.298);`
const b__white_30 = `border-color: rgba(255, 255, 255, 0.298);`
const white_20 = `color: rgba(255, 255, 255, 0.2);`
const b__white_20 = `border-color: rgba(255, 255, 255, 0.2);`
const white_10 = `color: rgba(255, 255, 255, 0.098);`
const b__white_10 = `border-color: rgba(255, 255, 255, 0.098);`
const b__white_05 = `border-color: rgba(255, 255, 255, 0.047);`
const b__white_025 = `border-color: rgba(255, 255, 255, 0.024);`
const b__white_0125 = `border-color: rgba(255, 255, 255, 0.01);`
const b__dark_red = `border-color: rgb(231, 4, 15);`
const b__red = `border-color: rgb(255, 65, 54);`
const b__orange = `border-color: rgb(255, 99, 0);`
const b__gold = `border-color: rgb(255, 183, 0);`
const b__yellow = `border-color: gold;`
const b__purple = `border-color: rgb(94, 44, 165);`
const b__light_purple = `border-color: rgb(164, 99, 242);`
const b__hot_pink = `border-color: rgb(255, 65, 180);`
const b__dark_pink = `border-color: rgb(213, 0, 143);`
const b__pink = `border-color: rgb(255, 128, 204);`
const b__dark_green = `border-color: rgb(19, 119, 82);`
const b__green = `border-color: rgb(25, 169, 116);`
const b__navy = `border-color: rgb(0, 27, 68);`
const b__dark_blue = `border-color: rgb(0, 68, 158);`
const b__blue = `border-color: rgb(53, 126, 221);`
const b__light_blue = `border-color: rgb(150, 204, 255);`
const b__lightest_blue = `border-color: rgb(205, 236, 255);`
const b__washed_blue = `border-color: rgb(246, 255, 254);`
const b__washed_green = `border-color: rgb(232, 253, 245);`
const b__washed_yellow = `border-color: rgb(255, 252, 235);`
const b__light_pink = `border-color: rgb(255, 163, 215);`
const b__light_yellow = `border-color: rgb(251, 241, 169);`
const b__light_red = `border-color: rgb(255, 114, 92);`
const b__transparent = `border-color: transparent;`
const br1 = `border-radius: 0.125rem;`
const br3 = `border-radius: 0.5rem;`
const br4 = `border-radius: 1rem;`
const dt = `display: table;`
const dt__fixed = `table-layout: fixed; width: 100%;`
const br_100 = `border-radius: 100%;`
const h3 = `height: 4rem;`
const w3 = `width: 4rem;`
const br_pill = `border-radius: 9999px;`
const br__bottom = `border-top-left-radius: 0px; border-top-right-radius: 0px;`
const br__top = `border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;`
const br__left = `border-top-right-radius: 0px; border-bottom-right-radius: 0px;`
const br__right = `border-bottom-left-radius: 0px; border-top-left-radius: 0px;`
const pointer = `&:hover { cursor: pointer; }`
const pt6 = `padding-top: 8rem;`
const mb6 = `margin-bottom: 8rem;`
const mw6 = `max-width: 32rem;`
const mw7_l = `@media screen and (min-width: 60em) { max-width: 48rem; }`
const pa3_l = `@media screen and (min-width: 60em) { padding: 1rem; }`
const pv6_ns = `@media screen and (min-width: 30em) { padding-top: 8rem; padding-bottom: 8rem; }`
const mh0 = `margin-left: 0px; margin-right: 0px;`
const border_box = `box-sizing: border-box;`
const f2_m = `@media screen and (max-width: 60em) and (min-width: 30em) { font-size: 2.25rem; }`
const f_subheadline_l = `@media screen and (min-width: 60em) { font-size: 5rem; }`
const lh_title_l = `@media screen and (min-width: 60em) { line-height: 1.25; }`
const pr3_l = `@media screen and (min-width: 60em) { padding-right: 1rem; }`
const f4_l = `@media screen and (min-width: 60em) { font-size: 1.25rem; }`
const pl3_l = `@media screen and (min-width: 60em) { padding-left: 1rem; }`
const f4_m = `@media screen and (max-width: 60em) and (min-width: 30em) { font-size: 1.25rem; }`
const f3_l = `@media screen and (min-width: 60em) { font-size: 1.5rem; }`
const fs_normal = `font-style: normal;`
const ph0 = `padding-left: 0px; padding-right: 0px;`
const fw7 = `font-weight: 700;`
const mb5 = `margin-bottom: 4rem;`
const inline_flex = `display: inline-flex;`
const items_center = `align-items: center;`
const w2 = `width: 2rem;`
const pv1 = `padding-top: 0.25rem; padding-bottom: 0.25rem;`

const DIV_1 = styled.div`
  ${ w_100 }
  ${ sans_serif }
`

const HEADER_1 = styled.header`
  ${ w_100 }
  ${ pa3 }
  ${ ph5_ns }
  ${ bg_white }
`

const DIV_2 = styled.div`
  ${ db }
  ${ dt_ns }
  ${ mw9 }
  ${ center }
  ${ w_100 }
`

const DIV_3 = styled.div`
  ${ db }
  ${ dtc_ns }
  ${ v_mid }
  ${ tl }
  ${ w_50 }
`

const A_1 = styled.a`
  ${ dib }
  ${ f5 }
  ${ f4_ns }
  ${ fw6 }
  ${ mt0 }
  ${ mb1 }
  ${ link }
  ${ black_70 }
`

const DIV_4 = styled.div`
  ${ dib }
`

const SMALL_1 = styled.small`
  ${ nowrap }
  ${ f6 }
  ${ mt2 }
  ${ mt3_ns }
  ${ pr2 }
  ${ black_70 }
  ${ fw2 }
`

const NAV_1 = styled.nav`
  ${ db }
  ${ dtc_ns }
  ${ v_mid }
  ${ w_100 }
  ${ tl }
  ${ tr_ns }
  ${ mt2 }
  ${ mt0_ns }
`

const A_2 = styled.a`
  ${ f6 }
  ${ fw6 }
  ${ hover_blue }
  ${ link }
  ${ black_70 }
  ${ mr2 }
  ${ mr3_m }
  ${ mr4_l }
  ${ dib }
`

const A_3 = styled.a`
  ${ f6 }
  ${ fw6 }
  ${ hover_blue }
  ${ link }
  ${ black_70 }
  ${ mr2 }
  ${ mr3_m }
  ${ mr4_l }
  ${ dn }
  ${ dib_l }
`

const MAIN_1 = styled.main`
  ${ w_100 }
  ${ bt }
  ${ b__black_10 }
  ${ bg_white }
`

const SECTION_1 = styled.section`
  ${ w_100 }
`

const ARTICLE_1 = styled.article`
  ${ pb4 }
`

const HEADER_2 = styled.header`
  ${ ph3 }
  ${ ph5_ns }
  ${ w_100 }
  ${ bg_transparent }
  ${ pv3 }
  ${ mb4 }
  ${ mb5_ns }
  ${ bb }
  ${ b__black_10 }
  ${ overflow_auto }
`

const DIV_5 = styled.div`
  ${ nowrap }
  ${ mw9 }
  ${ center }
`

const A_4 = styled.a`
  ${ pv1_ns }
  ${ f6 }
  ${ fw6 }
  ${ dim }
  ${ link }
  ${ black_70 }
  ${ mr2 }
  ${ mr3_m }
  ${ mr4_l }
  ${ dib }
`

const A_5 = styled.a`
  ${ pv1_ns }
  ${ f6 }
  ${ fw6 }
  ${ dim }
  ${ link }
  ${ black_70 }
  ${ mr1 }
  ${ mr3_m }
  ${ mr4_l }
  ${ dib }
`

const DIV_6 = styled.div`
  ${ ph3 }
  ${ ph5_ns }
`

const DIV_7 = styled.div`
  ${ cf }
  ${ mw9 }
  ${ center }
  ${ tc_m }
`

const DIV_8 = styled.div`
  ${ fl }
  ${ w_100 }
  ${ overflow_auto }
  ${ v_top }
`

const A_6 = styled.a`
  ${ bg_white_50 }
  ${ dim }
  ${ link }
  ${ dib }
  ${ mb2 }
  ${ br2 }
  ${ ph2 }
  ${ pb1 }
  ${ lh_solid }
  ${ v_top }
`

const SPAN_1 = styled.span`
  ${ dib }
  ${ v_mid }
  ${ white }
  ${ fw6 }
`

const DIV_9 = styled.div`
  ${ pb3 }
  ${ pb4_ns }
  ${ pt4 }
  ${ pt5_ns }
  ${ mt4 }
  ${ black_70 }
  ${ fl_l }
  ${ w_50_l }
`

const H1_1 = styled.h1`
  ${ f4 }
  ${ fw6 }
  ${ f1_ns }
  ${ lh_title }
  ${ measure }
  ${ mt0 }
`

const P_1 = styled.p`
  ${ f5 }
  ${ f4_ns }
  ${ fw4 }
  ${ b }
  ${ measure }
  ${ dib_m }
  ${ lh_copy }
`

const P_2 = styled.p`
  ${ measure }
  ${ f5 }
  ${ f4_ns }
  ${ lh_copy }
  ${ dn }
`

const DIV_10 = styled.div`
  ${ fl_l }
  ${ w_50_l }
  ${ tl }
  ${ tc_ns }
  ${ pt3 }
  ${ pt4_m }
  ${ pt6_l }
`

const A_7 = styled.a`
  ${ f6 }
  ${ f5_ns }
  ${ fw6 }
  ${ dib }
  ${ ba }
  ${ b__black_20 }
  ${ bg_blue }
  ${ white }
  ${ ph3 }
  ${ ph4_ns }
  ${ pv2 }
  ${ pv3_ns }
  ${ br2 }
  ${ grow }
  ${ no_underline }
`

const CODE_1 = styled.code`
  ${ f6 }
  ${ fw4 }
  ${ di }
`

const ARTICLE_2 = styled.article`
  ${ bt }
  ${ b__black_10 }
  ${ bg_washed_blue }
  ${ black_70 }
  ${ ph3 }
  ${ ph5_ns }
  ${ pv4 }
  ${ pv5_ns }
`

const DIV_11 = styled.div`
  ${ mw9 }
  ${ center }
`

const H1_2 = styled.h1`
  ${ mt0 }
  ${ f5 }
  ${ f3_ns }
`

const P_3 = styled.p`
  ${ f5 }
  ${ measure }
  ${ lh_copy }
`

const PRE_1 = styled.pre`
  ${ pre }
  ${ black_70 }
`

const CODE_2 = styled.code`
  ${ code }
  ${ f6 }
  ${ dib }
  ${ pa2 }
  ${ bg_black_70 }
  ${ washed_green }
`

const P_4 = styled.p`
  ${ mt4 }
`

const PRE_2 = styled.pre`
  ${ pre }
`

const H3_1 = styled.h3`
  ${ f5 }
  ${ f3_ns }
  ${ mt4 }
  ${ fw6 }
`

const P_5 = styled.p`
  ${ lh_copy }
  ${ measure }
  ${ f6 }
`

const DIV_12 = styled.div`
  ${ overflow_auto }
`

const CODE_3 = styled.code`
  ${ pre }
  ${ f6 }
`

const SECTION_2 = styled.section`
  ${ bt }
  ${ b__black_10 }
  ${ pv5 }
  ${ mt5 }
  ${ cf }
`

const DIV_13 = styled.div`
  ${ fl_l }
  ${ w_100 }
  ${ w_50_l }
  ${ pr4_ns }
`

const H3_2 = styled.h3`
  ${ f5 }
  ${ f3_ns }
  ${ mt0 }
`

const P_6 = styled.p`
  ${ f6 }
  ${ f5_ns }
  ${ measure }
  ${ lh_copy }
  ${ mb4 }
  ${ mt0 }
`

const DIV_14 = styled.div`
  ${ fl_l }
  ${ w_100 }
  ${ w_50_l }
`

const DIV_15 = styled.div`
  ${ aspect_ratio }
  ${ aspect_ratio__8x5 }
`

const DIV_16 = styled.div`
  ${ aspect_ratio__object }
`

const DIV_17 = styled.div`
  ${ tl }
  ${ bt }
  ${ b__black_10 }
  ${ pa3 }
  ${ pa5_ns }
  ${ bg_lightest_blue }
  ${ navy }
`

const H1_3 = styled.h1`
  ${ f5 }
  ${ ttu }
  ${ tracked }
  ${ fw6 }
`

const SECTION_3 = styled.section`
  ${ lh_copy }
`

const DIV_18 = styled.div`
  ${ cf }
`

const ARTICLE_3 = styled.article`
  ${ fl }
  ${ pv2 }
  ${ w_100 }
  ${ w_third_l }
  ${ pr4_l }
`

const H2_1 = styled.h2`
  ${ f5 }
  ${ f4_ns }
  ${ fw6 }
  ${ mb0 }
`

const P_7 = styled.p`
  ${ f6 }
  ${ f5_ns }
  ${ measure }
  ${ lh_copy }
  ${ mt0 }
`

const ARTICLE_4 = styled.article`
  ${ pv2 }
  ${ fl }
  ${ w_100 }
  ${ w_third_l }
  ${ ph3_l }
`

const ARTICLE_5 = styled.article`
  ${ pv2 }
  ${ fl }
  ${ w_100 }
  ${ w_third_l }
  ${ pl4_l }
`

const H2_2 = styled.h2`
  ${ f5 }
  ${ f4_ns }
  ${ fw6 }
  ${ mb0 }
`

const DIV_19 = styled.div`
  ${ cf }
  ${ w_100 }
`

const ARTICLE_6 = styled.article`
  ${ pv2 }
  ${ fl }
  ${ w_100 }
  ${ w_third_l }
  ${ pl0 }
  ${ pr4_l }
`

const SECTION_4 = styled.section`
  ${ cf }
  ${ ph3 }
  ${ ph5_ns }
  ${ pb5 }
  ${ bg_yellow }
  ${ black_70 }
`

const H1_4 = styled.h1`
  ${ fl }
  ${ w_100 }
  ${ mt5 }
  ${ f5 }
  ${ ttu }
  ${ tracked }
  ${ fw6 }
`

const ARTICLE_7 = styled.article`
  ${ pv2 }
  ${ fl }
  ${ w_100 }
`

const H2_3 = styled.h2`
  ${ f4 }
  ${ f1_ns }
  ${ fw6 }
  ${ mb2 }
`

const P_8 = styled.p`
  ${ f5 }
  ${ f4_ns }
  ${ measure }
  ${ lh_copy }
  ${ mt0 }
`

const A_8 = styled.a`
  ${ black }
  ${ dim }
`

const ARTICLE_8 = styled.article`
  ${ pv2 }
  ${ fl }
  ${ w_100 }
  ${ w_50_l }
  ${ pr0 }
  ${ pr2_l }
`

const H2_4 = styled.h2`
  ${ f4 }
  ${ f2_ns }
  ${ fw6 }
  ${ mb2 }
`

const P_9 = styled.p`
  ${ f5 }
  ${ measure }
  ${ lh_copy }
  ${ mt0 }
`

const ARTICLE_9 = styled.article`
  ${ pv2 }
  ${ fl }
  ${ w_100 }
  ${ w_50_l }
  ${ pl0 }
  ${ pl2_l }
`

const ARTICLE_10 = styled.article`
  ${ pv2 }
  ${ fl }
  ${ w_100 }
  ${ w_50_l }
  ${ pr0 }
`

const A_9 = styled.a`
  ${ link }
  ${ dim }
  ${ near_black }
`

const P_10 = styled.p`
  ${ mv0 }
  ${ f5 }
  ${ lh_copy }
  ${ measure }
`

const A_10 = styled.a`
  ${ dim }
  ${ f6 }
  ${ db }
  ${ black }
`

const SECTION_5 = styled.section`
  ${ tc }
  ${ pv5 }
  ${ bb }
  ${ bt }
  ${ b__black_10 }
  ${ bg_washed_blue }
`

const H3_3 = styled.h3`
  ${ f5 }
  ${ fw6 }
  ${ ttu }
  ${ tracked }
  ${ black_70 }
  ${ mb4 }
`

const A_11 = styled.a`
  ${ no_underline }
  ${ grow }
  ${ pa3 }
  ${ br2 }
  ${ bg_blue }
  ${ white }
  ${ mr3 }
  ${ mb3 }
  ${ dib }
`

const A_12 = styled.a`
  ${ no_underline }
  ${ grow }
  ${ pa3 }
  ${ br2 }
  ${ bg_blue }
  ${ white }
  ${ mr3 }
  ${ dib }
`

const DIV_20 = styled.div`
  ${ ph3 }
  ${ ph5_ns }
  ${ pt5 }
`

const DIV_21 = styled.div`
  ${ mw9 }
  ${ center }
  ${ overflow_auto }
`

const H3_4 = styled.h3`
  ${ f5 }
  ${ fw6 }
  ${ ttu }
  ${ tracked }
`

const P_11 = styled.p`
  ${ lh_copy }
  ${ measure }
`

const A_13 = styled.a`
  ${ link }
  ${ blue }
  ${ underline }
  ${ hover_navy }
`

const H3_5 = styled.h3`
  ${ f6 }
  ${ ttu }
  ${ fw6 }
  ${ mb0 }
  ${ mt5 }
  ${ bb }
  ${ pb2 }
`

const ARTICLE_11 = styled.article`
  ${ dt_ns }
  ${ dt__fixed_ns }
`

const DIV_22 = styled.div`
  ${ dtc_ns }
  ${ v_mid }
  ${ overflow_auto }
`

const H1_5 = styled.h1`
  ${ f1 }
  ${ lh_title }
`

const H2_5 = styled.h2`
  ${ f2 }
  ${ lh_title }
`

const H3_6 = styled.h3`
  ${ f3 }
  ${ lh_title }
`

const H4_1 = styled.h4`
  ${ f4 }
  ${ lh_title }
`

const H5_1 = styled.h5`
  ${ f5 }
  ${ lh_title }
`

const H6_1 = styled.h6`
  ${ f6 }
  ${ lh_title }
`

const DIV_23 = styled.div`
  ${ dtc_ns }
  ${ v_mid }
`

const PRE_3 = styled.pre`
  ${ ba }
  ${ b__black_05 }
  ${ pa2 }
  ${ overflow_auto }
`

const CODE_4 = styled.code`
  ${ db }
  ${ f6 }
  ${ pa3 }
  ${ lh_copy }
`

const ARTICLE_12 = styled.article`
  ${ mt5 }
`

const H3_7 = styled.h3`
  ${ f6 }
  ${ ttu }
  ${ fw6 }
  ${ mt0 }
  ${ mb3 }
  ${ bb }
  ${ pb2 }
`

const DIV_24 = styled.div`
  ${ dt_ns }
  ${ dt__fixed_ns }
`

const DIV_25 = styled.div`
  ${ dtc }
  ${ v_mid }
`

const P_12 = styled.p`
  ${ i }
`

const P_13 = styled.p`
  ${ b }
`

const P_14 = styled.p`
  ${ underline }
`

const P_15 = styled.p`
  ${ strike }
`

const P_16 = styled.p`
  ${ ttc }
`

const P_17 = styled.p`
  ${ ttu }
`

const H4_2 = styled.h4`
  ${ f6 }
  ${ mb0 }
  ${ mt3 }
`

const P_18 = styled.p`
  ${ serif }
`

const P_19 = styled.p`
  ${ athelas }
`

const P_20 = styled.p`
  ${ athelas }
  ${ ttu }
`

const P_21 = styled.p`
  ${ georgia }
`

const P_22 = styled.p`
  ${ georgia }
  ${ ttu }
`

const P_23 = styled.p`
  ${ garamond }
`

const P_24 = styled.p`
  ${ garamond }
  ${ ttu }
`

const P_25 = styled.p`
  ${ baskerville }
`

const P_26 = styled.p`
  ${ baskerville }
  ${ ttu }
`

const P_27 = styled.p`
  ${ calisto }
`

const P_28 = styled.p`
  ${ calisto }
  ${ ttu }
`

const P_29 = styled.p`
  ${ sans_serif }
`

const P_30 = styled.p`
  ${ sans_serif }
  ${ ttu }
`

const P_31 = styled.p`
  ${ helvetica }
`

const P_32 = styled.p`
  ${ helvetica }
  ${ ttu }
`

const P_33 = styled.p`
  ${ avenir }
`

const P_34 = styled.p`
  ${ avenir }
  ${ ttu }
`

const P_35 = styled.p`
  ${ code }
`

const P_36 = styled.p`
  ${ code }
  ${ ttu }
`

const DIV_26 = styled.div`
  ${ dtc }
  ${ v_mid }
  ${ f6 }
`

const H4_3 = styled.h4`
  ${ mt4 }
  ${ fw6 }
  ${ f6 }
`

const P_37 = styled.p`
  ${ measure_wide }
  ${ lh_copy }
`

const P_38 = styled.p`
  ${ measure }
  ${ lh_copy }
`

const P_39 = styled.p`
  ${ measure_narrow }
  ${ lh_copy }
`

const H3_8 = styled.h3`
  ${ f6 }
  ${ ttu }
  ${ fw6 }
  ${ mt0 }
  ${ bb }
  ${ pb2 }
`

const SECTION_6 = styled.section`
  ${ cf }
  ${ w_100 }
  ${ pv3 }
  ${ f6 }
  ${ ph3 }
  ${ ph4_ns }
`

const DIV_27 = styled.div`
  ${ mw9 }
  ${ center }
  ${ ph3_ns }
`

const DIV_28 = styled.div`
  ${ ph2_ns }
`

const DIV_29 = styled.div`
  ${ fl }
  ${ w_100 }
  ${ pa2 }
`

const DIV_30 = styled.div`
  ${ outline }
  ${ bg_white }
  ${ tc }
  ${ pv4 }
`

const DIV_31 = styled.div`
  ${ fl }
  ${ w_90 }
  ${ pa2 }
`

const DIV_32 = styled.div`
  ${ fl }
  ${ w_10 }
  ${ pa2 }
`

const DIV_33 = styled.div`
  ${ outline }
  ${ bg_white }
  ${ tc }
  ${ pv4 }
  ${ truncate }
`

const DIV_34 = styled.div`
  ${ fl }
  ${ w_80 }
  ${ pa2 }
`

const DIV_35 = styled.div`
  ${ fl }
  ${ w_20 }
  ${ pa2 }
`

const DIV_36 = styled.div`
  ${ fl }
  ${ w_75 }
  ${ pa2 }
`

const DIV_37 = styled.div`
  ${ fl }
  ${ w_25 }
  ${ pa2 }
`

const DIV_38 = styled.div`
  ${ fl }
  ${ w_70 }
  ${ pa2 }
`

const DIV_39 = styled.div`
  ${ fl }
  ${ w_30 }
  ${ pa2 }
`

const DIV_40 = styled.div`
  ${ fl }
  ${ w_60 }
  ${ pa2 }
`

const DIV_41 = styled.div`
  ${ fl }
  ${ w_40 }
  ${ pa2 }
`

const DIV_42 = styled.div`
  ${ fl }
  ${ w_50 }
  ${ pa2 }
`

const DIV_43 = styled.div`
  ${ fl }
  ${ w_third }
  ${ pa2 }
`

const DIV_44 = styled.div`
  ${ outline }
  ${ bg_white }
  ${ tc }
  ${ pv4 }
  ${ truncate }
  ${ w_100 }
`

const DIV_45 = styled.div`
  ${ fl }
  ${ w_two_thirds }
  ${ pa2 }
`

const DIV_46 = styled.div`
  ${ dtc_ns }
  ${ v_mid }
  ${ pr4_ns }
`

const TABLE_1 = styled.table`
  ${ w_100 }
`

const TBODY_1 = styled.tbody`
  ${ black_60 }
  ${ f6 }
`

const TD_1 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_dark_red }
  ${ pa4 }
`

const TD_2 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ dark_red }
`

const TD_3 = styled.td`
  ${ bb }
  ${ b__black_05 }
`

const TD_4 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_red }
  ${ pa4 }
`

const TD_5 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ red }
`

const TD_6 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_light_red }
  ${ pa4 }
`

const TD_7 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ light_red }
`

const TD_8 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_orange }
  ${ pa4 }
`

const TD_9 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ orange }
`

const TD_10 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_gold }
  ${ pa4 }
`

const TD_11 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ gold }
`

const TD_12 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_yellow }
  ${ pa4 }
`

const TD_13 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ yellow }
`

const TD_14 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_light_yellow }
  ${ pa4 }
`

const TD_15 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ light_yellow }
`

const TD_16 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_purple }
  ${ pa4 }
`

const TD_17 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ purple }
`

const TD_18 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_light_purple }
  ${ pa4 }
`

const TD_19 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ light_purple }
`

const TD_20 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_dark_pink }
  ${ pa4 }
`

const TD_21 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ dark_pink }
`

const TD_22 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_hot_pink }
  ${ pa4 }
`

const TD_23 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ hot_pink }
`

const TD_24 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_pink }
  ${ pa4 }
`

const TD_25 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ pink }
`

const TD_26 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_light_pink }
  ${ pa4 }
`

const TD_27 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ light_pink }
`

const TD_28 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_dark_green }
  ${ pa4 }
`

const TD_29 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ dark_green }
`

const TD_30 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_green }
  ${ pa4 }
`

const TD_31 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ green }
`

const TD_32 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_light_green }
  ${ pa4 }
`

const TD_33 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ light_green }
`

const TD_34 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_navy }
  ${ pa4 }
`

const TD_35 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ navy }
`

const TD_36 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_dark_blue }
  ${ pa4 }
`

const TD_37 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ dark_blue }
`

const TD_38 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_blue }
  ${ pa4 }
`

const TD_39 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ blue }
`

const TD_40 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_light_blue }
  ${ pa4 }
`

const TD_41 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ light_blue }
`

const TD_42 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_lightest_blue }
  ${ pa4 }
`

const TD_43 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ lightest_blue }
`

const TD_44 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_washed_blue }
  ${ pa4 }
`

const TD_45 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ washed_blue }
`

const TD_46 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_washed_green }
  ${ pa4 }
`

const TD_47 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ washed_green }
`

const TD_48 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_washed_yellow }
  ${ pa4 }
`

const TD_49 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ washed_yellow }
`

const TD_50 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ bg_washed_red }
  ${ pa4 }
`

const TD_51 = styled.td`
  ${ bb }
  ${ b__black_05 }
  ${ ph4 }
  ${ f4 }
  ${ b }
  ${ washed_red }
`

const PRE_4 = styled.pre`
  ${ ba }
  ${ b__black_05 }
  ${ pa2 }
  ${ overflow_auto }
`

const CODE_5 = styled.code`
  ${ db }
  ${ f6 }
  ${ ph3 }
  ${ lh_copy }
`

const DIV_47 = styled.div`
  ${ ba }
  ${ db }
  ${ mw5 }
  ${ pa3 }
  ${ mb3 }
  ${ bg_near_white }
`

const DIV_48 = styled.div`
  ${ bt }
  ${ db }
  ${ mw5 }
  ${ pa3 }
  ${ mb3 }
  ${ bg_near_white }
`

const DIV_49 = styled.div`
  ${ br }
  ${ db }
  ${ mw5 }
  ${ pa3 }
  ${ mb3 }
  ${ bg_near_white }
`

const DIV_50 = styled.div`
  ${ bb }
  ${ db }
  ${ mw5 }
  ${ pa3 }
  ${ mb3 }
  ${ bg_near_white }
`

const DIV_51 = styled.div`
  ${ bl }
  ${ db }
  ${ mw5 }
  ${ pa3 }
  ${ mb3 }
  ${ bg_near_white }
`

const DIV_52 = styled.div`
  ${ bn }
  ${ db }
  ${ mw5 }
  ${ pa3 }
  ${ mb3 }
  ${ bg_near_white }
`

const DIV_53 = styled.div`
  ${ ba }
  ${ b__dotted }
  ${ db }
  ${ mw5 }
  ${ pa3 }
  ${ mb3 }
`

const DIV_54 = styled.div`
  ${ ba }
  ${ b__dashed }
  ${ db }
  ${ mw5 }
  ${ pa3 }
  ${ mb3 }
`

const DIV_55 = styled.div`
  ${ ba }
  ${ b__solid }
  ${ db }
  ${ mw5 }
  ${ pa3 }
  ${ mb3 }
`

const DIV_56 = styled.div`
  ${ ba }
  ${ b__none }
  ${ db }
  ${ mw5 }
  ${ pa3 }
  ${ mb3 }
`

const DIV_57 = styled.div`
  ${ bt }
  ${ db }
  ${ mw5 }
  ${ mb4 }
  ${ bg_near_white }
`

const DIV_58 = styled.div`
  ${ bt }
  ${ bw1 }
  ${ db }
  ${ mw5 }
  ${ mb4 }
  ${ bg_near_white }
`

const DIV_59 = styled.div`
  ${ bt }
  ${ bw2 }
  ${ db }
  ${ mw5 }
  ${ mb4 }
  ${ bg_near_white }
`

const DIV_60 = styled.div`
  ${ bt }
  ${ bw3 }
  ${ db }
  ${ mw5 }
  ${ mb4 }
  ${ bg_near_white }
`

const DIV_61 = styled.div`
  ${ bt }
  ${ bw4 }
  ${ db }
  ${ mw5 }
  ${ mb4 }
  ${ bg_near_white }
`

const DIV_62 = styled.div`
  ${ bt }
  ${ bw5 }
  ${ db }
  ${ mw5 }
  ${ mb4 }
  ${ bg_near_white }
`

const DIV_63 = styled.div`
  ${ dtc_ns }
  ${ v_mid }
  ${ pr4 }
`

const DIV_64 = styled.div`
  ${ bt }
  ${ black }
  ${ b__black }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_65 = styled.div`
  ${ bt }
  ${ black_90 }
  ${ b__black_90 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_66 = styled.div`
  ${ bt }
  ${ black_80 }
  ${ b__black_80 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_67 = styled.div`
  ${ bt }
  ${ black_70 }
  ${ b__black_70 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_68 = styled.div`
  ${ bt }
  ${ black_60 }
  ${ b__black_60 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_69 = styled.div`
  ${ bt }
  ${ black_50 }
  ${ b__black_50 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_70 = styled.div`
  ${ bt }
  ${ black_40 }
  ${ b__black_40 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_71 = styled.div`
  ${ bt }
  ${ black_30 }
  ${ b__black_30 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_72 = styled.div`
  ${ bt }
  ${ black_20 }
  ${ b__black_20 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_73 = styled.div`
  ${ bt }
  ${ black_10 }
  ${ b__black_10 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_74 = styled.div`
  ${ bt }
  ${ black_05 }
  ${ b__black_05 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_75 = styled.div`
  ${ bt }
  ${ b__black_025 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_76 = styled.div`
  ${ bt }
  ${ b__black_0125 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_77 = styled.div`
  ${ bt }
  ${ near_black }
  ${ b__near_black }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_78 = styled.div`
  ${ bt }
  ${ dark_gray }
  ${ b__dark_gray }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_79 = styled.div`
  ${ bt }
  ${ mid_gray }
  ${ b__mid_gray }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_80 = styled.div`
  ${ bt }
  ${ gray }
  ${ b__gray }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_81 = styled.div`
  ${ bg_black }
  ${ pa2 }
  ${ db }
`

const DIV_82 = styled.div`
  ${ bt }
  ${ silver }
  ${ silver }
  ${ b__silver }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_83 = styled.div`
  ${ bt }
  ${ light_silver }
  ${ b__light_silver }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_84 = styled.div`
  ${ bt }
  ${ light_gray }
  ${ b__light_gray }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_85 = styled.div`
  ${ bt }
  ${ near_white }
  ${ b__near_white }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_86 = styled.div`
  ${ bt }
  ${ white }
  ${ b__white }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_87 = styled.div`
  ${ bt }
  ${ white_90 }
  ${ b__white_90 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_88 = styled.div`
  ${ bt }
  ${ white_80 }
  ${ b__white_80 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_89 = styled.div`
  ${ bt }
  ${ white_70 }
  ${ b__white_70 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_90 = styled.div`
  ${ bt }
  ${ white_60 }
  ${ b__white_60 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_91 = styled.div`
  ${ bt }
  ${ white_50 }
  ${ b__white_50 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_92 = styled.div`
  ${ bt }
  ${ white_40 }
  ${ b__white_40 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_93 = styled.div`
  ${ bt }
  ${ white_30 }
  ${ b__white_30 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_94 = styled.div`
  ${ bt }
  ${ white_20 }
  ${ b__white_20 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_95 = styled.div`
  ${ bt }
  ${ white_10 }
  ${ b__white_10 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_96 = styled.div`
  ${ bt }
  ${ b__white_05 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_97 = styled.div`
  ${ bt }
  ${ b__white_025 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_98 = styled.div`
  ${ bt }
  ${ b__white_0125 }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_99 = styled.div`
  ${ bt }
  ${ dark_red }
  ${ b__dark_red }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_100 = styled.div`
  ${ bt }
  ${ red }
  ${ b__red }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_101 = styled.div`
  ${ bt }
  ${ orange }
  ${ b__orange }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_102 = styled.div`
  ${ bt }
  ${ gold }
  ${ b__gold }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_103 = styled.div`
  ${ bt }
  ${ yellow }
  ${ b__yellow }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_104 = styled.div`
  ${ bt }
  ${ purple }
  ${ b__purple }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_105 = styled.div`
  ${ bt }
  ${ light_purple }
  ${ b__light_purple }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_106 = styled.div`
  ${ bt }
  ${ hot_pink }
  ${ b__hot_pink }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_107 = styled.div`
  ${ bt }
  ${ dark_pink }
  ${ b__dark_pink }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_108 = styled.div`
  ${ bt }
  ${ pink }
  ${ b__pink }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_109 = styled.div`
  ${ bt }
  ${ dark_green }
  ${ b__dark_green }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_110 = styled.div`
  ${ bt }
  ${ green }
  ${ b__green }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_111 = styled.div`
  ${ bt }
  ${ navy }
  ${ b__navy }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_112 = styled.div`
  ${ bt }
  ${ dark_blue }
  ${ b__dark_blue }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_113 = styled.div`
  ${ bt }
  ${ blue }
  ${ b__blue }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_114 = styled.div`
  ${ bt }
  ${ light_blue }
  ${ b__light_blue }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_115 = styled.div`
  ${ bt }
  ${ lightest_blue }
  ${ b__lightest_blue }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_116 = styled.div`
  ${ bt }
  ${ washed_blue }
  ${ b__washed_blue }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_117 = styled.div`
  ${ bt }
  ${ washed_green }
  ${ b__washed_green }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_118 = styled.div`
  ${ bt }
  ${ washed_yellow }
  ${ b__washed_yellow }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_119 = styled.div`
  ${ bt }
  ${ light_pink }
  ${ b__light_pink }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_120 = styled.div`
  ${ bt }
  ${ light_yellow }
  ${ b__light_yellow }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_121 = styled.div`
  ${ bt }
  ${ light_red }
  ${ b__light_red }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_122 = styled.div`
  ${ bt }
  ${ b__transparent }
  ${ db }
  ${ pt2 }
  ${ pb2 }
  ${ mb3 }
`

const DIV_123 = styled.div`
  ${ ba }
  ${ dib }
  ${ ph4 }
  ${ pv3 }
  ${ mb4 }
  ${ br1 }
`

const DIV_124 = styled.div`
  ${ ba }
  ${ dib }
  ${ ph4 }
  ${ pv3 }
  ${ mb4 }
  ${ br2 }
`

const DIV_125 = styled.div`
  ${ ba }
  ${ dib }
  ${ ph4 }
  ${ pv3 }
  ${ mb4 }
  ${ br3 }
`

const DIV_126 = styled.div`
  ${ ba }
  ${ dib }
  ${ ph4 }
  ${ pv3 }
  ${ mb4 }
  ${ br4 }
`

const DIV_127 = styled.div`
  ${ dt }
  ${ dt__fixed }
`

const DIV_128 = styled.div`
  ${ ba }
  ${ dib }
  ${ mb4 }
  ${ br_100 }
  ${ h3 }
  ${ w3 }
  ${ pa4 }
  ${ tc }
`

const DIV_129 = styled.div`
  ${ ba }
  ${ dib }
  ${ mb4 }
  ${ ph4 }
  ${ pv3 }
  ${ br_pill }
`

const DIV_130 = styled.div`
  ${ ba }
  ${ br__bottom }
  ${ dib }
  ${ ph4 }
  ${ pv3 }
  ${ mb4 }
  ${ br3 }
`

const DIV_131 = styled.div`
  ${ ba }
  ${ br__top }
  ${ dib }
  ${ ph4 }
  ${ pv3 }
  ${ mb4 }
  ${ br3 }
`

const DIV_132 = styled.div`
  ${ ba }
  ${ br__left }
  ${ dib }
  ${ ph4 }
  ${ pv3 }
  ${ mb4 }
  ${ br3 }
`

const DIV_133 = styled.div`
  ${ ba }
  ${ br__right }
  ${ dib }
  ${ ph4 }
  ${ pv3 }
  ${ mb4 }
  ${ br3 }
`

const DIV_134 = styled.div`
  ${ pa3 }
  ${ bg_black }
  ${ mb3 }
  ${ white }
  ${ grow }
  ${ pointer }
`

const DIV_135 = styled.div`
  ${ pa3 }
  ${ bg_black }
  ${ mb3 }
  ${ white }
  ${ dim }
  ${ pointer }
`

const SECTION_7 = styled.section`
  ${ bg_white }
  ${ black_70 }
  ${ bt }
  ${ b__black_10 }
`

const DIV_136 = styled.div`
  ${ ph3 }
  ${ ph5_ns }
  ${ pt6 }
  ${ mb6 }
`

const H3_9 = styled.h3`
  ${ f6 }
  ${ fw6 }
  ${ mt0 }
  ${ mb4 }
  ${ tc }
  ${ ttu }
  ${ tracked }
`

const DIV_137 = styled.div`
  ${ dt }
  ${ dt__fixed }
  ${ mw6 }
  ${ mw7_l }
  ${ center }
`

const DIV_138 = styled.div`
  ${ dtc }
  ${ pa2 }
  ${ pa3_l }
`

const IMG_1 = styled.img`
  ${ br2 }
  ${ db }
  ${ w_100 }
`

const SECTION_8 = styled.section`
  ${ bg_green }
  ${ black_80 }
  ${ pv5 }
  ${ pv6_ns }
  ${ bb }
  ${ bt }
  ${ b__black_10 }
`

const DIV_139 = styled.div`
  ${ center }
  ${ mw9 }
`

const H3_10 = styled.h3`
  ${ f5 }
  ${ fw6 }
  ${ ttu }
`

const DIV_140 = styled.div`
  ${ cf }
  ${ w_100 }
  ${ center }
  ${ mw9 }
`

const BLOCKQUOTE_1 = styled.blockquote`
  ${ fl }
  ${ w_100 }
  ${ mh0 }
  ${ mb4 }
  ${ mb5_ns }
  ${ border_box }
  ${ pb5 }
  ${ bb }
  ${ b__black_50 }
`

const P_40 = styled.p`
  ${ f4 }
  ${ f2_m }
  ${ mt0 }
  ${ db }
  ${ fl }
  ${ w_100 }
  ${ f_subheadline_l }
  ${ lh_copy }
  ${ lh_title_l }
  ${ measure }
  ${ mb4 }
  ${ fw6 }
`

const P_41 = styled.p`
  ${ fl }
  ${ w_100 }
  ${ w_50_l }
  ${ mh0 }
  ${ mt0 }
  ${ pr0 }
  ${ pr3_l }
  ${ measure }
  ${ lh_copy }
  ${ f5 }
  ${ f4_l }
`

const P_42 = styled.p`
  ${ fl }
  ${ w_100 }
  ${ w_50_l }
  ${ mh0 }
  ${ mt0 }
  ${ pl0 }
  ${ pl3_l }
  ${ measure }
  ${ lh_copy }
  ${ f5 }
  ${ f4_l }
`

const CITE_1 = styled.cite`
  ${ fl }
  ${ w_100 }
  ${ mt2 }
  ${ f5 }
  ${ f4_m }
  ${ f3_l }
  ${ fs_normal }
`

const SPAN_2 = styled.span`
  ${ fw6 }
`

const SPAN_3 = styled.span`
  ${ db }
  ${ f5 }
`

const BLOCKQUOTE_2 = styled.blockquote`
  ${ fl }
  ${ w_100 }
  ${ ph0 }
  ${ border_box }
  ${ mh0 }
  ${ mb4 }
  ${ mb5_ns }
  ${ pb5 }
  ${ bb }
  ${ b__black_50 }
`

const P_43 = styled.p`
  ${ f3 }
  ${ f1_ns }
  ${ measure }
  ${ fw7 }
  ${ lh_title }
  ${ mt0 }
`

const CITE_2 = styled.cite`
  ${ f5 }
  ${ f4_m }
  ${ f3_l }
  ${ fs_normal }
`

const A_14 = styled.a`
  ${ link }
  ${ black_70 }
  ${ dim }
`

const A_15 = styled.a`
  ${ link }
  ${ dim }
  ${ black_80 }
  ${ underline }
`

const BLOCKQUOTE_3 = styled.blockquote`
  ${ fl }
  ${ w_100 }
  ${ ph0 }
  ${ border_box }
  ${ mh0 }
  ${ pb5 }
`

const FOOTER_1 = styled.footer`
  ${ bg_white }
  ${ black_70 }
  ${ ph3 }
  ${ ph5_ns }
  ${ pv5 }
  ${ pv6_ns }
  ${ bt }
  ${ b__black_10 }
`

const DIV_141 = styled.div`
  ${ mb5 }
  ${ lh_copy }
`

const A_16 = styled.a`
  ${ black_70 }
  ${ link }
  ${ hover_blue }
  ${ b }
  ${ dib }
  ${ mr3 }
  ${ mb3 }
`

const ARTICLE_13 = styled.article`
  ${ v_top }
`

const A_17 = styled.a`
  ${ bg_white_50 }
  ${ link }
  ${ dib }
  ${ dim }
  ${ br2 }
  ${ ph2 }
  ${ pb1 }
  ${ lh_solid }
  ${ v_top }
`

const DIV_142 = styled.div`
  ${ mt4 }
`

const A_18 = styled.a`
  ${ ba }
  ${ black_70 }
  ${ no_underline }
  ${ grow }
  ${ br2 }
  ${ b }
  ${ inline_flex }
  ${ items_center }
  ${ mr3 }
  ${ mb3 }
  ${ pv2 }
  ${ ph3 }
`

const DIV_143 = styled.div`
  ${ w2 }
  ${ pv1 }
  ${ pr2 }
`

const DIV_144 = styled.div`
  ${ dib }
  ${ w2 }
  ${ pv1 }
  ${ pr2 }
`

const A_19 = styled.a`
  ${ ba }
  ${ br2 }
  ${ black_70 }
  ${ no_underline }
  ${ grow }
  ${ b }
  ${ inline_flex }
  ${ items_center }
  ${ mb3 }
  ${ pv2 }
  ${ ph3 }
`

const P_44 = styled.p`
  ${ f6 }
  ${ measure }
  ${ lh_copy }
`

const DIV_145 = styled.div`
  ${ pt4 }
  ${ cf }
  ${ mw5 }
`

const SMALL_2 = styled.small`
  ${ f6 }
  ${ measure }
  ${ db }
  ${ lh_copy }
  ${ mt5 }
`

export default () => (
  <div id="root">
    <DIV_1 data-reactroot>
      <HEADER_1>
        <DIV_2>
          <DIV_3>
            <A_1 href="/" title="Home">
              Tachyons<DIV_4>
              <SMALL_1>
                v4.7.0</SMALL_1>
            </DIV_4>
            </A_1>
          </DIV_3>
          <NAV_1>
            <A_2 title="Documentation" href="/docs/">
              Docs</A_2>
            <A_2 title="Components" href="/components/">
              Components</A_2>
            <A_2 title="Gallery of sites built with Tachyons" href="/gallery/">
              Gallery</A_2>
            <A_2 title="Resources" href="/resources/">
              Resources</A_2>
            <A_3 title="Tachyons on GitHub" href="http://github.com/tachyons-css/tachyons/">
              GitHub</A_3>
          </NAV_1>
        </DIV_2>
      </HEADER_1>
      <MAIN_1>
        <SECTION_1>
          <ARTICLE_1>
            <HEADER_2>
              <DIV_5>
                <A_4 title="Getting Started" href="#getting-started">
                  Getting Started</A_4>
                <A_5 title="Principles" href="#principles">
                  Principles</A_5>
                <A_5 title="Features" href="#features">
                  Features</A_5>
                <A_5 title="Style Guide" href="#style">
                  Style Guide</A_5>
                <A_5 title="Testimonials" href="#testimonials">
                  Testimonials</A_5>
              </DIV_5>
            </HEADER_2>
            <DIV_6>
              <DIV_7>
                <DIV_8>
                  <A_6 href="https://twitter.com/intent/tweet?text=Tachyons: A functional css toolkit for designing in the browser.&url=http://tachyons.io" style={{ backgroundColor: 'rgb(85, 172, 238)' }}>
                    <svg className="geomicon dib v-mid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={16} height={16} fill="#fff">
                      <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"/>
                    </svg>
                    <SPAN_1 style={{ fontSize: 12 }}>
                      Tweet</SPAN_1>
                  </A_6>
                </DIV_8>
                <DIV_9>
                  <H1_1>
                    Built for designing.</H1_1>
                  <P_1>
                    Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible.</P_1>
                  <P_2>
                    Modules can be altered, extended, or changed to meet your design needs. You shouldn't need to write css everytime you want to build a new ui component. By learning the composable building blocks in tachyons, you can quickly start to build out interfaces while writing little to no css.</P_2>
                </DIV_9>
                <DIV_10>
                  <A_7 href="https://raw.githubusercontent.com/tachyons-css/tachyons/master/css/tachyons.min.css">
                    Download <CODE_1>
                    v4.7.0</CODE_1>
                  </A_7>
                </DIV_10>
              </DIV_7>
            </DIV_6>
          </ARTICLE_1>
          <ARTICLE_2 id="getting-started">
            <DIV_11>
              <H1_2>
                Getting Started</H1_2>
              <P_3>
                Copy the line of code below and paste it in the head of the html file(s) you want to include tachyons in.</P_3>
              <PRE_1 style={{ overflow: 'auto' }}>
                <CODE_2 style={{ fontSize: 14 }}>
                  &lt;link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"/&gt;</CODE_2>
              </PRE_1>
              <P_4>
                <b>
                  or</b>
                install via npm</P_4>
              <PRE_1 style={{ overflow: 'auto' }}>
                <CODE_2 style={{ fontSize: 14 }}>
                  npm install --save-dev tachyons@4.7.0</CODE_2>
              </PRE_1>
              <P_4>
                <b>
                  or</b>
                grab all the source files and build+develop locally</P_4>
              <PRE_2 style={{ overflow: 'auto' }}>
                <CODE_2 style={{ fontSize: 14 }}>
                  git clone git@github.com:tachyons-css/tachyons.git
                  cd tachyons
                  npm install &amp;&amp; npm start
                </CODE_2>
              </PRE_2>
              <H3_1>
                Prototyping template</H3_1>
              <P_5>
                This template is always linked to the most up to date version of Tachyons. Save this file to your computer to start prototyping right away without worrying about setting up a dev environment. You can open the file in a web browser and view your changes.</P_5>
              <DIV_12>
                <CODE_3>
                  &lt;!DOCTYPE html&gt; &lt;html lang="en"&gt; &lt;title&gt; &lt;/title&gt; &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt; &lt;link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css"&gt; &lt;body&gt; &lt;/body&gt; &lt;/html&gt;</CODE_3>
              </DIV_12>
              <SECTION_2>
                <DIV_13>
                  <H3_2>
                    Start a New Project</H3_2>
                  <P_6>
                    Get setup and running with this ~7 minute screencast. Download the project and learn how to customize the tachyons source files and recompile the css using the postcss build system.</P_6>
                </DIV_13>
                <DIV_14>
                  <DIV_15>
                    <DIV_16 style={{ background: 'black' }}/>
                  </DIV_15>
                </DIV_14>
              </SECTION_2>
            </DIV_11>
          </ARTICLE_2>
          <DIV_17 id="principles">
            <DIV_11>
              <H1_3>
                Principles</H1_3>
              <SECTION_3>
                <DIV_18>
                  <ARTICLE_3>
                    <H2_1>
                      Responsive</H2_1>
                    <P_7>
                      Everything should be 100% responsive. Your website should work regardless of a user's device or screensize.</P_7>
                  </ARTICLE_3>
                  <ARTICLE_4>
                    <H2_1>
                      Readable</H2_1>
                    <P_7>
                      No matter the lighting, or the device, font-sizes should be large enough and contrast should be high enough for your users to easily read your content.</P_7>
                  </ARTICLE_4>
                  <ARTICLE_5>
                    <H2_2>
                      Modular</H2_2>
                    <P_7>
                      Tachyons isn't just a monolithic framework. It's a collection of small modules that can be mixed and matched or used independently. Use what you need. Leave the rest.</P_7>
                  </ARTICLE_5>
                </DIV_18>
                <DIV_19>
                  <ARTICLE_6>
                    <H2_1>
                      Accessible</H2_1>
                    <P_7>
                      Accessibility is important to us. Throughout both the css and the documentation we provide numerous tools and methods for making it easier to maximize the accessibility of your site.</P_7>
                  </ARTICLE_6>
                  <ARTICLE_4>
                    <H2_2>
                      Performant</H2_2>
                    <P_7>
                      Code should be optimized for performance.</P_7>
                  </ARTICLE_4>
                  <ARTICLE_5>
                    <H2_1>
                      Reusable</H2_1>
                    <P_7>
                      Clear documentation helps create a shared understanding of design patterns amongst your team. This helps promote reuse and reduces the amount of redundancy in a codebase.</P_7>
                  </ARTICLE_5>
                </DIV_19>
              </SECTION_3>
            </DIV_11>
          </DIV_17>
          <SECTION_4 id="features">
            <DIV_11>
              <H1_4>
                Features</H1_4>
              <ARTICLE_7>
                <H2_3>
                  Open source component library</H2_3>
                <P_8>
                  There is a <A_8 href="/components/" title="Tachyons components">
                  growing library of open source components</A_8>
                  written in static html that are easy to use as is, customize with your own theme, or port to a templating language.</P_8>
              </ARTICLE_7>
              <DIV_18>
                <ARTICLE_8>
                  <H2_4>
                    Lightweight</H2_4>
                  <P_9>
                    The entire library is fewer than 14kb when minified and gzipped. If you want to get even smaller, it's easy to strip out what you don't need.</P_9>
                </ARTICLE_8>
                <ARTICLE_9>
                  <H2_4>
                    Documentation</H2_4>
                  <P_9>
                    Each module is carefully documented. From stats about the size of the module, to how each css class will render to the screen.</P_9>
                </ARTICLE_9>
              </DIV_18>
              <DIV_18>
                <ARTICLE_8>
                  <H2_4>
                    Functional</H2_4>
                  <P_9>
                    It's easy to build components with Tachyons so it works well with Rails, React, Ember, Elm, Angular, Static html, and more.</P_9>
                </ARTICLE_8>
                <ARTICLE_9>
                  <H2_4>
                    Multiple Flavors</H2_4>
                  <P_9>
                    Don't like the class names? We've got <A_8 href="https://github.com/tachyons-css/tachyons-verbose">
                    a more verbose version you might like</A_8>
                    . Want to use Sass instead of Postcss? <A_8 href="http://github.com/tachyons-css/tachyons-sass">
                    We've got a repo for that too :)</A_8>
                    Tachyons isn't just a css toolkit. It's a design system. Utilized here in a <A_8 href="https://github.com/tachyons-css/react-native-style-tachyons">
                    react native boilerplate.</A_8>
                  </P_9>
                </ARTICLE_9>
              </DIV_18>
              <DIV_18>
                <ARTICLE_8>
                  <H2_4>
                    Shallow Cascade</H2_4>
                  <P_9>
                    Don't let the cascade slow you down. When you apply a class to an element, there is nothing in the cascade to override its effects. You get rapid feedback on how your css is affecting your markup without wasting time debugging why your styles are being overridden.</P_9>
                </ARTICLE_8>
                <ARTICLE_9>
                  <H2_4>
                    Low Specificity</H2_4>
                  <P_9>
                    The majority of Tachyons selectors have a specificity of 10. Tachyons won't override your existing styles. So feel free to lay it on top of your existing css.</P_9>
                </ARTICLE_9>
              </DIV_18>
              <DIV_18>
                <ARTICLE_8>
                  <H2_4>
                    Accessible Color Palette</H2_4>
                  <P_9>
                    Over 480 accessible color combinations.</P_9>
                </ARTICLE_8>
                <ARTICLE_9>
                  <H2_4>
                    Mobile-first architecture </H2_4>
                  <P_9>
                    Base classes are mobile by default. Can be overridden by namespaced classes targeting larger breakpoints.</P_9>
                </ARTICLE_9>
              </DIV_18>
              <DIV_18>
                <ARTICLE_10>
                  <H2_4>
                    Layout debugging</H2_4>
                  <P_9>
                    Small css modules for debugging stacking and layout issues. Can easily be turned on or off during development.</P_9>
                </ARTICLE_10>
                <ARTICLE_9>
                  <H2_4>
                    Composable classes</H2_4>
                  <P_9>
                    Construct anything from complex layouts to responsive components with a series of single purpose classes.</P_9>
                </ARTICLE_9>
              </DIV_18>
              <DIV_18>
                <ARTICLE_8>
                  <H2_4>
                    Cohesive design system</H2_4>
                  <P_9>
                    Scale based on the powers of two. Starting at .25</P_9>
                </ARTICLE_8>
                <ARTICLE_9>
                  <H2_4>
                    Responsive Grid</H2_4>
                  <P_9>
                    Infinitely nestable. Fully fluid. Extremely light-weight.</P_9>
                </ARTICLE_9>
              </DIV_18>
              <DIV_18>
                <ARTICLE_8>
                  <H2_4>
                    Runs on <A_9 href="https://github.com/postcss/postcss">
                    Postcss</A_9>
                  </H2_4>
                  <P_10>
                    A flexible plugin framework for post-processing css.<A_10 href="https://github.com/postcss/postcss">
                    View on GitHub</A_10>
                  </P_10>
                </ARTICLE_8>
                <ARTICLE_9>
                  <H2_4>
                    Easy to Customize and extend</H2_4>
                  <P_9>
                    Tachyons is meant to be edited and customized to meet the needs of your project. It's just css. It isn't precious. Don't be afraid to change: class names, media queries, breakpoints, or values.</P_9>
                </ARTICLE_9>
              </DIV_18>
            </DIV_11>
          </SECTION_4>
        </SECTION_1>
        <SECTION_5>
          <DIV_6>
            <H3_3>
              Start using Tachyons</H3_3>
            <A_11 href="/docs/">
              Read the Docs</A_11>
            <A_11 href="/components/">
              View Component Library</A_11>
            <A_12 href="http://unpkg.com/tachyons/css/tachyons.min.css">
              Download the Code</A_12>
          </DIV_6>
        </SECTION_5>
        <section>
          <DIV_20 id="style">
            <DIV_21>
              <H3_4>
                Style Guide</H3_4>
              <P_11>
                This is a quick introduction to some of the building blocks that Tachyons makes available. For a more in-depth look at design principles and how each module works, be sure to check out the <A_13 href="/docs" title="Tachyons docs">
                docs</A_13>
              </P_11>
              <H3_5>
                Typography</H3_5>
              <ARTICLE_11>
                <DIV_22>
                  <H1_5>
                    Level 1 Heading</H1_5>
                  <H2_5>
                    Level 2 Heading</H2_5>
                  <H3_6>
                    Level 3 Heading</H3_6>
                  <H4_1>
                    Level 4 Heading</H4_1>
                  <H5_1>
                    Level 5 Heading</H5_1>
                  <H6_1>
                    Level 6 Heading</H6_1>
                </DIV_22>
                <DIV_23>
                  <PRE_3>
                    <CODE_4>

                      .f1 {'{'} font-size: 3rem; {'}\n'}
                      .f2 {'{'} font-size: 2.25rem; {'}\n'}
                      .f3 {'{'} font-size: 1.5rem; {'}\n'}
                      .f4 {'{'} font-size: 1.25rem; {'}\n'}
                      .f5 {'{'} font-size: 1rem; {'}\n'}
                      .f6 {'{'} font-size: .875rem; {'}\n'}
                    </CODE_4>

                  </PRE_3>
                </DIV_23>
              </ARTICLE_11>
              <ARTICLE_12>
                <H3_7>
                  Type Styles</H3_7>
                <DIV_24>
                  <DIV_25>
                    <P_12>
                      Italicize: to write or print (text) in italics.</P_12>
                    <P_13>
                      Some text that needs to be super bold.</P_13>
                    <P_14>
                      This text wants to be underlined.</P_14>
                    <P_15>
                      This text should be crossed out.</P_15>
                    <P_16>
                      This text should be capitalized.</P_16>
                    <P_17>
                      This text should be uppercase.</P_17>
                  </DIV_25>
                  <DIV_23>
                    <PRE_3>
                      <CODE_4>

                        .i {'{'}         font-style: italic; {'}\n'}
                        .b {'{'}         font-weight: bold; {'}\n'}
                        .underline {'{'} text-decoration: underline; {'}\n'}
                        .strike {'{'}    text-decoration: line-through; {'}\n'}
                        .ttc {'{'}       text-transform: capitalize; {'}\n'}
                        .ttu {'{'}       text-transform: uppercase; {'}\n'}
                      </CODE_4>

                    </PRE_3>
                  </DIV_23>
                </DIV_24>
              </ARTICLE_12>
              <ARTICLE_12>
                <H3_7>
                  Typefaces</H3_7>
                <DIV_24>
                  <DIV_25>
                    <H4_2>
                      system serif</H4_2>
                    <P_18>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_18>
                    <H4_2>
                      Athelas</H4_2>
                    <P_19>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_19>
                    <P_20>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_20>
                    <H4_2>
                      georgia</H4_2>
                    <P_21>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_21>
                    <P_22>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_22>
                    <H4_2>
                      garamond</H4_2>
                    <P_23>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_23>
                    <P_24>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_24>
                    <H4_2>
                      baskerville</H4_2>
                    <P_25>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_25>
                    <P_26>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_26>
                    <H4_2>
                      calisto</H4_2>
                    <P_27>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_27>
                    <P_28>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_28>
                    <H4_2>
                      system sans-serif</H4_2>
                    <P_29>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_29>
                    <P_30>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_30>
                    <H4_2>
                      Helvetica</H4_2>
                    <P_31>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_31>
                    <P_32>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_32>
                    <H4_2>
                      Avenir Next</H4_2>
                    <P_33>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_33>
                    <P_34>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_34>
                    <H4_2>
                      Code</H4_2>
                    <P_35>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_35>
                    <P_36>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_36>
                    <H4_2>
                      Courier</H4_2>
                    <P_35>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_35>
                    <P_36>
                      a b c d e f g h i j k l m n o p q r s t u v w x y z</P_36>
                  </DIV_25>
                  <DIV_23>
                    <PRE_3>
                      <CODE_4>

                        .sans-serif {'{'}
                        font-family: -apple-system, BlinkMacSystemFont,
                        'avenir next', avenir,
                        helvetica, 'helvetica neue',
                        ubuntu,
                        roboto, noto,
                        'segoe ui', arial,
                        sans-serif;
                      {'}\n'}
                        .serif {'{'} font-family: georgia, times, serif; {'}\n'}
                        .code {'{'} font-family: Consolas, monaco, monospace; {'}\n'}
                        .courier {'{'} font-family: 'Courier Next', courier, monospace; {'}\n'}
                        .helvetica {'{'} font-family: 'helvetica neue', helvetica, sans-serif; {'}\n'}
                        .avenir {'{'} font-family: 'avenir next', avenir, sans-serif; {'}\n'}
                        .athelas {'{'} font-family: athelas, georgia, serif; {'}\n'}
                        .georgia {'{'} font-family: georgia, serif; {'}\n'}
                        .times {'{'} font-family: times, serif; {'}\n'}
                        .bodoni {'{'} font-family: "Bodoni MT", serif; {'}\n'}
                        .calisto {'{'} font-family: "Calisto MT", serif; {'}\n'}
                        .garamond {'{'} font-family: garamond, serif; {'}\n'}
                        .baskerville {'{'} font-family: baskerville, serif; {'}\n'}
                      </CODE_4>

                    </PRE_3>
                  </DIV_23>
                </DIV_24>
              </ARTICLE_12>
              <ARTICLE_12>
                <H3_7>
                  Measure</H3_7>
                <DIV_24>
                  <DIV_26>
                    <H4_3>
                      Wide Measure</H4_3>
                    <P_37>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</P_37>
                    <H4_3>
                      Measure</H4_3>
                    <P_38>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</P_38>
                    <H4_3>
                      Narrow Measure</H4_3>
                    <P_39>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</P_39>
                  </DIV_26>
                  <DIV_23>
                    <PRE_3>
                      <CODE_4>

                        .measure-wide {'{'}   max-width: 34em; {'}\n'}
                        .measure {'{'}        max-width: 30em; {'}\n'}
                        .measure-narrow {'{'} max-width: 20em; {'}\n'}
                      </CODE_4>

                    </PRE_3>
                  </DIV_23>
                </DIV_24>
              </ARTICLE_12>
            </DIV_21>
          </DIV_20>
          <ARTICLE_12 id="grids">
            <DIV_6>
              <DIV_11>
                <H3_8>
                  Grids</H3_8>
                <P_11>
                  Floats, widths, and padding can be combined to build a wide variety of grids.</P_11>
              </DIV_11>
            </DIV_6>
            <SECTION_6>
              <DIV_27>
                <DIV_28>
                  <DIV_29>
                    <DIV_30>
                      <code>
                        fl w-100</code>
                    </DIV_30>
                  </DIV_29>
                  <DIV_31>
                    <DIV_30>
                      <code>
                        fl w-90</code>
                    </DIV_30>
                  </DIV_31>
                  <DIV_32>
                    <DIV_33>
                      <code>
                        fl w-10</code>
                    </DIV_33>
                  </DIV_32>
                  <DIV_34>
                    <DIV_30>
                      <code>
                        fl w-80</code>
                    </DIV_30>
                  </DIV_34>
                  <DIV_35>
                    <DIV_33>
                      <code>
                        fl w-20</code>
                    </DIV_33>
                  </DIV_35>
                  <DIV_36>
                    <DIV_30>
                      <code>
                        fl w-75</code>
                    </DIV_30>
                  </DIV_36>
                  <DIV_37>
                    <DIV_33>
                      <code>
                        fl w-25</code>
                    </DIV_33>
                  </DIV_37>
                  <DIV_38>
                    <DIV_30>
                      <code>
                        fl w-70</code>
                    </DIV_30>
                  </DIV_38>
                  <DIV_39>
                    <DIV_33>
                      <code>
                        fl w-30</code>
                    </DIV_33>
                  </DIV_39>
                  <DIV_40>
                    <DIV_30>
                      <code>
                        fl w-60</code>
                    </DIV_30>
                  </DIV_40>
                  <DIV_41>
                    <DIV_33>
                      <code>
                        fl w-40</code>
                    </DIV_33>
                  </DIV_41>
                  <DIV_42>
                    <DIV_30>
                      <code>
                        fl w-50</code>
                    </DIV_30>
                  </DIV_42>
                  <DIV_42>
                    <DIV_30>
                      <code>
                        fl w-50</code>
                    </DIV_30>
                  </DIV_42>
                  <DIV_43>
                    <DIV_30>
                      <code>
                        fl w-third</code>
                    </DIV_30>
                  </DIV_43>
                  <DIV_43>
                    <DIV_30>
                      <code>
                        fl w-third</code>
                    </DIV_30>
                  </DIV_43>
                  <DIV_43>
                    <DIV_30>
                      <code>
                        fl w-third</code>
                    </DIV_30>
                  </DIV_43>
                  <DIV_43>
                    <DIV_44>
                      <code>
                        fl w-third</code>
                    </DIV_44>
                  </DIV_43>
                  <DIV_45>
                    <DIV_44>
                      <code>
                        fl w-two-thirds</code>
                    </DIV_44>
                  </DIV_45>
                  <DIV_37>
                    <DIV_30>
                      <code>
                        fl w-25</code>
                    </DIV_30>
                  </DIV_37>
                  <DIV_37>
                    <DIV_30>
                      <code>
                        fl w-25 </code>
                    </DIV_30>
                  </DIV_37>
                  <DIV_37>
                    <DIV_30>
                      <code>
                        fl w-25 </code>
                    </DIV_30>
                  </DIV_37>
                  <DIV_37>
                    <DIV_30>
                      <code>
                        fl w-25 </code>
                    </DIV_30>
                  </DIV_37>
                  <DIV_35>
                    <DIV_30>
                      <code>
                        fl w-20 </code>
                    </DIV_30>
                  </DIV_35>
                  <DIV_35>
                    <DIV_30>
                      <code>
                        fl w-20 </code>
                    </DIV_30>
                  </DIV_35>
                  <DIV_35>
                    <DIV_30>
                      <code>
                        fl w-20 </code>
                    </DIV_30>
                  </DIV_35>
                  <DIV_35>
                    <DIV_30>
                      <code>
                        fl w-20 </code>
                    </DIV_30>
                  </DIV_35>
                  <DIV_35>
                    <DIV_30>
                      <code>
                        fl w-20 </code>
                    </DIV_30>
                  </DIV_35>
                  <DIV_32>
                    <DIV_30>
                      <code>
                        fl w-10 </code>
                    </DIV_30>
                  </DIV_32>
                  <DIV_32>
                    <DIV_30>
                      <code>
                        fl w-10 </code>
                    </DIV_30>
                  </DIV_32>
                  <DIV_32>
                    <DIV_30>
                      <code>
                        fl w-10 </code>
                    </DIV_30>
                  </DIV_32>
                  <DIV_32>
                    <DIV_30>
                      <code>
                        fl w-10 </code>
                    </DIV_30>
                  </DIV_32>
                  <DIV_32>
                    <DIV_30>
                      <code>
                        fl w-10 </code>
                    </DIV_30>
                  </DIV_32>
                  <DIV_32>
                    <DIV_30>
                      <code>
                        fl w-10 </code>
                    </DIV_30>
                  </DIV_32>
                  <DIV_32>
                    <DIV_30>
                      <code>
                        fl w-10 </code>
                    </DIV_30>
                  </DIV_32>
                  <DIV_32>
                    <DIV_30>
                      <code>
                        fl w-10 </code>
                    </DIV_30>
                  </DIV_32>
                  <DIV_32>
                    <DIV_30>
                      <code>
                        fl w-10 </code>
                    </DIV_30>
                  </DIV_32>
                  <DIV_32>
                    <DIV_30>
                      <code>
                        fl w-10 </code>
                    </DIV_30>
                  </DIV_32>
                </DIV_28>
              </DIV_27>
            </SECTION_6>
          </ARTICLE_12>
          <DIV_20>
            <DIV_21>
              <ARTICLE_12>
                <H3_7>
                  Colors</H3_7>
                <DIV_24>
                  <DIV_46>
                    <TABLE_1 cellSpacing={0} cellPadding={0}>
                      <TBODY_1>
                        <tr>
                          <TD_1/>
                          <TD_2>Aa</TD_2>
                          <TD_3>--dark-red: #e7040f;</TD_3>
                        </tr>
                        <tr>
                          <TD_4/>
                          <TD_5>Aa</TD_5>
                          <TD_3>--red: #ff4136;</TD_3>
                        </tr>
                        <tr>
                          <TD_6/>
                          <TD_7>Aa</TD_7>
                          <TD_3>--light-red: #ff725c;</TD_3>
                        </tr>
                        <tr>
                          <TD_8/>
                          <TD_9>Aa</TD_9>
                          <TD_3>--orange: #ff6300;</TD_3>
                        </tr>
                        <tr>
                          <TD_10/>
                          <TD_11>Aa</TD_11>
                          <TD_3>--gold: #ffb700;</TD_3>
                        </tr>
                        <tr>
                          <TD_12/>
                          <TD_13>Aa</TD_13>
                          <TD_3>--yellow: #ffde37;</TD_3>
                        </tr>
                        <tr>
                          <TD_14/>
                          <TD_15>Aa</TD_15>
                          <TD_3>--light-yellow: #fbf1a9;</TD_3>
                        </tr>
                        <tr>
                          <TD_16/>
                          <TD_17>Aa</TD_17>
                          <TD_3>--purple: #5e2ca5;</TD_3>
                        </tr>
                        <tr>
                          <TD_18/>
                          <TD_19>Aa</TD_19>
                          <TD_3>--light-purple: #a463f2;</TD_3>
                        </tr>
                        <tr>
                          <TD_20/>
                          <TD_21>Aa</TD_21>
                          <TD_3>--dark-pink: #d5008f;</TD_3>
                        </tr>
                        <tr>
                          <TD_22/>
                          <TD_23>Aa</TD_23>
                          <TD_3>--hot-pink: #ff41b4;</TD_3>
                        </tr>
                        <tr>
                          <TD_24/>
                          <TD_25>Aa</TD_25>
                          <TD_3>--pink: #ff80cc;</TD_3>
                        </tr>
                        <tr>
                          <TD_26/>
                          <TD_27>Aa</TD_27>
                          <TD_3>--light-pink: #ffa3d7;</TD_3>
                        </tr>
                        <tr>
                          <TD_28/>
                          <TD_29>Aa</TD_29>
                          <TD_3>--dark-green: #137752;</TD_3>
                        </tr>
                        <tr>
                          <TD_30/>
                          <TD_31>Aa</TD_31>
                          <TD_3>--green: #19a974;</TD_3>
                        </tr>
                        <tr>
                          <TD_32/>
                          <TD_33>Aa</TD_33>
                          <TD_3>--light-green: #9eebcf;</TD_3>
                        </tr>
                        <tr>
                          <TD_34/>
                          <TD_35>Aa</TD_35>
                          <TD_3>--navy: #001b44;</TD_3>
                        </tr>
                        <tr>
                          <TD_36/>
                          <TD_37>Aa</TD_37>
                          <TD_3>--dark-blue: #00449e;</TD_3>
                        </tr>
                        <tr>
                          <TD_38/>
                          <TD_39>Aa</TD_39>
                          <TD_3>--blue: #357edd;</TD_3>
                        </tr>
                        <tr>
                          <TD_40/>
                          <TD_41>Aa</TD_41>
                          <TD_3>--light-blue: #96ccff;</TD_3>
                        </tr>
                        <tr>
                          <TD_42/>
                          <TD_43>Aa</TD_43>
                          <TD_3>--lightest-blue: #cdecff;</TD_3>
                        </tr>
                        <tr>
                          <TD_44/>
                          <TD_45>Aa</TD_45>
                          <TD_3>--washed-blue: #f6fffe;</TD_3>
                        </tr>
                        <tr>
                          <TD_46/>
                          <TD_47>Aa</TD_47>
                          <TD_3>--washed-green: #e8fdf5;</TD_3>
                        </tr>
                        <tr>
                          <TD_48/>
                          <TD_49>Aa</TD_49>
                          <TD_3>--washed-yellow: #fffceb;</TD_3>
                        </tr>
                        <tr>
                          <TD_50/>
                          <TD_51>Aa</TD_51>
                          <TD_3>--washed-red: #ffdfdf;</TD_3>
                        </tr>
                      </TBODY_1>
                    </TABLE_1>
                  </DIV_46>
                  <DIV_23>
                    <PRE_4>
                      <CODE_5>

                        .bg-dark-red {'{'} background-color: var(--dark-red); {'}\n'}
                        .bg-red {'{'} background-color: var(--red); {'}\n'}
                        .bg-orange {'{'} background-color: var(--orange); {'}\n'}
                        .bg-gold {'{'} background-color: var(--gold); {'}\n'}
                        .bg-yellow {'{'} background-color: var(--yellow); {'}\n'}
                        .bg-purple {'{'} background-color: var(--purple); {'}\n'}
                        .bg-light-purple {'{'} background-color: var(--light-purple); {'}\n'}
                        .bg-hot-pink {'{'} background-color:  var(--hot-pink); {'}\n'}
                        .bg-dark-pink {'{'} background-color: var(--dark-pink); {'}\n'}
                        .bg-pink {'{'} background-color: var(--pink); {'}\n'}
                        .bg-dark-green {'{'} background-color: var(--dark-green); {'}\n'}
                        .bg-green {'{'} background-color: var(--green); {'}\n'}
                        .bg-navy {'{'} background-color: var(--navy); {'}\n'}
                        .bg-dark-blue {'{'} background-color: var(--dark-blue); {'}\n'}
                        .bg-blue {'{'} background-color: var(--blue); {'}\n'}
                        .bg-light-blue {'{'} background-color: var(--light-blue); {'}\n'}
                        .bg-lightest-blue {'{'} background-color: var(--lightest-blue); {'}\n'}
                        .bg-washed-blue {'{'} background-color: var(--washed-blue); {'}\n'}
                        .bg-washed-green {'{'} background-color: var(--washed-green); {'}\n'}
                        .bg-washed-yellow {'{'} background-color: var(--washed-yellow); {'}\n'}
                        .bg-light-pink {'{'} background-color: var(--light-pink); {'}\n'}
                        .bg-light-yellow {'{'} background-color: var(--light-yellow); {'}\n'}
                        .bg-light-red {'{'} background-color: var(--light-red); {'}\n'}
                        .dark-red {'{'} color: var(--dark-red); {'}\n'}
                        .red {'{'} color: var(--red); {'}\n'}
                        .orange {'{'} color: var(--orange); {'}\n'}
                        .gold {'{'} color: var(--gold); {'}\n'}
                        .yellow {'{'} color: var(--yellow); {'}\n'}
                        .purple {'{'} color: var(--purple); {'}\n'}
                        .light-purple {'{'} color: var(--light-purple); {'}\n'}
                        .hot-pink {'{'} color:  var(--hot-pink); {'}\n'}
                        .dark-pink {'{'} color: var(--dark-pink); {'}\n'}
                        .pink {'{'} color: var(--pink); {'}\n'}
                        .dark-green {'{'} color: var(--dark-green); {'}\n'}
                        .green {'{'} color: var(--green); {'}\n'}
                        .navy {'{'} color: var(--navy); {'}\n'}
                        .dark-blue {'{'} color: var(--dark-blue); {'}\n'}
                        .blue {'{'} color: var(--blue); {'}\n'}
                        .light-blue {'{'} color: var(--light-blue); {'}\n'}
                        .lightest-blue {'{'} color: var(--lightest-blue); {'}\n'}
                        .washed-blue {'{'} color: var(--washed-blue); {'}\n'}
                        .washed-green {'{'} color: var(--washed-green); {'}\n'}
                        .washed-yellow {'{'} color: var(--washed-yellow); {'}\n'}
                        .light-pink {'{'} color: var(--light-pink); {'}\n'}
                        .light-yellow {'{'} color: var(--light-yellow); {'}\n'}
                        .light-red {'{'} color: var(--light-red); {'}\n'}
                      </CODE_5>

                    </PRE_4>
                  </DIV_23>
                </DIV_24>
              </ARTICLE_12>
              <ARTICLE_12>
                <H3_7>
                  Borders</H3_7>
                <DIV_24>
                  <DIV_23>
                    <DIV_47>
                      ba = border on all sides</DIV_47>
                    <DIV_48>
                      bt = border top</DIV_48>
                    <DIV_49>
                      br = border right</DIV_49>
                    <DIV_50>
                      bb = border bottom</DIV_50>
                    <DIV_51>
                      bl = border left</DIV_51>
                    <DIV_52>
                      bn = border none</DIV_52>
                  </DIV_23>
                  <DIV_23>
                    <PRE_3>
                      <CODE_4>

                        .ba {'{'} border-style: solid; border-width: 1px; {'}\n'}
                        .bt {'{'} border-top-style: solid; border-top-width: 1px; {'}\n'}
                        .br {'{'} border-right-style: solid; border-right-width: 1px; {'}\n'}
                        .bb {'{'} border-bottom-style: solid; border-bottom-width: 1px; {'}\n'}
                        .bl {'{'} border-left-style: solid; border-left-width: 1px; {'}\n'}
                        .bn {'{'} border-style: none; border-width: 0; {'}\n'}
                      </CODE_4>

                    </PRE_3>
                  </DIV_23>
                </DIV_24>
              </ARTICLE_12>
              <ARTICLE_12>
                <H3_7>
                  Border Styles</H3_7>
                <DIV_24>
                  <DIV_23>
                    <DIV_53>
                      dotted</DIV_53>
                    <DIV_54>
                      dashed</DIV_54>
                    <DIV_55>
                      solid</DIV_55>
                    <DIV_56>
                      none</DIV_56>
                  </DIV_23>
                  <DIV_23>
                    <PRE_3>
                      <CODE_4>

                        .b--dotted {'{'} border-style: dotted; {'}\n'}
                        .b--dashed {'{'} border-style: dashed; {'}\n'}
                        .b--solid {'{'}  border-style: solid; {'}\n'}
                        .b--none {'{'}   border-style: none; {'}\n'}
                      </CODE_4>

                    </PRE_3>
                  </DIV_23>
                </DIV_24>
              </ARTICLE_12>
              <ARTICLE_12>
                <H3_7>
                  Border Widths</H3_7>
                <DIV_24>
                  <DIV_23>
                    <DIV_57>
                      default</DIV_57>
                    <DIV_58>
                      .125rem</DIV_58>
                    <DIV_59>
                      .25rem</DIV_59>
                    <DIV_60>
                      .5rem</DIV_60>
                    <DIV_61>
                      1rem</DIV_61>
                    <DIV_62>
                      2rem</DIV_62>
                  </DIV_23>
                  <DIV_23>
                    <PRE_3>
                      <CODE_4>

                        .bw0 {'{'} border-width: 0; {'}\n'}
                        .bw1 {'{'} border-width: .125rem; {'}\n'}
                        .bw2 {'{'} border-width: .25rem; {'}\n'}
                        .bw3 {'{'} border-width: .5rem; {'}\n'}
                        .bw4 {'{'} border-width: 1rem; {'}\n'}
                        .bw5 {'{'} border-width: 2rem; {'}\n'}
                      </CODE_4>

                    </PRE_3>
                  </DIV_23>
                </DIV_24>
              </ARTICLE_12>
              <ARTICLE_12>
                <H3_7>
                  Border Colors</H3_7>
                <DIV_24>
                  <DIV_63>
                    <DIV_64>
                      b--black</DIV_64>
                    <DIV_65>
                      b--black-90</DIV_65>
                    <DIV_66>
                      b--black-80</DIV_66>
                    <DIV_67>
                      b--black-70</DIV_67>
                    <DIV_68>
                      b--black-60</DIV_68>
                    <DIV_69>
                      b--black-50</DIV_69>
                    <DIV_70>
                      b--black-40</DIV_70>
                    <DIV_71>
                      b--black-30</DIV_71>
                    <DIV_72>
                      b--black-20</DIV_72>
                    <DIV_73>
                      b--black-10</DIV_73>
                    <DIV_74>
                      b--black-05</DIV_74>
                    <DIV_75>
                      b--black-025</DIV_75>
                    <DIV_76>
                      b--black-0125</DIV_76>
                    <DIV_77>
                      b--near-black</DIV_77>
                    <DIV_78>
                      b--dark-gray</DIV_78>
                    <DIV_79>
                      b--mid-gray</DIV_79>
                    <DIV_80>
                      b--gray</DIV_80>
                    <DIV_81>
                      <DIV_82>
                        b--silver</DIV_82>
                      <DIV_83>
                        b--light-silver</DIV_83>
                      <DIV_84>
                        b--light-gray</DIV_84>
                      <DIV_85>
                        b--near-white</DIV_85>
                      <DIV_86>
                        b--white</DIV_86>
                      <DIV_87>
                        b--white-90</DIV_87>
                      <DIV_88>
                        b--white-80</DIV_88>
                      <DIV_89>
                        b--white-70</DIV_89>
                      <DIV_90>
                        b--white-60</DIV_90>
                      <DIV_91>
                        b--white-50</DIV_91>
                      <DIV_92>
                        b--white-40</DIV_92>
                      <DIV_93>
                        b--white-30</DIV_93>
                      <DIV_94>
                        b--white-20</DIV_94>
                      <DIV_95>
                        b--white-10</DIV_95>
                      <DIV_96>
                        b--white-05</DIV_96>
                      <DIV_97>
                        b--white-025</DIV_97>
                      <DIV_98>
                        b--white-0125</DIV_98>
                      <DIV_99>
                        b--dark-red</DIV_99>
                      <DIV_100>
                        b--red</DIV_100>
                      <DIV_101>
                        b--orange</DIV_101>
                      <DIV_102>
                        b--gold</DIV_102>
                      <DIV_103>
                        b--yellow</DIV_103>
                      <DIV_104>
                        b--purple</DIV_104>
                      <DIV_105>
                        b--light-purple</DIV_105>
                      <DIV_106>
                        b--hot-pink</DIV_106>
                      <DIV_107>
                        b--dark-pink</DIV_107>
                      <DIV_108>
                        b--pink</DIV_108>
                      <DIV_109>
                        b--dark-green</DIV_109>
                      <DIV_110>
                        b--green</DIV_110>
                      <DIV_111>
                        b--navy</DIV_111>
                      <DIV_112>
                        b--dark-blue</DIV_112>
                      <DIV_113>
                        b--blue</DIV_113>
                      <DIV_114>
                        b--light-blue</DIV_114>
                      <DIV_115>
                        b--lightest-blue</DIV_115>
                      <DIV_116>
                        b--washed-blue</DIV_116>
                      <DIV_117>
                        b--washed-green</DIV_117>
                      <DIV_118>
                        b--washed-yellow</DIV_118>
                      <DIV_119>
                        b--light-pink</DIV_119>
                      <DIV_120>
                        b--light-yellow</DIV_120>
                      <DIV_121>
                        b--light-red</DIV_121>
                      <DIV_122>
                        b--transparent</DIV_122>
                    </DIV_81>
                  </DIV_63>
                  <DIV_23>
                    <PRE_3>
                      <CODE_4>

                        .b--black {'{'}        border-color: var(--black); {'}\n'}
                        .b--black-90 {'{'}   border-color: var(--black-90); {'}\n'}
                        .b--black-80 {'{'}   border-color: var(--black-80); {'}\n'}
                        .b--black-70 {'{'}   border-color: var(--black-70); {'}\n'}
                        .b--black-60 {'{'}   border-color: var(--black-60); {'}\n'}
                        .b--black-50 {'{'}   border-color: var(--black-50); {'}\n'}
                        .b--black-40 {'{'}   border-color: var(--black-40); {'}\n'}
                        .b--black-30 {'{'}   border-color: var(--black-30); {'}\n'}
                        .b--black-20 {'{'}   border-color: var(--black-20); {'}\n'}
                        .b--black-10 {'{'}   border-color: var(--black-10); {'}\n'}
                        .b--black-05 {'{'}   border-color: var(--black-05); {'}\n'}
                        .b--black-025 {'{'}   border-color: var(--black-025); {'}\n'}
                        .b--black-0125 {'{'}   border-color: var(--black-0125); {'}\n'}
                        .b--near-black {'{'}   border-color: var(--near-black); {'}\n'}
                        .b--dark-gray {'{'}    border-color: var(--dark-gray); {'}\n'}
                        .b--mid-gray {'{'}     border-color: var(--mid-gray); {'}\n'}
                        .b--gray {'{'}         border-color: var(--gray); {'}\n'}
                        .b--silver {'{'}       border-color: var(--silver); {'}\n'}
                        .b--light-silver {'{'} border-color: var(--light-silver); {'}\n'}
                        .b--light-gray {'{'}   border-color: var(--light-gray); {'}\n'}
                        .b--near-white {'{'}   border-color: var(--near-white); {'}\n'}
                        .b--white {'{'}        border-color: var(--white); {'}\n'}
                        .b--white-90 {'{'}   border-color: var(--white-90); {'}\n'}
                        .b--white-80 {'{'}   border-color: var(--white-80); {'}\n'}
                        .b--white-70 {'{'}   border-color: var(--white-70); {'}\n'}
                        .b--white-60 {'{'}   border-color: var(--white-60); {'}\n'}
                        .b--white-50 {'{'}   border-color: var(--white-50); {'}\n'}
                        .b--white-40 {'{'}   border-color: var(--white-40); {'}\n'}
                        .b--white-30 {'{'}   border-color: var(--white-30); {'}\n'}
                        .b--white-20 {'{'}   border-color: var(--white-20); {'}\n'}
                        .b--white-10 {'{'}   border-color: var(--white-10); {'}\n'}
                        .b--white-05 {'{'}   border-color: var(--white-05); {'}\n'}
                        .b--white-025 {'{'}   border-color: var(--white-025); {'}\n'}
                        .b--white-0125 {'{'}   border-color: var(--white-0125); {'}\n'}
                        .b--dark-red {'{'} border-color:  var(--dark-red); {'}\n'}
                        .b--red {'{'} border-color:  var(--red); {'}\n'}
                        .b--orange {'{'} border-color:  var(--orange); {'}\n'}
                        .b--gold {'{'} border-color:  var(--gold); {'}\n'}
                        .b--yellow {'{'} border-color:  var(--yellow); {'}\n'}
                        .b--purple {'{'} border-color:  var(--purple); {'}\n'}
                        .b--light-purple {'{'} border-color:  var(--light-purple); {'}\n'}
                        .b--hot-pink {'{'} border-color:  var(--hot-pink); {'}\n'}
                        .b--dark-pink {'{'} border-color:  var(--dark-pink); {'}\n'}
                        .b--pink {'{'} border-color:  var(--pink); {'}\n'}
                        .b--dark-green {'{'} border-color:  var(--dark-green); {'}\n'}
                        .b--green {'{'} border-color:  var(--green); {'}\n'}
                        .b--navy {'{'} border-color:  var(--navy); {'}\n'}
                        .b--dark-blue {'{'} border-color:  var(--dark-blue); {'}\n'}
                        .b--blue {'{'} border-color:  var(--blue); {'}\n'}
                        .b--light-blue {'{'} border-color:  var(--light-blue); {'}\n'}
                        .b--lightest-blue {'{'} border-color:  var(--lightest-blue); {'}\n'}
                        .b--washed-blue {'{'} border-color:  var(--washed-blue); {'}\n'}
                        .b--washed-green {'{'} border-color:  var(--washed-green); {'}\n'}
                        .b--washed-yellow {'{'} border-color:  var(--washed-yellow); {'}\n'}
                        .b--light-pink {'{'} border-color:  var(--light-pink); {'}\n'}
                        .b--light-yellow {'{'} border-color:  var(--light-yellow) {'}\n'}
                        .b--light-red {'{'} border-color:  var(--light-red); {'}\n'}
                        .b--transparent {'{'} border-color: var(--transparent); {'}\n'}
                      </CODE_4>

                    </PRE_3>
                  </DIV_23>
                </DIV_24>
              </ARTICLE_12>
              <ARTICLE_12>
                <H3_7>
                  Border Radii</H3_7>
                <DIV_24>
                  <DIV_23>
                    <DIV_123>
                      br1</DIV_123>
                    <DIV_124>
                      br2</DIV_124>
                    <DIV_125>
                      br3</DIV_125>
                    <DIV_126>
                      br4</DIV_126>
                    <br />
                    <DIV_127>
                      <DIV_25>
                        <DIV_128 />
                      </DIV_25>
                      <DIV_25>
                        <DIV_129>
                          pill</DIV_129>
                      </DIV_25>
                    </DIV_127>
                    <DIV_130>
                      br--bottom</DIV_130>
                    <DIV_131>
                      br--top</DIV_131>
                    <br />
                    <DIV_132>
                      br--left</DIV_132>
                    <DIV_133>
                      br--right</DIV_133>
                  </DIV_23>
                  <DIV_23>
                    <PRE_3>
                      <CODE_4>

                        .br0 {'{'}        border-radius: 0; {'}\n'}
                        .br1 {'{'}        border-radius: .125rem; {'}\n'}
                        .br2 {'{'}        border-radius: .25rem; {'}\n'}
                        .br3 {'{'}        border-radius: .5rem; {'}\n'}
                        .br4 {'{'}        border-radius: 1rem; {'}\n'}
                        .br-100 {'{'}     border-radius: 100%; {'}\n'}
                        .br-pill {'{'}    border-radius: 9999px; {'}\n'}
                        .br--bottom {'{'}
                        border-top-left-radius: 0;
                        border-top-right-radius: 0;
                      {'}\n'}
                        .br--top {'{'}
                        border-bottom-left-radius: 0;
                        border-bottom-right-radius: 0;
                      {'}\n'}
                        .br--right {'{'}
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                      {'}\n'}
                        .br--left {'{'}
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                      {'}\n'}
                      </CODE_4>

                    </PRE_3>
                  </DIV_23>
                </DIV_24>
              </ARTICLE_12>
              <ARTICLE_12>
                <H3_7>
                  Hover Animations</H3_7>
                <DIV_24>
                  <DIV_46>
                    <DIV_134>
                      Grow</DIV_134>
                    <DIV_135>
                      Dim</DIV_135>
                  </DIV_46>
                  <DIV_23>
                    <PRE_3>
                      <CODE_4>

                        .grow {'{'}
                        -moz-osx-font-smoothing: grayscale;
                        backface-visibility: hidden;
                        transform: translateZ(0);
                        transition: transform 0.25s ease-out;
                      {'}\n'}
                        .grow:hover,
                        .grow:focus {'{'}
                        transform: scale(1.05);
                      {'}\n'}
                        .dim {'{'}
                        opacity: 1;
                        transition: opacity .15s ease-in;
                      {'}\n'}
                        .dim:hover,
                        .dim:focus {'{'}
                        opacity: .5;
                        transition: opacity .15s ease-in;
                      {'}\n'}
                      </CODE_4>

                    </PRE_3>
                  </DIV_23>
                </DIV_24>
              </ARTICLE_12>
            </DIV_21>
          </DIV_20>
        </section>
        <SECTION_7>
          <DIV_136>
            <DIV_11>
              <H3_9>
                Used by people at</H3_9>
              <DIV_137>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/californiasunday.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/gds.blog.gov.uk?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/amazon.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/ibm.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/jaguar.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/hillaryclinton.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/nerdwallet.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/egghead.io?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/heroku.com?size=256"/>
                </DIV_138>
              </DIV_137>
              <DIV_137>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/tesla.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/npr.org?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/airbnb.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/facebook.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/nest.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/twitter.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/salesforce.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/bluebottlecoffee.com?size=256"/>
                </DIV_138>
                <DIV_138>
                  <IMG_1 src="http://logo.clearbit.com/ted.com?size=256"/>
                </DIV_138>
              </DIV_137>
            </DIV_11>
          </DIV_136>
        </SECTION_7>
        <SECTION_8 id="testimonials">
          <DIV_6>
            <DIV_139>
              <H3_10>
                Testimonials</H3_10>
            </DIV_139>
            <DIV_140>
              <BLOCKQUOTE_1>
                <P_40>
                  Here’s why I think designing systems with tools/frameworks like Tachyons is a Good Idea™.</P_40>
                <P_41>
                  Design Systems break as they scale (either scaling org or scaling product) because new components/variants of a component are introduced. Those variants sometimes (read: often) go undocumented, leading to duplication when that component/variant is needed (and created) again. Even when the component is documented, documenting effectively often means dozens/hundreds of instances to capture all states/variants. Systems like Tachyons et al. approach this problem by instead documenting and limiting *properties* of components. (I like to think of this as “subatomic” design.)</P_41>
                <P_42>
                  You then create components by composing subatomic components (properties). Rather than creating a component and its variants, you simply have a comprehensive list of “ingredient” subatomic components. Those subatomic components can be combined in thousands of ways to create hundreds of components. The properties of those components are numerous, but constrained to a set of acceptable values (our subatomic components).”</P_42>
                <CITE_1>
                  <SPAN_2>
                    Daniel Eden</SPAN_2>
                  <SPAN_3>
                    Designer at Facebook</SPAN_3>
                </CITE_1>
              </BLOCKQUOTE_1>
              <BLOCKQUOTE_2>
                <P_43>
                  Tachyons has seriously blown my mind. Making landing pages responsive is now… somehow… actually fun?!</P_43>
                <CITE_2>
                  <SPAN_2>
                    Ian Storm Taylor</SPAN_2>
                  <SPAN_3>
                    Co-founder of <A_14 href="https://segment.com" title="Segment.com">
                    Segment.com</A_14>
                  </SPAN_3>
                </CITE_2>
              </BLOCKQUOTE_2>
              <BLOCKQUOTE_2>
                <P_43>
                  I used Tachyons for the first time on <A_15 href="http://goldenstaterecord.com">
                  goldenstaterecord.com</A_15>
                  . Really fast to make big changes to the design in-flight. 👍</P_43>
                <CITE_2>
                  <SPAN_2>
                    Wilson Miner</SPAN_2>
                  <SPAN_3>
                    Digital Design - The California Sunday Magazine</SPAN_3>
                </CITE_2>
              </BLOCKQUOTE_2>
              <BLOCKQUOTE_3>
                <P_43>
                  Tachyons is powerful, obvious, and well documented. It's made me rethink my approach to building organized and componentized CSS. I highly recommend you try it.</P_43>
                <CITE_2>
                  <SPAN_2>
                    Dustin Senos</SPAN_2>
                  <SPAN_3>
                    Designer</SPAN_3>
                </CITE_2>
              </BLOCKQUOTE_3>
            </DIV_140>
          </DIV_6>
        </SECTION_8>
      </MAIN_1>
      <FOOTER_1>
        <DIV_11>
          <DIV_141>
            <A_16 href="/" title="Home">
              Home</A_16>
            <A_16 href="/docs" title="Docs">
              Docs</A_16>
            <A_16 href="/components/" title="Components">
              Components</A_16>
            <A_16 href="/gallery/" title="Gallery of Sites built with Tachyons">
              Gallery</A_16>
            <A_16 href="/resources/" title="Resources related to Tachyons">
              Resources</A_16>
            <A_16 href="/xray/" title="The X-Ray chrome extension for aligning things to a grid.">
              X-Ray</A_16>
            <A_16 href="http://opencollective.com/tachyons" title="Support Tachyons Development">
              Supporting Tachyons</A_16>
          </DIV_141>
          <ARTICLE_13>
            <A_17 href="https://twitter.com/intent/tweet?text=Tachyons: A functional css toolkit for designing in the browser.&url=http://tachyons.io" style={{ backgroundColor: 'rgb(85, 172, 238)' }}>
              <svg className="geomicon dib v-mid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={16} height={16} fill="#fff">
                <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"/>
              </svg>
              <SPAN_1 style={{ fontSize: 12 }}>
                Tweet</SPAN_1>
            </A_17>
          </ARTICLE_13>
          <DIV_142>
            <A_18 href="https://twitter.com/tachyons_css" title="Follow us on Twitter">
              <DIV_143>
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                  <path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/>
                </svg>
              </DIV_143>
              <span>
Follow @tachyons_css</span>
            </A_18>
            <A_18 href="http://tachyons-slack-invite.herokuapp.com" title="Join our Slack Channel">
              <DIV_144>
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                  <g fillRule="nonzero">
                    <path d="M6.586 7.33l.69 2.057 2.137-.716-.69-2.056-2.137.716z"/>
                    <path
                      d="M12.55 9.37l-1.037.347.36 1.073c.145.434-.09.904-.524 1.05-.096.03-.19.045-.287.042-.338-.01-.65-.226-.765-.566l-.36-1.072-2.138.716.36 1.072c.145.435-.09.905-.523 1.05-.096.032-.192.045-.286.043-.34-.01-.65-.226-.764-.566l-.36-1.075-1.037.348c-.096.03-.19.045-.286.042-.34-.008-.65-.226-.765-.565-.146-.434.09-.904.522-1.05L5.7 9.914l-.69-2.058-1.037.347c-.094.032-.19.045-.285.043-.338-.01-.65-.226-.765-.566-.145-.434.09-.904.523-1.05l1.037-.347-.36-1.073c-.145-.434.09-.904.524-1.05.435-.145.905.09 1.05.524l.36 1.072 2.137-.716-.36-1.072c-.144-.435.09-.905.524-1.05.435-.145.906.09 1.05.523l.36 1.075 1.037-.347c.434-.146.904.088 1.05.522.145.434-.09.904-.523 1.05l-1.037.347.69 2.057 1.036-.347c.435-.145.905.09 1.05.523.146.434-.09.904-.522 1.05zm2.78-3.57C13.68.304 11.298-.98 5.8.67.304 2.32-.98 4.7.67 10.2c1.65 5.497 4.03 6.78 9.53 5.13 5.497-1.65 6.78-4.03 5.13-9.53z"/>
                  </g>
                </svg>
              </DIV_144>
              <span>
Need Help? Join our Slack Channel</span>
            </A_18>
            <A_19 href="https://github.com/tachyons-css/tachyons/issues" title="File a bug, request a feature, ask a question!">
              <DIV_143>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                  <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/>
                </svg>
              </DIV_143>
              <span>
Open an Issue on GitHub</span>
            </A_19>
          </DIV_142>
          <P_44>
            Have a question? Need help? Feel free to open an issue on GitHub or ask a question in our slack channel. We're here to try and help make designing in the browser fun.</P_44>
          <DIV_145 />
          <SMALL_2>
            A tachyon /ˈtæki.ɒn/ or tachyonic particle is a hypothetical particle that always moves faster than light. The word comes from the Greek:<br />
            <br />
            ταχύς or tachys, meaning "swift, quick, fast, rapid"</SMALL_2>
        </DIV_11>
      </FOOTER_1>
    </DIV_1>
  </div>
)
