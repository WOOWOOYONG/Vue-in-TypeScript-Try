import { mount } from '@vue/test-utils'
import { expect, test, describe } from 'vitest'
import ProductItem from './ProductItem.vue'

describe('ProductItem Component', () => {
  test('mount component', async () => {
    expect(ProductItem).toBeTruthy()

    const wrapper = mount(ProductItem, {
      props: {
        title: 'Book',
        price: 99,
        inStock: true,
        imageUrl: 'some/image/url'
      }
    })
    expect(wrapper.text()).toContain('Book')
  })
})
