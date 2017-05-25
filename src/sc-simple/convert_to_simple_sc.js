const $ = null

window.els_with_classes = Array.from($('#root').querySelectorAll('*'))
  .reduce((accum, el) => {
    if (typeof el.className !== 'string' || el.className === '') return accum
    const key = `${el.tagName}|${el.className.trim()}`
    return Object.assign(accum, { [key]: (accum[key] || []).concat(el) });
  }, {})

window.sc_name_counts = {}
window.sc_count = 0
window.sc_declarations = Object.keys(window.els_with_classes).map(key => {
  const els = window.els_with_classes[key]
  const [tagName, className] = key.split('|')
  const count = window.sc_name_counts[tagName] = ((window.sc_name_counts[tagName] || 0) + 1)
  const name = `${tagName}_${count}`

  els.forEach(el => {
    el.dataset.scId = window.sc_count++
    el.dataset.scName = name
    el.removeAttribute('class')
  })
  return `const ${name} = styled.${tagName.toLowerCase()}.attrs({
  className: '${className}',
})\`\`
`
}).join('\n')

for (let i = 0; i < window.sc_count; i++) {
  const el = $(`[data-sc-id="${i}"]`)
  if (!el) continue
  const name = el.dataset.scName
  el.removeAttribute('data-sc-id')
  el.removeAttribute('data-sc-name')
  //
  //el.outerHTML = el.outerHTML
  //  .replace(new RegExp(`^<${el.tagName}`, 'i'), `<sc__${name}__sc`)
  //  .replace(new RegExp(`${el.tagName}>$`, 'i'), `sc__${name}__sc>`)
}

window.sc_markup = $('#root').outerHTML
  .replace(/<!-- \/?react-text.*? -->/g, '')

/* Convert using http://magic.reactjs.net/htmltojsx.htm */

window.sc_final_jsx = window.sc_jsx
  .replace(/sc__([\w\d_]+)__sc/g, (_, name) => name.toUpperCase())
  .replace(/>/g,'>\n')
