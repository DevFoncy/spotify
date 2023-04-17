import { http } from '../http/http'
import { SimpleRangeDTO, FixedRangeDTO } from '../http/dto/RangeDTO'
import { SimpleRangeModel, FixedRangeModel } from "../../domain/models/SimpleRange"

export const rangeRepository = {
    async getSimpleRange(): Promise <SimpleRangeModel> {
        const response = await http.get<SimpleRangeDTO>('http://demo7088036.mockable.io/slider')
        return response.data
    },

    async getFixedRange(): Promise <FixedRangeModel> {
        const response = await http.get<FixedRangeDTO>('http://demo7088036.mockable.io/slider-fixed')
        return response.data.sort((a,b) => a - b)
    }
}