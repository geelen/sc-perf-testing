### http://styled-components-perf-testing.surge.sh/tachyons

https://tachyons.io but with all the iframes/third-party scripts ripped out and converted to a big react render call. No server rendering or anything, just to get a sense of how long React takes to render this much markup with classnames hard-coded.

### http://styled-components-perf-testing.surge.sh/sc-simple

Every unique set of classnames + tag name gets wrapped up into a styled-component. I.e. this is the most number of components possible. Very few components are used more than once. Each SC just adds the same classnames as before, however, so this is testing the cost of all those extra components, not the CSS injection.

