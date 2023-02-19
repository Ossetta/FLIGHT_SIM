import React from 'react'

const PlaneTable = () => {
  return (
    <div className='plane-table'>
      <div className='plane-table__header'>
        <div className='plane-table__header__item'>Plane</div>
        <div className='plane-table__header__item'>Origin</div>
        <div className='plane-table__header__item'>Destination</div>
        <div className='plane-table__header__item'>Departure</div>
        <div className='plane-table__header__item'>Arrival</div>
      </div>
      <div className='plane-table__body'>
        <div className='plane-table__body__item'>Plane</div>
        <div className='plane-table__body__item'>Origin</div>
        <div className='plane-table__body__item'>Destination</div>
        <div className='plane-table__body__item'>Departure</div>
        <div className='plane-table__body__item'>Arrival</div>
      </div>
    </div>
  )
}

export default PlaneTable
