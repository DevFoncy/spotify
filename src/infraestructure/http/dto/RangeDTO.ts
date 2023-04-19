


export type SimpleRangeModel = {
    min: number,
    max: number
 }


 export interface PodCastDTO{
    contents: object
 }


export interface SimpleRangeDTO {
    data: SimpleRangeModel,
    status: number
}

export interface FixedRangeDTO {
    data: Array<number>,
    status: number
}