import React from 'react'

export default () => (
  <div className="w-100 sans-serif">
    <header className="w-100 pa3 ph5-ns bg-white">
      <div className="db dt-ns mw9 center w-100">
        <div className="db dtc-ns v-mid tl w-50">
          <a href="/" className="dib f5 f4-ns fw6 mt0 mb1 link black-70" title="Home">
            Tachyons
            <div className="dib">
              <small className="nowrap f6 mt2 mt3-ns pr2 black-70 fw2">v4.7.0</small>
            </div>
          </a>
        </div>
        <nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
          <a title="Documentation" href="/docs/" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
            Docs
          </a>
          <a title="Components" href="/components/" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
            Components
          </a>
          <a title="Gallery of sites built with Tachyons" href="/gallery/" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
            Gallery
          </a>
          <a title="Resources" href="/resources/" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
            Resources
          </a>
          <a title="Tachyons on GitHub" href="http://github.com/tachyons-css/tachyons/" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dn dib-l">
            GitHub
          </a>
        </nav>
      </div>
    </header>
    <main className="w-100 bt b--black-10 bg-white">
      <section className="bg-black-0125 w-100">
        <article className="pb4">
          <header className="ph3 ph5-ns w-100 bg-transparent pv3 mb4 mb5-ns bb b--black-10 overflow-auto">
            <div className="nowrap mw9 center">
              <a title="Getting Started" href="#getting-started" className="pv1-ns f6 fw6 dim link black-70 mr2 mr3-m mr4-l dib">
                Getting Started
              </a>
              <a title="Principles" href="#principles" className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
                Principles
              </a>
              <a title="Features" href="#features" className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
                Features
              </a>
              <a title="Style Guide" href="#style" className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
                Style Guide
              </a>
              <a title="Testimonials" href="#testimonials" className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
                Testimonials
              </a>
            </div>
          </header>
          <div className="ph3 ph5-ns">
            <div className="cf mw9 center tc-m">
              <div className="fl w-100 overflow-auto v-top">
                <a href="https://twitter.com/intent/tweet?text=Tachyons: A functional css toolkit for designing in the browser.&url=http://tachyons.io" className="twitter bg-white-50 dim link dib mb2 br2 ph2 pb1 lh-solid v-top" style={{ backgroundColor: '#55acee' }}>
                  <svg className="geomicon dib v-mid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={16} height={16} fill="#fff">
                    <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"/>
                  </svg>
                  <span className="dib v-mid white fw6" style={{ fontSize: 12 }}>Tweet</span>
                </a>
              </div>
              <div className="pb3 pb4-ns pt4 pt5-ns mt4 black-70 fl-l w-50-l">
                <h1 className="f4 fw6 f1-ns lh-title measure mt0">
                  Built for designing.
                </h1>
                <p className="f5 f4-ns fw4 b measure dib-m lh-copy">
                  Create fast loading, highly readable, and
                  100% responsive interfaces with as little css as possible.
                </p>
                <p className="measure f5 f4-ns lh-copy dn">
                  Modules can be altered, extended, or changed to meet your design needs.
                  You shouldn't need to write css everytime you want to build a new
                  ui component. By learning the composable building blocks in tachyons, you
                  can quickly start to build out interfaces while writing little to no css.
                </p>
              </div>
              <div className="fl-l w-50-l tl tc-ns pt3 pt4-m pt6-l">
                <a className="f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" href="https://raw.githubusercontent.com/tachyons-css/tachyons/master/css/tachyons.min.css">
                  Download <code className="f6 fw4 di">v4.7.0</code>
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="bt b--black-10 bg-washed-blue black-70 ph3 ph5-ns pv4 pv5-ns" id="getting-started">
          <div className="mw9 center">
            <h1 className="mt0 f5 f3-ns">Getting Started</h1>
            <p className="f5 measure lh-copy">
              Copy the line of code below and paste it in the head of the html file(s) you want to include tachyons in.
            </p>
            <pre className="pre black-70" style={{ overflow: 'auto' }}><code className="code f6 dib pa2 bg-black-70 washed-green" style={{ fontSize: 14 }}>&lt;link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"/&gt;</code></pre>
            <p className="mt4"><b>or</b> install via npm</p>
            <pre className="pre black-70" style={{ overflow: 'auto' }}><code className="code f6 dib pa2 bg-black-70 washed-green" style={{ fontSize: 14 }}>npm install --save-dev tachyons@4.7.0</code></pre>
            <p className="mt4"><b>or</b> grab all the source files and build+develop locally</p>
            <pre className="pre" style={{ overflow: 'auto' }}><code className="code f6 dib pa2 bg-black-70 washed-green" style={{ fontSize: 14 }}>git clone git@github.com:tachyons-css/tachyons.git{"\n"}cd tachyons{"\n"}npm install &amp;&amp; npm start{"\n"}</code></pre>
            <h3 className="f5 f3-ns mt4 fw6">Prototyping template</h3>
            <p className="lh-copy measure f6">
              This template is always linked to the most up to date version of Tachyons.
              Save this file to your computer to start prototyping right away without worrying
              about setting up a dev environment. You can open the file in a web browser and view
              your changes.
            </p>
            <div className="overflow-auto">
              <code className="pre f6">
                &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;title&gt; &lt;/title&gt;
                &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
                &lt;link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css"&gt;
                &lt;body&gt;
                &lt;/body&gt;
                &lt;/html&gt;
              </code>
            </div>
            <section className="bt b--black-10 pv5 mt5 cf">
              <div className="fl-l w-100 w-50-l pr4-ns">
                <h3 className="f5 f3-ns mt0">Start a New Project</h3>
                <p className="f6 f5-ns measure lh-copy mb4 mt0">
                  Get setup and running with this ~7 minute screencast. Download the
                  project and learn how to customize the tachyons source files and
                  recompile the css using the postcss build system.
                </p>
              </div>
              <div className="fl-l w-100 w-50-l">
                <div className="aspect-ratio aspect-ratio--8x5">
                  <div className="aspect-ratio--object" style={{background: 'black'}}/>
                </div>
              </div>
            </section>
          </div>
        </article>
        <div className="tl bt b--black-10 pa3 pa5-ns bg-lightest-blue navy" id="principles">
          <div className="mw9 center">
            <h1 className="f5 ttu tracked fw6">Principles</h1>
            <section className="lh-copy">
              <div className="cf">
                <article className="fl pv2 w-100 w-third-l pr4-l">
                  <h2 className="f5 f4-ns fw6 mb0">Responsive</h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    Everything should be 100% responsive. Your website should work regardless of a user's
                    device or screensize.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-third-l ph3-l">
                  <h2 className="f5 f4-ns fw6 mb0">Readable</h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    No matter the lighting, or the device, font-sizes should be
                    large enough and contrast should be high enough for your
                    users to easily read your content.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-third-l pl4-l">
                  <h2 className="f5 f4-ns  fw6 mb0">
                    Modular
                  </h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    Tachyons isn't just a monolithic framework. It's a collection of small modules
                    that can be mixed and matched or used independently. Use what you need. Leave the rest.
                  </p>
                </article>
              </div>
              <div className="cf w-100">
                <article className="pv2 fl w-100 w-third-l pl0 pr4-l">
                  <h2 className="f5 f4-ns fw6 mb0">Accessible</h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    Accessibility is important to us. Throughout both the css
                    and the documentation we provide numerous tools and methods for making it
                    easier to maximize the accessibility of your site.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-third-l ph3-l">
                  <h2 className="f5 f4-ns  fw6 mb0">Performant</h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    Code should be optimized for performance.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-third-l pl4-l">
                  <h2 className="f5 f4-ns fw6 mb0">
                    Reusable
                  </h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    Clear documentation helps create a shared understanding of design patterns amongst your team.
                    This helps promote reuse and reduces the amount of redundancy in a codebase.
                  </p>
                </article>
              </div>
            </section>
          </div>
        </div>
        <section className="cf ph3 ph5-ns pb5 bg-yellow black-70" id="features">
          <div className="mw9 center">
            <h1 className="fl w-100 mt5 f5 ttu tracked fw6">Features</h1>
            <article className="pv2 fl w-100 ">
              <h2 className="f4 f1-ns fw6 mb2">Open source component library</h2>
              <p className="f5 f4-ns measure lh-copy mt0">
                There is a <a href="/components/" className="black dim" title="Tachyons components">growing library of open source components</a> written in static html that are easy
                to use as is, customize with your own theme, or port to a templating language.
              </p>
            </article>
            <div className="cf">
              <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                <h2 className="f4 f2-ns fw6 mb2">Lightweight</h2>
                <p className="f5 measure lh-copy mt0">
                  The entire library is fewer than 14kb when minified and
                  gzipped. If you want to get even smaller, it's easy to strip out what you don't
                  need.
                </p>
              </article>
              <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                <h2 className="f4 f2-ns fw6 mb2">Documentation</h2>
                <p className="f5 measure lh-copy mt0">
                  Each module is carefully documented. From stats about the size of the module,
                  to how each css class will render to the screen.
                </p>
              </article>
            </div>
            <div className="cf">
              <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                <h2 className="f4 f2-ns fw6 mb2">Functional</h2>
                <p className="f5 measure lh-copy mt0">
                  It's easy to build components with Tachyons so
                  it works well with Rails, React, Ember, Elm, Angular, Static html,
                  and more.
                </p>
              </article>
              <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                <h2 className="f4 f2-ns fw6 mb2">Multiple Flavors</h2>
                <p className="f5 measure lh-copy mt0">
                  Don't like the class names? We've got <a className="black dim" href="https://github.com/tachyons-css/tachyons-verbose">a more verbose version you might like</a>.
                  Want to use Sass instead of Postcss? <a className="black dim" href="http://github.com/tachyons-css/tachyons-sass">We've got a repo for that too :)</a> Tachyons isn't just a css toolkit. It's a design system. Utilized here in a <a className="black dim" href="https://github.com/tachyons-css/react-native-style-tachyons">react native boilerplate.</a>
                </p>
              </article>
            </div>
            <div className="cf">
              <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                <h2 className="f4 f2-ns fw6 mb2">Shallow Cascade</h2>
                <p className="f5 measure lh-copy mt0">
                  Don't let the cascade slow you down. When you apply a class
                  to an element, there is nothing in the cascade to override
                  its effects. You get rapid feedback on how your css is
                  affecting your markup without wasting time debugging why your
                  styles are being overridden.
                </p>
              </article>
              <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                <h2 className="f4 f2-ns fw6 mb2">Low Specificity</h2>
                <p className="f5 measure lh-copy mt0">
                  The majority of Tachyons selectors have a specificity of
                  10. Tachyons won't override your existing styles. So feel
                  free to lay it on top of your existing css.
                </p>
              </article>
            </div>
            <div className="cf">
              <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                <h2 className="f4 f2-ns fw6 mb2">Accessible Color Palette</h2>
                <p className="f5 measure lh-copy mt0">
                  Over 480 accessible color combinations.
                </p>
              </article>
              <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                <h2 className="f4 f2-ns fw6 mb2">Mobile-first architecture </h2>
                <p className="f5 measure lh-copy mt0">
                  Base classes are mobile by default. Can be overridden by
                  namespaced classes targeting larger breakpoints.
                </p>
              </article>
            </div>
            <div className="cf">
              <article className="pv2 fl w-100 w-50-l pr0 prl-ns">
                <h2 className="f4 f2-ns fw6 mb2">
                  Layout debugging
                </h2>
                <p className="f5 measure lh-copy mt0">
                  Small css modules for debugging stacking and layout issues.
                  Can easily be turned on or off during development.
                </p>
              </article>
              <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                <h2 className="f4 f2-ns fw6 mb2">
                  Composable classes
                </h2>
                <p className="f5 measure lh-copy mt0">
                  Construct anything from complex layouts to responsive components with a series of
                  single purpose classes.
                </p>
              </article>
            </div>
            <div className="cf">
              <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                <h2 className="f4 f2-ns fw6 mb2">Cohesive design system</h2>
                <p className="f5 measure lh-copy mt0">
                  Scale based on the powers of two. Starting at .25
                </p>
              </article>
              <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                <h2 className="f4 f2-ns fw6 mb2">Responsive Grid</h2>
                <p className="f5 measure lh-copy mt0">
                  Infinitely nestable. Fully fluid. Extremely light-weight.
                </p>
              </article>
            </div>
            <div className="cf">
              <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                <h2 className="f4 f2-ns fw6 mb2">
                  Runs on <a href="https://github.com/postcss/postcss" className="link dim near-black">Postcss</a>
                </h2>
                <p className="mv0 f5 lh-copy measure">
                  A flexible plugin framework for post-processing css.
                  <a href="https://github.com/postcss/postcss" className="
                      dim f6 db black">View on GitHub</a>
                </p>
              </article>
              <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                <h2 className="f4 f2-ns fw6 mb2">
                  Easy to Customize and extend
                </h2>
                <p className="f5 measure lh-copy mt0">
                  Tachyons is meant to be edited and customized to meet the
                  needs of your project. It's just css. It isn't precious.
                  Don't be afraid to change: class names, media queries,
                  breakpoints, or values.
                </p>
              </article>
            </div>
          </div>
        </section>
      </section>
      <section className="tc pv5 bb bt b--black-10 bg-washed-blue">
        <div className="ph3 ph5-ns">
          <h3 className="f5 fw6 ttu tracked black-70 mb4">Start using Tachyons</h3>
          <a className="no-underline grow pa3 br2 bg-blue white mr3 mb3 dib" href="/docs/">Read the Docs</a>
          <a className="no-underline grow pa3 br2 bg-blue white mr3 mb3 dib" href="/components/">View Component Library</a>
          <a className="no-underline grow pa3 br2 bg-blue white mr3 dib" href="http://unpkg.com/tachyons/css/tachyons.min.css">Download the Code</a>
        </div>
      </section>
      <section>
        <div className="ph3 ph5-ns pt5" id="style">
          <div className="mw9 center overflow-auto">
            <h3 className="f5 fw6 ttu tracked">Style Guide</h3>
            <p className="lh-copy measure">
              This is a quick introduction to some of the building blocks that Tachyons makes available. For a more in-depth look at design principles and how each module works, be sure to check out the <a className="link blue underline hover-navy" href="/docs" title="Tachyons docs">docs</a>
            </p>
            <h3 className="f6 ttu fw6 mb0 mt5 bb pb2">Typography</h3>
            <article className="dt-ns dt--fixed-ns">
              <div className="dtc-ns v-mid overflow-auto">
                <h1 className="f1 lh-title">Level 1 Heading</h1>
                <h2 className="f2 lh-title">Level 2 Heading</h2>
                <h3 className="f3 lh-title">Level 3 Heading</h3>
                <h4 className="f4 lh-title">Level 4 Heading</h4>
                <h5 className="f5 lh-title">Level 5 Heading</h5>
                <h6 className="f6 lh-title">Level 6 Heading</h6>
              </div>
              <div className="dtc-ns v-mid">
                <pre className="ba b--black-05  pa2 overflow-auto"><code className="db f6 pa3 lh-copy">{"\n"}.f1 {"{"} font-size: 3rem; {"}"}{"\n"}.f2 {"{"} font-size: 2.25rem; {"}"}{"\n"}.f3 {"{"} font-size: 1.5rem; {"}"}{"\n"}.f4 {"{"} font-size: 1.25rem; {"}"}{"\n"}.f5 {"{"} font-size: 1rem; {"}"}{"\n"}.f6 {"{"} font-size: .875rem; {"}"}{"\n"}</code>{"\n"}</pre>
              </div>
            </article>
            <article className="mt5">
              <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Type Styles</h3>
              <div className="dt-ns dt--fixed-ns">
                <div className="dtc v-mid">
                  <p className="i">Italicize: to write or print (text) in italics.</p>
                  <p className="b">Some text that needs to be super bold.</p>
                  <p className="underline">This text wants to be underlined.</p>
                  <p className="strike">This text should be crossed out.</p>
                  <p className="ttc">This text should be capitalized.</p>
                  <p className="ttu">This text should be uppercase.</p>
                </div>
                <div className="dtc-ns v-mid">
                  <pre className="ba b--black-05  pa2 overflow-auto"><code className="db f6 pa3 lh-copy">{"\n"}.i {"{"}{"         "}font-style: italic; {"}"}{"\n"}.b {"{"}{"         "}font-weight: bold; {"}"}{"\n"}.underline {"{"} text-decoration: underline; {"}"}{"\n"}.strike {"{"}{"    "}text-decoration: line-through; {"}"}{"\n"}.ttc {"{"}{"       "}text-transform: capitalize; {"}"}{"\n"}.ttu {"{"}{"       "}text-transform: uppercase; {"}"}{"\n"}</code>{"\n"}</pre>
                </div>
              </div>
            </article>
            <article className="mt5">
              <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Typefaces</h3>
              <div className="dt-ns dt--fixed-ns">
                <div className="dtc v-mid">
                  <h4 className="f6 mb0 mt3">system serif</h4>
                  <p className="serif">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <h4 className="f6 mb0 mt3">Athelas</h4>
                  <p className="athelas"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <p className="athelas ttu"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <h4 className="f6 mb0 mt3">georgia</h4>
                  <p className="georgia"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <p className="georgia ttu"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <h4 className="f6 mb0 mt3">garamond</h4>
                  <p className="garamond"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <p className="garamond ttu"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <h4 className="f6 mb0 mt3">baskerville</h4>
                  <p className="baskerville"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <p className="baskerville ttu"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <h4 className="f6 mb0 mt3">calisto</h4>
                  <p className="calisto"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <p className="calisto ttu"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <h4 className="f6 mb0 mt3">system sans-serif</h4>
                  <p className="sans-serif"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <p className="sans-serif ttu"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <h4 className="f6 mb0 mt3">Helvetica</h4>
                  <p className="helvetica"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <p className="helvetica ttu"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <h4 className="f6 mb0 mt3">Avenir Next</h4>
                  <p className="avenir"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <p className="avenir ttu"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <h4 className="f6 mb0 mt3">Code</h4>
                  <p className="code"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <p className="code ttu"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <h4 className="f6 mb0 mt3">Courier</h4>
                  <p className="code"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                  <p className="code ttu"> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                </div>
                <div className="dtc-ns v-mid">
                  <pre className="ba b--black-05  pa2 overflow-auto"><code
                    className="db f6 pa3 lh-copy">{"\n"}.sans-serif {"{"}{"\n"}{"  "}font-family: -apple-system, BlinkMacSystemFont,{"\n"}{"               "}'avenir next', avenir,{"\n"}{"               "}helvetica, 'helvetica neue',{"\n"}{"               "}ubuntu,{"\n"}{"               "}roboto, noto,{"\n"}{"               "}'segoe ui', arial,{"\n"}{"               "}sans-serif;{"\n"}{"}"}{"\n"}.serif {"{"} font-family: georgia, times, serif; {"}"}{"\n"}.code {"{"} font-family: Consolas, monaco, monospace; {"}"}{"\n"}.courier {"{"} font-family: 'Courier Next', courier, monospace; {"}"}{"\n"}.helvetica {"{"} font-family: 'helvetica neue', helvetica, sans-serif; {"}"}{"\n"}.avenir {"{"} font-family: 'avenir next', avenir, sans-serif; {"}"}{"\n"}.athelas {"{"} font-family: athelas, georgia, serif; {"}"}{"\n"}.georgia {"{"} font-family: georgia, serif; {"}"}{"\n"}.times {"{"} font-family: times, serif; {"}"}{"\n"}.bodoni {"{"} font-family: "Bodoni MT", serif; {"}"}{"\n"}.calisto {"{"} font-family: "Calisto MT", serif; {"}"}{"\n"}.garamond {"{"} font-family: garamond, serif; {"}"}{"\n"}.baskerville {"{"} font-family: baskerville, serif; {"}"}{"\n"}{"\n"}</code>{"\n"}</pre>
                </div>
              </div>
            </article>
            <article className="mt5">
              <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Measure</h3>
              <div className="dt-ns dt--fixed-ns">
                <div className="dtc v-mid f6">
                  <h4 className="mt4 fw6 f6">Wide Measure</h4>
                  <p className="measure-wide lh-copy">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <h4 className="mt4 fw6 f6">Measure</h4>
                  <p className="measure lh-copy">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <h4 className="mt4 fw6 f6">Narrow Measure</h4>
                  <p className="measure-narrow lh-copy">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="dtc-ns v-mid">
                  <pre className="ba b--black-05  pa2 overflow-auto"><code className="db f6 pa3 lh-copy">{"\n"}.measure-wide {"{"}{"   "}max-width: 34em; {"}"}{"\n"}.measure {"{"}{"        "}max-width: 30em; {"}"}{"\n"}.measure-narrow {"{"} max-width: 20em; {"}"}{"\n"}</code>{"\n"}</pre>
                </div>
              </div>
            </article>
          </div>
        </div>
        <article className="mt5" id="grids">
          <div className="ph3 ph5-ns">
            <div className="mw9 center">
              <h3 className="f6 ttu fw6 mt0 bb pb2">Grids</h3>
              <p className="lh-copy measure">
                Floats, widths, and padding can be combined to build a
                wide variety of grids.
              </p>
            </div>
          </div>
          <section className="cf w-100 pv3 f6 ph3 ph4-ns">
            <div className="mw9 center ph3-ns">
              <div className="ph2-ns">
                <div className="fl w-100 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-100</code></div>
                </div>
                <div className="fl w-90 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-90</code></div>
                </div>
                <div className="fl w-10 pa2">
                  <div className="outline bg-white tc pv4 truncate no-wrap"><code>fl w-10</code></div>
                </div>
                <div className="fl w-80 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-80</code></div>
                </div>
                <div className="fl w-20 pa2">
                  <div className="outline bg-white tc pv4 truncate no-wrap"><code>fl w-20</code></div>
                </div>
                <div className="fl w-75 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-75</code></div>
                </div>
                <div className="fl w-25 pa2">
                  <div className="outline bg-white tc pv4 truncate no-wrap"><code>fl w-25</code></div>
                </div>
                <div className="fl w-70 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-70</code></div>
                </div>
                <div className="fl w-30 pa2">
                  <div className="outline bg-white tc pv4 truncate no-wrap"><code>fl w-30</code></div>
                </div>
                <div className="fl w-60 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-60</code></div>
                </div>
                <div className="fl w-40 pa2">
                  <div className="outline bg-white tc pv4 truncate no-wrap"><code>fl w-40</code></div>
                </div>
                <div className="fl w-50 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-50</code></div>
                </div>
                <div className="fl w-50 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-50</code></div>
                </div>
                <div className="fl w-third pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-third</code></div>
                </div>
                <div className="fl w-third pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-third</code></div>
                </div>
                <div className="fl w-third pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-third</code></div>
                </div>
                <div className="fl w-third pa2">
                  <div className="outline bg-white tc pv4 truncate w-100 no-wrap"><code>fl w-third</code></div>
                </div>
                <div className="fl w-two-thirds pa2">
                  <div className="outline bg-white tc pv4 truncate w-100 no-wrap"><code>fl w-two-thirds</code></div>
                </div>
                <div className="fl w-25 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-25</code></div>
                </div>
                <div className="fl w-25 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-25 </code></div>
                </div>
                <div className="fl w-25 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-25 </code></div>
                </div>
                <div className="fl w-25 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-25 </code></div>
                </div>
                <div className="fl w-20 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-20 </code></div>
                </div>
                <div className="fl w-20 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-20 </code></div>
                </div>
                <div className="fl w-20 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-20 </code></div>
                </div>
                <div className="fl w-20 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-20 </code></div>
                </div>
                <div className="fl w-20 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-20 </code></div>
                </div>
                <div className="fl w-10 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-10 </code></div>
                </div>
                <div className="fl w-10 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-10 </code></div>
                </div>
                <div className="fl w-10 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-10 </code></div>
                </div>
                <div className="fl w-10 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-10 </code></div>
                </div>
                <div className="fl w-10 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-10 </code></div>
                </div>
                <div className="fl w-10 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-10 </code></div>
                </div>
                <div className="fl w-10 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-10 </code></div>
                </div>
                <div className="fl w-10 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-10 </code></div>
                </div>
                <div className="fl w-10 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-10 </code></div>
                </div>
                <div className="fl w-10 pa2">
                  <div className="outline bg-white tc pv4"><code>fl w-10 </code></div>
                </div>
              </div>
            </div>
          </section>
        </article>
        <div className="ph3 ph5-ns pt5">
          <div className="mw9 center overflow-auto">
            <article className="mt5">
              <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Colors</h3>
              <div className="dt-ns dt--fixed-ns">
                <div className="dtc-ns v-mid pr4-ns">
                  <table className="border-collapse w-100" cellSpacing={0} cellPadding={0}>
                    <tbody className="black-60 f6">
                      <tr>
                        <td className="bb b--black-05 bg-dark-red pa4"/>
                        <td className="bb b--black-05 ph4 f4 b dark-red">Aa</td>
                        <td className="bb b--black-05">--dark-red: #e7040f;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-red pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b red">Aa</td>
                        <td className="bb b--black-05">--red: #ff4136;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-light-red pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b light-red">Aa</td>
                        <td className="bb b--black-05">--light-red: #ff725c;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-orange pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b orange">Aa</td>
                        <td className="bb b--black-05">--orange: #ff6300;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-gold pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b gold">Aa</td>
                        <td className="bb b--black-05">--gold: #ffb700;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-yellow pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b yellow">Aa</td>
                        <td className="bb b--black-05">--yellow: #ffde37;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-light-yellow pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b light-yellow">Aa</td>
                        <td className="bb b--black-05">--light-yellow: #fbf1a9;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-purple pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b purple">Aa</td>
                        <td className="bb b--black-05">--purple: #5e2ca5;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-light-purple pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b light-purple">Aa</td>
                        <td className="bb b--black-05">--light-purple: #a463f2;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-dark-pink pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b dark-pink">Aa</td>
                        <td className="bb b--black-05">--dark-pink: #d5008f;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-hot-pink pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b hot-pink">Aa</td>
                        <td className="bb b--black-05">--hot-pink: #ff41b4;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-pink pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b pink">Aa</td>
                        <td className="bb b--black-05">--pink: #ff80cc;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-light-pink pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b light-pink">Aa</td>
                        <td className="bb b--black-05">--light-pink: #ffa3d7;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-dark-green pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b dark-green">Aa</td>
                        <td className="bb b--black-05">--dark-green: #137752;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-green pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b green">Aa</td>
                        <td className="bb b--black-05">--green: #19a974;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-light-green pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b light-green">Aa</td>
                        <td className="bb b--black-05">--light-green: #9eebcf;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-navy pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b navy">Aa</td>
                        <td className="bb b--black-05">--navy: #001b44;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-dark-blue pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b dark-blue">Aa</td>
                        <td className="bb b--black-05">--dark-blue: #00449e;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-blue pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b blue">Aa</td>
                        <td className="bb b--black-05">--blue: #357edd;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-light-blue pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b light-blue">Aa</td>
                        <td className="bb b--black-05">--light-blue: #96ccff;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-lightest-blue pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b lightest-blue">Aa</td>
                        <td className="bb b--black-05">--lightest-blue: #cdecff;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-washed-blue pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b washed-blue">Aa</td>
                        <td className="bb b--black-05">--washed-blue: #f6fffe;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-washed-green pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b washed-green">Aa</td>
                        <td className="bb b--black-05">--washed-green: #e8fdf5;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-washed-yellow pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b washed-yellow">Aa</td>
                        <td className="bb b--black-05">--washed-yellow: #fffceb;</td>
                      </tr>
                      <tr>
                        <td className="bb b--black-05 bg-washed-red pa4 "/>
                        <td className="bb b--black-05 ph4 f4 b washed-red">Aa</td>
                        <td className="bb b--black-05">--washed-red: #ffdfdf;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="dtc-ns v-mid">
                  <pre className="ba b--black-05 pa2 overflow-auto"><code
                    className="db f6 ph3 lh-copy">{"\n"}{"\n"}.bg-dark-red {"{"} background-color: var(--dark-red); {"}"}{"\n"}.bg-red {"{"} background-color: var(--red); {"}"}{"\n"}.bg-orange {"{"} background-color: var(--orange); {"}"}{"\n"}.bg-gold {"{"} background-color: var(--gold); {"}"}{"\n"}.bg-yellow {"{"} background-color: var(--yellow); {"}"}{"\n"}.bg-purple {"{"} background-color: var(--purple); {"}"}{"\n"}.bg-light-purple {"{"} background-color: var(--light-purple); {"}"}{"\n"}.bg-hot-pink {"{"} background-color:{"  "}var(--hot-pink); {"}"}{"\n"}.bg-dark-pink {"{"} background-color: var(--dark-pink); {"}"}{"\n"}.bg-pink {"{"} background-color: var(--pink); {"}"}{"\n"}.bg-dark-green {"{"} background-color: var(--dark-green); {"}"}{"\n"}.bg-green {"{"} background-color: var(--green); {"}"}{"\n"}.bg-navy {"{"} background-color: var(--navy); {"}"}{"\n"}.bg-dark-blue {"{"} background-color: var(--dark-blue); {"}"}{"\n"}.bg-blue {"{"} background-color: var(--blue); {"}"}{"\n"}.bg-light-blue {"{"} background-color: var(--light-blue); {"}"}{"\n"}.bg-lightest-blue {"{"} background-color: var(--lightest-blue); {"}"}{"\n"}.bg-washed-blue {"{"} background-color: var(--washed-blue); {"}"}{"\n"}.bg-washed-green {"{"} background-color: var(--washed-green); {"}"}{"\n"}.bg-washed-yellow {"{"} background-color: var(--washed-yellow); {"}"}{"\n"}.bg-light-pink {"{"} background-color: var(--light-pink); {"}"}{"\n"}.bg-light-yellow {"{"} background-color: var(--light-yellow); {"}"}{"\n"}.bg-light-red {"{"} background-color: var(--light-red); {"}"}{"\n"}{"\n"}.dark-red {"{"} color: var(--dark-red); {"}"}{"\n"}.red {"{"} color: var(--red); {"}"}{"\n"}.orange {"{"} color: var(--orange); {"}"}{"\n"}.gold {"{"} color: var(--gold); {"}"}{"\n"}.yellow {"{"} color: var(--yellow); {"}"}{"\n"}.purple {"{"} color: var(--purple); {"}"}{"\n"}.light-purple {"{"} color: var(--light-purple); {"}"}{"\n"}.hot-pink {"{"} color:{"  "}var(--hot-pink); {"}"}{"\n"}.dark-pink {"{"} color: var(--dark-pink); {"}"}{"\n"}.pink {"{"} color: var(--pink); {"}"}{"\n"}.dark-green {"{"} color: var(--dark-green); {"}"}{"\n"}.green {"{"} color: var(--green); {"}"}{"\n"}.navy {"{"} color: var(--navy); {"}"}{"\n"}.dark-blue {"{"} color: var(--dark-blue); {"}"}{"\n"}.blue {"{"} color: var(--blue); {"}"}{"\n"}.light-blue {"{"} color: var(--light-blue); {"}"}{"\n"}.lightest-blue {"{"} color: var(--lightest-blue); {"}"}{"\n"}.washed-blue {"{"} color: var(--washed-blue); {"}"}{"\n"}.washed-green {"{"} color: var(--washed-green); {"}"}{"\n"}.washed-yellow {"{"} color: var(--washed-yellow); {"}"}{"\n"}.light-pink {"{"} color: var(--light-pink); {"}"}{"\n"}.light-yellow {"{"} color: var(--light-yellow); {"}"}{"\n"}.light-red {"{"} color: var(--light-red); {"}"}{"\n"}</code>{"\n"}</pre>
                </div>
              </div>
            </article>
            <article className="mt5">
              <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Borders</h3>
              <div className="dt-ns dt--fixed-ns">
                <div className="dtc-ns v-mid">
                  <div className="ba db mw5 pa3 bg-black-025 mb3 bg-near-white">ba = border on all sides</div>
                  <div className="bt db mw5 pa3 bg-black-025 mb3 bg-near-white">bt = border top</div>
                  <div className="br db mw5 pa3 bg-black-025 mb3 bg-near-white">br = border right</div>
                  <div className="bb db mw5 pa3 bg-black-025 mb3 bg-near-white">bb = border bottom</div>
                  <div className="bl db mw5 pa3 bg-black-025 mb3 bg-near-white">bl = border left</div>
                  <div className="bn db mw5 pa3 bg-black-025 mb3 bg-near-white">bn = border none</div>
                </div>
                <div className="dtc-ns v-mid">
                  <pre className="ba b--black-05  pa2 overflow-auto"><code className="db f6 pa3 lh-copy">{"\n"}{"  "}.ba {"{"} border-style: solid; border-width: 1px; {"}"}{"\n"}{"  "}.bt {"{"} border-top-style: solid; border-top-width: 1px; {"}"}{"\n"}{"  "}.br {"{"} border-right-style: solid; border-right-width: 1px; {"}"}{"\n"}{"  "}.bb {"{"} border-bottom-style: solid; border-bottom-width: 1px; {"}"}{"\n"}{"  "}.bl {"{"} border-left-style: solid; border-left-width: 1px; {"}"}{"\n"}{"  "}.bn {"{"} border-style: none; border-width: 0; {"}"}{"\n"}</code>{"\n"}</pre>
                </div>
              </div>
            </article>
            <article className="mt5">
              <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Border Styles</h3>
              <div className="dt-ns dt--fixed-ns">
                <div className="dtc-ns v-mid">
                  <div className="ba b--dotted db mw5 pa3 mb3 ">dotted</div>
                  <div className="ba b--dashed db mw5 pa3 mb3 ">dashed</div>
                  <div className="ba b--solid db mw5 pa3 mb3 ">solid</div>
                  <div className="ba b--none db mw5 pa3 mb3 ">none</div>
                </div>
                <div className="dtc-ns v-mid">
                  <pre className="ba b--black-05  pa2 overflow-auto"><code className="db f6 pa3 lh-copy">{"\n"}.b--dotted {"{"} border-style: dotted; {"}"}{"\n"}.b--dashed {"{"} border-style: dashed; {"}"}{"\n"}.b--solid {"{"}{"  "}border-style: solid; {"}"}{"\n"}.b--none {"{"}{"   "}border-style: none; {"}"}{"\n"}</code>{"\n"}</pre>
                </div>
              </div>
            </article>
            <article className="mt5">
              <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Border Widths</h3>
              <div className="dt-ns dt--fixed-ns">
                <div className="dtc-ns v-mid">
                  <div className="bt db mw5 mb4 bg-near-white">default</div>
                  <div className="bt bw1 db mw5 mb4 bg-near-white">.125rem</div>
                  <div className="bt bw2 db mw5 mb4 bg-near-white">.25rem</div>
                  <div className="bt bw3 db mw5 mb4 bg-near-white">.5rem</div>
                  <div className="bt bw4 db mw5 mb4 bg-near-white">1rem</div>
                  <div className="bt bw5 db mw5 mb4 bg-near-white">2rem</div>
                </div>
                <div className="dtc-ns v-mid">
                  <pre className="ba b--black-05  pa2 overflow-auto"><code className="db f6 pa3 lh-copy">{"\n"}.bw0 {"{"} border-width: 0; {"}"}{"\n"}.bw1 {"{"} border-width: .125rem; {"}"}{"\n"}.bw2 {"{"} border-width: .25rem; {"}"}{"\n"}.bw3 {"{"} border-width: .5rem; {"}"}{"\n"}.bw4 {"{"} border-width: 1rem; {"}"}{"\n"}.bw5 {"{"} border-width: 2rem; {"}"}{"\n"}</code>{"\n"}</pre>
                </div>
              </div>
            </article>
            <article className="mt5">
              <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Border Colors</h3>
              <div className="dt-ns dt--fixed-ns">
                <div className="dtc-ns v-mid pr4">
                  <div className="bt black b--black db pt2 pb2 mb3">b--black</div>
                  <div className="bt black-90 b--black-90 db pt2 pb2 mb3">b--black-90</div>
                  <div className="bt black-80 b--black-80 db pt2 pb2 mb3">b--black-80</div>
                  <div className="bt black-70 b--black-70 db pt2 pb2 mb3">b--black-70</div>
                  <div className="bt black-60 b--black-60 db pt2 pb2 mb3">b--black-60</div>
                  <div className="bt black-50 b--black-50 db pt2 pb2 mb3">b--black-50</div>
                  <div className="bt black-40 b--black-40 db pt2 pb2 mb3">b--black-40</div>
                  <div className="bt black-30 b--black-30 db pt2 pb2 mb3">b--black-30</div>
                  <div className="bt black-20 b--black-20 db pt2 pb2 mb3">b--black-20</div>
                  <div className="bt black-10 b--black-10 db pt2 pb2 mb3">b--black-10</div>
                  <div className="bt black-05 b--black-05 db pt2 pb2 mb3">b--black-05</div>
                  <div className="bt black-025 b--black-025 db pt2 pb2 mb3">b--black-025</div>
                  <div className="bt black-0125 b--black-0125 db pt2 pb2 mb3">b--black-0125</div>
                  <div className="bt near-black b--near-black db pt2 pb2 mb3">b--near-black</div>
                  <div className="bt dark-gray b--dark-gray db pt2 pb2 mb3">b--dark-gray</div>
                  <div className="bt mid-gray b--mid-gray db pt2 pb2 mb3">b--mid-gray</div>
                  <div className="bt gray b--gray db pt2 pb2 mb3">b--gray</div>
                  <div className="bg-black pa2 db">
                    <div className="bt silver silver b--silver db pt2 pb2 mb3">b--silver</div>
                    <div className="bt light-silver b--light-silver db pt2 pb2 mb3">b--light-silver</div>
                    <div className="bt light-gray b--light-gray db pt2 pb2 mb3">b--light-gray</div>
                    <div className="bt near-white b--near-white db pt2 pb2 mb3">b--near-white</div>
                    <div className="bt white b--white db pt2 pb2 mb3">b--white</div>
                    <div className="bt white-90 b--white-90 db pt2 pb2 mb3">b--white-90</div>
                    <div className="bt white-80 b--white-80 db pt2 pb2 mb3">b--white-80</div>
                    <div className="bt white-70 b--white-70 db pt2 pb2 mb3">b--white-70</div>
                    <div className="bt white-60 b--white-60 db pt2 pb2 mb3">b--white-60</div>
                    <div className="bt white-50 b--white-50 db pt2 pb2 mb3">b--white-50</div>
                    <div className="bt white-40 b--white-40 db pt2 pb2 mb3">b--white-40</div>
                    <div className="bt white-30 b--white-30 db pt2 pb2 mb3">b--white-30</div>
                    <div className="bt white-20 b--white-20 db pt2 pb2 mb3">b--white-20</div>
                    <div className="bt white-10 b--white-10 db pt2 pb2 mb3">b--white-10</div>
                    <div className="bt white-05 b--white-05 db pt2 pb2 mb3">b--white-05</div>
                    <div className="bt white-025 b--white-025 db pt2 pb2 mb3">b--white-025</div>
                    <div className="bt white-0125 b--white-0125 db pt2 pb2 mb3">b--white-0125</div>
                    <div className="bt dark-red b--dark-red db pt2 pb2 mb3">b--dark-red</div>
                    <div className="bt red b--red db pt2 pb2 mb3">b--red</div>
                    <div className="bt orange b--orange db pt2 pb2 mb3">b--orange</div>
                    <div className="bt gold b--gold db pt2 pb2 mb3">b--gold</div>
                    <div className="bt yellow b--yellow db pt2 pb2 mb3">b--yellow</div>
                    <div className="bt purple b--purple db pt2 pb2 mb3">b--purple</div>
                    <div className="bt light-purple b--light-purple db pt2 pb2 mb3">b--light-purple</div>
                    <div className="bt hot-pink b--hot-pink db pt2 pb2 mb3">b--hot-pink</div>
                    <div className="bt dark-pink b--dark-pink db pt2 pb2 mb3">b--dark-pink</div>
                    <div className="bt pink b--pink db pt2 pb2 mb3">b--pink</div>
                    <div className="bt dark-green b--dark-green db pt2 pb2 mb3">b--dark-green</div>
                    <div className="bt green b--green db pt2 pb2 mb3">b--green</div>
                    <div className="bt navy b--navy db pt2 pb2 mb3">b--navy</div>
                    <div className="bt dark-blue b--dark-blue db pt2 pb2 mb3">b--dark-blue</div>
                    <div className="bt blue b--blue db pt2 pb2 mb3">b--blue</div>
                    <div className="bt light-blue b--light-blue db pt2 pb2 mb3">b--light-blue</div>
                    <div className="bt lightest-blue b--lightest-blue db pt2 pb2 mb3">b--lightest-blue</div>
                    <div className="bt washed-blue b--washed-blue db pt2 pb2 mb3">b--washed-blue</div>
                    <div className="bt washed-green b--washed-green db pt2 pb2 mb3">b--washed-green</div>
                    <div className="bt washed-yellow b--washed-yellow db pt2 pb2 mb3">b--washed-yellow</div>
                    <div className="bt light-pink b--light-pink db pt2 pb2 mb3">b--light-pink</div>
                    <div className="bt light-yellow b--light-yellow db pt2 pb2 mb3">b--light-yellow</div>
                    <div className="bt light-red b--light-red db pt2 pb2 mb3">b--light-red</div>
                    <div className="bt transparent b--transparent db pt2 pb2 mb3">b--transparent</div>
                  </div>
                </div>
                <div className="dtc-ns v-mid">
                  <pre className="ba b--black-05  pa2 overflow-auto"><code
                    className="db f6 pa3 lh-copy">{"\n"}.b--black {"{"}{"        "}border-color: var(--black); {"}"}{"\n"}.b--black-90 {"{"}{"   "}border-color: var(--black-90); {"}"}{"\n"}.b--black-80 {"{"}{"   "}border-color: var(--black-80); {"}"}{"\n"}.b--black-70 {"{"}{"   "}border-color: var(--black-70); {"}"}{"\n"}.b--black-60 {"{"}{"   "}border-color: var(--black-60); {"}"}{"\n"}.b--black-50 {"{"}{"   "}border-color: var(--black-50); {"}"}{"\n"}.b--black-40 {"{"}{"   "}border-color: var(--black-40); {"}"}{"\n"}.b--black-30 {"{"}{"   "}border-color: var(--black-30); {"}"}{"\n"}.b--black-20 {"{"}{"   "}border-color: var(--black-20); {"}"}{"\n"}.b--black-10 {"{"}{"   "}border-color: var(--black-10); {"}"}{"\n"}.b--black-05 {"{"}{"   "}border-color: var(--black-05); {"}"}{"\n"}.b--black-025 {"{"}{"   "}border-color: var(--black-025); {"}"}{"\n"}.b--black-0125 {"{"}{"   "}border-color: var(--black-0125); {"}"}{"\n"}.b--near-black {"{"}{"   "}border-color: var(--near-black); {"}"}{"\n"}.b--dark-gray {"{"}{"    "}border-color: var(--dark-gray); {"}"}{"\n"}.b--mid-gray {"{"}{"     "}border-color: var(--mid-gray); {"}"}{"\n"}.b--gray {"{"}{"         "}border-color: var(--gray); {"}"}{"\n"}.b--silver {"{"}{"       "}border-color: var(--silver); {"}"}{"\n"}.b--light-silver {"{"} border-color: var(--light-silver); {"}"}{"\n"}.b--light-gray {"{"}{"   "}border-color: var(--light-gray); {"}"}{"\n"}.b--near-white {"{"}{"   "}border-color: var(--near-white); {"}"}{"\n"}.b--white {"{"}{"        "}border-color: var(--white); {"}"}{"\n"}.b--white-90 {"{"}{"   "}border-color: var(--white-90); {"}"}{"\n"}.b--white-80 {"{"}{"   "}border-color: var(--white-80); {"}"}{"\n"}.b--white-70 {"{"}{"   "}border-color: var(--white-70); {"}"}{"\n"}.b--white-60 {"{"}{"   "}border-color: var(--white-60); {"}"}{"\n"}.b--white-50 {"{"}{"   "}border-color: var(--white-50); {"}"}{"\n"}.b--white-40 {"{"}{"   "}border-color: var(--white-40); {"}"}{"\n"}.b--white-30 {"{"}{"   "}border-color: var(--white-30); {"}"}{"\n"}.b--white-20 {"{"}{"   "}border-color: var(--white-20); {"}"}{"\n"}.b--white-10 {"{"}{"   "}border-color: var(--white-10); {"}"}{"\n"}.b--white-05 {"{"}{"   "}border-color: var(--white-05); {"}"}{"\n"}.b--white-025 {"{"}{"   "}border-color: var(--white-025); {"}"}{"\n"}.b--white-0125 {"{"}{"   "}border-color: var(--white-0125); {"}"}{"\n"}.b--dark-red {"{"} border-color:{"  "}var(--dark-red); {"}"}{"\n"}.b--red {"{"} border-color:{"  "}var(--red); {"}"}{"\n"}.b--orange {"{"} border-color:{"  "}var(--orange); {"}"}{"\n"}.b--gold {"{"} border-color:{"  "}var(--gold); {"}"}{"\n"}.b--yellow {"{"} border-color:{"  "}var(--yellow); {"}"}{"\n"}.b--purple {"{"} border-color:{"  "}var(--purple); {"}"}{"\n"}.b--light-purple {"{"} border-color:{"  "}var(--light-purple); {"}"}{"\n"}.b--hot-pink {"{"} border-color:{"  "}var(--hot-pink); {"}"}{"\n"}.b--dark-pink {"{"} border-color:{"  "}var(--dark-pink); {"}"}{"\n"}.b--pink {"{"} border-color:{"  "}var(--pink); {"}"}{"\n"}.b--dark-green {"{"} border-color:{"  "}var(--dark-green); {"}"}{"\n"}.b--green {"{"} border-color:{"  "}var(--green); {"}"}{"\n"}.b--navy {"{"} border-color:{"  "}var(--navy); {"}"}{"\n"}.b--dark-blue {"{"} border-color:{"  "}var(--dark-blue); {"}"}{"\n"}.b--blue {"{"} border-color:{"  "}var(--blue); {"}"}{"\n"}.b--light-blue {"{"} border-color:{"  "}var(--light-blue); {"}"}{"\n"}.b--lightest-blue {"{"} border-color:{"  "}var(--lightest-blue); {"}"}{"\n"}.b--washed-blue {"{"} border-color:{"  "}var(--washed-blue); {"}"}{"\n"}.b--washed-green {"{"} border-color:{"  "}var(--washed-green); {"}"}{"\n"}.b--washed-yellow {"{"} border-color:{"  "}var(--washed-yellow); {"}"}{"\n"}.b--light-pink {"{"} border-color:{"  "}var(--light-pink); {"}"}{"\n"}.b--light-yellow {"{"} border-color:{"  "}var(--light-yellow) {"}"}{"\n"}.b--light-red {"{"} border-color:{"  "}var(--light-red); {"}"}{"\n"}.b--transparent {"{"} border-color: var(--transparent); {"}"}{"\n"}</code>{"\n"}</pre>
                </div>
              </div>
            </article>
            <article className="mt5">
              <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Border Radii</h3>
              <div className="dt-ns dt--fixed-ns">
                <div className="dtc-ns v-mid">
                  <div className="ba dib ph4 pv3 mb4  br1">br1</div>
                  <div className="ba dib ph4 pv3 mb4  br2">br2</div>
                  <div className="ba dib ph4 pv3 mb4  br3">br3</div>
                  <div className="ba dib ph4 pv3 mb4  br4">br4</div>
                  <br />
                  <div className="dt dt--fixed">
                    <div className="dtc v-mid">
                      <div className="ba dib mb4 br-100 h3 w3 pa4 tc"/>
                    </div>
                    <div className="dtc v-mid">
                      <div className="ba dib mb4 ph4 pv3  br-pill">pill</div>
                    </div>
                  </div>
                  <div className="ba br--bottom dib ph4 pv3 mb4 br3">br--bottom</div>
                  <div className="ba br--top dib ph4 pv3 mb4 br3">br--top</div>
                  <br />
                  <div className="ba br--left dib ph4 pv3 mb4 br3">br--left</div>
                  <div className="ba br--right dib ph4 pv3 mb4 br3">br--right</div>
                </div>
                <div className="dtc-ns v-mid">
                  <pre className="ba b--black-05  pa2 overflow-auto"><code
                    className="db f6 pa3 lh-copy">{"\n"}.br0 {"{"}{"        "}border-radius: 0; {"}"}{"\n"}.br1 {"{"}{"        "}border-radius: .125rem; {"}"}{"\n"}.br2 {"{"}{"        "}border-radius: .25rem; {"}"}{"\n"}.br3 {"{"}{"        "}border-radius: .5rem; {"}"}{"\n"}.br4 {"{"}{"        "}border-radius: 1rem; {"}"}{"\n"}.br-100 {"{"}{"     "}border-radius: 100%; {"}"}{"\n"}.br-pill {"{"}{"    "}border-radius: 9999px; {"}"}{"\n"}.br--bottom {"{"}{"\n"}{"    "}border-top-left-radius: 0;{"\n"}{"    "}border-top-right-radius: 0;{"\n"}{"}"}{"\n"}.br--top {"{"}{"\n"}{"    "}border-bottom-left-radius: 0;{"\n"}{"    "}border-bottom-right-radius: 0;{"\n"}{"}"}{"\n"}.br--right {"{"}{"\n"}{"    "}border-top-left-radius: 0;{"\n"}{"    "}border-bottom-left-radius: 0;{"\n"}{"}"}{"\n"}.br--left {"{"}{"\n"}{"    "}border-top-right-radius: 0;{"\n"}{"    "}border-bottom-right-radius: 0;{"\n"}{"}"}{"\n"}</code>{"\n"}</pre>
                </div>
              </div>
            </article>
            <article className="mt5">
              <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Hover Animations</h3>
              <div className="dt-ns dt--fixed-ns">
                <div className="dtc-ns v-mid pr4-ns">
                  <div className="pa3 bg-black mb3 white grow pointer">Grow</div>
                  <div className="pa3 bg-black mb3 white dim pointer">Dim</div>
                </div>
                <div className="dtc-ns v-mid">
                  <pre className="ba b--black-05  pa2 overflow-auto"><code className="db f6 pa3 lh-copy">{"\n"}.grow {"{"}{"\n"}{"  "}-moz-osx-font-smoothing: grayscale;{"\n"}{"  "}backface-visibility: hidden;{"\n"}{"  "}transform: translateZ(0);{"\n"}{"  "}transition: transform 0.25s ease-out;{"\n"}{"}"}{"\n"}{"\n"}.grow:hover,{"\n"}.grow:focus {"{"}{"\n"}{"  "}transform: scale(1.05);{"\n"}{"}"}{"\n"}{"\n"}.dim {"{"}{"\n"}{"  "}opacity: 1;{"\n"}{"  "}transition: opacity .15s ease-in;{"\n"}{"}"}{"\n"}.dim:hover,{"\n"}.dim:focus {"{"}{"\n"}{"  "}opacity: .5;{"\n"}{"  "}transition: opacity .15s ease-in;{"\n"}{"}"}{"\n"}</code>{"\n"}</pre>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-white black-70 bt b--black-10">
        <div className="ph3 ph5-ns pt6 mb6">
          <div className="mw9 center">
            <h3 className="f6 fw6 mt0 mb4 tc ttu tracked">Used by people at</h3>
            <div className="dt dt--fixed mw6 mw7-l center">
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/californiasunday.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/gds.blog.gov.uk?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/amazon.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/ibm.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/jaguar.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/hillaryclinton.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/nerdwallet.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/egghead.io?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/heroku.com?size=256"/></div>
            </div>
            <div className="dt dt--fixed mw6 mw7-l center">
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/tesla.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/npr.org?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/airbnb.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/facebook.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/nest.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/twitter.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/salesforce.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/bluebottlecoffee.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100" src="http://logo.clearbit.com/ted.com?size=256"/></div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green black-80 pv5 pv6-ns bb bt b--black-10" id="testimonials">
        <div className="ph3 ph5-ns">
          <div className="center mw9">
            <h3 className="f5 fw6 ttu tracke">Testimonials</h3>
          </div>
          <div className="cf w-100 center mw9">
            <blockquote className="fl w-100 mh0 mb4 mb5-ns border-box pb5 bb b--black-50">
              <p className="f4 f2-m mt0 db fl w-100 f-subheadline-l lh-copy lh-title-l measure mb4 fw6">
                Here’s why I think designing systems with tools/frameworks like Tachyons
                is a Good Idea™.
              </p>
              <p className="fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l">
                Design Systems break as they scale (either scaling org or
                scaling product) because new components/variants of a component
                are introduced. Those variants sometimes (read: often) go
                undocumented, leading to duplication when that
                component/variant is needed (and created) again. Even when the
                component is documented, documenting effectively often means
                dozens/hundreds of instances to capture all states/variants.
                Systems like Tachyons et al. approach this problem by instead
                documenting and limiting *properties* of components. (I like
                to think of this as “subatomic” design.)
              </p>
              <p className="fl w-100 w-50-l mh0 mt0 pl0 pl3-l measure lh-copy f5 f4-l">
                You then create
                components by composing subatomic components (properties).
                Rather than creating a component and its variants, you simply
                have a comprehensive list of “ingredient” subatomic components.
                Those subatomic components can be combined in thousands of ways
                to create hundreds of components. The properties of those
                components are numerous, but constrained to a set of acceptable
                values (our subatomic components).”
              </p>
              <cite className="fl w-100 mt2 f5 f4-m f3-l fs-normal">
                <span className="fw6">Daniel Eden</span>
                <span className="db f5">Designer at Facebook</span>
              </cite>
            </blockquote>
            <blockquote className="fl w-100 ph0 border-box mh0 mb4 mb5-ns pb5 bb b--black-50">
              <p className="f3 f1-ns measure fw7 lh-title mt0">
                Tachyons has seriously blown my mind. Making landing pages responsive is now… somehow… actually fun?!
              </p>
              <cite className="mtw f5 f4-m f3-l fs-normal">
                <span className="fw6">Ian Storm Taylor</span>
                <span className="db f5">Co-founder of <a className="link black-70 dim" href="https://segment.com" title="Segment.com">Segment.com</a></span>
              </cite>
            </blockquote>
            <blockquote className="fl w-100 ph0 border-box mh0 mb4 mb5-ns pb5 bb b--black-50">
              <p className="f3 f1-ns measure fw7 lh-title mt0">
                I used Tachyons for the first time on <a className="link dim black-80 underline" href="http://goldenstaterecord.com">goldenstaterecord.com</a>.
                Really fast to make big changes to the design in-flight. 👍
              </p>
              <cite className="mtw f5 f4-m f3-l fs-normal">
                <span className="fw6">Wilson Miner</span>
                <span className="db f5">Digital Design - The California Sunday Magazine</span>
              </cite>
            </blockquote>
            <blockquote className="fl w-100 ph0 border-box mh0 pb5">
              <p className="f3 f1-ns measure fw7 lh-title mt0">
                Tachyons is powerful, obvious, and well documented. It's made me rethink my approach to building organized and componentized CSS. I highly recommend you try it.
              </p>
              <cite className="mtw f5 f4-m f3-l fs-normal">
                <span className="fw6">Dustin Senos</span>
                <span className="db f5">Designer</span>
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-white black-70 ph3 ph5-ns pv5 pv6-ns bt b--black-10">
      <div className="mw9 center">
        <div className="mb5 lh-copy">
          <a className="black-70 link hover-blue b dib mr3 mb3" href="/" title="Home">
            Home
          </a>
          <a className="black-70 link hover-blue b dib mr3 mb3" href="/docs" title="Docs">
            Docs
          </a>
          <a className="black-70 link hover-blue b dib mr3 mb3" href="/components/" title="Components">
            Components
          </a>
          <a className="black-70 link hover-blue b dib mr3 mb3" href="/gallery/" title="Gallery of Sites built with Tachyons">
            Gallery
          </a>
          <a className="black-70 link hover-blue b dib mr3 mb3" href="/resources/" title="Resources related to Tachyons">
            Resources
          </a>
          <a className="black-70 link hover-blue b dib mr3 mb3" href="/xray/" title="The X-Ray chrome extension for aligning things to a grid.">
            X-Ray
          </a>
          <a className="black-70 link hover-blue b dib mr3 mb3" href="http://opencollective.com/tachyons" title="Support Tachyons Development">
            Supporting Tachyons
          </a>
        </div>
        <article className="v-top">
          <a href="https://twitter.com/intent/tweet?text=Tachyons: A functional css toolkit for designing in the browser.&url=http://tachyons.io" className="twitter bg-white-50 link dib dim br2 ph2 pb1 lh-solid v-top" style={{ backgroundColor: '#55acee' }}>
            <svg className="geomicon dib v-mid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={16} height={16} fill="#fff">
              <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"/>
            </svg>
            <span className="dib v-mid white fw6" style={{ fontSize: 12 }}>Tweet</span>
          </a>
        </article>
        <div className="mt4">
          <a className="ba black-70 no-underline grow br2 b inline-flex items-center mr3 mb3 pv2 ph3" href="https://twitter.com/tachyons_css" title="Follow us on Twitter">
            <div className="w2 pv1 pr2">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                <path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/>
              </svg>
            </div>
            <span>Follow @tachyons_css</span>
          </a>
          <a className="ba black-70 no-underline grow br2 b inline-flex items-center mr3 mb3 pv2 ph3" href="http://tachyons-slack-invite.herokuapp.com" title="Join our Slack Channel">
            <div className="dib w2 pv1 pr2">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                <g fillRule="nonzero">
                  <path d="M6.586 7.33l.69 2.057 2.137-.716-.69-2.056-2.137.716z"/>
                  <path
                    d="M12.55 9.37l-1.037.347.36 1.073c.145.434-.09.904-.524 1.05-.096.03-.19.045-.287.042-.338-.01-.65-.226-.765-.566l-.36-1.072-2.138.716.36 1.072c.145.435-.09.905-.523 1.05-.096.032-.192.045-.286.043-.34-.01-.65-.226-.764-.566l-.36-1.075-1.037.348c-.096.03-.19.045-.286.042-.34-.008-.65-.226-.765-.565-.146-.434.09-.904.522-1.05L5.7 9.914l-.69-2.058-1.037.347c-.094.032-.19.045-.285.043-.338-.01-.65-.226-.765-.566-.145-.434.09-.904.523-1.05l1.037-.347-.36-1.073c-.145-.434.09-.904.524-1.05.435-.145.905.09 1.05.524l.36 1.072 2.137-.716-.36-1.072c-.144-.435.09-.905.524-1.05.435-.145.906.09 1.05.523l.36 1.075 1.037-.347c.434-.146.904.088 1.05.522.145.434-.09.904-.523 1.05l-1.037.347.69 2.057 1.036-.347c.435-.145.905.09 1.05.523.146.434-.09.904-.522 1.05zm2.78-3.57C13.68.304 11.298-.98 5.8.67.304 2.32-.98 4.7.67 10.2c1.65 5.497 4.03 6.78 9.53 5.13 5.497-1.65 6.78-4.03 5.13-9.53z"/>
                </g>
              </svg>
            </div>
            <span>
                  Need Help? Join our Slack Channel
                </span>
          </a>
          <a className="ba br2 black-70 no-underline grow b inline-flex items-center mb3 pv2 ph3" href="https://github.com/tachyons-css/tachyons/issues" title="File a bug, request a feature, ask a question!">
            <div className="w2 pv1 pr2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/>
              </svg>
            </div>
            <span>Open an Issue on GitHub</span>
          </a>
        </div>
        <p className="f6 measure copy lh-copy">
          Have a question? Need help? Feel free to open an issue on GitHub or ask a
          question in our slack channel. We're here to try and help make designing in
          the browser fun.
        </p>
        <div className="pt4 cf mw5">
        </div>
        <small className="f6 measure db lh-copy mt5">
          A tachyon /ˈtæki.ɒn/ or tachyonic particle is a hypothetical particle
          that always moves faster than light.
          The word comes from the Greek:
          <br /> <br />
          ταχύς or tachys, meaning "swift, quick, fast, rapid"
        </small>
      </div>
    </footer>
  </div>
)
