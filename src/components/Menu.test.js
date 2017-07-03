import React from 'react'
import { shallow } from 'enzyme'

import Menu from './Menu'

const articles = [
  {
    title: 'Lebaran Sudah Lewat',
    content: 'Itu berarti libur pun sudah lewat. Perjuangan belum usai. Masih tersisa tiga minggu untuk memuaskan rasa penasaran sebelum dilempar ke jurang dunia nyata. SEMANGAT!',
    author: 'Shabrina V. Inmas'
  },
  {
    title: 'React Provokes Reaction',
    content: 'React with Redux. Redux - Reduction. Oxidation. Redox. Chemistry? O how I miss those good old days. Solving chemistry mistery like there is no tomorrow. Well at least the brain juice is still there. Ready to power me through out my journey.',
    author: 'S. Virta I'
  }
]

describe('Menu component', () => {
  it('renders correctly', () => {
    const menuWrapper = shallow(<Menu articles={articles}/>)
    expect(menuWrapper).toHaveLength(1)
  })
})
