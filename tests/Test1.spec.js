import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import Test1 from '@/pages/tests/test1.vue'
const vuetify = new Vuetify()
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })
const wrapper = shallowMount(Test1, {
  vuetify,
  localVue
})

describe('Test 1', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('can calculate net score difference', () => {
    wrapper.vm.calculateScore(86)
    expect(wrapper.vm.netDifference).toEqual(14)
  })
})
