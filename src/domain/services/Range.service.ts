import { rangeRepository } from '../../infraestructure/repositories/range.repository'

export const rangeService = {
  getRange: () => {
    return rangeRepository.getSimpleRange()
  },

  getFixedRange: () => {
    return rangeRepository.getFixedRange()
  }
}
