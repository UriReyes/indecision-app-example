import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Testing in counter component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    })
    test('El valor por defecto en el p debe ser 100', () => {
        const value = wrapper.find('[data-testId="counter"]').text();
        console.log(value);
        expect(value).toBe('100');
    })

    test('the counter should be increment in One', async () => {
        const incrementBtn = wrapper.find('#increaseBtn');;
        await incrementBtn.trigger('click');
        const value = wrapper.find('[data-testId="counter"]').text();
        expect(value).toBe('101');
    })

    test('the counter should be decrease in two', async () => {
        const decrementBtn = wrapper.find('#decreaseBtn');;
        await decrementBtn.trigger('click');
        await decrementBtn.trigger('click');
        const value = wrapper.find('[data-testId="counter"]').text();
        expect(value).toBe('98');
    })

    test('should reset the default value', () => {
        const { start } = wrapper.props();

        const value = wrapper.find('[data-testId="counter"]').text();
        expect(Number(value)).toBe(start)
    })

    test('should show the title prop', () => {
        const title = "Hola Mundo";
        const wrapper = shallowMount(Counter, {
            props: { title, start: '5' },
        });
        expect(wrapper.find('h2').text()).toBe(title);
    })


})
