import { div, label, input, hr, h1, VNode, MainDOMSource } from '@cycle/dom'
import { Stream } from 'xstream'

type Sources = {
  DOM: MainDOMSource
}

type Sinks = {
  DOM: Stream<VNode>
}

export function main(sources: Sources): Sinks {
  const input$ = sources.DOM.select('.field').events('input');

  const name$: Stream<string> = input$
    .map((ev: Event) => (ev.target as HTMLInputElement).value)
    .startWith('')

  const vdom$: Stream<VNode> = name$.map((name) =>
    div([
      label('Name:'),
      input('.field', { attrs: { type: 'text' } }),
      hr(),
      h1('Hello ' + name),
    ])
  )

  return { DOM: vdom$ }
}
