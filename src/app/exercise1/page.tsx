import React from 'react'
import Slider from '../../components/Slider'
import { getSliderValues } from '../../service/getSliderValues'

export default async function Exercise1() {

    const sliderValuesResponse = await getSliderValues()

    if (!sliderValuesResponse) return null

    return (
        <Slider isFixed={false} minRange={0} maxRange={100} defaultValues={[sliderValuesResponse?.values?.min, sliderValuesResponse?.values?.max]} />
    )
}
