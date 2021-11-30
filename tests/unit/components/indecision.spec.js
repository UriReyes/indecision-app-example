import { shallowMount } from '@vue/test-utils'
import Indecision from "@/components/Indecision.vue"

describe('Indecision Component', () => {
    let wrapper
    let clgSpy
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            "answer": "yes",
            "forced": false,
            "image": "https://yesno.wtf/assets/yes/2.gif"
        })
    }))
    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
        jest.clearAllMocks();
    })

    test('should match with the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('write in the input don´t must trigger nothing (console.log)', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo')
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()
    })

    test('write the symbol "?" in the input must trigger the getAnswer method', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Seré millonario?')
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('testing the getAnswer method', async () => {
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Sí')
    })
    test('testing the getAnswer method - Simulate API fail', async () => {
        //TODO: fallo en el API
        fetch.mockImplementationOnce(() => Promise.reject('API is down'))
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar el API')
    })
})