import React, { useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import {
  getHomeDataAction,
  getAnchorAction
} from '@/store/actionCreators'
import videoImg from '@/assets/images/douyu.png'


const Room = () => {
  return (
    <div>
      <img src={videoImg} alt="" />
    </div>
  )
}

const mapStateToProps = (state: rootState) => ({
  todaytop: state.homedata.todaytop,
  loading: state.homedata.loading,
  searchresult: state.searchdata.searchresult,
  searchlist: state.searchdata.searchlist,
  anchor: state.searchdata.anchor,
})

const mapDispatchToProps = (dispatch: any) => ({
  getHomeDataActionDispatch() {
    dispatch(getHomeDataAction())
  },
  getAnchorListDispatch(query: string) {
    dispatch(getAnchorAction(query))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Room))
