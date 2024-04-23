import React from 'react'
import Slider from '@/components/Slider'
import { getSliderFixedValues } from '@/service/getSliderFixedValues'

export default async function Exercise2() {

    const sliderFixedValues = await getSliderFixedValues()

    if (!sliderFixedValues) return null

    const firstFixedValue = sliderFixedValues?.rangeValues[0]
    const lastFixedValue = sliderFixedValues?.rangeValues[sliderFixedValues?.rangeValues.length - 1]

    return (
        <Slider isFixed={true} fixedValues={sliderFixedValues?.rangeValues} defaultValues={[firstFixedValue, lastFixedValue]} />
    )

}